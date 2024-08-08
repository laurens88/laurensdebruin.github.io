import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import "../App.css";
import PhotoGallery from "../components/photogallery";

function Photography() {

  const photos = [
    {lowRes: '/photography/abstract/bubble_low.png', highRes: '/photography/abstract/bubble.png', alt: 'Image 2', height: '300px'},
    {lowRes: '/photography/travel/thai_guard_low.jpg', highRes: '/photography/travel/thai_guard.jpg', alt: 'Image 3', height: '300px'},
    {lowRes: '/photography/travel/thai_guard_low.jpg', highRes: '/photography/travel/thai_guard.jpg', alt: 'Image 4', height: '300px'},
    {lowRes: '/photography/travel/canyon.jpg', highRes: '/photography/travel/canyon.jpg', alt: 'Image 5', height: '300px'},
    {lowRes: '/photography/wildlife/crab.jpg', highRes: '/photography/travel/chewlan.jpg', alt: 'Image 6', height: '300px'},
    {lowRes: '/photography/travel/chewlan_low.jpg', highRes: '/photography/travel/chewlan.jpg', alt: 'Image 6', height: '300px'},
    {lowRes: '/photography/travel/chewlan_low.jpg', highRes: '/photography/travel/chewlan.jpg', alt: 'Image 6', height: '300px'},
    {lowRes: '/photography/travel/chewlan_low.jpg', highRes: '/photography/travel/chewlan.jpg', alt: 'Image 6', height: '300px'},
    {lowRes: '/photography/still_life/beach_low.jpg', highRes: '/photography/still_life/beach.jpg', alt: 'Image 6', height: '300px'},
    {lowRes: '/photography/still_life/plane_low.jpg', highRes: '/photography/still_life/plane.jpg', alt: 'Image 6', height: '300px'},

  ];

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>
      <PhotoGallery photos={photos} />
    </div>
  );
}

export default Photography;
