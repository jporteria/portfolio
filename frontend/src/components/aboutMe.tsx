import { useInView } from 'react-intersection-observer'
import Skills from './skills'
import { useContext } from 'react'
import { Context } from '../app'

export default function AboutMe() {

  const { setAboutBox } = useContext(Context)

  const { ref, inView } = useInView({
      threshold: 0.3
  })
  
  // const aboutMe = document.getElementById("aboutMe--section")
  // if(entry?.isIntersecting){
  //   aboutMe?.classList.add("nav--active")
  // }
  function showAboutBox(){
      setAboutBox(true)
  }

  return (
    <section className='aboutMe--section' id='aboutMe--section' ref={ref}>
      <h1 className={inView ? 'showHidden' : 'hidden'}>About Me</h1>
      <div className={inView ? 'aboutMe showHidden' : 'aboutMe hidden'}>
          <div className='aboutMePhotoContainer'>
            <img className='aboutMePhoto' src="https://drive.google.com/thumbnail?id=1MKVhIg6m1dQrVuIYrW9gZFIllSGh5aQu&sz=w1000" alt="photo not available" />
          </div>
          <div className='summary'>
            <p>
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
