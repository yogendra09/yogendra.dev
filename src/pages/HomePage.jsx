
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import ProjectsPage from "./ProjectsPage";
import Skills from "./Skills";
import About from "./About";
import { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis';
import SplashCursor from "../blocks/Animations/SplashCursor/SplashCursor";

// ... existing imports ...

const HomePage = () => {

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  return (
    <>
    <SplashCursor />
      <Loader />
      <div ref={lenisRef} className="bg-[#121212] text-[#f5f5f5] min-h-screen px-4 md:px-8 lg:px-16 pb-10 ">
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
