import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <h1>NotFound</h1>
    </div>
  );
};

export default NotFound;
