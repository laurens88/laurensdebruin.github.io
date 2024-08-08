import styles from "../styles/photopreview.module.css";

function PhotoPreview({ photolist }) {
    let randomPhotos = photolist.sort(() => Math.random() - 0.5).slice(0, 5);
    return (
        <div>
        <h1>Photo Preview</h1>
        <div className={styles.preview}>
            {randomPhotos.map((photo, index) => (
                <img key={index} src={photo} alt="preview" />
            ))}
        </div>
        </div>
    );
}

export default PhotoPreview;
