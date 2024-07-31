import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import Map from "../assets/images/worldmap.svg";
import Country from "../components/country";
import styles from "../styles/travel.module.css";

//https://www.amcharts.com/visited_countries/index.php#AT,BE,CY,DK,FR,DE,GR,IT,LU,NL,NO,PT,ES,SE,CH,GB,CA,US,QA,TH
//https://www.vectorpea.com/

function Travel() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Travel"]} />
      </div>
      <h2 style={{ textAlign: "center" }}>I've visited 20 countries so far:</h2>

      <img src={Map} alt="map" style={{ width: "100%", height: "auto" }} />
      <h2 style={{ textAlign: "center" }}>My flag collection:</h2>
      <div className={styles.countries}>
      <Country name="The Netherlands" abbreviation="nl" />
      <Country name="Belgium" abbreviation="be" />
      <Country name="France" abbreviation="fr" />
      <Country name="Germany" abbreviation="de" />
      <Country name="Italy" abbreviation="it" />
      <Country name="Spain" abbreviation="es" />
      <Country name="Portugal" abbreviation="pt" />
      <Country name="Cyprus" abbreviation="cy" />
      <Country name="Greece" abbreviation="gr" />
      <Country name="Switzerland" abbreviation="ch" />
      <Country name="Austria" abbreviation="at" />
      <Country name="Luxembourg" abbreviation="lu" />
      <Country name="Denmark" abbreviation="dk" />
      <Country name="Sweden" abbreviation="se" />
      <Country name="Norway" abbreviation="no" />
      <Country name="England" abbreviation="gb-eng" />
      <Country name="U.S.A" abbreviation="us" />
      <Country name="Canada" abbreviation="ca" />
      <Country name="Thailand" abbreviation="th" />
      <Country name="Qatar" abbreviation="qa" />


      </div>
        {/* 4/10 world regions?? 4/7 continents */}
        {/* Pie chart with visited progress world + for each continent. */}
        {/* capitals visited */}
        {/* languages spoken */}
        {/* flags collected */}
    </div>
  );
}

export default Travel;
