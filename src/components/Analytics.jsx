import React from "react";
import laptop from "../images/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-8">
      <div className="max-w-[1240px] grid md:grid-cols-2">
        <img className="w-[500px]  mx-auto" src={laptop} alt="/" />
        <div className="flex flex-col justify-center mx-auto">
          <p className="text-[#0] uppercase font-bold">
            Data analytics illustration.
          </p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Incorporate AI into data analytics
          </h1>
          <p className="py-1">
            AI is widely used in product recommendation systems. These are
            systems that suggest products or information to users based on
            special data analysis methods. If you are an online shopper, you see
            many product recommendations in a day.
          </p>
          <button className="bg-[#000300] w-[200px] justify-center my-12 mx-auto md:mx-0 text-[#ff4c68] py-2 font-medium rounded-md hover:text-[#fff] capitalize">
            get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
