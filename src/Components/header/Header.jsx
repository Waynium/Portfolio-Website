import React from 'react';
import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../images/images/stellies2.jpg'
//import ME from '../../images/images/weddingpropic03.jpg';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5> 
        <h1 className="myname">Wandile Nyembe</h1>
        <h3 className="text-light">Software Engineer</h3>
        <CTA />
        <HeaderSocials />
	<h4>B.Sc in Computer Science Graduate</h4>
        <div>
          <img src={ME} className="me" alt="propic" />
        </div>
      </div>
    </header>
  )
}

export default Header