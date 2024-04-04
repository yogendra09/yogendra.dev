import React, { useEffect } from 'react'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap'

const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])
  return (
    <div className='main'>
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default App