import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import styles from "../styles/photographyPage.module.css";
import PhotoPreview from "../components/photopreview";
import MobilePreview from "../components/mobilepreview";
import { useNavigate } from "react-router-dom";

//https://imageresizer.com/image-compressor/

function Photography() {
  let navigate = useNavigate();

  const architecture_photos = [
    'building1.jpg',
    'building2.jpg',
    'building3.jpg',
    'building4.jpg',
    'building5.jpg',
    'building6.jpg',
    'building7.jpg',
    'building8.jpg',
    'building9.jpg',
    'building10.jpg',
    'building11.jpg',
    'building12.jpg',
    'building13.jpg',
    'building14.jpg',
    'building15.jpg',
    'church.jpg',
    'indoor.jpg',
    'observatory.jpg',
    'panorama.jpg',
  ];

  const still_life_photos = [
    'beach.jpg',
    'plane.jpg',
    'sky.jpg',
  ];

  const travel_photos = [
    'thai_guard.jpg',
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
