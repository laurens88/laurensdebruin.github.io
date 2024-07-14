import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import Photo from "../components/Photo";
import "../App.css";
import styles from "../styles/photographyPage.module.css";
import Grid from "@mui/material/Grid";

import lac_low from "../assets/images/photography/IMG_5692_low.jpg";
import lac from "../assets/images/photography/IMG_5692.jpg";
import guardian_low from "../assets/images/photography/IMG_7632_low.jpg";
import guardian from "../assets/images/photography/IMG_7632.jpg";
import dragonfly_low from "../assets/images/photography/IMG_7925-Enhanced-NR_low.jpg";
import dragonfly from "../assets/images/photography/IMG_7925-Enhanced-NR.jpg";
import flower_low from "../assets/images/photography/flower_low.jpg";
import flower from "../assets/images/photography/flower.jpg";
import plane_low from "../assets/images/photography/plane_low.jpg";
import plane from "../assets/images/photography/plane.jpg";
import lake_low from "../assets/images/photography/chewlan_low.jpg";
import lake from "../assets/images/photography/chewlan.jpg";
import crab_low from "../assets/images/photography/crab_low.jpg";
import crab from "../assets/images/photography/crab.jpg";
import beach_low from "../assets/images/photography/beach_low.jpg";
import beach from "../assets/images/photography/beach.jpg";
import bubble_low from "../assets/images/photography/bubble_low.png";
import bubble from "../assets/images/photography/bubble.png";
import sky from "../assets/images/photography/sky.jpg";
import sky_low from "../assets/images/photography/sky_low.jpg";
import peacock from "../assets/images/photography/peacock.jpg";
import peacock_low from "../assets/images/photography/peacock_low.jpg";


function Photography() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>

        <Grid container spacing={2} direction="row">

          <Grid item xs={12} md={4}>
            <Photo
              lowRes={plane_low}
              highRes={plane}
              alt="Description of the photo"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Photo
              lowRes={sky_low}
              highRes={sky}
              alt="Description of the photo"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Photo
              lowRes={peacock_low}
              highRes={peacock}
              alt="Description of the photo"
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Photo
              lowRes={lake_low}
              highRes={lake}
              alt="Description of the photo"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Photo
              lowRes={crab_low}
              highRes={crab}
              alt="Description of the photo"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Photo
              lowRes={beach_low}
              highRes={beach}
              alt="Description of the photo"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Photo
              lowRes={flower_low}
              highRes={flower}
              alt="Description of the photo"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Photo
              lowRes={bubble_low}
              highRes={bubble}
              alt="Description of the photo"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Photo
              lowRes={lac_low}
              highRes={lac}
              alt="Description of the photo"
            />
          </Grid>
          
      </Grid>
    </div>
  );
}

export default Photography;
