import { useContext } from 'react'
import { Context } from '../app'

export default function MoreAboutMe() {

  const { aboutBox, setAboutBox } = useContext(Context)
  
  function hideAboutBox(){
    setAboutBox(false)
  }

  return (
    <div className={aboutBox ? 'moreAboutMe--box' : 'hideMoreAboutMe--box'}>
      <button className='moreAboutMe--close' onClick={hideAboutBox}><img src="https://drive.google.com/thumbnail?id=1w1HcCbNpBeXq5-RsqmjF7UeqSb1U_or-&sz=w1000" alt="X" height='20px' /></button>
      <div className="moreAboutMe--withCloseButton">
        <p className='moreAboutMe'>
          During college, I learned a couple of programming languages, including C++, Java, and PHP. 
          I also learned how to build software and web applications from the ground up to deployment. 
          However, after I graduated in 2019, I was struck by reality. I was taught how to code but not how to find a job. 
          I didn't try to apply for an IT role and didn't bother looking for opportunities because 
          I thought it would be hard for me to land a job as a fresh graduate without job experience. 
          Therefore, I applied for a job in the BPO industry (call center) because it was easy to get into. 
          At that moment, I only wanted job experience.
          <br /><br />
          Months went by, and little by little, I forgot the reason I was working—to gain experience. 
          Months turned into years, and I didn't notice that everything I learned in college had already gone and been forgotten.
          <br /><br />
          Five years later, I realized that I was wasting my potential and that there was more 
          I could do besides working in the BPO industry. Therefore, I taught myself how to code again. 
          This time, I self-studied JavaScript and some JavaScript frameworks until I hit the phase where 
          I kept watching tutorials but no longer learned anything new. I know that to grow and learn more, 
          I need to be in a team or organization that will guide me and let me experience real-life programming.
          <br /><br />
          Having said that, I am looking for a role in web development to reignite my career and 
          learn new skills in the field I used to be good at and am passionate about.
        </p>
        <button className='moreAboutMe--closeButton' onClick={hideAboutBox}>Close</button>
      </div>
    </div>
  )
}
