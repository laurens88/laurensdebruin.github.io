import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import Map from "../assets/images/worldmap.svg";

function Travel() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Hobbies"]} />
      </div>
      <h2 style={{ textAlign: "center" }}>Countries I've visited so far:</h2>
      <img src={Map} alt="map" style={{ width: "100%", height: "auto" }} />
    </div>
  );
}

export default Travel;
