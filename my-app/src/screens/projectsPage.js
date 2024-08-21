import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import pagestyles from "../styles/projectsPage.module.css";
import "../App.css";
import cardstyles from "../styles/card.module.css";
import APK from "../assets/downloads/car_collection.apk";
import Project from "../components/project";
import ScrollButton from "../components/scrollButton";

import { PiFileSqlThin } from "react-icons/pi";
import { SiAndroidstudio } from "react-icons/si";
import { FaPython, FaGit, FaJava, FaReact, FaTwitter } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiJavascript, SiMicrosoftexcel, SiHuggingface, SiJupyter} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiNpm, DiCss3, DiAndroid } from "react-icons/di";

const Python = {icon: FaPython, name:"Python"}
const React_ = {icon: FaReact, name: "React"}
const JavaScript = {icon: SiJavascript, name: "Javascript"}
const NPM = {icon: DiNpm, name: "NPM"}
const CSS = {icon: DiCss3, name: "CSS"}
const Git = {icon: FaGit, name: "Git"}
const VSCode = {icon: VscVscode, name: "VSCode"}
const Jupyter = {icon: SiJupyter, name: "Jupyter Notebook"}
const Java = {icon: FaJava, name: "Java"}
const SQL = {icon: PiFileSqlThin, name: "SQL"}
const AndroidStudio = {icon: SiAndroidstudio, name: "Android Studio"}
const Android = {icon: DiAndroid, name: "Android"}
const Twitter = {icon: FaTwitter, name: "Twitter"}
const API = {icon: TbApi, name: "API"}
const HuggingFace = {icon: SiHuggingface, name: "HuggingFace"}
const Excel = {icon: SiMicrosoftexcel, name: "Microsoft Excel"}

function Projects() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Projects"]} />
      </div>
      <div className={pagestyles.summaryContainer}>
        <ScrollButton />
        <div className={pagestyles.summary}>
          <h1>List of Projects</h1>
          <p>
            Throughout my study program, work experience, and free time, I have
            always enjoyed working on larger projects. Coding keeps me busy and
            helps me to constantly learn new things. In my spare time, I love to
            explore new concepts and create projects that I can proudly share
            with others. Whether it's developing a new app or experimenting with
            different programming languages, I find great satisfaction in
            building something from scratch. This passion for continuous
            learning and creation drives me to push my boundaries and stay
            updated with the latest trends in technology.
          </p>
        </div>
      </div>
      <div className={pagestyles.projects}>
        <div className={cardstyles.cardcontainers}>
          <Project
            title="Movie Recommender - Frontend"
            type="React Web App"
            content="A web app that recommends meaningful movies based on user input.
          Users fill in how they feel and how they want to feel, and the app will recommend a movie that fits their mood.
          The input of the user is compared to movie reviews using BERT embeddings to find the best match. 
          The app is built in React and uses the TMDb API to fetch movie data. Each user can create their own account and save their favorite movies."
            readmore={false}
            url={"/projects/movierecommendor"}
            downloadable={false}
            tech_icons={[React_, JavaScript, CSS, NPM, VSCode]}
          />

          <Project
            title="FORAS"
            type="Scientific Research"
            content="FORAS is a project at ASReview that I contributed to. 
            The project aims to update and expand upon a pevious systematic review on PTSD trajectories.
            To do this, we replicate and expand the old search for articles. I created a range of python scripts to
            merge and clean the datasets resulting from the different search strategies, improving the deduplication functionality of ASReview along the way.
            Once the final dataset was created, I wrote a script to create screening batches for the reviewers and collected the labels.
            After the screening process was completed, I created an extensive Jupyter notebook to visualize the results."
            readmore={false}
            url={"/projects/foras"}
            downloadable={false}
            tech_icons={[Python, Git, VSCode, Jupyter, Excel]}
          />

          <Project
            title="Car Collection"
            type="Android App"
            content="An app that allows users to look up specifications of vehicles by license plate and add them to their collection.
            List of saved vehicles is stored locally on the device in a SQLite database. 
      Users can edit and delete vehicles from their collection and filter on brand and model.
      To enhance user engagement, a page with advancement statistics about the user's collection is included."
            readmore={false}
            url={"/projects/carcollection"}
            downloadable={true}
            downloadtext="Download App"
            file={APK}
            filename="car_collection.apk"
            tech_icons={[Java, SQL, AndroidStudio, Android]}
          />

          <Project
            title="BERT Sentiment Analysis on Tweets"
            type="Machine Learning"
            content="Collected tweets on crypto currencies using the Twitter API. 
            The tweets were then preprocessed and fed into a BERT model that I finetuned to predict the sentiment of tweets with crypto-related language. 
            Positive and negative sentiment were defined as a particular currency going up or down in value."
            readmore={false}
            url={"/projects/bert"}
            downloadable={false}
            tech_icons={[Python, HuggingFace, Twitter, API]}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
