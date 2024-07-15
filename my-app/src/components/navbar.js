import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styles from "../styles/navbar.module.css";

import ghlogo from "../assets/logos/github.png";
import lilogo from "../assets/logos/linkedin.png";

function Navbar() {
  let navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <Stack direction="row" spacing={10}>
        <Stack direction="row" spacing={{ xs: 0, sm: 1, md: 6 }}>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/resume")}>Resume</Button>
          <Button onClick={() => navigate("/projects")}>Projects</Button>
          <Button onClick={() => navigate("/photography")}>Photography</Button>
          <Button onClick={() => navigate("/hobbies")}>Hobbies</Button>
        </Stack>
        <Stack direction="row" spacing={{ xs: 0, sm: 1, md: 6 }}>
          <a
            href="https://www.github.com/laurens88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ghlogo}
              alt="GitHub"
              className={styles.icon}
              style={{ width: "30px", height: "30px"}}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/laurens-debruin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={lilogo}
              alt="LinkedIn"
              className={styles.icon}
              style={{ width: "28px", height: "28px", paddingTop: "0.7rem"}}
            />
          </a>
        </Stack>
      </Stack>
    </div>
  );
}

export default Navbar;
