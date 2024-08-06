import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import Album from "../components/album";
import "../App.css";

function Photography() {

const wildlife_images = ["peacock.jpg", "crab.jpg"];
const abstract_images = ["bubble.png"];


  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>
      <Album imageList={wildlife_images} dir={"wildlife"}/>
    </div>
  );
}

export default Photography;
