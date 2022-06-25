import React from 'react'
import './About.css'
/*import ME from '../../images/images/stellies2.jpg'*/
import waynium from '../../images/images/waynium2.jpg'
import {IoIosChatbubbles} from 'react-icons/io'
import {GiSoccerBall} from 'react-icons/gi'
//import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={waynium} alt="About Image" />
          </div>
        </div>
        <div className="about__content"> 

          <div className="about__cards">
            
            <article className="about__card">
              <IoIosChatbubbles className="about__icon"/>
              <h4>Bio</h4>
              <p>
                I am Wandile, currently pursuing a B.Sc degree in Computer Science 
                and Computer Engineering at UCT. I find it satisfying to create software
                that not only influences my everyday life, but helps other people as well. 
              </p>
            </article>

            <article className="about__card">
              <GiSoccerBall className="about__icon"/>
              <h4>Hobbies</h4>
              <p>
                My hobbies include singing and playing the guitar.
                I enjoy playing soccer with my mates on Saturdays as well.
                You can read more about my hobbies from my blog that's coming out
                soon.
              </p>
            </article>
            
          </div>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About