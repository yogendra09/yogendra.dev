import Nav from "../components/Nav";

import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import ProjectsPage from "./ProjectsPage";
import Skills from "./Skills";
import About from "./About";
// ... existing imports ...

const HomePage = () => {
  return (
    <>
      <Loader />
      <div className="bg-[#121212] text-[#f5f5f5] min-h-screen px-4 md:px-8 lg:px-16 pb-10 ">
        <Hero />
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><ProjectsPage /></div>
        <div id="contact"><Footer /></div>
      </div>
    </>
  );
};

// ... existing exports ...

export default HomePage;
