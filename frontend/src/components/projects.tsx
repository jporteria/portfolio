
export default function Projects() {

  return (
    <section className='projects--section' id='projects--section'>
      <h1>Projects</h1>
      <div className="project">
        <img className="projectPhoto" src="../src/files/netPlease.png" alt="no image available"/>
        <div className="project--description">
          <span className='project--title'>NetPlease</span>
          NetPlease is a movie rating website aimed at providing users with a platform to discover, rate, and review movies. This project is created using MERN stack and movie API from TMDb. This website is still in the development phase and does not have a responsive design yet.
        </div>
      </div>
      <div className="project">
        <div className="project--description">
          <span className='project--title'>NetPlease</span>
          NetPlease is a movie rating website aimed at providing users with a platform to discover, rate, and review movies. This project is created using MERN stack and movie API from TMDb. This website is still in the development phase and does not have a responsive design yet.
        </div>
        <img className="projectPhoto" src="../src/files/netPlease.png" alt="no image available"/>
      </div>
    </section>
  )
}
