import React, { useId, useMemo, useState } from "react";
import styles from "../styles/countrySearch.module.css";
import { allCountryCodes, countryName } from "../data/countryContinents";

const MAX_SUGGESTIONS = 8;
const COUNTRIES = allCountryCodes.map((code) => ({ code, name: countryName(code), lower: countryName(code).toLowerCase() }));

// Countries matching the typed text: names starting with it first, then an exact flag code match,
// then names with a word starting with it, then names containing it.
// A typed code (e.g. "ch") is only suggested, never picked automatically.
function suggestions(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const rank = (c) => {
    if (c.lower.startsWith(q)) return 0;
    if (c.code === q) return 1;
    if (c.lower.split(/[\s\-(),.]+/).some((word) => word.startsWith(q))) return 2;
    if (c.lower.includes(q)) return 3;
    return -1;
  };
  return COUNTRIES.map((c) => ({ ...c, rank: rank(c) }))
    .filter((c) => c.rank >= 0)
    .sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name))
    .slice(0, MAX_SUGGESTIONS);
}

/**
 * Text field with a suggestion list of countries.
 * - value / onTextChange: the text in the field
 * - onSelect(code): called only when a suggestion is clicked or chosen with the keyboard
 * - visited: set of codes to mark as already visited
 */
function CountrySearch({ value, onTextChange, onSelect, visited = new Set(), inputClassName }) {
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const items = useMemo(() => suggestions(value), [value]);
  const showList = open && items.length > 0;

  const choose = (item) => {
    setOpen(false);
    setActive(-1);
    onSelect(item.code);
  };

  const onKeyDown = (event) => {
    if (!items.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActive((i) => (i + 1) % items.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActive((i) => (i <= 0 ? items.length - 1 : i - 1));
    } else if (event.key === "Enter" && showList && active >= 0) {
      event.preventDefault();
      choose(items[active]);
    } else if (event.key === "Escape") {
      setOpen(false);
      setActive(-1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={inputClassName}
        value={value}
        placeholder="Type a country name…"
        role="combobox"
        aria-expanded={showList}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={showList && active >= 0 ? `${listId}-${active}` : undefined}
        autoComplete="off"
        onChange={(e) => { onTextChange(e.target.value); setOpen(true); setActive(-1); }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onKeyDown={onKeyDown}
      />
      {showList && (
        <ul className={styles.list} id={listId} role="listbox">
          {items.map((item, i) => (
            <li
              key={item.code}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === active}
              className={i === active ? styles.active : undefined}
              onMouseDown={(e) => { e.preventDefault(); choose(item); }}
              onMouseEnter={() => setActive(i)}
            >
              <img src={`/flags/${item.code}.png`} alt="" />
              <span>{item.name}</span>
              <span className={styles.meta}>{visited.has(item.code) ? "visited · " : ""}{item.code}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountrySearch;
