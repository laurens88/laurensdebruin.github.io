import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import { useNavigate } from "react-router-dom";
import "../App.css";
import styles from "../styles/photographyPage.module.css";
import PhotoPreview from "../components/photopreview";

function Photography() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <PhotoPreview photolist={["/photography/still_life/beach.jpg", "/photography/still_life/plane.jpg", "/photography/still_life/sky.jpg", "/photography/travel/thai_guard.jpg", "/photography/abstract/bubble.png"]} />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>
      <div className={styles.page}>
      </div>
    </div>
  );
}

export default Photography;
