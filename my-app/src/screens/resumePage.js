import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import ResumeItem from "../components/resumeitem";
import styles from "../styles/resumePage.module.css";
import "../App.css";
import ASReview from "../assets/logos/ASReview.png";
import Radboud from "../assets/logos/Radboud.png";
import Philips from "../assets/logos/Philips.png";
import UMC from "../assets/logos/UMC.jpg";
import Pierson from "../assets/logos/Pierson.png";
import Easyway from "../assets/logos/easyway.jpg";
import Sandd from "../assets/logos/sandd.jpg";
import Mediamarkt from "../assets/logos/mediamarkt.png";
import codecademy from "../assets/logos/codecademy.png";
import Twente from "../assets/logos/university-of-twente.jpg";
import UU from "../assets/logos/UU.jpg";

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
            title="Software Developer"
            company="ASReview"
            dates="10/2023 - Present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos."
            logo={ASReview}
          />

          <ResumeItem
            title="Project Intern"
            company="Philips"
            dates="4/2023 - 7/2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            logo={Philips}
          />

          <ResumeItem
            title="Student Assistant Data Science"
            company="Radboud UMC"
            dates="2/2023 - 6/2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            logo={UMC}
          />

          <ResumeItem
            title="Hiker"
            company="Easy Way B.V."
            dates="7/2021 - 6/2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            logo={Easyway}
          />

          <ResumeItem
            title="Delivery Driver"
            company="Sandd"
            dates="3/2018 - 9/2018"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            logo={Sandd}
          />

          <ResumeItem
            title="Sales Employee"
            company="MediaMarkt"
            dates="9/2017 - 2/2018"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            logo={Mediamarkt}
          />

          <h1>Education</h1>
          <ResumeItem
            title="Master's in Artificial Intelligence"
            company="Radboud University"
            dates="9/2022 - ?/2025"
            description="Description"
            logo={Radboud}
          />

          <ResumeItem
            title="Bachelor's in Artificial Intelligence"
            company="Radboud University"
            dates="9/2017 - 6/2022"
            description="Description"
            logo={Radboud}
          />

          <ResumeItem
            title="High School"
            company="DS. Pierson College"
            dates="9/2011 - 6/2017"
            description="Description"
            logo={Pierson}
          />

          <h1>Presentations / Workshops</h1>


          <ResumeItem
            title="TM Inhouse Day"
            company="@University of Twente"
            dates="Date"
            description="Description"
            logo={Twente}
          />

          <ResumeItem
            title="User's Meeting"
            company="@ASReview"
            dates="Date"
            description="Description"
            logo={ASReview}
          />

          <ResumeItem
            title="Poster Presentation"
            company="@Utrecht AI labs event"
            dates="Date"
            description="Description"
            logo={UU}
          />

          <h1>Certifications / Awards</h1>
          <ResumeItem
            title="Learn React Course"
            company="Codecademy"
            dates="4/2024"
            description="Description"
            logo={codecademy}
          />


        </div>
      </div>
    </div>
  );
}

export default Resume;
