import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <div className="skills mt-24 space-y-8">
          
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
      <div className="px-6 py-8 rounded-3xl border-[1px] border-[#f5f5f5]/40 w-full md:w-[65%] hover:border-[#f5f5f5]/60 transition-colors">
        <h1 className="text-xl md:text-2xl font-semibold">Frontend</h1>
        <p className="mt-4 md:text-lg opacity-80">
          Html / CSS / Reactjs /  Nextjs /  Redux ToolKit / GSAP
        </p>
      </div>
      <Link to='https://github.com/yogendra09' target='_blank' className="flex items-center gap-4 group cursor-pointer">
        <div className="border-[1px] border-[#f5f5f5] p-4 rounded-full group-hover:bg-[#f5f5f5] group-hover:text-[#121212] transition-colors">
          <FaGithub className="text-xl" />
        </div>
        <div className="text-[#121212] bg-[#f5f5f5] p-4 rounded-full group-hover:scale-110 transition-transform">
          <BsArrowUpRight className="text-xl" />
        </div>
      </Link>
    </div>

    <div className="px-6 py-6 text-[#f5f5f5] bg-[#121212] border-[1px] border-[#f5f5f5]/40 mt-12 rounded-3xl w-[90%]">
      <h1 className="text-lg opacity-80">Back-end</h1>
      <p className="mt-2 pr-12">
       Nodejs / ExpressJs / jwt Authentication / Passport Authentication / Nodemailer / Payment Gateway
      </p>
    </div>

    <div className="flex items-center gap-6">
      <p className="w-[30%] text-sm">
        Some of my Favriute technologies, topics or tools i worked with
      </p>
      <div className="px-6 py-6 mt-8 rounded-3xl border-[1px] border-[#f5f5f5]/40 w-[65%]">
        <h1 className="text-lg opacity-80">Styles</h1>
        <p className="mt-2 text-sm">
          CSS / Tailwind CSS / Bootstrap  /
          
        </p>
      </div>
    </div>
  </div>
  )
}

export default Skills