import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";

function Resume() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Resume"]} />
      </div>
      <h2>Experience</h2>
      <h2>Education</h2>
      <h2>Projects</h2>
      <h2>Presentations / Workshops</h2>
      <h2>Certifications / Awards</h2>
    </div>
  );
}

export default Resume;
