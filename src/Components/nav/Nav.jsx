import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBlackBook} from 'react-icons/gi'
import {MdHomeRepairService} from 'react-icons/md'
import {MdContactMail} from 'react-icons/md'
import {TiNews} from 'react-icons/ti'
import {useState} from 'react'

const Nav = () => {
  
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav> {/**if (seActiveNav == href) { then the className = 'active' } */}
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><GiBlackBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdHomeRepairService /></a>
      <a href="#tools" onClick={() => setActiveNav('#tools')} className={activeNav === '#tools' ? 'active' : ''}><TiNews /></a>
      {/*<a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail /></a>*/}
    </nav>
  )
}

export default Nav