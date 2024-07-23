import Card from "../components/card";
import styles from "../styles/project.module.css";
import Button from '@mui/material/Button';
import FileDownloadButton from "./downloadbutton";
import { useNavigate } from "react-router-dom";

const Project = ({title, type, content, readmore, url, downloadable, downloadtext, file, filename}) => {
    let navigate = useNavigate();

    return (
        <div className={styles.cardcontainers}>
        <Card >
        <h2>{title}</h2>
        <h4>{type}</h4>
        <p>
            {content}
        </p>
        <div className={styles.buttons}>
        {readmore ? <Button onClick={() => navigate(url)} variant="outlined" style={{margin: '10px', color: '#1011F5', borderColor: '#1011F5'}}>Read more</Button> : null}
        {downloadable ? <FileDownloadButton text={downloadtext} file={file} filename={filename}/> : null}
        </div>
      </Card>
        </div>
    );
}

export default Project;