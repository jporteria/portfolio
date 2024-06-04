import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


export default function ContactMe() {
  
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sx1siwe', 'template_pjrsr2d', form.current, {
        publicKey: 'a2g3vtTrcijsE2TUT',
      })
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "I will get back to you as soon as possible",
            icon: "success"
          });
          form.current.reset()
        },
        (error) => {
          alert('FAILED...'+ error);
        },
      );
  };

  return (
    <section className='contactMe--section' id='contactMe--section'>
      {/* <h1>Contact Me</h1> */}
      <div className="contactMe--info">
        {/* <div> */}
          <h1>Contact Me</h1>
          <p>
            For questions, feedback and offers, you may reach out to me through the following contact information and social platforms.
          </p>
          <div className='contactMe--pii'>
            <div className="phone">
              <img className='contactMe--icons' src="../src/files/contacts/phone.png" height='20px' alt="phone icon" />
              <p>+63 946-581-3090</p>
            </div>
            <div className="email">
              <img className='contactMe--icons' src="../src/files/contacts/email.png" height='20px' alt="email icon" />
              <p>cjporteria@gmail.com</p>
            </div>
            <div className="location">
              <img className='contactMe--icons' src="../src/files/contacts/location.png" height='20px' alt="location icon" />
              <p>Metro Manila, Philippines</p>
            </div>
          </div>
        {/* </div> */}
        <div className='contactMe--socials'>
          <div className='socialBox' onClick={() => window.open('https://www.facebook.com/curlytopszxc', 'fb')}>
            <img className='socialIcon' src="../src/files/facebook.png" alt="" />
          </div>
          <div className='socialBox'>
            <img className='socialIcon' src="../src/files/linkedin.png" alt="" />
          </div>
          <div className='socialBox'>
            <img className='socialIcon' src="../src/files/instagram.png" alt="" />
          </div>
        </div>
      </div>
      <form className='contactMe--form' ref={form} onSubmit={sendEmail}>
        <p>Leave a message</p>
        <input className='contactMe--name' name='contactMe--name' type="text" placeholder='Name/Organization' required/>
        <input className='contactMe--email' name='contactMe--email' type="email" placeholder='Email Address' required/>
        <input className='contactMe--subject' name='contactMe--subject' type="text" placeholder='Subject' required/>
        <textarea className='contactMe--message' name='contactMe--message' placeholder='Message' required/>
        <button className='submit'>Send <img src="../src/files/send.png" alt="" height='100%' /></button>
      </form>
    </section>
  )
}
