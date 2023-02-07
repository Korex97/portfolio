import React from 'react';
import "./footer.css";
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
  return (
    <footer id="footer__">
      <a href="#footer__" className='footer_logo'>RESMAN</a>

      <ul className='permalinks'>
        <li><a href="#home__">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://facebook.com"><FiInstagram /></a>
        <a href="https://facebook.com"><IoLogoTwitter /></a>
        
      </div>

      <div className="footer_copyright">
        <small>&copy; Resman Technologies. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer