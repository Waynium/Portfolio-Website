import React from 'react'
import CV from '../../images/images/CV.pdf'

const CTA = () => {
  return (
    <div className="CTA">
        <a href="#portfolio" className="btn">View Projects</a> {/** <a href={CV} download className="btn">Download CV</a>*/}
        <a href="#contact" className="btn btn-primary">Talk to me</a>
    </div>
  ) 
}

export default CTA