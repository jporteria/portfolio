import React from 'react'

export default function Home() {

  return (
    <div className='home--section'>
      <div className="home--text">
        <span className='name'>Hi, I'm Jess</span> <br />
        I'm a full-stack web developer
      </div>
      <div className="homePhotoContainer">
        <img className='homePhoto' src="../src/files/myPhoto.png" alt='photo not available'  />
      </div>
    </div>
  )
}
