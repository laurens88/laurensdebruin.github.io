import React from 'react';
import Card from "../components/card";
import styles from "../styles/project.module.css";
import Button from '@mui/material/Button';
import FileDownloadButton from "./downloadbutton";
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

const Project = ({ title, type, content, readmore, url, downloadable, downloadtext, file, filename, tech_icons }) => {
    let navigate = useNavigate();

    return (
        <div className={styles.cardcontainers}>
            <Card >
                <h2>{title}</h2>
                <h4>{type}</h4>
                <p>
                    {content}
                </p>
                {tech_icons && tech_icons.length > 0 && (
                    <div className={styles.techIcons}>
                        {tech_icons.map((tech, index) => (
                            <Tooltip title={tech.name} key={index} placement="top">
                                <div>
                                    <tech.icon size={40} />
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                )}
                <div className={styles.buttons}>
                    {readmore ? <Button onClick={() => navigate(url)} variant="outlined" className={styles.readButton}>Read more</Button> : null}
                    {downloadable ? <FileDownloadButton text={downloadtext} file={file} filename={filename} /> : null}
                </div>

            </Card>
        </div>
    );
}

export default Project;
