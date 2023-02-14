import React from 'react';
import GitHub from '../Assets/github3.png';
import LinkedIn from '../Assets/linkedin.png';
import InstagramIcon from '../Assets/instagram.png';
import "./Header.css"


const Header = () => {

  const SocialLink = ({ icon, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt="Social media link" />
    </a>
  )

  return (
    <header className='header'>
      <h1>LK Portfolio</h1>
      <div className="header-social-links">
        <SocialLink icon={GitHub} url="https://github.com/Nulan2426" />
        <SocialLink icon={LinkedIn} url="https://www.linkedin.com/in/leisa-kalaniuvalu/" />
        <SocialLink icon={InstagramIcon} url="https://www.instagram.com/lanzn/" />
      </div>
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
