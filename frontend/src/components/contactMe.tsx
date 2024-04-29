import React from 'react'

export default function ContactMe() {
  return (
    <div className='contactMe--section'>
      <h1>Contact Me</h1>
      <div className='contactMe--socials'>
        <div className='socialBox'>
          <img className='socialIcon' src="../src/files/facebook.png" alt="" />
        </div>
        <div className='socialBox'>
          <img className='socialIcon' src="../src/files/linkedin.png" alt="" />
        </div>
        <div className='socialBox'>
          <img className='socialIcon' src="../src/files/instagram.png" alt="" />
        </div>
        <div className='socialBox'>
          <img className='socialIcon' src="../src/files/email.png" alt="" />
        </div>
      </div>
      <div className='contactMe--form'>
        <p>Leave a message</p>
        <input className='contactMe--name' type="text" placeholder='Name/Organization' />
        <input className='contactMe--email' type="email" placeholder='Email'/>
        <input className='contactMe--message' type="text" placeholder='Message'/>
        <button className='submit'>Send</button>
      </div>
    </div>
  )
}
