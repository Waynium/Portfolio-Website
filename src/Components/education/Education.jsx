import React from 'react'
import './Education.css'
import {FaUserGraduate as SchoolIcon} from 'react-icons/fa'
import {FaUserTie as WorkIcon} from 'react-icons/fa'

import {
  VerticalTimeline, 
  VerticalTimelineElement
} 
from 'react-vertical-timeline-component'
import '../../../node_modules/react-vertical-timeline-component/style.min.css'

let timelineElements = [
  {
    id: 1,
    title: "Student",
    location: "Domino Servite School",
    description: "Matriculated in December 2019 with 3 distinctions, and an average bigger than 75%",
    date: "January 2014 - January 2020",
    icon: "school"
  },
  {
    id: 2,
    title: "Student",
    location: "University Of Cape Town",
    description: "Currently enrolled for a BSc degree in Computer Science and Computer Engineering",
    date: "January 2020 - present",
    icon: "school"
  },
  {
    id: 3,
    title: "Computer Science Tutor",
    location: "University Of Cape Town",
    description: "Introductory Computer Science course taught in Python to first years",
    date: "March 2021 - July 2021",
    icon: "work"
  },
  {
    id: 4,
    title: "Academic Representative",
    location: "University of Cape Town, University House Residence",
    description: "Helping the fellow resident students improve their academic performance",
    date: "July 2021 - November 2021",
    icon: "work"
  },
  {
    id: 5,
    title: "Software Engineer Virtual Intern",
    location: "JP Morgan & Chase",
    description: "Worked on React and Perspective framework, to display fluctuating trading prices to the traders.",
    date: "December 2021 - February 2022",
    icon: "work"
  }
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
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h4 className="vertical-timeline-element-title">
                  {element.title}
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">
                  {element.description}
                </p>

              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>}
      </div>
    </section>
  )
}

export default Education