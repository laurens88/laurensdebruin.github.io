import React, { useEffect, useState } from 'react';
import styles from '../styles/travelslide.module.css';
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function TravelSlide() {
    const [mapSrc, setMapSrc] = useState('');

  const updateMapSrc = () => {
    const rootStyle = getComputedStyle(document.documentElement);
    const mapImage = rootStyle.getPropertyValue('--map-image').trim().replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    setMapSrc(mapImage);
  };

  useEffect(() => {
    updateMapSrc();

    const observer = new MutationObserver(updateMapSrc);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
        observer.disconnect();
      };
    }, []);


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
        <img src={mapSrc} alt="travel map" />
        </Grid>
        </Grid>
    </div>
    );
    }

export default TravelSlide;