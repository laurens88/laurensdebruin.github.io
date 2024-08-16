import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import ghlogo from "../assets/logos/github.png";
import ghlogo_dark from "../assets/logos/github_dark.png";
import lilogo from "../assets/logos/linkedin.png";
import lilogo_dark from "../assets/logos/linkedin_dark.png";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from "../styles/navbar.module.css";
import { SiGithub } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
});

const StyledIconButton = styled(IconButton)({
  marginLeft: "auto",
});

const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const StyledMenuIcon = styled(MenuIcon)({
  color: "#000",
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: 20,
  right: 20,
});

const ListItemTextStyled = styled(ListItemText)(({ isActive, theme }) => ({
  "& .MuiListItemText-primary": {
    fontSize: "2rem",
    fontFamily: "Roboto Mono, monospace",
    color: isActive ? "#1011F5" : theme === "light" ? "black" : "white",
  },
  textAlign: "left",
}));

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "auto",
  gap: "5px",
});

const IconLink = styled("a")({
  marginRight: "10px",
});

const NavDrawer = ({ activeItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

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
    <div className={styles.container}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconContainer>

          <a
            href="https://www.github.com/laurens88"
            target="_blank"
            rel="noopener noreferrer"
          >
          <SiGithub style={theme === 'light' ? {color: "black"} : {color: "white"}} size={"1.35rem"}/>
          </a>

          <a
            href="https://www.linkedin.com/in/laurens-debruin/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <IoLogoLinkedin style={theme === 'light' ? {color: "black"} : {color: "white"}} size={"1.5rem"}/>
          </a>

          <IconButton onClick={toggleTheme} style={{color: "#1011FA"}}> {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />} </IconButton>
          </IconContainer>
          <StyledIconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <StyledMenuIcon style={theme === "light" ? {color: "black"} : {color: "white"}}/>
          </StyledIconButton>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer anchor="top" open={isOpen} onClose={toggleDrawer}>
        <CloseButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={toggleDrawer}
        >
          <CloseIcon style={theme === "light" ? {color: "black"} : {color: "white"}}/>
        </CloseButton>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          bgcolor={theme === "light" ? "#fff" : "rgb(0, 1, 35)"}
        >
          <List>
            {["Home", "Resume", "Projects", "Photography", "Travel"].map(
              (item) => (
                <ListItem
                  button
                  component="a"
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  key={item}
                >
                  <ListItemTextStyled
                    primary={item}
                    isActive={activeItems.includes(item)}
                    theme={theme}
                  />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </StyledDrawer>
    </div>
  );
};

export default NavDrawer;
