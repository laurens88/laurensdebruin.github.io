import React, { lazy, Suspense, useCallback, useEffect, useId, useRef } from "react";
import styles from "../styles/worldmap.module.css";
import travel from "../data/travel.json";
import regions from "../data/mapRegions.json";
import { continentOf } from "../data/countryContinents";
import { ReactComponent as AntarcticaSvg } from "../assets/images/antarctica.svg";

// The map is large, so it is loaded as a separate chunk instead of being part of the main bundle.
const WorldMapSvg = lazy(() =>
  import("../assets/images/worldmap.svg").then((module) => ({ default: module.ReactComponent }))
);

const ZOOM_MS = 450;

// Map shapes to colour for a country: its own code, unless it lists other shapes in "map"
// (e.g. England is drawn as the United Kingdom shape "gb").
export function mapCodes(country) {
  return country.map || [country.code];
}

function selector(scope, codes) {
  return codes.map((code) => `svg[data-worldmap="${scope}"] [data-country="${code}"]`).join(",\n");
}

function regionCss(scope, region, visited) {
  const all = `svg[data-worldmap="${scope}"] path`;
  const inside = Object.keys(continentOf).filter((code) => continentOf[code] === region);
  const visitedInside = visited.filter((code) => continentOf[code] === region);
  const visitedOutside = visited.filter((code) => continentOf[code] !== region);
  let css = `${all} { fill: var(--map-other); stroke: var(--map-border); stroke-width: 0.25; }\n`;
  css += `${selector(scope, inside)} { fill: var(--map-land); }\n`;
  if (visitedOutside.length) css += `${selector(scope, visitedOutside)} { fill: var(--map-other-visited); }\n`;
  if (visitedInside.length) css += `${selector(scope, visitedInside)} { fill: var(--map-visited); }\n`;
  return css;
}

const parseBox = (box) => box.split(" ").map(Number);

// Moves the map's viewBox to the region's frame, animated unless the visitor prefers less motion.
// Returns a ref callback: a newly shown map (after lazy loading, or when switching to the
// Antarctica map) jumps straight to the current frame.
function useZoom(region) {
  const svgRef = useRef(null);
  const shownRef = useRef(null);
  const targetRef = useRef(null);
  targetRef.current = parseBox(regions[region]);

  const attach = useCallback((svg) => {
    svgRef.current = svg;
    if (svg) {
      svg.setAttribute("viewBox", targetRef.current.join(" "));
      shownRef.current = targetRef.current;
    }
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    const from = shownRef.current;
    const target = targetRef.current;
    if (!svg || !from) return undefined;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      svg.setAttribute("viewBox", target.join(" "));
      shownRef.current = target;
      return undefined;
    }
    let frame;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / ZOOM_MS);
      const ease = 1 - Math.pow(1 - p, 3);
      const box = from.map((v, i) => v + (target[i] - v) * ease);
      svg.setAttribute("viewBox", box.join(" "));
      shownRef.current = box;
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [region]);

  return attach;
}

/**
 * The world map with visited countries highlighted.
 * - countries: entries to colour as visited (defaults to travel.json)
 * - selected: shape codes to highlight as selected
 * - onSelect: makes labelled shapes clickable; called with the clicked shape's code
 * - region: a continent name from mapRegions.json to zoom to (default: the whole world)
 */
function WorldMap({ className, countries = travel.countries, selected = [], onSelect, region = "World" }) {
  const scope = useId();
  const zoomed = region !== "World" && Boolean(regions[region]);
  const polar = region === "Antarctica";
  const classes = [styles.map, onSelect && styles.interactive, className].filter(Boolean).join(" ");
  const visited = countries.flatMap(mapCodes);
  const ref = useZoom(zoomed ? region : "World");

  let css = "";
  if (zoomed) css += regionCss(scope, region, visited);
  else if (visited.length) css += `${selector(scope, visited)} { fill: var(--map-visited); }\n`;
  if (selected.length) css += `${selector(scope, selected)} { fill: var(--map-selected); }\n`;

  const handleClick = (event) => {
    const shape = event.target.closest("[data-country]");
    if (shape && onSelect) onSelect(shape.getAttribute("data-country"));
  };

  const svgProps = {
    ref,
    className: classes,
    "data-worldmap": scope,
    onClick: onSelect ? handleClick : undefined,
    role: "img",
    "aria-label": zoomed
      ? `Map of ${region} with the countries I have visited highlighted`
      : "World map with the countries I have visited highlighted",
  };

  return (
    <>
      <style>{css}</style>
      {polar ? (
        <AntarcticaSvg {...svgProps} />
      ) : (
        <Suspense fallback={<div className={`${classes} ${styles.placeholder}`} />}>
          <WorldMapSvg {...svgProps} />
        </Suspense>
      )}
    </>
  );
}

export default WorldMap;
