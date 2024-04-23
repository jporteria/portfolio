import Header from './header'
import Home from './components/home'
import AboutMe from './components/aboutMe'
import './styles/app.css'
import './styles/home.css'
import './styles/aboutMe.css'
import './styles/skills.css'
import ParticlesComponent from './components/particles'
import Attributes from './components/Attributes'
import Skills from './components/skills'

export default function App() {

  return (
    <div id='app'>
      <ParticlesComponent id='particles' />
      <Header />
      <Home />
      <AboutMe />
      <Skills />
    </div>
  )
}
