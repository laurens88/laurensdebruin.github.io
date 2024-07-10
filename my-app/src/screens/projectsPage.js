import React from "react";
import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import Card from "../components/card";
import pagestyles from "../styles/projectsPage.module.css";
import "../App.css";
import cardstyles from "../styles/card.module.css";

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
      <div className={pagestyles.summary}>
      <h1>List of projects</h1>
      <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
      </div>
      </div>
      <div className={pagestyles.projects}>
      <div className={cardstyles.cardcontainers} style={{width: "100%"}}>
      <Card width="750px">
        <h2>Project 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </Card>
      <Card width="750px">
      <h2>Project 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </Card>
      <Card width="750px">
      <h2>Project 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </Card>
      </div>
      </div>
    </div>
  );
}

export default Projects;
