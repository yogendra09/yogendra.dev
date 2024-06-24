import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between h-[12vh] items-center px-[12px] text-[#f5f5f5]">
      <h1 className="text-xl">yogi.dev</h1>
      <div className="lg:flex hidden lg:gap-12">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <IoMenuOutline className="text-4xl" />
    </div>
  );
};

export default Nav;
