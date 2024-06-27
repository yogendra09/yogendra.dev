import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectsPage = () => {
  return (
    <div className='py-10 px-10'>
      <div className=''>
        <h1 className='text-lg text-center'>.../Projects ...</h1>
      </div>

      <div className='py-10'>
        <div className=''>
           <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='py-8'>
           <h1>Gostat</h1>
           <div className='py-4 flex flex-wrap gap-4'>
               <span className='border-[1px] border-[#f5f5f5]/50 px-2 py-1 text-sm font-thin fira rounded-2xl'>Golang</span>
               <span className='border-[1px] border-[#f5f5f5]/50 px-2 py-1 text-sm font-thin fira rounded-2xl'>TypeScript</span>
               <span className='border-[1px] border-[#f5f5f5]/50 px-2 py-1 text-sm font-thin fira rounded-2xl'>Gin</span>
               <span className='border-[1px] border-[#f5f5f5]/50 px-2 py-1 text-sm font-thin fira rounded-2xl'>Nextjs</span>
               <span className='border-[1px] border-[#f5f5f5]/50 px-2 py-1 text-sm font-thin fira rounded-2xl'>PostgrSql</span>
               <span className='border-[1px] border-[#f5f5f5]/50 px-2 py-1 text-sm font-thin fira rounded-2xl'>Redis</span>
           </div>
        </div>

        <div className='flex gap-2 items-center'>
          <FaGithub className='text-3xl' />
         <span className='border-[1px] border-[#f5f5f5]/60 px-4 py-1 rounded-2xl flex gap-2 items-center'>Live <BsArrowUpRight className='text-sm mt-1'/> </span>
        </div>
      </div>

    </div>
  )
}

export default ProjectsPage