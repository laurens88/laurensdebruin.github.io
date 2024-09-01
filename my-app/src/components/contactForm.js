import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../styles/contactform.module.css"; // Import the CSS module

const theme = localStorage.getItem('theme')

const ContactForm = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <Box className={styles.modalStyle}>
        <Box className={styles.boxStyle}>
          <Typography
            variant="h5"
            component="h2"
            className={styles.typographyStyle}
          >
            Get in Touch:
          </Typography>
          <Button
            variant="contained"
            href="mailto:laurens.debruin@ru.nl"
            className={styles.buttonStyle}
            startIcon={<EmailIcon className={styles.iconStyle} />}
          >
            Email Me
          </Button>
          <Button
            variant="contained"
            href="https://www.linkedin.com/in/laurens-debruin/"
            className={styles.buttonStyle}
            startIcon={<LinkedInIcon className={styles.iconStyle} />}
          >
            Connect on LinkedIn
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContactForm;
