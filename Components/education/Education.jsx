import React from 'react'
import './Education.css'
import {FaUserGraduate as SchoolIcon} from 'react-icons/fa'
import {FaUserTie as WorkIcon} from 'react-icons/fa'
import CSharp from '../../images/images/BasicCSharp.JPG'
import Java from '../../images/images/BasicJava.JPG'
import JPMorgan from '../../images/images/JPMorgan Certificate.png'
import ReactEssentials from '../../images/images/BasicReact.JPG'
import MTNAward from '../../images/images/MTNAppAward.JPG'

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
  },
  {
    id: 5,
    title: "C# Proficiency Award",
    location: "Hackerrank",
    description: "I was awarded a C# Certificate from Hackerrank, which highlights my proficiency in the C# language. This includes types, and Variables, basic OOP, Properties and Indexers, Collections, Exception handling, among others.",
    date: "21 September 2021",
    icon: "school"
  },
  {
    id: 6,
    title: "Software Engineer Virtual Intern",
    location: "JP Morgan & Chase",
    description: "Worked on React and Perspective framework, to display fluctuating trading prices to the traders. Python was used for the backend server, which was used to provide the stock price data feed.",
    date: "December 2021 - February 2022",
    icon: "school"
  },
  {
    id: 7,
    title: "Certificate Of Completion Award",
    location: "Linkedin",
    description: "I worked on React fundamentals; React reusable components, React hooks, React Testing, React routers, Good React Practices",
    date: "July 2022",
    icon: "school"
  },
  {
    id: 8,
    title: "Certificate Of Completion Award",
    location: "MTN Business App Academy",
    description: "This Certificate of Completion is to certify that the following student has completed the MTN Business App Academy course. The student has demonstrated the ability to develop a mobile application using the React Native framework. The NQF Level 5 certificate is awarded to Wandile Nyembe.",
    date: "December 2022",
    icon: "school"
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
                <a href="https://github.com/Waynium/JPMorgan-Tech-Task3">
                  <img alt="" src={element.id===6 ? JPMorgan : {}} />
                </a>
                <a href="https://www.linkedin.com/learning/certificates/1b2b19312f6503ab177eb5dda2e80bfbec6624c81ffabba44eb3635f6a71e015?u=70295562">
                  <img alt="" src={element.id===7 ? ReactEssentials : {}} />
                </a>
                <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=9dc7bbb4d0&attid=0.1&permmsgid=msg-f:1751825238020291455&th=184fbbc5bcc37b7f&view=att&disp=inline&saddbat=ANGjdJ_z2mUYXZW0GxbY21OeR3bmeSCXo-4HRZ3y88-oyH4P1mfrihiretxp0OOOq6q6ESuNsX744czOY9qE0Spbcoq_oognLCeVducl9M95i_luoHwVweXx1eL-MqpkWRlTWRPzYTj_BzQ09LSbnvhrgnLraSGFaib1VHxHV4mVbLMpCkghREnBjXO8aPrDP_faHrzRzWdHih-bLCKXqdmsMdeVmQPG6QQrjK3_UgFVo1dwaTnz7CgQ8ZBiOIleS8BtsSuY6TxiOOyv1tw-S1IOJe4Db66WA15BbFNj382rXoM_zE8_W-tnUhtf1DrEU2DhecHhoP8qlHPDHLPW7KVBdTK5BAvxWtp2BvNW_na2NMm9ex1M4PhYh22LBjDqeJVKnqmxNFE6CDyR-mOleq8mZTBOA-t5i7-vO170vfTO_Nrelsw3XqCgZ1Qq4u1yBoS0uVOKCpWQv-aT83oINOe8shIelRrcdM_bOVEXn-GsITs0sMt6-bxgaaQk81w9rGA2Qbyq4LQ9Kp-Upd7L_trxUolLI0qkdKeQi0KMldu2T1Te7ueQl5kHufNAr0TEk1ZWImLcX3KkB3At_3NeLKTDEi1ii8haFkg1qJ8-GGl9I_rr22l4fpRWBOVESLZXj-NQrSww1cLqhsz9ss0uwpyZSTaGwSpp2_hrhDP1gOXi3SgIw25T1Br8sk41NWY_oBk2f8eILuuL-rwEYEweehx1kSVHzZFj8jye0ujaXLr8OjRHZcOKgboS_G7Bby3hT02FzxH7MClWvUN5DxF3WZLsl2zmFcJRV4b4tIZLhnYtsh4sTBG8VFxIouRGYvgeiKdwZBMNyhP0YNkJsuFqJGikPGZeMHi8jmmuLl_9jqGU9eUrGjGaY-Boqg1S2Xj0V0qnzF25vNWvcyqingadBrJV6ZYDSYT2gevkWTP4mhCXjzjuaXL-QSSySXukVmorky_U4bZNcQHzfXjsQwqC">
                  <img alt="" src={element.id===8 ? MTNAward : {}} />
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