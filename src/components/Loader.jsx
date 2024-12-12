import gsap from "gsap";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Initial animation for content
    gsap.fromTo('.loader-text', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    });

    // Animate dots sequentially
    gsap.to('.loader-dot', {
      y: -10,
      stagger: 0.2,
      repeat: -1,
      yoyo: true,
      duration: 0.4,
      ease: "power2.inOut"
    });

    // Start exit animation after 2 seconds
    const timer = setTimeout(() => {
      gsap.timeline()
        .to('.loader-content', {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in"
        })
        .to('.loader', {
          height: "0vh",
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            setIsLoading(false);
            document.body.style.overflow = 'unset';
          }
        });
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader fixed inset-0 z-[9999] h-screen w-full bg-[#121212] flex items-center justify-center overflow-hidden">
      <div className="loader-content flex flex-col items-center">
        {/* Logo or Brand */}
        <div className="loader-text mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f5]">
          YS
        </div>
        
        {/* Loading dots */}
        <div className="flex gap-2">
          <div className="loader-dot w-3 h-3 rounded-full bg-[#f5f5f5]"></div>
          <div className="loader-dot w-3 h-3 rounded-full bg-[#f5f5f5]"></div>
          <div className="loader-dot w-3 h-3 rounded-full bg-[#f5f5f5]"></div>
        </div>
        
        {/* Loading text */}
        <div className="loader-text mt-4 text-sm md:text-base text-[#f5f5f5]/70 font-light tracking-wider">
          Loading your experience
        </div>
      </div>
    </div>
  );
};

export default Loader;