import React from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="bg-[#121212] text-[#f5f5f5] min-h-screen px-[16px]">
        <div className="h-[30vh]  flex flex-col justify-center">
          <div className="flex justify-start">
            <h1 className="text-5xl font-extrabold fira">Full-stack</h1>
          </div>
          <div className="flex justify-end">
            <h1 className="text-5xl font-extrabold fira mt-2 ">Developer</h1>
          </div>
        </div>

        <div className="text-start">
          <p className="opensans w-[75%]">
            My Goal is to write maintainable, clean and understandable code to
            process development was enjoyable.
          </p>
        </div>

        <div className="flex items-center gap-3 mt-8">
          <Button>Projects</Button>
          <div className=" bg-[#f5f5f5] text-[#121212] rounded-full px-3 py-3">
            <HiArrowLongRight className="text-3xl font-thin" />
          </div>
        </div>

        <div className="mt-12">
          <div className="flex gap-3">
            <div className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
              <FaGithub />
              <h1 className="text-sm">GitHub</h1>
            </div>
            <div className="flex items-center gap-3 border-[1px] border-[#f5f5f5] rounded-full px-6 py-2">
              <FaLinkedinIn />
              <h1 className="text-sm">Linkdin</h1>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
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

        <div className="mt-12">
          <div className="">
            <h1 className="font-medium">.../About me ...</h1>
            <p className="mt-4">Hello, I am Yogendra Singh, a MERN stack developer. As a recent graduate, I am eager to contribute my skills and knowledge to your company.</p>
          </div>
         <div className="flex justify-center mt-8">
         <div className=" h-[60vh] w-[85vw] rounded-3xl overflow-hidden">
              <img className="h-full w-full object-cover grayscale" src="https://images.unsplash.com/photo-1508243771214-6e95d137426b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
         </div>
        </div>

        <div className="">
        <div className="px-6 py-6 bg-[#f5f5f5] text-[#121212] mt-24 rounded-3xl">
           <h1 className="text-lg opacity-80">Front-end</h1>
           <p className="mt-2 pr-12">
            TypeScript / Rect / Vue / Vuex / Redux ToolKit / NextJs / Nuxt / Jest / GraphQl / React Native / Puppeter / Enzyme 
           </p>
        </div>

        <div className="flex items-center">
        <div className="px-6 py-6 mt-8 rounded-3xl border-[1px] border-[#f5f5f5] w-[65%]">
           <h1 className="text-lg opacity-80">Styles</h1>
           <p className="mt-2">
            TypeScript / Rect / Vue / Vuex / Redux ToolKit / NextJs / Nuxt / Jest / GraphQl / React Native / Puppeter / Enzyme 
           </p>
        </div>
        <div className="">
            <FaGithub/>
            <BsArrowUpRight/>
        </div>
        </div>


        </div>
      </div>
    </>
  );
};

export default HomePage;
