import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import PhotoGallery from "../components/photogallery";
import styles from "../styles/photographyPage.module.css";

function Photography() {

  const abstract_photos = [
    {lowRes: '/photography/abstract/bubble_low.png', highRes: '/photography/abstract/bubble.png', alt: 'Image 2', height: '300px'},
  ];

  const travel_photos = [
    {lowRes: '/photography/travel/thai_guard_low.jpg', highRes: '/photography/travel/thai_guard.jpg', alt: 'Image 3', height: '300px'},
    {lowRes: '/photography/travel/canyon.jpg', highRes: '/photography/travel/canyon.jpg', alt: 'Image 5', height: '300px'},
    {lowRes: '/photography/travel/chewlan_low.jpg', highRes: '/photography/travel/chewlan.jpg', alt: 'Image 6', height: '300px'},
  ];

  const wildlife_photos = [
    {lowRes: '/photography/wildlife/peacock_low.jpg', highRes: '/photography/wildlife/peacock.jpg', alt: 'Image 6', height: '300px'},
    {lowRes: '/photography/wildlife/crab_low.jpg', highRes: '/photography/wildlife/crab.jpg', alt: 'Image 6', height: '300px'},
    {lowRes: '/photography/wildlife/dragonfly_low.jpg', highRes: '/photography/wildlife/dragonfly.jpg', alt: 'Image 6', height: '300px'},
  ];

  const still_life_photos = [
    {lowRes: '/photography/still_life/beach_low.jpg', highRes: '/photography/still_life/beach.jpg', alt: 'Image 6', height: '300px'},
    {lowRes: '/photography/still_life/plane_low.jpg', highRes: '/photography/still_life/plane.jpg', alt: 'Image 6', height: '300px'},
    {lowRes: '/photography/still_life/sky_low.jpg', highRes: '/photography/still_life/sky.jpg', alt: 'Image 6', height: '300px'},
  ];

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>
      <div className={styles.page}>
      <h1>Abstract</h1>
      <PhotoGallery photos={abstract_photos} />
      <h1>Travel</h1>
      <PhotoGallery photos={travel_photos} />
      <h1>Wildlife</h1>
      <PhotoGallery photos={wildlife_photos} />
      <h1>Still Life</h1>
      <PhotoGallery photos={still_life_photos} />
      </div>

    </div>
  );
}

export default Photography;
