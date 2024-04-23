import React, { useEffect } from 'react'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap'
import Projects from './components/Projects';
import Skill from './components/Skill';
import Loader from './components/Loader';

const App = () => {
  

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
  }, [])
  return (
    <div className='main'>
      <Loader/>
      <LandingPage/>
      <Skill />
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App