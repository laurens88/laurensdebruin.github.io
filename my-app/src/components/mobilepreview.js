import styles from "../styles/mobilepreview.module.css";

function MobilePreview(props) {
  return (
    <div className={styles.mobilePreview}>
      <img src={props.image} alt={props.alt} onClick={props.action}/>
      <h2>{props.title}</h2>
    </div>
  );
}

export default MobilePreview;