import React from 'react';
import styles from '../styles/travelslide.module.css';
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import WorldMap from "./worldMap";

function TravelSlide() {
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/travel");

        setTimeout(() => {
            window.scrollTo(0, 0, 'smooth');
        }, 100);
    }
    return (
        <div className={styles.slide} onClick={handleNavigate}>
    <Grid container spacing={2} direction="row">
    <Grid item md={5}>
    <div className={styles.text}>
      <h1>Keep track of my travels</h1>
        <p>
        I really like topography, memorizing the locations of all countries in the world and their flags and it is my goal 
        to visit as many countries as possible. On this site I keep track of all the countries I have visited so far for either work or leisure.
        </p>
        </div>
        </Grid>
        <Grid item md={7} className={styles.logo}>
        <WorldMap />
        </Grid>
        </Grid>
    </div>
    );
    }

export default TravelSlide;