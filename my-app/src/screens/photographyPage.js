import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import Photo from "../components/Photo";
import "../App.css";
import Grid from "@mui/material/Grid";

function Photography() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>

    </div>
  );
}

export default Photography;
