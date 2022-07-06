import React from 'react'
import './Tools.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const tool = () => {
  return (
    <section id="tools">
      <h5>What Skills I have</h5>
      <h2>My Tools</h2>

      <div className="container tool__container">
        <div className="tool__frontend">

          {/* Start of frontend section */}
          <h3>Frontend Development</h3>
          <div className="tool__content">
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>javaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          </div>
        </div>
        {/* End of Frontend section */}

        {/* Backend development */}
        <div className="tool__backend">
          <h3>Backend Development</h3>
          <div className="tool__content">
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>C#.NET</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of backend development */}

      </div>
    </section>
  )
}

export default tool