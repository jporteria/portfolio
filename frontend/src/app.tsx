import Header from './header'
import Home from './components/home'
import AboutMe from './components/aboutMe'
import Skills from './skills'
import './styles/app.css'
import './styles/home.css'
import './styles/aboutMe.css'
import About from './about'
import ParticlesComponent from './components/particles'

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
