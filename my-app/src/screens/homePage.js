import React, {useState} from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import styles from "../styles/homePage.module.css";
import Grid from "@mui/material/Grid";
import Portrait from "../assets/images/portrait.jpg";
import Button from '@mui/material/Button';
import FileDownloadButton from "../components/downloadbutton";
import Send from '@mui/icons-material/Send';
import Resume_english from "../assets/downloads/Resume_LaurensdeBruin.pdf";
import ContactForm from "../components/contactForm";
import "../App.css";

function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleContactOpen = () => setContactOpen(true);
  const handleContactClose = () => setContactOpen(false);

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
            <h1 className={styles.blinkingCursor}>Laurens de Bruin</h1>
            <h2>Software Developer</h2>
            <p>
            Welcome to my personal website. Here, you will find an overview of my professional experience, 
            including an extensive version of my resume and various coding projects I’ve worked on, 
            reflecting my background in AI and my passion for software development. Additionally, 
            I have included a page dedicated to showcasing my photography hobby and another focused on my travels. 
            Feel free to explore and learn more about my work and interests.
            </p>
            <Button variant="contained" endIcon={<Send/>} style={{margin: '10px', backgroundColor: '#1011F5'}} onClick={handleContactOpen}>
              Contact
            </Button>

            <FileDownloadButton text="Resume" file={Resume_english} filename="Resume_LaurensdeBruin.pdf" />
          </Grid>

          <Grid item xs={12} md={4}>
            <img src={Portrait} alt="Portrait" className={styles.portrait} />
          </Grid>
        </Grid>
      </div>
      <ContactForm open={contactOpen} handleClose={handleContactClose} />
    </div>
  );
}

export default Home;
