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
                <h4>XML</h4>
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
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
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
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>Kotlin</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Basic</small>
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
                <h4>C#.NET</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of backend development */}
        
        {/* version control software*/}
        <div className="tool__versionControl">
          <h3>Version Control Software</h3>
          <div className="tool__content">
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>Gitlab</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>Jira Software</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="tool__details">
              <BsPatchCheckFill className="tool__details-icon" />
              <div>
                <h4>Android Studio</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default tool