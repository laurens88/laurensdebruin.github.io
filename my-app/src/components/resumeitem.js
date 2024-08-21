import React from "react";
import styles from "../styles/resumeitem.module.css";
import parse from 'html-react-parser';
import Tooltip from '@mui/material/Tooltip';

const ResumeItem = ({ title, company, dates, description, logo, tech_icons, url}) => {
  return (
    <>
    <div className={styles.resumeItem}>
      <div className={styles.resumeContent}>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <span>{dates}</span>
        <p>{parse(description)}</p>
      </div>
      <div className={styles.resumeLogo}>
      {logo ? (
        <img
          src={logo}
          alt="Logo"
          onClick={() => url && window.open(url, "_blank")}
          className={url ? styles.clickableLogo : ''}
        />
      ) : (
        <div className={styles.placeholderLogo}></div>
      )}
      </div>
    </div>
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
      <div style={{padding: '20px'}}></div>
      </>
  );
};

export default ResumeItem;
