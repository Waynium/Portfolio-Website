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
        <h3 className="text-light">Web Developer</h3>
        <CTA />
        <HeaderSocials />
      
        <div>
          <img src={ME} className="me" alt="propic" />
        </div>

        <div class="badge-base LI-profile-badge"
          data-locale="en_US" 
          data-size="medium" 
          data-theme="dark" 
          data-type="VERTICAL" 
          data-vanity="wandile-nyembe-a69bb31b8" 
          data-version="v1"
          src="https://platform.linkedin.com/badges/js/profile.js"
          async defer type="text/javascript"
        >
          <a class="badge-base__link LI-simple-link" 
            href="https://za.linkedin.com/in/wandile-nyembe-a69bb31b8?trk=profile-badge"
          >
            Wandile Nyembe
          </a>
        </div>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
              

      </div>
    </header>
  )
}

export default Header