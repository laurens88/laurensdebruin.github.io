import React from "react";
import styles from "../styles/travelPage.module.css";
import continentMaps from "../generated/continentMaps";

function detail(continent) {
  if (continent.noCountries) return continent.visited ? "Visited" : "Not visited yet";
  return continent.visited ? `${continent.visited} of ${continent.total} countries` : "Not visited yet";
}

/**
 * One card per continent with a small map, the share of its countries visited and a bar.
 * Clicking a card calls onSelect with the continent name.
 */
function ContinentCards({ continents, selected, onSelect }) {
  const sorted = [...continents].sort((a, b) => b.pct - a.pct || b.visited - a.visited);
  return (
    <div className={styles.cards}>
      {sorted.map((continent) => {
        const maps = continentMaps[continent.name];
        return (
          <button
            key={continent.name}
            type="button"
            className={`${styles.card} ${selected === continent.name ? styles.cardSelected : ""}`}
            aria-pressed={selected === continent.name}
            onClick={() => onSelect(continent.name)}
          >
            {maps && (
              <span className={styles.cardMap}>
                <img className={styles.lightOnly} src={maps.light} alt="" loading="lazy" />
                <img className={styles.darkOnly} src={maps.dark} alt="" loading="lazy" />
              </span>
            )}
            <span className={styles.cardTitle}>
              <span>{continent.name}</span>
              <span className={styles.cardPct}>{continent.pct}%</span>
            </span>
            <span className={styles.bar}><span style={{ width: `${continent.pct}%` }} /></span>
            <span className={styles.muted}>{detail(continent)}</span>
          </button>
        );
      })}
    </div>
  );
}

export { detail };
export default ContinentCards;
