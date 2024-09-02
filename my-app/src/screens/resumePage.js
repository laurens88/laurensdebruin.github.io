import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import ResumeItem from "../components/resumeitem";
import ScrollButton from "../components/scrollButton";
import styles from "../styles/resumePage.module.css";
import "../App.css";

import InfoSupport from "../assets/logos/infosupport.png"
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

import { FaPython, FaGit, FaJava, FaReact, FaHtml5 } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiPycharm, SiCisco  } from "react-icons/si";
import { PiFileSqlThin } from "react-icons/pi";
import { DiCss3 } from "react-icons/di";
import { SiMicrosoftexcel } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const Python = {icon: FaPython, name:"Python"}
const React_ = {icon: FaReact, name: "React"}
const Git = {icon: FaGit, name: "Git"}
const VSCode = {icon: VscVscode, name: "VSCode"}
const PyCharm = {icon: SiPycharm, name: "PyCharm"}
const Java = {icon: FaJava, name: "Java"}
const Cplusplus = {icon: CgCPlusPlus, name: "C++"}
const HTML = {icon: FaHtml5, name: "HTML"}
const CSS = {icon: DiCss3, name: "CSS"}
const SQL = {icon: PiFileSqlThin, name: "SQL"}
const Cisco = {icon: SiCisco, name: "Cisco"}
const Excel = {icon: SiMicrosoftexcel, name: "Microsoft Excel"}

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
      <ScrollButton />
        <div className={styles.content}>
          <h1>Experience</h1>

          <ResumeItem
            title="Graduate Student"
            company="Info Support"
            dates="9/2024 - Present"
            description="Working on the automation of quality assessment of datasets for machine learning."
            logo={InfoSupport}
            tech_icons={[]}
            url="https://www.infosupport.com/"
          />

          <ResumeItem
            title="Software Developer"
            company="ASReview"
            dates="10/2023 - Present"
            description="ASReview is the largest open-source software project of the University of Utrecht. 
            The software is used to speed up the process of screening scientific literature for systematic reviews using active learning. 
            As a software developer I am responsible for the development of new features, bug fixes and the maintenance of the software. 
            I have been involved in both the <strong>front-end</strong> and <strong>back-end</strong> development of the software and worked on expanding the classification models and feature extractors that is used for the <strong>active learning</strong>. 
            I have added a new datatool and improved existing ones. 
            I have been involved in multiple <strong>large scale scientific projects</strong> headed for publication such as FORAS and IMPROVE. 
            For the FORAS project I have developed a range of <strong>python scripts</strong> that helped me with the <strong>data engineering</strong> of the dataset for the project, 
            including pre-processing, merging, deduplicating and distributing the data. 
            For both the FORAS and IMPROVE projects I have worked on <strong>data visualization</strong> to either present our results in 
            the upcoming publications or to give insight in the progress of the project so far."
            logo={ASReview}
            tech_icons={[Python, React_, Git, VSCode,]}
            url="https://asreview.ai/"
          />

          <ResumeItem
            title="Project Intern"
            company="Philips"
            dates="4/2023 - 7/2023"
            description="During the course 'AI in the professional workfield' I succesfully completed a project at Philips together with two other students. 
            We were tasked to perform <strong>data analysis</strong> on product reviews of Philips products and some of their competitors to gain insights in the customer satisfaction.
            Using <strong>clustering</strong> and <strong>sentiment analysis</strong> we attempted to find patterns in the data and presented our findings to the stakeholders at Philips in the form of a report and a presentation."
            logo={Philips}
            tech_icons={[Python, Excel]}
            url="https://www.philips.nl/"
          />

          <ResumeItem
            title="Student Assistant Data Science"
            company="Radboud UMC"
            dates="2/2023 - 6/2023"
            description="During this short project I used my data science expertise to help medical professionals at the Dutch Child Formulary (Kinderformularium) to improve their data managent. 
            I helped them with the <strong>data engineering</strong> of their dataset to prepare it for analysis and I developed a range of <strong>python scripts</strong> to perform the <strong>data pre-processing</strong>. During this project I connected with the team at ASReview 
            and presented my work at the Utrecht AI labs event."
            logo={UMC}
            tech_icons={[Python, Git]}
            url="https://www.radboudumc.nl/"
          />

          <ResumeItem
            title="Hiker"
            company="Easy Way B.V."
            dates="7/2021 - 6/2023"
            description="As a Hiker I was responsible for the transportation and timely delivery of lease cars. 
            I checked the cars for damages, fueled them and drove them accross the country to their destination. 
            I learned to <strong>work independently</strong>, under a tight schedule which required careful <strong>planning</strong>, whilst <strong>interacting politely</strong> with clients and professionals."
            logo={Easyway}
            url="https://www.easyway.nl/"
          />

          <ResumeItem
            title="Delivery Driver"
            company="Sandd"
            dates="3/2018 - 9/2018"
            description="Carried out the delivery of mail and packages. 
            Learned to work under a tight schedule by <strong>planning</strong> my own efficient routes to deliver the mail in a timely manner."
            logo={Sandd}
          />

          <ResumeItem
            title="Sales Employee"
            company="MediaMarkt"
            dates="9/2017 - 2/2018"
            description="As a sales employee I was responsible for selling mobile phones to customers. 
            I learned to <strong>communicate with customers</strong> and use my tech knowledge to help them make the right choice."
            logo={Mediamarkt}
            url="https://www.mediamarkt.nl/"
          />

          <h1>Education</h1>
          <ResumeItem
            title="Master's in Artificial Intelligence"
            company="Radboud University"
            dates="9/2022 - 5/2025"
            description="My master's in Artificial Intelligence is focused on the application of AI in the professional workfield. 
            I chose the specialization 'Intelligent Technologies' which is focused more on the 
            <strong>technical side of AI</strong> opposed to cognition and behavior or ethics.
            I followed courses in <strong>machine learning, deep learning, database technology, information retrieval, Human-Robot Interaction</strong>, and more.
            To prepare for my future career I followed a course in <strong>professional skills</strong>, attended career events and grew eager to <strong>expand my skillset</strong> 
            by following online courses and working on <strong>personal projects</strong>. 
            The personal projects, my job as developer at ASReview and some course projects during my studies helped me to discover my passion for <strong>software development</strong>.
            I will combine my background in AI and my passion for software development to complete my master's thesis at Info Support which combines both fields.
            The project involves the automatic quality assessment of datasets for machine learning."
            logo={Radboud}
            tech_icons={[Python, React_, Git, VSCode,]}
            url="https://www.ru.nl/en/education/masters/artificial-intelligence-intelligent-technology"
          />

          <ResumeItem
            title="Bachelor's in Artificial Intelligence"
            company="Radboud University"
            dates="9/2017 - 6/2022"
            description="During my bachelor's in Artificial Intelligence I learning the foundations of AI. I learned to program in various languages such as <strong>Python, Java, C#</strong> and more. 
            I improved my <strong>critical thinking</strong> and gained knowledge in <strong>machine learning, data science</strong>, 
            but also in <strong>cognitive psychology</strong> and <strong>brain anatomy</strong>. 
            I learned to set up experiments, <strong>analyze data</strong>, and <strong>present</strong> my findings. 
            I learned to <strong>work in a team</strong> and to <strong>communicate my ideas</strong> effectively. 
            I learned to <strong>work independently</strong> and to <strong>manage my time efficiently</strong>, getting used to working under tight deadlines.
            As a member of the <strong>study association</strong> CognAC I attended multiple workshops and social events together with friends 
            (my favorite being 'Levend Monopoly' where we travelled across the country in teams to complete fun quests).
            In my final year I wrote my thesis titled 'Exploring the sentiment analysis performance of BERT models on domain specific
Twitter data when combined with an intelligent pre-processor.' which was awarded with an <strong>8.5</strong>."
            logo={Radboud}
            tech_icons={[Java, Python, Cplusplus, SQL, Git, PyCharm]}
            url="https://www.ru.nl/en/education/bachelors/artificial-intelligence"
          />

          <ResumeItem
            title="High School"
            company="DS. Pierson College"
            dates="9/2011 - 6/2017"
            description="Completed my Atheneum program with a focus on <strong>science and technology</strong>. 
            My favorite subjects were <strong>biology and informatics</strong>, which together contributed to my choice to study Artificial Intelligence."
            logo={Pierson}
            tech_icons={[HTML, CSS, SQL, Cisco]}
            url="https://www.pierson.nl/"
          />

          <h1>Presentations / Workshops</h1>

          <ResumeItem
            title="TM Inhouse Day"
            company="@University of Twente"
            dates="3/2024"
            description="Presented at the TM Inhouse Day of the University of Twente the benefits of ASReview
             software for clinical technology and technical medicine students, focusing
            on its use in writing systematic reviews."
            logo={Twente}
            url="https://www.linkedin.com/in/tm-inhouseday/"
          />

          <ResumeItem
            title="User's Meeting"
            company="@ASReview"
            dates="3/2024"
            description="Presented my contribution to the FORAS project to the team and some users at the ASReview User's Meeting. 
            This included talking about the scripts I developed for the <strong>data engineering</strong> of the dataset and showing the resulting dataset itself."
            logo={ASReview}
            url="https://asreview.ai/"
          />

          <ResumeItem
            title="Poster Presentation"
            company="@Utrecht AI labs event"
            dates="5/2023"
            description="Presented the data pipeline that I developed for the Dutch Child Formulary (Kinderformularium) 
            that helped them prepare their data for ASReview in the form of a poster at the Utrecht AI labs event."
            logo={UU}
          />

          <h1>Certifications / Awards</h1>

          <ResumeItem
           title="Advanced Java Course"
           company="Codecademy"
           dates="7/2024"
           description="Completed the 'Advanced Java' course at Codecademy, 
           where I learned about <strong>parallel and concurrent programming</strong>,
           using <strong>servlets and sockets</strong>, the Java Native Interface, 
           and how to implement <strong>Java Database Connectivity (JDBC)</strong>."
          logo={codecademy}
          url="https://www.codecademy.com/"
          />

          <ResumeItem
            title="React Course"
            company="Codecademy"
            dates="4/2024"
            description="Completed the 'Learn React' course at Codecademy, where I learned about <strong>JSX, 
            JavaScript, and CSS</strong> for building and styling React components. 
            Additionally I learned about state management with hooks and how you can apply <strong>programming patterns</strong> to create <strong>dynamic</strong>
            and <strong>maintainable</strong> web applications. I liked React so much that I decided to use React for <strong>this website!</strong>."
            logo={codecademy}
            url="https://www.codecademy.com/"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
