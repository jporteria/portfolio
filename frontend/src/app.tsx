import { useEffect, useState } from 'react'
import Header from './header'
import Intro from './intro'
import Skills from './skills'
import './styles/app.css'
import About from './about'
import { useInView } from 'react-intersection-observer'

export default function App() {
  // const { ref, inView, entry } = useInView({
  //   threshold: 0.5
  // })
  // // const hiddenElements = document.querySelectorAll('sections')
  // console.log(entry)
  // if(entry?.isIntersecting){
  //   console.log('hello')
  // }

  return (
    <div>
      <Header />
      <Intro />
      <Skills />
      <About />
    </div>
  )
}
