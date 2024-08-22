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

  const astro_photos = [
    'trails0.jpg',
    'moon50.jpg',
    'milkyway0.jpg',
    'milkyway1.jpg',
    'moon80.jpg',
    'milkyway2.jpg',
    'milkyway3.jpg',
    'moon100.jpg',
    'milkyway4.jpg',
    'milkyway5.jpg',
    'bloodmoon100.jpg',
  ];

  const still_life_photos = [
    'beach.jpg',
    'plane.jpg',
    'landing.jpg',
    'sky.jpg',
    'plane1.jpg',
    'ball.jpg',
    'wheel.jpg',
    'snow.jpg',
  ];

  const travel_photos = [
    'temple0.jpg',
    'thai_guard.jpg',
    'temple1.jpg',
    'temple2.jpg',
    'thai_guard1.jpg',
    'temple3.jpg',
    'temple4.jpg',
    'ruin.jpg',
    'gold.jpg',
    'buddha.jpg',
    'ggb.jpg',
    'misty_ggb.jpg',
    'tram.jpg',
    'villa.jpg',
    'tower.jpg',
    'acropolis0.jpg',
    'acropolis1.jpg',
    'lighthouse.jpg',
  ];

  const abstract_photos = [
    'bubble.png',
    'exposure.jpg',
    'rust.jpg',
    'vinyl.jpg',
  ];

  const wildlife_photos = [
    "peacock.webp",
    "swallow.webp",
    "snake.webp",
    "dragonfly6.webp",
    "crab.webp",
    "dragonfly.webp",
    "lizard5.webp",
    "lizard6.webp",
    "monitor0.webp",
    "duck.webp",
    "lizard1.webp",
    "dragonfly4.webp",
    "beetle1.webp",
    "dragonfly5.webp",
    "lizard0.webp",
    "monitor2.webp",
    "squirrel.webp",
    "chipmunk.webp",
    "seagull.webp",
    "bird7.webp",
    "jay.webp",
];

  const nature_photos = [
    "yosemite.jpg",
    "canyon.jpg",
    "chewlan.jpg",
    "canyon2.jpg",
    "jungle.jpg",
    "gc0.jpg",
    "canyon3.jpg",
    "gc1.jpg",
    "gc2.jpg",
    "gc3.jpg",
    "gc4.jpg",
    "gc5.jpg",
    "bryce.jpg",
    "bryce1.jpg",
    "chewlan1.jpg",
    "flower.jpg",
    "leaf.png",
    "algue.jpg",
    "joshua0.jpg",
    "joshua1.jpg",
    "skull.jpg",
    "rhodes.jpg",
    "sequoia.jpg",
    "yosemite1.jpg",
  ];

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <PhotoPreview photolist={wildlife_photos} category="wildlife" title={"Wildlife"}/>
        <PhotoPreview photolist={nature_photos} category="nature" title={"Nature"}/>
        <PhotoPreview photolist={travel_photos} category="travel" title={"Travel"}/>
        <PhotoPreview photolist={still_life_photos} category="still_life" title={"Still Life"}/>
        <PhotoPreview photolist={astro_photos} category="astro" title={"Astrophotography"}/>
        <PhotoPreview photolist={architecture_photos} category="architecture" title={"Architecture"}/>
        <PhotoPreview photolist={abstract_photos} category="abstract" title={"Abstract"}/>

      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
        <MobilePreview image="/photography/wildlife/peacock.jpg" title="Wildlife" action={() => navigate("/photography/wildlife")}/>
        <MobilePreview image="/photography/nature/canyon.jpg" title="Nature" action={() => navigate("/photography/nature")}/>
        <MobilePreview image="/photography/travel/ruin.jpg" title="Travel" action={() => navigate("/photography/travel")}/>
        <MobilePreview image="/photography/still_life/beach.jpg" title="Still Life" action={() => navigate("/photography/still_life")}/>
        <MobilePreview image="/photography/astro/milkyway2.jpg" title="Astrophotography" action={() => navigate("/photography/astro")}/>
        <MobilePreview image="/photography/architecture/building1.jpg" title="Architecture" action={() => navigate("/photography/architecture")}/>
        <MobilePreview image="/photography/abstract/bubble.png" title="Abstract" action={() => navigate("/photography/abstract")}/>
      </div>
      <div className={styles.page}>
      </div>
    </div>
  );
}

export default Photography;
