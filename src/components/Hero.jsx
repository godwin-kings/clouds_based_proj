import React from "react";
import Typed from 'react-typed';



const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[840px] mt-[-90px] w-full h-screen px-2 mx-auto text-center justify-center flex flex-col">
        <p className="uppercase mt-1 p-1 font-bold text-[#ff4c68]">
          optimize with cloud computing
        </p>

        <h1 className="md:text-6xl sm:text-5xl text-3xl md:py-7 sm:py-6 py-5 font-bold tracking-wide">
          Compute Data With
        </h1>

        <div className="md:text-2xl font-bold flex justify-center item-center sm:text-3l">
          <h2 className="capitalize pr-1 md:text-3xl sm:text-2xl text-1xl">
            software, platform, infrastructure 
          </h2>
          <Typed className="capitalize text-[#f7e438cf] md:text-3xl sm:text-2xl justify-end text-1xl" strings={[' sass',' paas',' iass']} typeSpeed={120} backSpeed={100} loop/>
        </div>
        <p className="py-4 md:text-3xl text-xl text-stone-500 " >Optimize cloud storage with private, public, hybrid and muilticlouds services</p>
        <button className="bg-[#ff4c68] w-[200px] hover:text-[#fff] bg- rounded-md font-medium my-6 mx-auto py-2 text-black">Get started</button>
      </div>
    </div>
  );
};

export default Hero;
