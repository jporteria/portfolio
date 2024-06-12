import { useInView } from 'react-intersection-observer'

export default function Projects() {

  const { ref, inView } = useInView({
      threshold: 0.3
  })

  return (
    <section className='projects--section' id='projects--section' ref={ref}>
      <h1 className={inView ? 'showHidden' : 'hidden'}>Projects</h1>
      <div className={inView ? 'project showHidden' : 'project hidden'}>
        <img className="projectPhoto" src="../src/files/netPlease.png" alt="no image available"/>
        <div className="project--description">
          <h2 className='project--title'>NetPlease</h2>
          <div className="project--buttons">
            <button onClick={() => window.open('https://netplease.onrender.com/', 'NetPlease')}>Go Live</button>
            <button onClick={() => window.open('https://github.com/wagako3/netplease', 'NetPlease')}>View on Github</button>
          </div>
          <p>
            NetPlease is a movie rating website aimed at providing users with a platform to discover, rate, and review movies. This project is created using MERN stack and movie API from TMDb. This website is still in the development phase and does not have a responsive design yet.
          </p>
        </div>
      </div>
      {/* <div className="project">
        <div className="project--description">
          <span className='project--title'>NetPlease</span>
          NetPlease is a movie rating website aimed at providing users with a platform to discover, rate, and review movies. This project is created using MERN stack and movie API from TMDb. This website is still in the development phase and does not have a responsive design yet.
        </div>
        <img className="projectPhoto" src="../src/files/netPlease.png" alt="no image available"/>
      </div> */}
    </section>
  )
}
