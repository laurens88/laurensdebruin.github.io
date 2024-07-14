import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import styles from "../styles/homePage.module.css";
import Grid from "@mui/material/Grid";
import Portrait from "../assets/images/portrait.jpg";
import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';
import Download from '@mui/icons-material/Download';
import "../App.css";

function Home() {

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Home"]} />
      </div>
      <div className={styles.summary}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={2} md={2}></Grid>
          <Grid item xs={7} md={6}>
            <h1>Laurens de Bruin</h1>
            <h2>Software Developer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
            <Button variant="contained" endIcon={<Send/>} style={{margin: '10px', backgroundColor: '#1011F5'}}>
              Contact
            </Button>

            <Button variant="contained" endIcon={<Download/>} style={{margin: '10px', backgroundColor: '#1011F5'}}>
              Resume
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <img src={Portrait} alt="Portrait" className={styles.portrait} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
