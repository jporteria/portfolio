import { useState } from "react"

export default function Header() {
  const [menuVisible, setMenuVisible] = useState('hide')
  const [burgerVisible, setBurgerVisible] = useState('burger--bar unclicked')

  function showMenu(){
    if(burgerVisible === 'burger--bar unclicked'){
      setMenuVisible('mobile--menu show')
      setBurgerVisible('burger--bar clicked')
    }else{
      setMenuVisible('mobile--menu hide')
      setBurgerVisible('burger--bar unclicked')
    }
  }

  return (
    <div>
      <div className="header">
          <div className="header--logo">
              Porteria
          </div>
          <div className='burger--menu' onClick={() => showMenu()}>
            <div className={burgerVisible}></div>
            <div className={burgerVisible}></div>
            <div className={burgerVisible}></div>
          </div>
          <nav className="menu">
              <li>About</li>
              <li>Contacts</li>
              <li>Projects</li>
              <li>Skills</li>
          </nav>
      </div>
      <nav className={menuVisible}>
          <div>About</div>
          <div>Contacts</div>
          <div>Projects</div>
          <div>Skills</div>
      </nav>
    </div>
  )
}
