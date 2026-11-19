import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import styles from "../styles/travelPage.module.css";
import WorldMap from "../components/worldMap";
import FlagWall from "../components/flagWall";
import ContinentCards, { detail } from "../components/continentCards";
import travel from "../data/travel.json";
import { travelStats } from "../data/travelStats";
import regions from "../data/mapRegions.json";

const SHORT_NAMES = { "North America": "N. America", "South America": "S. America" };

function Stat({ value, unit, label }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>
        {value}
        {unit && <span className={styles.statUnit}>{unit}</span>}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

function Travel() {
  const stats = travelStats();
  const [region, setRegion] = useState("World");
  const mapRef = useRef(null);

  const current = region === "World"
    ? { name: "World", pct: stats.worldPct, text: `${stats.countries} of ${stats.worldTotal} countries` }
    : (() => {
        const continent = stats.continents.find((c) => c.name === region);
        return { name: region, pct: continent.pct, text: detail(continent) };
      })();
  const shownCountries = region === "World" ? travel.countries : travel.countries.filter((c) => c.continent === region);

  const zoomFromCard = (name) => {
    setRegion(name);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    mapRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Travel"]} />
      </div>
      <main className={styles.container}>
        <h2 className={styles.title}>A map of the {stats.countries} countries I've visited so far</h2>

        <section className={styles.stats} aria-label="Statistics">
          <Stat value={stats.countries} label={`countries, ${stats.worldPct}% of all ${stats.worldTotal}`} />
          <Stat value={stats.continentsVisited} unit={` / ${stats.continents.length}`} label="continents" />
          <Stat value={`${stats.areaPct}%`} label="of the world's land area" />
          <Stat value={`${stats.populationPct}%`} label="of the world's population" />
          {stats.furthest && (
            <Stat value={stats.furthest.km.toLocaleString("en-US")} unit=" km" label={`furthest from home: ${stats.furthest.name}`} />
          )}
        </section>

        <section className={styles.mapCard} aria-label="Map" ref={mapRef}>
          <div className={styles.tabs} role="group" aria-label="Zoom the map to">
            {Object.keys(regions).filter((name) => name === "World" || stats.continents.some((c) => c.name === name)).map((name) => (
              <button
                key={name}
                type="button"
                className={styles.tab}
                aria-pressed={region === name}
                aria-label={SHORT_NAMES[name] ? name : undefined}
                onClick={() => setRegion(name)}
              >
                <span className={SHORT_NAMES[name] ? styles.longName : undefined}>{name}</span>
                {SHORT_NAMES[name] && <span className={styles.shortName} aria-hidden="true">{SHORT_NAMES[name]}</span>}
              </button>
            ))}
          </div>
          <WorldMap region={region} />
          <div className={styles.mapCaption}>
            <div>
              <strong>{current.name}</strong>
              <span className={styles.muted}>{current.text}</span>
            </div>
            <span className={styles.bigPct}>{current.pct}%</span>
          </div>
          <span className={styles.bar}><span style={{ width: `${current.pct}%` }} /></span>
          <div className={styles.legend}>
            <span><i className={styles.swatchVisited} />Visited</span>
            <span><i className={styles.swatchLand} />Not yet</span>
            {region !== "World" && region !== "Antarctica" && <span><i className={styles.swatchOther} />Other continents</span>}
          </div>
        </section>

        <section aria-label="Countries">
          <div className={styles.sectionHeader}>
            <h2>Countries</h2>
            <span className={styles.muted}>
              {region === "World" ? `All ${travel.countries.length}` : `${shownCountries.length} in ${region}`}
            </span>
          </div>
          <FlagWall countries={shownCountries} continents={stats.continents} />
        </section>

        <section aria-label="Continents">
          <div className={styles.sectionHeader}>
            <h2>In {stats.continentsVisited} of {stats.continents.length} continents</h2>
          </div>
          <ContinentCards continents={stats.continents} selected={region} onSelect={zoomFromCard} />
        </section>
      </main>
    </div>
  );
}

export default Travel;
