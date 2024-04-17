import Header from './header'
import Intro from './intro'
import Skills from './skills'
import './styles/app.css'
import About from './about'

export default function App() {

  return (
    <div id='app'>
      <Header />
      <Intro />
      <Skills />
      <About />
    </div>
  )
}
