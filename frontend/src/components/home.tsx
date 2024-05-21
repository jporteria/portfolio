// import React from 'react'
// import { useInView } from 'react-intersection-observer'

export default function Home() {

  // const { ref, inView, entry } = useInView({
  //   threshold: 1
  // })
  // const headerChangeClass = document.getElementById('header')
  // if(entry?.isIntersecting){
  //   headerChangeClass?.classList.add('headerScroll')
  // }else{
  //   headerChangeClass?.classList.add('header')
  // }

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
