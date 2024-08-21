import { IconButton } from "@mui/material";

function ScrollButton() {
  const handleClick = () => {
    window.scrollTo(0, 0, 'smooth');
  };

  return (
    <IconButton onClick={handleClick} style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: '4'}}>
      <i className="fas fa-arrow-up"></i>
    </IconButton>
  );
}

export default ScrollButton;