import React, { useRef } from "react";
import Nav from "./Nav";
import PhoneMenu from "./PhoneMenu";

const LandingPage = () => {
  const phoneMenuNav = useRef(null);

  return (
    <>
      <PhoneMenu phoneMenuNav={phoneMenuNav} />
      <div className="h-screen w-full bg-red-300">
        <Nav phoneMenuNav={phoneMenuNav} />
        <div className="h-[100vh] bg-slate-100 w-full flex items-center justify-center">
          <div className="">
            <img src="" alt="" />
          </div>
          <div>
            <h1 className='bubble-text text text-7xl font-semibold font-["gilroy"] text-center'>Software Devloper</h1>
            <h1 className='text-5xl font-bold font-["gilroy"] w-[40vw] text-center'>
              Building digital products, brands, and expreince.
            </h1>

          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
