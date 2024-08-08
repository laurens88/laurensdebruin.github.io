import styles from "../styles/photopreview.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PhotoPreview({ photolist, category, title }) {
    let randomPhotos = photolist.sort(() => Math.random() - 0.5).slice(0, 5);
    let path;
    let navigate = useNavigate();

    return (
        <div>
        <h1>{title}</h1>
        <div className={styles.preview}>
            {randomPhotos.map((photo, index) => (
                path = '/photography/' + category + '/' + photo,
                <img key={index} src={path} alt="preview" />
            ))}
        </div>
        <Button variant="contained" onClick={() => navigate("/photography/"+category)}>See more</Button>
        </div>
    );
}

export default PhotoPreview;
