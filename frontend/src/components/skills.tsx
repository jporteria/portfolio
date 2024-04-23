import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  
  const { ref, inView, entry } = useInView({
    threshold: 0.8
  })
  // const hiddenElements = document.querySelectorAll('sections')
  console.log(entry)
  if(entry?.isIntersecting){
    console.log('hello')
  }

  return (
    <div className='skills--section' ref={ref}>
      {/* <h1 className={inView ? 'sections showHidden' : 'sections'}>list of skills</h1> */}
      <h2>My Skills</h2>
      <div className='skills'>
        <div>
          <img src="../src/files/skillsIcons/html.png" alt="" />
          <p>HTML</p>
        </div>
        <div>
          <img src="../src/files/skillsIcons/css.png" alt="" />
          <p>CSS</p>
        </div>
        <div>
          <img src="../src/files/skillsIcons/javascript.png" alt="" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src="../src/files/skillsIcons/Typescript.png" alt="" />
          <p>TypeScript</p>
        </div>
        <div>
          <img src="../src/files/skillsIcons/mongodb.png" alt="" />
          <p>MongoDB</p>
        </div>
        <div>
          <img src="../src/files/skillsIcons/express.png" alt="" />
          <p>Express</p>
        </div>
        <div>
          <img src="../src/files/skillsIcons/react.png" alt="" />
          <p>React</p>
        </div>
        <div>
          <img src="../src/files/skillsIcons/nodejs.png" alt="" />
          <p>Node JS</p>
        </div>
        <div>
          <img src="../src/files/skillsIcons/git.png" alt="" />
          <p>Git</p>
        </div>
      </div>
    </div>
  )
}
