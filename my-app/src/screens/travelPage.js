import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import styles from "../styles/travelPage.module.css";
import Country from "../components/country";
import PChart from "../components/piechart";
import WorldMap from "../components/worldMap";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import travel from "../data/travel.json";

function percentage(part, total) {
  return ((part / total) * 100).toFixed(0) + '%';
}

function Travel() {
  const continents = travel.continents.map((continent) => ({
    ...continent,
    visited: travel.countries.filter((c) => c.continent === continent.name).length,
  }));
  const visitedContinents = continents.filter((c) => c.visited > 0).length;

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Travel"]} />
      </div>
      <div className={styles.container}>
        <h2 style={{ textAlign: "center"}}>A map of the {travel.countries.length} countries I've visited so far:</h2>

        <WorldMap />
        <div className={styles.countries}>
          {travel.countries.map((country) => (
            <Country key={country.code} name={country.name} abbreviation={country.code} />
          ))}
        </div>

        <h2 style={{ textAlign: "center" }}>In {visitedContinents} continents:</h2>

        <div className={styles.continents}>
          <Grid container spacing={2}>
            {continents.map(({ name, visited, total }) => (
              <Grid item xs={12} md={4} key={name}>
                <Typography>{name}: {percentage(visited, total)}</Typography>
                <PChart
                  data={[{id: "Visited", value: visited, label: "Visited"}, {id: "Not visited", value: total - visited, label: "Not Visited"}]}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Travel;
