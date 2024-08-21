import styles from '../styles/projectsSlide.module.css';
import carcollection from "../assets/logos/carcollection.webp";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function ProjectsSlide() {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/projects");

    setTimeout(() => {
      window.scrollTo(0, 1250, 'smooth');
    }, 100);
  };

  return (
    <div className={styles.slide} onClick={handleNavigate}>
    <Grid container spacing={2} direction="row">
    <Grid item md={7}>
    <div className={styles.text}>
      <h4>Check out my coding projects such as:</h4>
      <h1>Car Collection (Android App)</h1>
        <p>
        This is an app that I created to allow me to look up cars details and keep track of a list of cars that I have driven. 
        It uses webscraping to collect the data about dutch vehicles based on their license plate and stores the data in a local SQLite database.
        The code was written in Java and the app was built using Android Studio.
        </p>
        </div>
        </Grid>
        <Grid item md={5} className={styles.logo}>
        <img src={carcollection} alt="Android App" />
        </Grid>
        </Grid>
    </div>
  );
}

export default ProjectsSlide;