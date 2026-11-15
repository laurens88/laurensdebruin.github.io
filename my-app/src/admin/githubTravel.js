// Reads and writes my-app/src/data/travel.json in the GitHub repository.
// Writing needs a GitHub token with "Contents: read and write" on this repository; the token is
// supplied by the person using the admin page and never stored in the repository.

export const REPO = "laurens88/laurensdebruin.github.io";
export const BRANCH = "main";
export const TRAVEL_PATH = "my-app/src/data/travel.json";
const API = "https://api.github.com";

export class ConflictError extends Error {}

async function github(path, { token, method = "GET", body } = {}) {
  const response = await fetch(`${API}${path}`, {
    method,
    cache: "no-store",
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (response.status === 409 || (method === "PUT" && response.status === 422)) {
    throw new ConflictError("travel.json changed on GitHub since it was loaded.");
  }
  if (!response.ok) {
    let detail = "";
    try {
      detail = (await response.json()).message || "";
    } catch {}
    const error = new Error(`GitHub ${response.status}${detail ? `: ${detail}` : ""}`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

function decodeBase64Utf8(base64) {
  const bytes = Uint8Array.from(atob(base64.replace(/\s/g, "")), (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeBase64Utf8(text) {
  let binary = "";
  new TextEncoder().encode(text).forEach((byte) => (binary += String.fromCharCode(byte)));
  return btoa(binary);
}

// Checks the token and that it may write to the repository. Returns the GitHub login.
export async function verifyToken(token) {
  const [user, repo] = await Promise.all([github("/user", { token }), github(`/repos/${REPO}`, { token })]);
  if (!repo.permissions || !repo.permissions.push) {
    throw new Error("This token does not have write access.");
  }
  return user.login;
}

// Loads the current travel.json from the main branch (works without a token: the repository is public).
export async function loadTravel(token) {
  const file = await github(`/repos/${REPO}/contents/${TRAVEL_PATH}?ref=${BRANCH}`, { token });
  return { data: JSON.parse(decodeBase64Utf8(file.content)), sha: file.sha };
}

// Writes travel.json in the same layout as the file in the repository (one entry per line).
export function serializeTravel(data) {
  const value = (v) => (Array.isArray(v) ? `[${v.map((x) => JSON.stringify(x)).join(", ")}]` : JSON.stringify(v));
  const line = (item) => `{ ${Object.entries(item).map(([k, v]) => `${JSON.stringify(k)}: ${value(v)}`).join(", ")} }`;
  const block = (items) => items.map((item) => `    ${line(item)}`).join(",\n");
  return `{\n  "continents": [\n${block(data.continents)}\n  ],\n  "countries": [\n${block(data.countries)}\n  ]\n}\n`;
}

// Commits the new travel.json to main. Throws ConflictError if it changed since `sha` was loaded.
export async function saveTravel(token, data, sha, message) {
  const result = await github(`/repos/${REPO}/contents/${TRAVEL_PATH}`, {
    token,
    method: "PUT",
    body: { message, content: encodeBase64Utf8(serializeTravel(data)), sha, branch: BRANCH },
  });
  return { sha: result.content.sha, commitUrl: result.commit.html_url, commitSha: result.commit.sha };
}

// Latest run of the deploy workflow on main (public, no token needed).
export async function latestDeployRun() {
  const result = await github(`/repos/${REPO}/actions/workflows/deploy.yml/runs?branch=${BRANCH}&per_page=1`);
  return result.workflow_runs[0] || null;
}
