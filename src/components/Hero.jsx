import React, { useState } from "react";
import Button from "../components/Button";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="py-28">
      <div className="h-[30vh] lg:h-[50vh]  flex flex-col justify-center">
        <div className="flex justify-start lg:gap-[8vw]">
          <h1 className="text-5xl font-extrabold fira lg:text-[9.5vw]">
            Full-stack
          </h1>
          <div onClick={()=>scrollToSection('projects')} className="hidden lg:flex items-center gap-3 mt-8">
            <Button>Projects</Button>
            <div className=" bg-[#f5f5f5] text-[#121212] rounded-full px-3 py-3">
              <HiArrowLongRight className="text-3xl font-thin" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <h1 className="text-5xl font-extrabold fira mt-2 lg:text-[9.5vw]">
            Developer
          </h1>
        </div>
      </div>

      <div className="text-start lg:relative lg:top-[-22vh] lg:left-[2vh]">
        <p className="opensans w-[75%] lg:w-[27%] lg:text-[2.9vh]">
          My Goal is to write maintainable, clean and understandable code to
          process development was enjoyable.
        </p>
      </div>

      <div onClick={()=>scrollToSection('projects')} className="lg:hidden flex items-center gap-3 mt-8">
      <> <Button>Projects</Button></>
        <div className=" bg-[#f5f5f5] text-[#121212] rounded-full px-3 py-3">
          <HiArrowLongRight className="text-3xl font-thin" />
        </div>
      </div>

      <div className="mt-12 lg:flex lg:items-end lg:justify-center gap-5 lg:relative lg:top-[-12vh]">
        <div className="flex gap-3 ">
          <Link to="https://github.com/yogendra09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
            <FaGithub />
            <h1 className="text-sm">GitHub</h1>
          </Link>
          <Link to="https://www.linkedin.com/in/yogendrasingh09/" target="_blank" rel="noopener noreferrer"  className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
            <FaLinkedinIn />
            <h1 className="text-sm">Linkdin</h1>
          </Link>
        </div>
        <div className="flex gap-3 mt-4 ">
          <div className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
            <FaFacebookF />
            <h1 className="text-sm">Facebook</h1>
          </div>
          <div className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
            <FaInstagram />
            <h1 className="text-sm">Instagram</h1>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <div className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
            <FaTelegramPlane />
            <h1 className="text-sm">Telegram</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
