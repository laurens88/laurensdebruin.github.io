import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import styles from "../styles/travelPage.module.css";
import Country from "../components/country";
import PChart from "../components/piechart";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

function Travel() {
  const [mapSrc, setMapSrc] = useState('');

  const updateMapSrc = () => {
    const rootStyle = getComputedStyle(document.documentElement);
    const mapImage = rootStyle.getPropertyValue('--map-image').trim().replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    setMapSrc(mapImage);
  };

  useEffect(() => {
    updateMapSrc();

    const observer = new MutationObserver(updateMapSrc);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const NAVisited = 3;
  const NATotal = 23;

  const SAVisited = 1;
  const SATotal = 12;

  const EuropeVisited = 16;
  const EuropeTotal = 44;

  const AsiaVisited = 2;
  const AsiaTotal = 48;

  const AfricaVisited = 0;
  const AfricaTotal = 54;

  const OceaniaVisited = 0;
  const OceaniaTotal = 14;

  function percentage(part, total) {
    return ((part / total) * 100).toFixed(0) + '%';
  }

  function continentCount() {
    return !!NAVisited + !!SAVisited + !!EuropeVisited + !!AsiaVisited + !!AfricaVisited + !!OceaniaVisited;
  }

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Travel"]} />
      </div>
      <div className={styles.container}>
        <h2 style={{ textAlign: "center"}}>So far I've visited 23&nbsp;countries:</h2>

        <img src={mapSrc} alt="map" style={{ width: "100%", height: "auto" }} />
        <div className={styles.countries}>
          <Country name="Netherlands" abbreviation="nl" />
          <Country name="Belgium" abbreviation="be" />
          <Country name="France" abbreviation="fr" />
          <Country name="Germany" abbreviation="de" />
          <Country name="Italy" abbreviation="it" />
          <Country name="Spain" abbreviation="es" />
          <Country name="Portugal" abbreviation="pt" />
          <Country name="Cyprus" abbreviation="cy" />
          <Country name="Switzerland" abbreviation="ch" />
          <Country name="Greece" abbreviation="gr" />
          <Country name="Luxembourg" abbreviation="lu" />
          <Country name="Austria" abbreviation="at" />
          <Country name="Denmark" abbreviation="dk" />
          <Country name="Sweden" abbreviation="se" />
          <Country name="Norway" abbreviation="no" />
          <Country name="England" abbreviation="gb-eng" />
          <Country name="U.S.A" abbreviation="us" />
          <Country name="Canada" abbreviation="ca" />
          <Country name="Thailand" abbreviation="th" />
          <Country name="Qatar" abbreviation="qa" />
          <Country name="Brazil" abbreviation="br" />
          <Country name="Costa Rica" abbreviation="cr" />
        </div>

        <h2 style={{ textAlign: "center" }}>In {continentCount()} continents:</h2>

        <div className={styles.continents}>
          <Grid container spacing={2}>

            <Grid item xs={12} md={4}>
              <p>North America: {percentage(NAVisited, NATotal)}</p>
              <PChart 
                data={[{id: "Visited", value: NAVisited, label: "Visited"}, {id: "Not visited", value: NATotal-NAVisited, label: "Not Visited"}]} 
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography>Europe: {percentage(EuropeVisited, EuropeTotal)}</Typography>
              <PChart 
                data={[{id: "Visited", value: EuropeVisited, label: "Visited"}, {id: "Not visited", value: EuropeTotal-EuropeVisited, label: "Not Visited"}]} 
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography>Asia: {percentage(AsiaVisited, AsiaTotal)}</Typography>
              <PChart 
                data={[{id: "Visited", value: AsiaVisited, label: "Visited"}, {id: "Not visited", value: AsiaTotal-AsiaVisited, label: "Not Visited"}]} 
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography>South America: {percentage(SAVisited, SATotal)}</Typography>
              <PChart 
                data={[{id: "Visited", value: SAVisited, label: "Visited"}, {id: "Not visited", value: SATotal-SAVisited, label: "Not Visited"}]} 
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography>Africa: {percentage(AfricaVisited, AfricaTotal)}</Typography>
              <PChart 
                data={[{id: "Visited", value: AfricaVisited, label: "Visited"}, {id: "Not visited", value: AfricaTotal-AfricaVisited, label: "Not Visited"}]} 
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography>Oceania: {percentage(OceaniaVisited, OceaniaTotal)}</Typography>
              <PChart 
                data={[{id: "Visited", value: OceaniaVisited, label: "Visited"}, {id: "Not visited", value: OceaniaTotal-OceaniaVisited, label: "Not Visited"}]} 
              />
            </Grid>

          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Travel;
