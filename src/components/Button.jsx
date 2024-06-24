import React from "react";

const Button = ({ children }) => {
  return (
    <div className="bg-[#f5f5f5] text-[#121212] font-normal text-lg px-16 py-3 rounded-full">
      {children}
    </div>
  );
};

export default Button;
