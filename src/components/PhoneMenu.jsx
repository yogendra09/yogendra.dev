import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { IoCloseOutline } from "react-icons/io5";

const PhoneMenu = ({phoneMenuNav}) => {
  const container = useRef(null);
  useEffect(()=>{
      console.log([...container.current.childNodes])
  },[])
  return (
    <div ref={phoneMenuNav} className='lg:hidden hidden overflow-hidden absolute h-0 w-full bg-white '>
     <div className='h-full flex flex-col items-center justify-center'>
     <div ref={container} className="nav-p2 flex flex-col items-center gap-10 lg:flex">
        {["Resume", "Skills", "Projects", "About"].map((elem, i) => {
          return i == 0 ? (
            <a key={i} href="" className='text-2xl ' download>
              {elem}
            </a> 
          ) : (
            <h5  key={i} className="text-2xl ">
            {elem}
          </h5>
          );
        })}
      </div>
     <div className='mt-10'>
     <IoCloseOutline onClick={()=>{
      var timeline = gsap.timeline();
      timeline
      .to(phoneMenuNav.current,{
        height: "0vh",
        display:"none",
        duration:'1.2'
      })
     }} className='text-7xl' />
     </div>
     
     </div>
      </div>
  )
}

export default PhoneMenu