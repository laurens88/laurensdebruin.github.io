import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import MapEmbed from "../components/worldmap";
import Map from "../assets/images/worldmap-svg.svg";

//https://www.amcharts.com/visited_countries/index.php#AT,BE,CY,DK,FR,DE,GR,IT,LU,NL,NO,PT,ES,SE,CH,GB,CA,US,QA,TH
//https://www.vectorpea.com/

function Hobby() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Hobbies"]} />
      </div>
      <p style={{textAlign: "center"}}>My hobbies here.</p>
      {/* <MapEmbed /> */}
      <img src={Map} alt="map" style={{width: "100%", height: "auto"}} />
    </div>
  );
}

export default Hobby;
