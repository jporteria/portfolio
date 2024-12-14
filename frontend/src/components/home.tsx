
export default function Home() {

  return (
    <section className='home--section' id="home">
      <div className="home--text">
        <p>
          <span className='name'>Hi, I'm Jess</span> <br />
          I'm a full-stack web developer
        </p>
        <button className="downloadCV" onClick={() => window.open('./files/Jessie.pdf', 'resume')}>Open CV</button>
        {/* <a href='../src/files/Jessie.pdf' download='Porteria.pdf'>
          <button className="downloadCV">Download CV</button>
        </a> */}
      </div>
      <div className="homePhotoContainer">
        <img className='homePhoto' src="images/avatar.png" alt='photo not available'  />
      </div>
    </section>
  )
}
