import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";

function Projects() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Projects"]} />
      </div>
      <h2>List of projects</h2>
    </div>
  );
}

export default Projects;
