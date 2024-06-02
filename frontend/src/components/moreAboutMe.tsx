import { useContext } from 'react'
import { Context } from '../app'

export default function MoreAboutMe() {

  const { aboutBox, setAboutBox } = useContext(Context)
  
  function hideAboutBox(){
    setAboutBox(false)
  }

  return (
    <div className={aboutBox ? 'moreAboutMe--box' : 'hideMoreAboutMe--box'}>
      <button className='moreAboutMe--close' onClick={hideAboutBox}>x</button>
      hello
    </div>
  )
}
