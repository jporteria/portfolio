import React from 'react'

export default function Home() {

  return (
    <div className='home--section'>
      <div className="aboutMe">
        <span className='aboutMe--name'>Hi, I'm Jess</span> <br />
        I'm a full-stack web developer
      </div>
      <div className="myPhoto"><img className='photo' src="../src/files/myPhoto.png" alt='photo not available'  /></div>
    </div>
  )
}
