import styles from '../styles/projectsSlide.module.css';
import carcollection from "../assets/logos/carcollection.webp";
import Grid from "@mui/material/Grid";

function ProjectsSlide() {
  return (
    <div className={styles.slide}>
    <Grid container spacing={2} direction="row">
    <Grid item md={6}>
    <div className={styles.text}>
      <h3>Check out my coding projects such as:</h3>
      <h1>Car Collection: Android App</h1>
        <p>
            This is a project I did for my Android Development course. It is a simple app that allows users to create a list of tasks and mark them as completed. 
            The app has a clean and intuitive user interface and is easy to use. The app is built using Java and the Android SDK.
        </p>
        </div>
        </Grid>
        <Grid item md={6} className={styles.logo}>
        <img src={carcollection} alt="Android App" />
        </Grid>
        </Grid>
    </div>
  );
}

export default ProjectsSlide;