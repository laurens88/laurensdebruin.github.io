import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import ResumeItem from "../components/resumeitem";
import styles from "../styles/resumePage.module.css";
import "../App.css";
import ASReview from "../assets/logos/ASReview.png";
import Radboud from "../assets/logos/Radboud.png";

function Resume() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Resume"]} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Experience</h1>
          <ResumeItem
            title="Software Engineer"
            company="ASReview"
            dates="10/2023 - Present"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            logo={ASReview}
          />

          <ResumeItem
            title="Project Intern"
            company="Philips"
            dates="4/2023 - 7/2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            // logo={ASReview}
          />

          <h1>Education</h1>
          <ResumeItem
            title="Master's in Artificial Intelligence"
            company="Radboud University"
            dates="Dates"
            description="Description"
            logo={Radboud}
          />

          <ResumeItem
            title="Bachelor's in Artificial Intelligence"
            company="Radboud University"
            dates="Dates"
            description="Description"
            logo={Radboud}
          />

          <h1>Projects</h1>
          <h1>Presentations / Workshops</h1>

          <h1>Certifications / Awards</h1>
        </div>
      </div>
    </div>
  );
}

export default Resume;
