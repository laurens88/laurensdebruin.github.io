import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";

function Hobby() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Hobby"]} />
      </div>
      <p style={{textAlign: "center"}}>My hobbies here.</p>
    </div>
  );
}

export default Hobby;
