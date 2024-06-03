
export default function Home() {

  return (
    <section className='home--section' id="home">
      <div className="home--text">
        <p>
          <span className='name'>Hi, I'm Jess</span> <br />
          I'm a full-stack web developer
        </p>
        <button className="downloadCV">Download CV</button>
      </div>
      <div className="homePhotoContainer">
        <img className='homePhoto' src="../src/files/myPhoto.png" alt='photo not available'  />
      </div>
    </section>
  )
}
