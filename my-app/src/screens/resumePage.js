import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import styles from "../styles/resumePage.module.css";
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
      <div className={styles.container}>
      <div className={styles.content}>
        <h2>Experience</h2>
        <p>A</p>
        <h2>Education</h2>
        <p>B</p>
        <h2>Projects</h2>
        <p>C</p>
        <h2>Presentations / Workshops</h2>
        <p>D</p>
        <h2>Certifications / Awards</h2>
        <p>E</p>
      </div>
    </div>
    </div>
  );
}

export default Resume;
