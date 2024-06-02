import Header from './header'
import Home from './components/home'
import AboutMe from './components/aboutMe'
import './styles/app.css'
import './styles/home.css'
import './styles/aboutMe.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/contactMe.css'
import './styles/moreAboutMe.css'
import ParticlesComponent from './components/particles'
import Projects from './components/projects'
import ContactMe from './components/contactMe'
import MoreAboutMe from './components/moreAboutMe'
import { createContext, useState } from 'react'
// import { useInView } from 'react-intersection-observer'

export const Context = createContext<any>({})

export default function App() {

  // const { ref, inView, entry } = useInView({
  //   threshold: 0.5
  // })

  const [aboutBox, setAboutBox] = useState(false)

  return (
    <Context.Provider value={{aboutBox, setAboutBox,}}>
      <div id='app'>
        <ParticlesComponent id='particles' />
        <Header />
        <Home />
        <AboutMe />
        <MoreAboutMe />
        <Projects />
        <ContactMe />
      </div>
    </Context.Provider>
  )
}
