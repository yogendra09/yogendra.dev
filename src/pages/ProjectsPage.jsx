import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Card from '../components/cards/Card';


const ProjectsPage = () => {

  const projects = [
    {
      
      image:"https://plus.unsplash.com/premium_photo-1720448972781-91b85867c099?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tittle:"Chat App",
      skills:["ejs","javaScript" , "NodeJs" , "Mongodb" , "Github" ,"Passport Authentication","vercel", ],
      live:"",
      gitHub:""
    },
    {
      image:"https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tittle:"Hirer",
      skills:["Reactjs", "Nodejs" , "Mongodb" , "JWT Authentication" , "ExpressJs" , "GitHub" ,"Vercel"],
      live:"",
      gitHub:""
    },  
    {
      image:"https://plus.unsplash.com/premium_photo-1720589103335-43589b70bd20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tittle:"Learnify",
      skills:["Reactjs", "Nodejs" , "Mongodb" , "JWT Authentication" , "ExpressJs" , "GitHub" ,"Vercel"],
      live:"",
      gitHub:""
    },
  ]

  return (
    <div className='pt-20 px-4 md:px-8 lg:px-16 bg-[#121212] text-white'>
      <div className='mb-12'>
        <h1 className='text-3xl md:text-4xl font-semibold text-center'>.../Projects</h1>
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