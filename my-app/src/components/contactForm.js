import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const modalStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '400px',
  background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  p: 4,
  borderRadius: '12px',
};

const buttonStyle = {
  mb: 2,
  backgroundColor: '#1011F5',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', // Align items to the left
  width: '100%', // Set to full width relative to its container
  maxWidth: '250px', // Cap the maximum width
  paddingLeft: '16px', // Add padding to center the content
  '&:hover': {
    backgroundColor: '#0d0fb8',
  },
};

const iconStyle = {
  minWidth: '24px', // Ensure consistent icon width
  marginRight: '8px',
};

const ContactForm = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <Box sx={modalStyle}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Typography
            variant="h5"
            component="h2"
            mb={2}
            align="center"
            sx={{ color: '#1011F5', fontWeight: 'bold' }}
          >
            Get in Touch:
          </Typography>
          <Button
            variant="contained"
            href="mailto:laurens.debruin@ru.nl"
            sx={buttonStyle}
            startIcon={<EmailIcon sx={iconStyle} />}
          >
            Email Me
          </Button>
          <Button
            variant="contained"
            href="https://www.linkedin.com/in/laurens-debruin/"
            sx={buttonStyle}
            startIcon={<LinkedInIcon sx={iconStyle} />}
          >
            Connect on LinkedIn
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContactForm;
