import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import styles from "../styles/navbar.module.css";

import ghlogo from "../assets/logos/github.png";
import lilogo from "../assets/logos/linkedin.png";
import ghlogo_dark from "../assets/logos/github_dark.png";
import lilogo_dark from "../assets/logos/linkedin_dark.png";
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar() {
  let navigate = useNavigate();

  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={styles.navbar}>
      <Stack direction="row" spacing={10}>
        <Stack direction="row" spacing={{ xs: 0, sm: 1, md: 6 }}>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/resume")}>Resume</Button>
          <Button onClick={() => navigate("/projects")}>Projects</Button>
          <Button onClick={() => navigate("/photography")}>Photography</Button>
          <Button onClick={() => navigate("/travel")}>Travel</Button>
        </Stack>
        <Stack direction="row" spacing={{ xs: 0, sm: 1, md: 6 }}>
          <a
            href="https://www.github.com/laurens88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === 'light' ? ghlogo : ghlogo_dark}
              alt="GitHub"
              className={styles.icon}
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/laurens-debruin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === 'light' ? lilogo : lilogo_dark}
              alt="LinkedIn"
              className={styles.icon}
              style={{ width: "28px", height: "28px", paddingTop: "0.7rem" }}
            />
          </a>
          <IconButton onClick={toggleTheme}> <DarkModeIcon /> </IconButton>
        </Stack>
      </Stack>
    </div>
  );
}

export default Navbar;
