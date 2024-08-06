import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import Photo from "../components/Photo";
import "../App.css";
import Grid from "@mui/material/Grid";

function Album() {
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

export default Album;
