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
            description="ASReview is the largest open-source software project of the University of Utrecht. The software is used to automate the screening of scientific literature for systematic reviews. As a software developer I am responsible for the development of new features, bug fixes and the maintenance of the software. 
            I have been involved in both the front-end and back-end development of the software. I have added a new datatool and improved existing ones. I have been involved in multiple large scale scientific projects headed for publication such as FORAS and IMPROVE. For the FORAS project I have developed a range of python scripts that helped me with the data engineering of the dataset for the project, including pre-processing, merging, deduplicating and distributing the data. 
            For both the FORAS and IMPROVE projects I have worked on data visualization to present our results in the upcoming publications or to give insight in the progress of the project so far."
            logo={ASReview}
          />

          <ResumeItem
            title="Project Intern"
            company="Philips"
            dates="4/2023 - 7/2023"
            description="During the course 'AI in the professional workfield' I succesfully completed a project at Philips together with two other students. 
            We were tasked to perform data analysis on product reviews of Philips products and some of their competitors to gain insights in the customer satisfaction.
            Using clustering and sentiment analysis we attempted to find patterns in the data and presented our findings to the stakeholders at Philips in the form of a report and a presentation."
            logo={Philips}
          />

          <ResumeItem
            title="Student Assistant Data Science"
            company="Radboud UMC"
            dates="2/2023 - 6/2023"
            description="During this short project I used my data science expertise to help medical professionals at the Dutch Child Formulary (Kinderformularium) to improve their data managent. 
            I helped them with the data engineering of their dataset to prepare it for analysis and I developed a range of python scripts to automate the data processing. During this project I connected with the team at ASReview 
            and presented my work at the Utrecht AI labs event."
            logo={UMC}
          />

          <ResumeItem
            title="Hiker"
            company="Easy Way B.V."
            dates="7/2021 - 6/2023"
            description="As a Hiker I was responsible for the transportation and timely delivery of lease cars. 
            I checked the cars for damages, fueled them and drove them accross the country to their destination. 
            I learned to work independently, under a tight schedule, whilst interacting politely with clients and professionals."
            logo={Easyway}
          />

          <ResumeItem
            title="Delivery Driver"
            company="Sandd"
            dates="3/2018 - 9/2018"
            description="Carried out the delivery of mail and packages. 
            Learned to work under a tight schedule by planning my own efficient routes to deliver the mail in a timely manner."
            logo={Sandd}
          />

          <ResumeItem
            title="Sales Employee"
            company="MediaMarkt"
            dates="9/2017 - 2/2018"
            description="As a sales employee I was responsible for selling mobile phones to customers. 
            I learned to communicate with customers and use my tech knowledge to help them make the right choice."
            logo={Mediamarkt}
          />

          <h1>Education</h1>
          <ResumeItem
            title="Master's in Artificial Intelligence"
            company="Radboud University"
            dates="9/2022 - 5/2025"
            description="Description"
            logo={Radboud}
          />

          <ResumeItem
            title="Bachelor's in Artificial Intelligence"
            company="Radboud University"
            dates="9/2017 - 6/2022"
            description="During my bachelor's in Artificial Intelligence I learning the foundations of AI. I learned to program in Java, Python, C# and more. 
            I improved my critical thinking and gained knowledge in machine learning, data science, 
            but also in cognitive psychology and brain anatomy. 
            I learned to set up experiments, analyze data, and present my findings. 
            I learned to work in a team and to communicate my ideas effectively. 
            I learned to work independently and to manage my time efficiently, getting used to working under tight deadlines.
            As a member of the study association CognAC I attended multiple workshops and social events together with friends 
            (my favorite being 'Levend Monopoly' where we travelled across the country in teams to complete fun quests).
            In my final year I wrote my thesis titled 'Exploring the sentiment analysis performance of BERT models on domain specific
Twitter data when combined with an intelligent pre-processor.' which was awarded with an 8.5."
            logo={Radboud}
          />

          <ResumeItem
            title="High School"
            company="DS. Pierson College"
            dates="9/2011 - 6/2017"
            description="Completed my Atheneum program with a focus on science and technology. 
            My favorite subjects were biology and informatics, which together contributed to my choice to study Artificial Intelligence."
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
