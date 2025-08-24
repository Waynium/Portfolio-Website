import React from 'react'
import './Portfolio.css'
import IMG1 from '../../images/images/bloggingwebsite.JPG'
import IMG2 from '../../images/images/breadth-first-search2.JPG'
import IMG3 from '../../images/images/Visualizer.jpg'

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
            <a href="https://github.com/Waynium/Blogging-Website" className="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://github.com/Waynium/Blogging-Website/#" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Algorithm Visualizer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Waynium/" className="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://github.com/Waynium/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>African Internet Exchange Visualizer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Waynium" className="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://github.com/Waynium" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio