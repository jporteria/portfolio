import React from 'react'

export default function ContactMe() {
  return (
    <div className='contactMe--section'>
      <h1>Contact Me</h1>
      <div className='contactMe--socials'>
        socials
      </div>
      <div className='contactMe--form'>
        <p>Leave a message</p>
        <input className='contactMe--name' type="text" placeholder='Name/Organization' />
        <input className='contactMe--email' type="email" placeholder='email'/>
        <input className='contactMe--message' type="text" placeholder='message'/>
        <button className='submit'>Send</button>
      </div>
    </div>
  )
}
