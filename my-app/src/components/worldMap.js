import React, { lazy, Suspense, useId } from "react";
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

function selector(scope, codes) {
  return codes.map((code) => `svg[data-worldmap="${scope}"] [data-country="${code}"]`).join(",\n");
}

/**
 * The world map with visited countries highlighted.
 * - countries: entries to colour as visited (defaults to travel.json)
 * - selected: shape codes to highlight as selected
 * - onSelect: makes labelled shapes clickable; called with the clicked shape's code
 */
function WorldMap({ className, countries = travel.countries, selected = [], onSelect }) {
  const scope = useId();
  const classes = [styles.map, onSelect && styles.interactive, className].filter(Boolean).join(" ");
  const visited = countries.flatMap(mapCodes);

  let css = "";
  if (visited.length) css += `${selector(scope, visited)} { fill: var(--map-visited); }\n`;
  if (selected.length) css += `${selector(scope, selected)} { fill: var(--map-selected); }\n`;

  const handleClick = (event) => {
    const shape = event.target.closest("[data-country]");
    if (shape && onSelect) onSelect(shape.getAttribute("data-country"));
  };

  return (
    <>
      <style>{css}</style>
      <Suspense fallback={<div className={`${classes} ${styles.placeholder}`} />}>
        <WorldMapSvg
          className={classes}
          data-worldmap={scope}
          onClick={onSelect ? handleClick : undefined}
          role="img"
          aria-label="World map with the countries I have visited highlighted"
        />
      </Suspense>
    </>
  );
}

export default WorldMap;
