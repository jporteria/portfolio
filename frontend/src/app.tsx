import Header from './header'
import Home from './components/home'
import AboutMe from './components/aboutMe'
import './styles/app.css'
import './styles/home.css'
import './styles/aboutMe.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/contactMe.css'
import ParticlesComponent from './components/particles'
import Skills from './components/skills'
import Projects from './components/projects'
import ContactMe from './components/contactMe'
// import { useInView } from 'react-intersection-observer'

export default function App() {

  // const { ref, inView, entry } = useInView({
  //   threshold: 0.5
  // })
  // if(entry?.isIntersecting){
  //   console.log('home page showing')
  // }

  return (
    <div id='app'>
      <ParticlesComponent id='particles' />
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  )
}
