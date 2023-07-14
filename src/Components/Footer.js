import React from "react";
import '../Styling/Footer.css'
import GitHub from '../Assets/github3.png';
import LinkedIn from '../Assets/linkedin.png';
import InstagramIcon from '../Assets/instagram.png';

const Footer = () => {

    const SocialLink = ({ icon, url }) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt="Social media link" />
        </a>
    )
    return (

        <footer className="footer">
            <div className="header-social-links">
                <SocialLink icon={GitHub} url="https://github.com/Nulan2426" />
                <SocialLink icon={LinkedIn} url="https://www.linkedin.com/in/leisa-kalaniuvalu/" />
                <SocialLink icon={InstagramIcon} url="https://www.instagram.com/lanzn/" />
            </div>
            <p>Copyright © LSK 2023</p>
        </footer>
    )
};
export default Footer;