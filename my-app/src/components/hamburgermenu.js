import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="hamburger-menu">
        <button className="menu-button" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isOpen && (
          <ul className="menu-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Photography">Photography</a></li>
            <li><a href="#Hobby">Hobby</a></li>
          </ul>
        )}
      </div>
    );
  };

export default HamburgerMenu;