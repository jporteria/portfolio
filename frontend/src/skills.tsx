import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  
  const { ref, inView, entry } = useInView({
    threshold: 0.8
  })
  // const hiddenElements = document.querySelectorAll('sections')
  console.log(entry)
  if(entry?.isIntersecting){
    console.log('hello')
  }

  return (
    <div className='skills--section' ref={ref}>
      <h1 className={inView ? 'sections show' : 'sections'}>skills</h1>
    </div>
  )
}
