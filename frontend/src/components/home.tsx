
export default function Home() {

  return (
    <section className='home--section' id="home">
      <div className="home--text">
        <p>
          <span className='name'>Hi, I'm Jess</span> <br />
          I'm a full-stack web developer
        </p>
        {/* <button className="downloadCV" onClick={() => window.open('https://drive.google.com/file/d/18BK6-3BWoPmrGxo9Ui-QdubiXfIJ3Gb-/view?usp=drive_link', 'resume')}>Download CV</button> */}
        <a href='../src/files/Porteria.pdf' download='Porteria.pdf'>
          <button className="downloadCV">Download CV</button>
        </a>
      </div>
      <div className="homePhotoContainer">
        <img className='homePhoto' src="../src/files/myPhoto.png" alt='photo not available'  />
      </div>
    </section>
  )
}
