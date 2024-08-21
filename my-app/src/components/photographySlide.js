import styles from '../styles/photographySlide.module.css';
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function PhotographySlide() {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/photography");

    setTimeout(() => {
      window.scrollTo(0, 0, 'smooth');
    }, 100);
  };

  return (
    <div className={styles.slide} onClick={handleNavigate}>
    <Grid container spacing={2} direction="row">
    <Grid item md={5}>
    <div className={styles.text}>
      <h1>Discover my photography</h1>
        <p>
            I have always liked taking pictures, but since 2024 I have upgraded to a Canon DSLR with a range of lenses.
            Now I take my camera with me on every trip, taking pictures of landscapes, architecture, nature, and my favorite subject: wild animals.
        </p>
    </div>
        </Grid>
        <Grid item md={7} className={styles.photos}>
        <img src="/photography/travel/temple0.jpg" alt="Temple" className={styles.photo1}/>
        <img src="/photography/still_life/sky.jpg" alt="Sky" className={styles.photo2}/>
        <img src="/photography/still_life/plane.jpg" alt="Plane" className={styles.photo3}/>
        </Grid>
        </Grid>
    </div>
  );
}

export default PhotographySlide;