// Numbers for the travel page, all derived from travel.json and countryFacts.json.
import travel from "./travel.json";
import facts from "./countryFacts.json";

// Antarctica has no countries; visiting it counts for the continent only.
export const NO_COUNTRIES = "Antarctica";
const HOME = { name: "Amsterdam", lat: 52.37, lng: 4.9 };

function distanceKm(a, b) {
  const rad = (deg) => (deg * Math.PI) / 180;
  const h = Math.sin(rad(b.lat - a.lat) / 2) ** 2
    + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lng - a.lng) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

// Whole percentages, with one decimal below 10% so small shares don't all round to the same number.
export function percent(part, total) {
  if (!total) return 0;
  const value = (part / total) * 100;
  return value > 0 && value < 10 ? Math.round(value * 10) / 10 : Math.round(value);
}

export function travelStats(data = travel) {
  const countries = data.countries.filter((c) => c.continent !== NO_COUNTRIES);
  const worldTotal = data.continents.filter((c) => c.name !== NO_COUNTRIES).reduce((sum, c) => sum + c.total, 0);

  const continents = data.continents.map((continent) => {
    const visited = data.countries.filter((c) => c.continent === continent.name).length;
    return { ...continent, visited, pct: Math.round((visited / continent.total) * 100), noCountries: continent.name === NO_COUNTRIES };
  });

  const known = data.countries.map((c) => ({ ...c, facts: facts.countries[c.code] })).filter((c) => c.facts);
  const area = known.reduce((sum, c) => sum + c.facts.area, 0);
  const population = known.reduce((sum, c) => sum + c.facts.population, 0);
  const furthest = known
    .map((c) => ({ name: c.name, km: Math.round(distanceKm(HOME, c.facts)) }))
    .sort((a, b) => b.km - a.km)[0];

  return {
    countries: countries.length,
    worldTotal,
    worldPct: Math.round((countries.length / worldTotal) * 100),
    continents,
    continentsVisited: continents.filter((c) => c.visited > 0).length,
    areaPct: percent(area, facts.world.area),
    populationPct: percent(population, facts.world.population),
    furthest,
    home: HOME.name,
  };
}
