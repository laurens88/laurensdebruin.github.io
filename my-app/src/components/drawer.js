import React, { useState } from "react";
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
import lilogo from "../assets/logos/linkedin.png";

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

const ListItemTextStyled = styled(ListItemText)(({ isActive }) => ({
  "& .MuiListItemText-primary": {
    fontSize: "2rem",
    fontFamily: "Roboto Mono, monospace",
    color: isActive ? "#1011F5" : "inherit",
  },
  textAlign: "left",
}));

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "auto",
});

const IconLink = styled("a")({
  marginRight: "10px",
});

const NavDrawer = ({ activeItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconContainer>
            <IconLink
              href="https://www.github.com/laurens88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ghlogo}
                alt="GitHub"
                style={{ width: "30px", height: "30px" }}
              />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/laurens-debruin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={lilogo}
                alt="LinkedIn"
                style={{ width: "30px", height: "30px" }}
              />
            </IconLink>
          </IconContainer>
          <StyledIconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <StyledMenuIcon />
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
          <CloseIcon />
        </CloseButton>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <List>
            {["Home", "Resume", "Projects", "Photography", "Hobby"].map(
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
