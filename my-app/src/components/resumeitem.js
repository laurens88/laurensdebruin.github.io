import React from "react";
import styles from "../styles/resumeitem.module.css";
import parse from 'html-react-parser';

const ResumeItem = ({ title, company, dates, description, logo }) => {
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
    </div>
  );
};

export default ResumeItem;
