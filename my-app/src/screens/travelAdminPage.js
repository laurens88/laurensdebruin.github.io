import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import WorldMap, { mapCodes } from "../components/worldMap";
import "../App.css";
import styles from "../styles/travelAdmin.module.css";
import bundledTravel from "../data/travel.json";
import { allCountryCodes, continentOf, countryName } from "../data/countryContinents";
import {
  BRANCH, REPO, ConflictError, latestDeployRun, loadTravel, saveTravel, verifyToken,
} from "../admin/githubTravel";

const TOKEN_KEY = "travel-admin-token";
const CONTINENTS = bundledTravel.continents.map((c) => c.name);
const TOKEN_URL = "https://github.com/settings/personal-access-tokens/new";

function readToken() {
  try { return localStorage.getItem(TOKEN_KEY) || ""; } catch { return ""; }
}
function writeToken(token) {
  try { token ? localStorage.setItem(TOKEN_KEY, token) : localStorage.removeItem(TOKEN_KEY); } catch {}
}

const optionLabel = (code) => `${countryName(code)} (${code})`;
const parseOption = (text) => {
  const match = text.trim().toLowerCase().match(/\(([a-z]{2}(?:-[a-z]{3})?)\)$/) || text.trim().toLowerCase().match(/^([a-z]{2}(?:-[a-z]{3})?)$/);
  return match && continentOf[match[1]] ? match[1] : null;
};

// Builds a commit message such as "Travel page: add Peru and Chile, remove Andorra".
function commitMessage(added, removed) {
  const list = (items) => items.length <= 2 ? items.join(" and ") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
  const parts = [];
  if (added.length) parts.push(`add ${list(added.map((c) => c.name))}`);
  if (removed.length) parts.push(`remove ${list(removed.map((c) => c.name))}`);
  return `Travel page: ${parts.join(", ")}`;
}

function TravelAdmin() {
  const [token, setToken] = useState(readToken);
  const [tokenInput, setTokenInput] = useState("");
  const [login, setLogin] = useState(null);
  const [authError, setAuthError] = useState("");

  const [remote, setRemote] = useState(null); // { data, sha } as on GitHub
  const [countries, setCountries] = useState(null); // edited list
  const [loadError, setLoadError] = useState("");

  const [form, setForm] = useState({ search: "", code: null, name: "", continent: "", shapes: "" });
  const [labelledShapes, setLabelledShapes] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveResult, setSaveResult] = useState(null); // { commitUrl, commitSha, message }
  const [saveError, setSaveError] = useState("");
  const [deploy, setDeploy] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  const reload = useCallback(async () => {
    setLoadError("");
    try {
      const result = await loadTravel(token || undefined);
      setRemote(result);
      setCountries(result.data.countries);
    } catch (error) {
      setLoadError(`Could not load travel.json from GitHub (${error.message}).`);
    }
  }, [token]);

  useEffect(() => { reload(); }, [reload]);

  useEffect(() => {
    if (!token) { setLogin(null); return; }
    let cancelled = false;
    verifyToken(token)
      .then((name) => { if (!cancelled) { setLogin(name); setAuthError(""); } })
      .catch((error) => { if (!cancelled) { setLogin(null); setAuthError(error.status === 401 ? "This token is invalid or expired." : error.message); } });
    return () => { cancelled = true; };
  }, [token]);

  // Which shapes on the map have a country code (known once the lazily loaded map is in the page).
  useEffect(() => {
    const timer = setInterval(() => {
      const shapes = mapRef.current && mapRef.current.querySelectorAll("[data-country]");
      if (shapes && shapes.length) {
        setLabelledShapes(new Set([...shapes].map((s) => s.getAttribute("data-country"))));
        clearInterval(timer);
      }
    }, 200);
    return () => clearInterval(timer);
  }, []);

  // After saving, follow the deploy that the commit starts.
  useEffect(() => {
    if (!saveResult) return;
    let stopped = false;
    const check = async () => {
      try {
        const run = await latestDeployRun();
        if (stopped) return;
        if (run && run.head_sha === saveResult.commitSha) {
          setDeploy(run);
          if (run.status === "completed") return;
        }
      } catch {}
      if (!stopped) setTimeout(check, 15000);
    };
    const first = setTimeout(check, 5000);
    return () => { stopped = true; clearTimeout(first); };
  }, [saveResult]);

  const original = useMemo(() => (remote ? remote.data.countries : []), [remote]);
  const added = useMemo(() => (countries || []).filter((c) => !original.some((o) => o.code === c.code)), [countries, original]);
  const removed = useMemo(() => original.filter((o) => !(countries || []).some((c) => c.code === o.code)), [countries, original]);
  const dirty = added.length > 0 || removed.length > 0;
  const visitedCodes = new Set((countries || []).map((c) => c.code));

  const chooseCode = (code) => {
    const shape = labelledShapes && labelledShapes.has(code) ? code : code.split("-")[0];
    setForm({ search: optionLabel(code), code, name: countryName(code), continent: continentOf[code] || "", shapes: shape });
  };

  const onMapSelect = (shape) => {
    const entry = (countries || []).find((c) => mapCodes(c).includes(shape));
    chooseCode(entry ? entry.code : shape);
  };

  const shapeList = form.shapes.split(/[\s,]+/).map((s) => s.trim().toLowerCase()).filter(Boolean);
  const missingShapes = labelledShapes ? shapeList.filter((s) => !labelledShapes.has(s)) : [];
  const alreadyVisited = form.code && visitedCodes.has(form.code);
  const canAdd = form.code && !alreadyVisited && form.name.trim() && CONTINENTS.includes(form.continent);

  const addCountry = () => {
    if (!canAdd) return;
    const entry = { name: form.name.trim(), code: form.code, continent: form.continent };
    if (!(shapeList.length === 1 && shapeList[0] === form.code)) entry.map = shapeList;
    setCountries([...countries, entry]);
    setForm({ search: "", code: null, name: "", continent: "", shapes: "" });
    setSaveResult(null);
  };

  const removeCountry = (code) => { setCountries(countries.filter((c) => c.code !== code)); setSaveResult(null); };
  const undoRemove = (code) => {
    // Put it back in its original position.
    const order = original.map((c) => c.code);
    const entry = original.find((c) => c.code === code);
    setCountries([...countries, entry].sort((a, b) => {
      const ia = order.indexOf(a.code), ib = order.indexOf(b.code);
      return (ia < 0 ? Infinity : ia) - (ib < 0 ? Infinity : ib);
    }));
  };

  const connect = (event) => {
    event.preventDefault();
    const value = tokenInput.trim();
    if (!value) return;
    writeToken(value);
    setToken(value);
    setTokenInput("");
  };
  const forget = () => { writeToken(""); setToken(""); setAuthError(""); };

  const save = async () => {
    setSaving(true);
    setSaveError("");
    const message = commitMessage(added, removed);
    try {
      const result = await saveTravel(token, { ...remote.data, countries }, remote.sha, message);
      setRemote({ data: { ...remote.data, countries }, sha: result.sha });
      setDeploy(null);
      setSaveResult({ ...result, message });
    } catch (error) {
      if (error instanceof ConflictError) {
        setSaveError("travel.json was changed on GitHub since this page loaded. Reload it and make your changes again.");
      } else {
        setSaveError(`Saving failed: ${error.message}`);
      }
    } finally {
      setSaving(false);
    }
  };

  const selectedShapes = form.code ? shapeList : [];
  const counts = CONTINENTS.map((name) => ({ name, n: (countries || []).filter((c) => c.continent === name).length }));

  return (
    <div>
      <div className="desktop-nav"><Navbar /></div>
      <div className="mobile-nav"><NavDrawer activeItems={["Travel"]} /></div>
      <main className={styles.page}>
        <h1>Travel admin</h1>

        <section className={styles.card}>
          <h2>GitHub access</h2>
          {token && login ? (
            <p className={styles.row}>
              <span>Connected as <b>{login}</b>. Saving commits to <code>{REPO}</code> ({BRANCH}).</span>
              <button className={styles.secondary} onClick={forget}>Forget token</button>
            </p>
          ) : (
            <form onSubmit={connect}>
              <p className={styles.muted}>
                Saving needs a <a href={TOKEN_URL} target="_blank" rel="noreferrer">fine-grained GitHub token</a> with access
                to only <code>{REPO}</code> and the permission <b>Contents: Read and write</b>. It is stored in this browser only.
              </p>
              <div className={styles.row}>
                <input type="password" className={styles.input} placeholder="github_pat_…" value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)} autoComplete="off" aria-label="GitHub token" />
                <button className={styles.primary} type="submit">Connect</button>
              </div>
              {token && !login && !authError && <p className={styles.muted}>Checking token…</p>}
            </form>
          )}
          {authError && <p className={styles.error}>{authError} {token && <button className={styles.link} onClick={forget}>Forget token</button>}</p>}
        </section>

        {loadError && <p className={styles.error}>{loadError} <button className={styles.link} onClick={reload}>Try again</button></p>}

        <div ref={mapRef} className={styles.map}>
          <WorldMap countries={countries || bundledTravel.countries} selected={selectedShapes} onSelect={onMapSelect} />
        </div>
        <p className={styles.muted}>Click a country on the map or search below. Blue = visited, orange = selected.</p>

        <section className={styles.card}>
          <h2>Add a country</h2>
          <div className={styles.grid}>
            <label>Country
              <input className={styles.input} list="admin-country-options" value={form.search} placeholder="Search…"
                onChange={(e) => {
                  const code = parseOption(e.target.value);
                  if (code) chooseCode(code); else setForm({ ...form, search: e.target.value, code: null });
                }} />
              <datalist id="admin-country-options">
                {allCountryCodes.map((code) => <option key={code} value={optionLabel(code)} />)}
              </datalist>
            </label>
            <label>Name shown on the page
              <input className={styles.input} value={form.name} disabled={!form.code} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label>Continent
              <select className={styles.input} value={form.continent} disabled={!form.code} onChange={(e) => setForm({ ...form, continent: e.target.value })}>
                <option value="">Choose…</option>
                {CONTINENTS.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </label>
            <label>Map shapes
              <input className={styles.input} value={form.shapes} disabled={!form.code} onChange={(e) => setForm({ ...form, shapes: e.target.value })} />
            </label>
          </div>
          {form.code && (
            <div className={styles.preview}>
              <img src={`/flags/${form.code}.png`} alt="" />
              <span>{form.name || "…"} · {form.continent || "no continent"}</span>
            </div>
          )}
          {alreadyVisited && <p className={styles.muted}>{countryName(form.code)} is already in the list.</p>}
          {form.code && missingShapes.length > 0 && (
            <p className={styles.warning}>No shape on the map is labelled {missingShapes.join(", ")}, so it won't be coloured. It still shows in the list.</p>
          )}
          <button className={styles.primary} disabled={!canAdd} onClick={addCountry}>Add to list</button>
        </section>

        <section className={styles.card}>
          <h2>Visited countries ({(countries || []).length})</h2>
          <p className={styles.muted}>{counts.map((c) => `${c.name}: ${c.n}`).join(" · ")}</p>
          <ul className={styles.list}>
            {(countries || []).map((c) => (
              <li key={c.code} className={added.includes(c) ? styles.added : undefined}>
                <img src={`/flags/${c.code}.png`} alt="" />
                <span>{c.name}</span>
                <span className={styles.muted}>{c.continent}{added.includes(c) ? " · new" : ""}</span>
                <button className={styles.link} onClick={() => removeCountry(c.code)} aria-label={`Remove ${c.name}`}>Remove</button>
              </li>
            ))}
            {removed.map((c) => (
              <li key={c.code} className={styles.removed}>
                <img src={`/flags/${c.code}.png`} alt="" />
                <span>{c.name}</span>
                <span className={styles.muted}>will be removed</span>
                <button className={styles.link} onClick={() => undoRemove(c.code)}>Undo</button>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${styles.card} ${styles.saveBar} ${dirty || saveResult ? styles.sticky : ""}`}>
          {dirty ? (
            <>
              <span><b>{commitMessage(added, removed)}</b></span>
              <div className={styles.row}>
                <button className={styles.secondary} onClick={() => setCountries(original)} disabled={saving}>Discard</button>
                <button className={styles.primary} onClick={save} disabled={!login || saving}>
                  {saving ? "Saving…" : "Save and publish"}
                </button>
              </div>
              {!login && <p className={styles.muted}>Connect a GitHub token above to save.</p>}
            </>
          ) : (
            <span className={styles.muted}>No unsaved changes.</span>
          )}
          {saveError && <p className={styles.error}>{saveError} <button className={styles.link} onClick={reload}>Reload</button></p>}
          {saveResult && (
            <p>
              Saved: <a href={saveResult.commitUrl} target="_blank" rel="noreferrer">{saveResult.message}</a>.{" "}
              {!deploy && "Waiting for the deploy to start…"}
              {deploy && deploy.status !== "completed" && <>Deploying… (<a href={deploy.html_url} target="_blank" rel="noreferrer">progress</a>)</>}
              {deploy && deploy.status === "completed" && (deploy.conclusion === "success"
                ? <>Live on the site now (a hard refresh may be needed).</>
                : <span className={styles.error}>Deploy {deploy.conclusion}: <a href={deploy.html_url} target="_blank" rel="noreferrer">see the run</a>.</span>)}
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default TravelAdmin;
