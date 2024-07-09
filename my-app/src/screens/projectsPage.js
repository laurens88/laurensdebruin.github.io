import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import Card from "../components/card";
import styles from "../styles/projectsPage.module.css";

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
      <div className={styles.projects}>
      
      <Card width="100px" height="100px">
        <p>Project 1</p>
      </Card>
      <Card width="100px" height="100px">
        <p>Project 2</p>
      </Card>
      <Card width="100px" height="100px">
        <p>Project 3</p>
      </Card>
      </div>
    </div>
  );
}

export default Projects;
