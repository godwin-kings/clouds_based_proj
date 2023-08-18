import React from "react";

const Newsletter = () => {
  return (
    <div className="my-8 py-20 text-white w-full px-8">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4 ">
          <input
            className="p-3 flex w-full rounded-md text-black flex-col sm:flex-row justify-center item-center"
            type="email"
            name=""
            id=""
            placeholder="Enter Email"
          />
          <button className="bg-[#ff4c68] text-white py-2 rounded-md font-medium ml-4 my-6 w-[200px] ">
            Notify Me
          </button>
          <p>We care about the protection of your data. Read our
            <span className="p-1 text-[#ff4c68] underline"><a href="/">Privacy policy</a></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
