import React, { useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import gsap from "gsap";
const Nav = ({ phoneMenuNav }) => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <div className="fixed z-50 h-[10vh] w-full flex justify-between items-center p-6 backdrop-blur-sm ">
      <div>
        <h3 className="text-xl">Yogendra.dev</h3>
      </div>
      <div className="nav-p2 hidden items-center gap-10 lg:flex">
        {["Resume", "Skills", "Projects", "About"].map((elem, i) => {
          return i === 0 ? (
            <a key={i} href="./src/assets/react.svg" download>
              {elem}
            </a>
          ) : (
            <h5 key={i} className="text-sm">
              {elem}
            </h5>
          );
        })}
      </div>
      <div className="nav-btn">
        <button className="text-sm hidden lg:flex bg-gray-300 rounded-lg px-[8.5px] py-1 text-white">Contact Me</button>
        <IoIosMenu
          onClick={() => {
            var timeline = gsap.timeline();
            timeline.to(phoneMenuNav.current, {
              display: "initial",
              height: "100vh",
              duration: "1",
            });
          }}
          className="initial  lg:hidden text-2xl"
        />
      </div>
    </div>
  );
};

export default Nav;
