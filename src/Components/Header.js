import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import "../Styling/Header.css"


const Header = () => {

  const SocialLink = ({ icon, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt="Social media link" />
    </a>
  )

  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleOnClick = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const closeOnClick = () => {
    setIsMobileOpen(false)
  };


  return (
    <header class='header'>
      
      <h1>LSK PORTFOLIO 2023</h1>
      <div cl>
      <nav>
        <ul class='desktop-nav'>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        </nav>
      </div>
      <div class="mobile-menu">
      {isMobileOpen ? <FaTimes class='icons' onClick={handleOnClick} /> : <FaBars class='icons' onClick={handleOnClick} />}
      {
        isMobileOpen ? <div class='mobile-nav'>
            {
              <nav class="mobile-links">
                <ul>
                  <li><a onClick={closeOnClick} href="#about"><u>ABOUT</u></a></li>
                  <li><a onClick={closeOnClick} href="#projects"><u>PROJECTS</u></a></li>
                  <li><a onClick={closeOnClick} href="#contact"><u>CONTACT</u></a></li>
                </ul>
              </nav>}
            </div> : " "
        }
      </div>
    </header>
  );
};

export default Header;
