import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function AboutMe() {

  const { ref, inView, entry } = useInView({
    threshold: 0.5
  })
  // const hiddenElements = document.querySelectorAll('sections')
  console.log(entry)
  if(entry?.isIntersecting){
    console.log('hello')
  }

  return (
    <div className='aboutMe--section' ref={ref}>
          <div className='aboutMePhotoContainer'>
            <img className='aboutMePhoto' src="../src/files/IMG_1511.jpg" alt="photo not available" />
          </div>
          <div className='summary'>
            <p className={inView ? 'showHidden' : 'hidden'}>
            I'm a dynamic Full Stack Developer driven by a fervent dedication to crafting and nurturing exceptional websites. 
            Equipped with a robust proficiency in both front-end and back-end development, 
            I thrive in leveraging cutting-edge technologies to deliver seamless user experiences. 
            My innate ability to rapidly grasp new concepts, coupled with a collaborative mindset, 
            positions me as a valuable contributor within any professional environment. 
            Ready to elevate your development team with innovative solutions and unwavering enthusiasm.
            </p>
            <button className='more'>More about me</button>
          </div>
    </div>
  )
}
