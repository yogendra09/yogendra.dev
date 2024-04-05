import React, { useEffect } from 'react'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap'
import Projects from './components/Projects';

const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])
  return (
    <div className='main'>
      <LandingPage/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App