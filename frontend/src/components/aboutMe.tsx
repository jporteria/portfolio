import { useInView } from 'react-intersection-observer'
import Skills from './skills'
import { useContext } from 'react'
import { Context } from '../app'

export default function AboutMe() {

  const { aboutBox, setAboutBox } = useContext(Context)

  const { ref, inView, entry } = useInView({
      threshold: 0.5
  })
  
  // const aboutMe = document.getElementById("aboutMe--section")
  // if(entry?.isIntersecting){
  //   aboutMe?.classList.add("nav--active")
  // }
  function showAboutBox(){
      setAboutBox(true)
  }

  return (
    <section className='aboutMe--section' id='aboutMe--section'>
      <h1>About Me</h1>
      <div className='aboutMe'>
          <div className='aboutMePhotoContainer'>
            <img className='aboutMePhoto' src="../src/files/IMG_1511.jpg" alt="photo not available" />
          </div>
          <div className='summary' ref={ref}>
            <p className={inView ? 'showHidden' : 'hidden'}>
            I'm a skilled Full Stack Developer with
            expertise in front-end and back-end
            development. I'm passionate about
            creating and optimizing websites. My
            aptitude for quickly grasping new
            concepts, along with my collaborative
            approach, makes me an asset to any
            professional team. I'm prepared to
            enhance your development team with
            innovative solutions and unwavering
            dedication.
            </p>
            <button className='more' onClick={showAboutBox}>More about me</button>
          </div>
      </div>
      <Skills />
    </section>
  )
}
