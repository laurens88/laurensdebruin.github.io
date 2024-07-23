import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import WorldMap from "../components/worldmap";

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
      <WorldMap />
    </div>
  );
}

export default Hobby;
