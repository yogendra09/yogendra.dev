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
      <div className="bg-[#121212] text-[#f5f5f5] min-h-screen px-[16px] pb-10">
        <Nav />
        <Hero />

        <div className="mt-12">
          <div className="">
            <h1 className="font-medium">.../About me ...</h1>
            <p className="mt-4">
              Hello, I am Yogendra Singh, a MERN stack developer. As a recent
              graduate, I am eager to contribute my skills and knowledge to your
              company.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <div className=" h-[60vh] w-[85vw] rounded-3xl overflow-hidden">
              <img
                className="h-full w-full object-cover grayscale"
                src="https://images.unsplash.com/photo-1508243771214-6e95d137426b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="px-6 py-6 bg-[#f5f5f5] text-[#121212] mt-24 rounded-3xl">
            <h1 className="text-lg opacity-80">Front-end</h1>
            <p className="mt-2 pr-12">
              TypeScript / Rect / Vuex / Redux ToolKit / NextJs / Nuxt / Jest /
              GraphQl / React Native / Puppeter / Enzyme
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="px-6 py-6 mt-8 rounded-3xl border-[1px] border-[#f5f5f5]/40 w-[65%]">
              <h1 className="text-lg opacity-80">Styles</h1>
              <p className="mt-2">
                TypeScript / Rect / Vue / Vuex / Redux ToolKit / NextJs / Nuxt /
                Jest / GraphQl / React Native / Puppeter / Enzyme
              </p>
            </div>
            <div className="relative flex items-center">
              <div className="border-[1px] border-[#f5f5f5] px-4 py-4 rounded-full ">
                <FaGithub />
              </div>
              <div className="relative left-[-20px] text-[#121212] bg-[#f5f5f5] px-4 py-4 rounded-full ">
                <BsArrowUpRight />
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
      </div>
    </>
  );
};

export default HomePage;
