import React from "react";
import styles from "../styles/travelPage.module.css";

/**
 * Visited countries as flag tiles, grouped by continent (most visited continent first).
 * - countries: travel.json entries to show
 * - continents: continent stats from travelStats(), used for the group order and percentages
 */
function FlagWall({ countries, continents }) {
  const groups = continents
    .map((continent) => ({ ...continent, items: countries.filter((c) => c.continent === continent.name) }))
    .filter((group) => group.items.length > 0)
    .sort((a, b) => b.items.length - a.items.length);

  if (!groups.length) return <p className={styles.muted}>No countries here yet.</p>;

  return (
    <div className={styles.flagGroups}>
      {groups.map((group) => (
        <section key={group.name} aria-label={group.name}>
          <div className={styles.groupHeader}>
            <h3>{group.name}</h3>
            <span className={styles.badge}>{group.items.length}</span>
            <span className={styles.rule} />
            {!group.noCountries && <span className={styles.muted}>{group.pct}% of {group.name}</span>}
          </div>
          <ul className={styles.flagGrid}>
            {group.items.map((country) => (
              <li key={country.code}>
                <div className={styles.flagTile}>
                  <img src={`/flags/${country.code}.png`} alt={`Flag of ${country.name}`} loading="lazy" />
                </div>
                <span>{country.name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default FlagWall;
