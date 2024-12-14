// import React from 'react'
// import { useInView } from 'react-intersection-observer'

import { useState } from "react";

export default function Skills() {
  // const { ref, inView, entry } = useInView({
  //   threshold: 0.2
  // })
  // // const hiddenElements = document.querySelectorAll('sections')
  // console.log(entry)
  // if(entry?.isIntersecting){
  //   console.log('hello')
  // }

  const [skills, setSkills] = useState([
    { image: "images/skillsIcons/html.png", skillName: "HTML" },
    { image: "images/skillsIcons/css.png", skillName: "CSS" },
    { image: "images/skillsIcons/javascript.png", skillName: "JavaScript" },
    { image: "images/skillsIcons/typescript.png", skillName: "TypeScript" },
    { image: "images/skillsIcons/mongodb.png", skillName: "MongoDB" },
    { image: "images/skillsIcons/express.png", skillName: "Express" },
    { image: "images/skillsIcons/react.png", skillName: "React" },
    { image: "images/skillsIcons/nodejs.png", skillName: "Node JS" },
    { image: "images/skillsIcons/git.png", skillName: "Git" },
  ]);

  return (
    <div className="skills--section" id="skills--section">
      {/* <h1>Skills</h1> */}
      {skills.map((skill, i) => (
        <div key={i} className="skills">
          <img src={skill.image} alt="" />
          <p>{skill.skillName}</p>
        </div>
      ))}
    </div>
  );
}
