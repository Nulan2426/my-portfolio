import React from 'react';

import "../Styling/Header.css"


const Header = () => {

  const SocialLink = ({ icon, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt="Social media link" />
    </a>
  )

  return (
    <header className='header'>
      <h1>LSK PORTFOLIO 2023</h1>
      <nav>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
