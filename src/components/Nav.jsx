import React from "react";
import { IoMenuOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="flex justify-between h-[12vh] items-center px-[12px]">
      <h1 className="text-xl">yogi.dev</h1>
      <div></div>
      <IoMenuOutline className="text-4xl" />
    </div>
  );
};

export default Nav;
