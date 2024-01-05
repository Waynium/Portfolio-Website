import React from 'react'
import './Education.css'
import {FaUserGraduate as SchoolIcon} from 'react-icons/fa'
import {FaUserTie as WorkIcon} from 'react-icons/fa'
import CSharp from '../../images/images/BasicCSharp.JPG'
import Java from '../../images/images/BasicJava.JPG'
//import JPMorgan from '../../images/images/JPMorgan Certificate.png'
import ReactEssentials from '../../images/images/BasicReact.JPG'
//import MTNAward from '../../images/images/MTNAppAward.JPG'
import DjangoEssentials from '../../images/images/BasicDjango.jpg'

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
    description: "Tutored CSC1015F, an introductory course to Python for first-year Computer Science students. Provided assessment and feedback on student assignments. Collaborated with fellow professional tutors during hotseat tutoring",
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
  },
  {
    id: 5,
    title: "C# Proficiency Award",
    location: "Hackerrank",
    description: "I was awarded a C# Certificate from Hackerrank, which highlights my proficiency in the C# language. This includes types, and Variables, basic OOP, Properties and Indexers, Collections, Exception handling, among others.",
    date: "21 September 2021",
    icon: "school"
  },
  /*{
    id: 6,
    title: "Software Engineer Virtual Intern",
    location: "JP Morgan & Chase",
    description: "Worked on React and Perspective framework, to display fluctuating trading prices to the traders. Python was used for the backend server, which was used to provide the stock price data feed.",
    date: "December 2021 - February 2022",
    icon: "school"
  },*/
  {
    id: 6,
    title: "Certificate Of Completion Award",
    location: "Linkedin",
    description: "I worked on React fundamentals; React reusable components, React hooks, React Testing, React routers, Good React Practices",
    date: "July 2022",
    icon: "school"
  },
  {
    id: 7,
    title: "Certificate Of Completion Award",
    location: "Linkedin",
    description: "Django built-in User management, Database interaction with Django, Dynamic webpages and forms, User authentication",
    date: "July 2023",
    icon: "school"
  },
  {
    id: 8,
    title: "Embedded Systems II Tutor",
    location: "University Of Cape Town",
    description: "Proficiently tutored a Computer/Electrical Engineering course, EEE3096S which is an advanced course in Embedded Systems. Guided students in mastering embedded systems architectures, firmware and software tool stacks. Mentored students in their final year project, enhancing software features and conducting performance testing.",
    date: "July 2023 - November 2023",
    icon: "work"
  },
  {
    id: 9,
    title: "Junior Software Engineer",
    location: "BBD",
    description: "Employed as Junior Software Engineer at BBD - Barone Budge & Dominick (Pty) Ltd",
    date: "January 2024 - Present",
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
                <br></br>
                <a href="https://www.hackerrank.com/certificates/111852cebf7a">
                  <img alt="" src={element.id===4 ? Java : {}} />
                </a>
                <a href="https://www.hackerrank.com/certificates/b8d9d237c58b">
                  <img alt="" src={element.id===5 ? CSharp : {}} />
                </a>
                {/*<a href="https://github.com/Waynium/JPMorgan-Tech-Task3">
                  <img alt="" src={element.id===6 ? JPMorgan : {}} />
                </a>*/}
                <a href="https://www.linkedin.com/learning/certificates/1b2b19312f6503ab177eb5dda2e80bfbec6624c81ffabba44eb3635f6a71e015?u=70295562">
                  <img alt="" src={element.id===6 ? ReactEssentials : {}} />
                </a>
                <a href="https://www.linkedin.com/learning/certificates/66af073e0bd4cff198ebab858500706328cc1f3d2f5cb0d404d99929dd4cf781?u=70295562">
                  <img alt="" src={element.id===7 ? DjangoEssentials : {}} />
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