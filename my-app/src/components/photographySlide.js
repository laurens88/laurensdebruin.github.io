import styles from '../styles/photographySlide.module.css';
import Grid from "@mui/material/Grid";

function PhotographySlide() {
  return (
    <div className={styles.slide}>
    <Grid container spacing={2} direction="row">
    <Grid item md={5}>
    <div className={styles.text}>
      <h1>Discover my photography</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos 
            dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
            officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
        </div>
        </Grid>
        <Grid item md={7} className={styles.photos}>
          {/* <img src='/photography/image_layout.png' style={{height: '250px'}}/> */}
        <img src="/photography/travel/temple0.jpg" alt="Temple" className={styles.photo1}/>
        <img src="/photography/still_life/sky.jpg" alt="Sky" className={styles.photo2}/>
        <img src="/photography/still_life/plane.jpg" alt="Plane" className={styles.photo3}/>
        </Grid>
        </Grid>
    </div>
  );
}

export default PhotographySlide;