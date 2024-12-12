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
import Hero from "../components/Hero";
import Loader from "../components/Loader";
const HomePage = () => {
  return (
    <>
      <Loader />
      <div className="bg-[#121212] text-[#f5f5f5] min-h-screen px-4 md:px-8 lg:px-16 pb-10 ">
        <Nav />
        <Hero />

        <div className="mt-12 md:mt-24">
          <div className="max-w-3xl">
            <h1 className="font-medium text-2xl md:text-3xl">.../About me</h1>
            <p className="mt-4 text-lg leading-relaxed opacity-85">
              Hello, I am Yogendra Singh, a MERN stack developer. As a recent
              graduate, I am eager to contribute my skills and knowledge to your
              company.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="h-[40vh] md:h-[60vh] w-full md:w-[85vw] rounded-3xl overflow-hidden transition-transform hover:scale-[1.02]">
              <img
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://images.unsplash.com/photo-1508243771214-6e95d137426b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-8">
          <div className="px-6 py-8 bg-[#f5f5f5] text-[#121212] rounded-3xl hover:scale-[1.01] transition-transform">
            <h1 className="text-xl md:text-2xl font-semibold">Front-end</h1>
            <p className="mt-4 md:text-lg opacity-80">
              TypeScript / React / Redux Toolkit / NextJs / GraphQL / React Native / Jest / Enzyme
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="px-6 py-8 rounded-3xl border-[1px] border-[#f5f5f5]/40 w-full md:w-[65%] hover:border-[#f5f5f5]/60 transition-colors">
              <h1 className="text-xl md:text-2xl font-semibold">Styles</h1>
              <p className="mt-4 md:text-lg opacity-80">
                Tailwind CSS / SCSS / Styled Components / Material UI / Chakra UI
              </p>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="border-[1px] border-[#f5f5f5] p-4 rounded-full group-hover:bg-[#f5f5f5] group-hover:text-[#121212] transition-colors">
                <FaGithub className="text-xl" />
              </div>
              <div className="text-[#121212] bg-[#f5f5f5] p-4 rounded-full group-hover:scale-110 transition-transform">
                <BsArrowUpRight className="text-xl" />
              </div>
            </div>
          </div>

          <div className="px-6 py-6 text-[#f5f5f5] bg-[#121212] border-[1px] border-[#f5f5f5]/40 mt-12 rounded-3xl w-[90%]">
            <h1 className="text-lg opacity-80">Back-end</h1>
            <p className="mt-2 pr-12">
              TypeScript / Rect / Vue / Vuex / Redux ToolKit / NextJs / Nuxt /
              Jest / GraphQl / React Native / Puppeter / Enzyme
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="w-[30%] text-sm">
              Some of my Favriute technologies, topics or tools i worked with
            </p>
            <div className="px-6 py-6 mt-8 rounded-3xl border-[1px] border-[#f5f5f5]/40 w-[65%]">
              <h1 className="text-lg opacity-80">Styles</h1>
              <p className="mt-2 text-sm">
                TypeScript / Rect / Vue / Vuex / Redux ToolKit / NextJs / Nuxt /
                Jest / GraphQl / React Native / Puppeter / Enzyme
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-32 border-t border-[#f5f5f5]/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
              <p className="opacity-70 mb-8">Ready to turn ideas into reality? Let's create something amazing together.</p>
              <button className="flex items-center gap-2 bg-[#f5f5f5] text-[#121212] px-6 py-3 rounded-full hover:scale-105 transition-transform">
                Contact Me <HiArrowLongRight />
              </button>
            </div>
            
            <div>
              <h3 className="text-xl mb-6">Social Links</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 border border-[#f5f5f5]/20 rounded-full hover:bg-[#f5f5f5] hover:text-[#121212] transition-colors">
                  <FaGithub />
                </a>
                <a href="#" className="p-3 border border-[#f5f5f5]/20 rounded-full hover:bg-[#f5f5f5] hover:text-[#121212] transition-colors">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="p-3 border border-[#f5f5f5]/20 rounded-full hover:bg-[#f5f5f5] hover:text-[#121212] transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="p-3 border border-[#f5f5f5]/20 rounded-full hover:bg-[#f5f5f5] hover:text-[#121212] transition-colors">
                  <FaTelegramPlane />
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xl mb-6">Newsletter</h3>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-transparent border border-[#f5f5f5]/20 rounded-full px-6 py-3 flex-1 focus:outline-none focus:border-[#f5f5f5]"
                />
                <button className="bg-[#f5f5f5] text-[#121212] px-6 py-3 rounded-full hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#f5f5f5]/10 text-center opacity-60">
            <p>© 2024 Yogendra Singh. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
