import React, { lazy, Suspense } from "react";
import styles from "../styles/worldmap.module.css";
import travel from "../data/travel.json";

// The map is large, so it is loaded as a separate chunk instead of being part of the main bundle.
const WorldMapSvg = lazy(() =>
  import("../assets/images/worldmap.svg").then((module) => ({ default: module.ReactComponent }))
);

// Map shapes to colour for a country: its own code, unless it lists other shapes in "map"
// (e.g. England is drawn as the United Kingdom shape "gb").
export function mapCodes(country) {
  return country.map || [country.code];
}

const visitedSelector = travel.countries
  .flatMap(mapCodes)
  .map((code) => `svg[data-worldmap] [data-country="${code}"]`)
  .join(",\n");

function WorldMap({ className }) {
  const classes = [styles.map, className].filter(Boolean).join(" ");
  return (
    <>
      <style>{`${visitedSelector} { fill: var(--map-visited); }`}</style>
      <Suspense fallback={<div className={`${classes} ${styles.placeholder}`} />}>
        <WorldMapSvg
          className={classes}
          data-worldmap=""
          role="img"
          aria-label="World map with the countries I have visited highlighted"
        />
      </Suspense>
    </>
  );
}

export default WorldMap;
