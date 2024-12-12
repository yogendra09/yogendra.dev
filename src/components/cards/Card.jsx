import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Card = ({project}) => {
  return (
    <div className='group relative overflow-hidden rounded-2xl bg-[#1a1a1a] hover:bg-[#222222] transition-all duration-300 p-4 md:p-6 lg:p-8'>
      {/* Image Container */}
      <div className='aspect-video overflow-hidden rounded-xl'>
        <img 
          src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt={project.tittle}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>

      {/* Content Container */}
      <div className='py-6 space-y-4'>
        <h1 className='text-2xl md:text-3xl font-semibold tracking-tight'>
          {project.tittle}
        </h1>
        
        {/* Skills Container */}
        <div className='flex flex-wrap gap-2'>
          {project.skills.map((skill, index) => (
            <span 
              key={index} 
              className='border border-[#f5f5f5]/20 bg-[#2a2a2a] px-3 py-1.5 text-sm 
                       rounded-full font-medium tracking-wide hover:border-[#f5f5f5]/40 
                       transition-colors duration-300'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Links Container */}
      <div className='flex items-center gap-4'>
        <Link 
          to={project.gitHub}
          className='p-3 border border-[#f5f5f5]/20 rounded-full 
                     hover:bg-[#f5f5f5] hover:text-[#121212] 
                     transition-colors duration-300'
        >
          <FaGithub className='text-xl' />
        </Link>
        
        <Link 
          to={project.live}
          className='flex items-center gap-2 bg-[#f5f5f5] text-[#121212] 
                     px-6 py-3 rounded-full font-medium
                     hover:scale-105 transition-transform duration-300'
        >
          Live Demo 
          <BsArrowUpRight className='text-sm' />
        </Link>
      </div>
    </div>
  )
}

export default Card