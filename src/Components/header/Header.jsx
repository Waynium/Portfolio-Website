import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import waynium from '../../images/images/waynium2.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Wandile Nyembe</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={waynium} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header