import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Card from '../components/cards/Card';


const ProjectsPage = () => {

  const projects = [
    {
      tittle:"Gostat",
      skills:["Golang","TypeScript" , "Gin" , "Nextjs" , "PostgrSql" , "Redis"],
      live:"",
      gitHub:""
    }
  ]

  return (
    <div className='py-10 px-4 md:px-8 lg:px-16 bg-[#121212] text-white'>
      <div className='mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold text-center'>.../Projects</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {projects.map((project, index) => (
          <div key={index}>
            <Card project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage