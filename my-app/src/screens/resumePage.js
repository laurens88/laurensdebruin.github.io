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
      <h1>Experience</h1>
      <h1>Education</h1>
      <h1>Projects</h1>
      <h1>Presentations / Workshops</h1>
      <h1>Certifications / Awards</h1>
    </div>
  );
}

export default Resume;
