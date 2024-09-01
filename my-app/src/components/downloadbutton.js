import React from "react";
import Button from "@mui/material/Button";
import Download from "@mui/icons-material/Download";

const FileDownloadButton = ({ text, file, filename }) => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = file;
    link.setAttribute('download', filename);

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <Button
      variant="contained"
      endIcon={<Download />}
      onClick={downloadFile}
    >
      {text}
    </Button>
  );
};

export default FileDownloadButton;
