import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { useInView } from 'react-intersection-observer'


export default function ContactMe() {
  
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setButtonDisabled(true)

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
          setButtonDisabled(false)
          form.current.reset()
        },
        (error) => {
          alert('FAILED...'+ error);
          // setButton()
        },
      );
  };

  const { ref, inView, entry } = useInView({
      threshold: 0.3
  })

  return (
    <section className='contactMe--section' id='contactMe--section' ref={ref}>
      {/* <h1>Contact Me</h1> */}
      <div className={inView ? 'contactMe--info showHidden' : 'contactMe--info hidden'}>
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
        <div className={inView ? 'contactMe--socials showHidden' : 'contactMe--socials hidden'}>
          <div className='socialBox' onClick={() => window.open('https://www.facebook.com/curlytopszxc', 'fb')}>
            <img className='socialIcon' src="https://drive.google.com/thumbnail?id=1s7p9jof3g20Nz294bzduYnsjmeapbFNH&sz=w1000" alt="fb icon" />
          </div>
          <div className='socialBox' onClick={() => window.open('https://www.instagram.com/jessporteria_/', 'li')}>
            <img className='socialIcon' src="https://drive.google.com/thumbnail?id=1d14UJ3ipouEqya0N0kf9DTEgIj75YNDl&sz=w1000" alt="ig icon" />
          </div>
          <div className='socialBox' onClick={() => window.open('https://www.linkedin.com/in/jessie-porteria', 'li')}>
            <img className='socialIcon' src="https://drive.google.com/thumbnail?id=1sgv3lIhLmHA0LBHW_X1V5GeV14BAUfjY&sz=w1000" alt="linkedin icon" />
          </div>
        </div>
      </div>
      <form className={inView ? 'contactMe--form showHidden' : 'contactMe--form hidden'} ref={form} onSubmit={sendEmail}>
        <p>Leave a message</p>
        <input className='contactMe--name' name='contactMe--name' type="text" placeholder='Name/Organization' required/>
        <input className='contactMe--email' name='contactMe--email' type="email" placeholder='Email Address' required/>
        <input className='contactMe--subject' name='contactMe--subject' type="text" placeholder='Subject' required/>
        <textarea className='contactMe--message' name='contactMe--message' placeholder='Message' required/>
        <button className={buttonDisabled ? 'buttonDisabled' : 'buttonEnabled'}>Send <img src="../src/files/send.png" alt="" height='100%' /></button>
      </form>
    </section>
  )
}
