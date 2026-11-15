// Default continent for every flag code in public/flags, used by the travel admin page
// to pre-fill new entries (the continent can still be changed there).
// Dependent territories are listed under the continent they are usually counted with.
const byContinent = {
  "Africa":
    "dz ao bj bw bf bi cv cm cf td km cg cd ci dj eg gq er sz et ga gm gh gn gw ke ls lr ly mg mw ml mr mu ma mz " +
    "na ne ng rw st sn sc sl so za ss sd tz tg tn ug zm zw eh re sh",
  "Europe":
    "al ad at by be ba bg hr cy cz dk ee fi fr de gr hu is ie it xk lv li lt lu mt md mc me nl mk no pl pt ro ru " +
    "sm rs sk si es se ch ua gb gb-eng gb-sct gb-wls gb-nir va fo gi gg im je ax sj",
  "Asia":
    "af am az bh bd bt bn kh cn ge in id ir iq il jp jo kz kw kg la lb my mv mn mm np kp om pk ps ph qa sa sg kr " +
    "lk sy tw tj th tl tr tm ae uz vn ye hk mo io cx cc",
  "North America":
    "ag bs bb bz ca cr cu dm do sv gd gt ht hn jm mx ni pa kn lc vc tt us ai aw bm bq vg ky cw gl gp mq ms pr bl " +
    "mf pm sx tc vi",
  "South America": "ar bo br cl co ec gy py pe sr uy ve fk gf",
  "Oceania": "au fj ki mh fm nr nz pw pg ws sb to tv vu as ck pf gu nc nu nf mp pn tk wf",
  "Antarctica": "aq bv gs tf hm",
};

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
