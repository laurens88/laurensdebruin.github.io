// Default continent for every flag code in public/flags, used by the travel admin page
// to pre-fill new entries (the continent can still be changed there).
// Dependent territories are listed under the continent they are usually counted with.
// Space-separated flag codes per continent; also read by scripts/continentMaps.js.
import byContinent from "./continentCodes.json";

export const continentOf = Object.fromEntries(
  Object.entries(byContinent).flatMap(([continent, codes]) => codes.split(" ").map((code) => [code, continent]))
);

export const allCountryCodes = Object.keys(continentOf).sort();

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const subdivisionNames = { "gb-eng": "England", "gb-sct": "Scotland", "gb-wls": "Wales", "gb-nir": "Northern Ireland" };

// English display name for a flag code, e.g. "jp" -> "Japan".
export function countryName(code) {
  if (subdivisionNames[code]) return subdivisionNames[code];
  try {
    return regionNames.of(code.toUpperCase());
  } catch {
    return code;
  }
}
