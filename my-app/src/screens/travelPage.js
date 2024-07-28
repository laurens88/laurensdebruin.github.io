import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import Map from "../assets/images/worldmap.svg";

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

        <h2 style={{ textAlign: "center" }}>More interesting stats:</h2>
        {/* 4/10 world regions?? 4/7 continents */}
        {/* Pie chart with visited progress world + for each continent. */}
        {/* capitals visited */}
        {/* languages spoken */}
        {/* flags collected */}
    </div>
  );
}

export default Travel;
