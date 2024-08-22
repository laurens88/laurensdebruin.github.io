import styles from "../styles/photopreview.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PhotoPreview({ photolist, category, title }) {
    let randomPhotos = photolist.sort(() => Math.random() - 0.5).slice(0, 5);
    let path;
    let navigate = useNavigate();

    return (
        <div>
        <h1 style={{paddingLeft: 10}}>{title}</h1>
        <div className={styles.preview}>
            {randomPhotos.map((photo, index) => (
                path = '/photography/' + category + '/' + photo.slice(0, -5)+'_low'+photo.slice(-5),
                <img key={index} src={path} alt="preview"  loading="lazy"/>
            ))}
        </div>
        <div className={styles.buttonOverlay}>
        <Button variant="contained" onClick={() => navigate("/photography/"+category)} style={{backgroundColor: "#1011F5"}}>See more</Button>
        </div>
        </div>
    );
}

export default PhotoPreview;
