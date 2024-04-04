import React from 'react'

const Footer = () => {
  return (
    <div className='h-screen flex flex-col lg:flex lg:flex-row  w-full bg-slate-900 text-center'>
         <div className='w-[100%] lg:w-1/2 h-screen bg-red-400'>
          
         </div>
         <div className='w-[100%] lg:w-1/2 h-screen bg-white' >
          <h1 className='text-2xl font-semibold'>yogendra.dev</h1>
          <div className='flex flex-col items-center mt-[2vh]'>
          {["Resume", "Skills", "Projects", "About"].map((elem, i) => {
          return i==0 ? (
            <a href="" download className='text-xl'>
              {elem}
            </a>
          ) : (
             <h5 key={i} className="text-xl">
             {elem}
           </h5>
          );
        })}
          </div>
          <div>

          </div>
         </div>
    </div>
  )
}

export default Footer