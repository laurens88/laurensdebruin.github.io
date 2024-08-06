import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import Album from "../components/album";
import "../App.css";

function Photography() {

  const generate_image_path = (image_name, dir) => {
    return {
        lowRes: `${dir}/${image_name.slice(0, -4)}_low${image_name.slice(-4)}`,
        highRes: `${dir}/${image_name}`,
        alt: `${image_name.slice(0, -4)} Image`
    };
}

const wildlife_images = ["peacock.jpg", "crab.jpg"];
const abstract_images = ["bubble.png"];

const wildlife = wildlife_images.map(image => generate_image_path(image, "/photography/wildlife"));
const abstract = abstract_images.map(image => generate_image_path(image, "/photography/abstract"));


  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>
      <Album imageList={abstract} />
    </div>
  );
}

export default Photography;
