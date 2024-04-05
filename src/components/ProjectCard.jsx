import React from 'react'

const ProjectCard = ({height,width}) => {
  return (
    <div className=' w-[60%] rounded-3xl overflow-hidden lg:h-[60vh]' style={{height:height,width:width}}>
           <img data-scroll data-scroll-speed="0.3" src="https://abhishekjha.me/aeizei.7edf201c.png" alt="" className='h-[130%] w-[130%] object-cover rounded-3xl' />
    </div>
  )
}

export default ProjectCard