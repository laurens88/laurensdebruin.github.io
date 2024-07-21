import React from "react";
import Button from "@mui/material/Button";
import Download from "@mui/icons-material/Download";

const FileDownloadButton = ({ text, file, filename }) => {
  // Function to handle file download
  const downloadFile = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = file;
    link.setAttribute('download', filename); // Set the download attribute

    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger the download by simulating a click
    link.click();

    // Remove the anchor from the document
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="contained"
      endIcon={<Download />}
      style={{ margin: "10px", backgroundColor: "#1011F5" }}
      onClick={downloadFile}
    >
      {text}
    </Button>
  );
};

export default FileDownloadButton;
