import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";

function Hobby() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Hobby"]} />
      </div>
      <p>My hobbies here.</p>
    </div>
  );
}

export default Hobby;
