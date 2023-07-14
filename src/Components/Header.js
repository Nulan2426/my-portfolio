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
      <h1>LK Portfolio 2023</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
