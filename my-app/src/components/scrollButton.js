import {useState, useEffect} from 'react';
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styles from '../styles/scrollButton.module.css';

function ScrollButton() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const scrollThreshold = document.documentElement.scrollHeight * 0.2; // 20% of the page height
      if (scrollPosition > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  const handleClick = () => {
    window.scrollTo(0, 0, 'smooth');
  };

  return (
    <IconButton onClick={handleClick} className={`${styles.button} ${isVisible ? styles.show : styles.hidden}`}>
        <ArrowUpwardIcon />
    </IconButton>
  );
}

export default ScrollButton;