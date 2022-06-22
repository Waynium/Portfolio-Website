import React from 'react'
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Waynium.007</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education and Experience</a></li>
        <li><a href="#portolio">Portfolio</a></li>
        <li><a href="#tools">Tools</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/wayne.nyembe.5"><FaFacebookF /></a>
        <a href="https://www.instagram.com/waynium.007/"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/wandile-nyembe-a69bb31b8/"><FiLinkedin /></a>
      </div>

      <div>
        <small>&copy; Waynium.007 All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer