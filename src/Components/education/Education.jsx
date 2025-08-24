import React from 'react'
import './Education.css'
import {FaUserGraduate as SchoolIcon} from 'react-icons/fa'
import {FaUserTie as WorkIcon} from 'react-icons/fa'
import ReactEssentials from '../../images/images/BasicReact.JPG'
import DjangoEssentials from '../../images/images/BasicDjango.jpg'
import AWSCert from '../../images/images/AWS.png'

import {
  VerticalTimeline, 
  VerticalTimelineElement
} 
from 'react-vertical-timeline-component'
import '../../../node_modules/react-vertical-timeline-component/style.min.css'

let timelineElements = [
  {
    id: 1,
    title: "Graduate",
    location: "University Of Cape Town",
    description: "Completed my B.Sc degree in Computer Science and Computer Engineering.",
    date: "Jan 2020 - Dec 2023",
    icon: "school"
  },
  {
    id: 2,
    title: "Computer Science Tutor",
    location: "University Of Cape Town",
    description: "Tutored CSC1015F, an introductory course to Python for first-year Computer Science students. Provided assessment and feedback on student assignments. Collaborated with fellow professional tutors during hotseat tutoring",
    date: "Mar 2021 - Jul 2021",
    icon: "work"
  },
  {
    id: 3,
    title: "Embedded Systems II Tutor",
    location: "University Of Cape Town",
    description: "Proficiently tutored a Computer/Electrical Engineering course, EEE3096S which is an advanced course in Embedded Systems. Guided students in mastering embedded systems architectures, firmware and software tool stacks. Mentored students in their final year project, enhancing software features and conducting performance testing.",
    date: "Jul 2023 - Nov 2023",
    icon: "work"
  },
  {
    id: 4,
    title: "Software Engineer",
    location: "BBD",
    description: "Employed as Software Engineer at BBD - Barone Budge & Dominick (Pty) Ltd.",
    date: "Jan 2024 - Present",
    icon: "work"
  },
  {
    id: 5,
    title: "AWS Developer Associate Certificate",
    location: "Aamazon Web Services",
    description: "Demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline.",
    date: "Sept 2024 - Sept 2027",
    icon: "school"
  },
]

const Education = () => {

  let workIconStyles = { background: "#ffab0f"};
  let schoolIconStyles = { background: "#ffab0f"};

  return (
    <section id="education">
      <h5>My career progress thus far</h5>
      <h2>Education and Experience</h2>

      <div className="education__container">
        {<VerticalTimeline>
          {timelineElements.map(element => {
            let isWorkIcon = element.icon === "work";
  
            return (
              <VerticalTimelineElement
                className="elementBox"
                key={element.key}
                date={element.date}
                dateClassname="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}>

                <h4 className="vertical-timeline-element-title">
                  {element.title}
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">
                  {element.description}
                </p>
                { element.id === 5 &&

                  <div className="timeline-image">
                    <br></br>
                    <a href="https://www.credly.com/badges/2e6a4a7a-d8a9-43ec-af5e-66c0d73580fb/public_url">
                      <img alt="" src={AWSCert} />
                    </a>
                  </div>
                }

              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>}
      </div>
    </section>
  )
}

export default Education