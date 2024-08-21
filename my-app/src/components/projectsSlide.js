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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos 
            dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
            officia deserunt mollitia animi, id est laborum et dolorum fuga.
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