import React from "react";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div className="h-screen w-full bg-slate-300 px-[5vh] ">
     <div className="cont flex gap-[5vh] overflow-x-auto">
      
     <SkillCard skill="HTM L" />
     <SkillCard skill="CSS" />
     <SkillCard skill="javaScript" />
     <SkillCard skill="GSAP" />
     
     </div>
     <div className="cont flex gap-[5vh] overflow-x-auto  mt-[5vh]">
     <SkillCard skill="NodeJs" />
     <SkillCard skill="ReactJs" />
     <SkillCard skill="NextJs" />
     <SkillCard skill="GitHub" />
   
     </div>
    </div>
  );
};

export default Skill;
