import React, { useEffect } from 'react'
import gsap from "gsap"
const Loader = () => {
  useEffect(()=>{
    gsap.to(".loader",{
      height:"0vh",
      duration:1.5,
      delay:2,
      ease:"bounce"
    })
  },[])
  return (
    <div className='loader absolute z-[100] h-[100vh] w-full bg-indigo-700'>
      
    </div>
  )
}

export default Loader