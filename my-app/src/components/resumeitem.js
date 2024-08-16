import React from "react";
import styles from "../styles/resumeitem.module.css";
import parse from 'html-react-parser';

const ResumeItem = ({ title, company, dates, description, logo, tech_icons }) => {
  return (
    <div className={styles.resumeItem}>
      <div className={styles.resumeContent}>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <span>{dates}</span>
        <p>{parse(description)}</p>
      </div>
      <div className={styles.resumeLogo}>
      {logo ? <img src={logo} alt="Logo" /> : <div className={styles.placeholderLogo}></div>}
      </div>
      {tech_icons && tech_icons.length > 0 && (
      <div className={styles.techIcons}>
        {tech_icons.map((icon, index) => (
          <img key={index} src={icon} alt="Tech Icon" />
        ))}
      </div>
      )}
    </div>
  );
};

export default ResumeItem;
