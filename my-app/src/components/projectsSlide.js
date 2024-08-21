import styles from '../styles/projectsSlide.module.css';
import carcollection from "../assets/logos/carcollection.webp";
import Grid from "@mui/material/Grid";

function ProjectsSlide() {
  return (
    <div className={styles.slide}>
    <Grid container spacing={2} direction="row">
    <Grid item md={6}>
    <div className={styles.text} onClick={() => {window.location.href = 'https://github.com/laurens88/Car-Collection'}}>
      <h3>Check out my coding projects such as:</h3>
      <h1>Car Collection: Android App</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos 
            dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
            officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
        </div>
        </Grid>
        <Grid item md={6} className={styles.logo} onClick={() => {window.location.href = 'https://github.com/laurens88/Car-Collection'}}>
        <img src={carcollection} alt="Android App" />
        </Grid>
        </Grid>
    </div>
  );
}

export default ProjectsSlide;