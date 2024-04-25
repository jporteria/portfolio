import { useState } from "react"

export default function Header() {
  const [menuVisible, setMenuVisible] = useState('menu hide')
  const [burgerVisible, setBurgerVisible] = useState('burger--bar unclicked')

  function showMenu(){
    if(burgerVisible === 'burger--bar unclicked'){
      setMenuVisible('menu show')
      setBurgerVisible('burger--bar clicked')
    }else{
      setMenuVisible('menu hide')
      setBurgerVisible('burger--bar unclicked')
    }
  }

  return (
    <div className="header">
          <div className="logo">
              logo
          </div>
          <div className='burger--menu' onClick={() => showMenu()}>
            <div className={burgerVisible}></div>
            <div className={burgerVisible}></div>
            <div className={burgerVisible}></div>
          </div>
          <nav className={menuVisible}>
              <li>Home</li>
              <li>About Me</li>
              <li>Projects</li>
              <li>Contacts</li>
          </nav>

      {/* <nav className={menuVisible}>
          <div>About</div>
          <div>Contacts</div>
          <div>Projects</div>
          <div>Skills</div>
      </nav> */}
    </div>
  )
}
