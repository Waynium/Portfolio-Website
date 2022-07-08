import React from 'react'
import './Education.css'
import {FaUserGraduate as SchoolIcon} from 'react-icons/fa'
import {FaUserTie as WorkIcon} from 'react-icons/fa'
import CSharp from '../../images/images/BasicCSharp.JPG'
import Java from '../../images/images/BasicJava.JPG'
import JPMorgan from '../../images/images/JPMorgan Certificate.png'

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
    description: "Matriculated in December 2019 with 3 distinctions, and an upper class average bigger than 75%.",
    date: "January 2014 - January 2020",
    icon: "school"
  },
  {
    id: 2,
    title: "Student",
    location: "University Of Cape Town",
    description: "Currently enrolled for a BSc degree in Computer Science and Computer Engineering.",
    date: "January 2020 - present",
    icon: "school"
  },
  {
    id: 3,
    title: "Computer Science Tutor",
    location: "University Of Cape Town",
    description: "I was selected as one of the tutors to tutor Computer Science to first years at UCT. The course was an Introductory Computer Science course taught in the Python programming language.",
    date: "March 2021 - July 2021",
    icon: "work"
  },
  {
    id: 4,
    title: "Java Proficiency Award",
    location: "Hackerrank",
    description: "I was awarded a Java Certificate from Hackerrank, which highlights my proficiency in the Java language. This includes classes, data structures, inheritance, exception handling, etc.",
    date: "21 May 2021",
    icon: "school",
    image: "java"
  },
  {
    id: 5,
    title: "C# Proficiency Award",
    location: "Hackerrank",
    description: "I was awarded a C# Certificate from Hackerrank, which highlights my proficiency in the C# language. This includes types, and Variables, basic OOP, Properties and Indexers, Collections, Exception handling, among others.",
    date: "21 September 2021",
    icon: "school",
    image: "csharp"
  },
  {
    id: 6,
    title: "Software Engineer Virtual Intern",
    location: "JP Morgan & Chase",
    description: "Worked on React and Perspective framework, to display fluctuating trading prices to the traders. Python was used for the backend server, which was used to provide the stock price data feed.",
    date: "December 2021 - February 2022",
    icon: "school",
    image: "jpmorgan"
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
            let isJava = element.image === "java";
            let isCSharp = element.image === "csharp";
            let isMorgan = element.image === "jpmorgan";

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
                <br></br>
                <a href="https://www.hackerrank.com/certificates/111852cebf7a">
                  <img alt="" src={isJava ? Java : {}} />
                </a>
                <a href="https://www.hackerrank.com/certificates/b8d9d237c58b">
                  <img alt="" src={isCSharp ? CSharp : {}} />
                </a>
                <a href="https://github.com/Waynium/JPMorgan-Tech-Task3">
                  <img alt="" src={isMorgan ? JPMorgan : {}} />
                </a>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>}
      </div>
    </section>
  )
}

export default Education