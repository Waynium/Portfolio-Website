import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/wandile-nyembe-a69bb31b8/" target="_blank"><FiLinkedin /></a>
        <a href="https://github.com/Waynium" target="_blank"><FiGithub /></a>
        <a href="https://www.instagram.com/waynium.007/" target="_blank"><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocials