
export default function ContactMe() {
  
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
      <div className='contactMe--form'>
        <p>Leave a message</p>
        <input className='contactMe--name' type="text" placeholder='Name/Organization' />
        <input className='contactMe--email' type="email" placeholder='Email Address'/>
        <input className='contactMe--subject' type="text" placeholder='Subject'/>
        <textarea className='contactMe--message' placeholder='Message'/>
        <button className='submit'>Send <img src="../src/files/send.png" alt="" height='100%' /></button>
      </div>
    </section>
  )
}
