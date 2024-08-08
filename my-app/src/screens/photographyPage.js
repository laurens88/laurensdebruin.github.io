import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import styles from "../styles/photographyPage.module.css";
import PhotoPreview from "../components/photopreview";
import MobilePreview from "../components/mobilepreview";
import { useNavigate } from "react-router-dom";

function Photography() {
  let navigate = useNavigate();

  const still_life_photos = [
    'beach.jpg',
    'plane.jpg',
    'sky.jpg',
  ];

  const travel_photos = [
    'thai_guard.jpg',
    'canyon.jpg',
    'chewlan.jpg',
  ];

  const abstract_photos = [
    'bubble.png',
  ];

  const wildlife_photos = [
    'peacock.jpg',
    'dragonfly.jpg',
    'crab.jpg',
  ];

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <PhotoPreview photolist={wildlife_photos} category="wildlife" title={"Wildlife"}/>
        <PhotoPreview photolist={travel_photos} category="travel" title={"Travel"}/>
        <PhotoPreview photolist={still_life_photos} category="still_life" title={"Still Life"}/>
        <PhotoPreview photolist={abstract_photos} category="abstract" title={"Abstract"}/>

      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
        <MobilePreview image="/photography/wildlife/peacock.jpg" title="Wildlife" action={() => navigate("/photography/wildlife")}/>
        <MobilePreview image="/photography/travel/canyon.jpg" title="Travel" action={() => navigate("/photography/travel")}/>
        <MobilePreview image="/photography/still_life/beach.jpg" title="Still Life" action={() => navigate("/photography/still_life")}/>
        <MobilePreview image="/photography/abstract/bubble.png" title="Abstract" action={() => navigate("/photography/abstract")}/>
      </div>
      <div className={styles.page}>
      </div>
    </div>
  );
}

export default Photography;
