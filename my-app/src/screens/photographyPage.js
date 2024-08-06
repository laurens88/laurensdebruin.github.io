import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import Album from "../components/album";
import "../App.css";

function Photography() {

const wildlife_images = ["peacock.jpg", "crab.jpg"];
const abstract_images = ["bubble.png"];
const travel_images = ["chewlan.jpg", "thai_guard.jpg", "canyon.jpg", "canyon.jpg","chewlan.jpg", "thai_guard.jpg", "canyon.jpg", "canyon.jpg",
  "chewlan.jpg", "thai_guard.jpg", "canyon.jpg", "canyon.jpg"
];


  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>
      <Album imageList={travel_images} dir={"travel"}/>
    </div>
  );
}

export default Photography;
