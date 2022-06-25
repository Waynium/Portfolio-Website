import React from 'react'
import './Portfolio.css'
import IMG1 from '../../images/images/Preview.jpg'
import IMG2 from '../../images/images/Software Engineering portfolio.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Blogging Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">Github</a>
            <a href="https://waynium.github.io/Blogging-Website/#" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">Github</a>
            <a href="" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Guitar Tuner Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">Github</a>
            <a href="" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio