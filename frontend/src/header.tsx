import { useContext, useState } from "react"
import { Context } from "./app"

export default function Header() {
  const [menuVisible, setMenuVisible] = useState('menu hide')
  const [burgerVisible, setBurgerVisible] = useState('burger--bar unclicked')
  const [header, setHeader] = useState(false)

  function showMenu(){
    if(burgerVisible === 'burger--bar unclicked'){
      setMenuVisible('menu show')
      setBurgerVisible('burger--bar clicked')
    }else{
      setMenuVisible('menu hide')
      setBurgerVisible('burger--bar unclicked')
    }
  }

  function changeHeader(){
    if(window.scrollY > 0){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }

  //Scroll event listeners

  const sections = document.querySelectorAll('section')
  const navMenu = document.querySelectorAll('a')
  let currentSection = 'home'
  
  window.addEventListener('scroll', changeHeader)
  window.addEventListener('scroll', () => {

    sections.forEach(sec => {
      if(scrollY >= sec.offsetTop - 500){
        currentSection = sec.id 
      }
    })
    navMenu.forEach(menu => {
      
      if(menu.href.includes(currentSection)){
        menu.classList.add('nav--active')
      }else{
        menu.classList.remove('nav--active')
      }
    })
  });
  


  return (
    <div id="header" className={header ? 'header active' : 'header'}>
          <div className="logo">
              <h1 className="JPorteria">JPorteria.Dev</h1>
          </div>
          <div className="header--menu">
            <div className="burger--menu" onClick={() => showMenu()}>
              <div className={burgerVisible}></div>
              <div className={burgerVisible}></div>
              <div className={burgerVisible}></div>
            </div>
            <div className={menuVisible}>
                <a href="#home">Home</a>
                <a href="#aboutMe--section">About Me</a>
                <a href="#projects--section">Projects</a>
                <a href="#contactMe--section">Contacts</a>
            </div>
          </div>

      {/* <nav className={menuVisible}>
          <div>About</div>
          <div>Contacts</div>
          <div>Projects</div>
          <div>Skills</div>
      </nav> */}
    </div>
  )
}
