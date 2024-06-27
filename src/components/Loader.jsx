import gsap from "gsap";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    window.addEventListener("load", handleLoad);
    // return () => window.removeEventListener("load", handleLoad);
  }, []);

  const handleLoad = () => {

    // setIsLoading(false);
    gsap.to('.loader',{
        height:"0vh",
        ease:"power1.inOut",
        duration:1
    })
  };

//   if (isLoading) {
    return <div className="loader absolute z-10 h-[10vh]  w-full bg-[#121212] text-[#f5f5f5]  flex items-center justify-center overflow-hidden">Loading...</div>;
//   }

};

export default Loader;
