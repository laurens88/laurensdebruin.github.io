import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";

function Photography() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>
      <p>There will be pictures here.</p>
    </div>
  );
}

export default Photography;
