import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[400px] w-full bg-cover bg-no-repeat mix-blend-mode: darken flex items-center justify-center   rounded-lg sm:bg-center md:h-[700px] mt-10"
      style={{ backgroundImage: "url(/img/cover.png)" }}
    >
      <div className="text-gray-200 text-center bg-[#0000004c] md:h-full md:w-full md:flex md:items-center md:justify-center md:flex-col">
        <h1 className="text-2xl md:text-4xl">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <br />
        <p className="text-gray-400 md:w-2/3 mx-auto text-center">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <br />
        <span>
          <button className="btn bg-green-500 font-bold hover:btn mr-2">
            Explore Now
          </button>
          <button className="btn bg-transparent font-bold text-white hover:bg-green-500 ml-2">
            Our Feedback
          </button>
        </span>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Banner;
