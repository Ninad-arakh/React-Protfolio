import React from "react";
import Youtube from "./Youtube";
import Netflix from "./Netflix";
import { Link } from "react-router-dom";
import TenFlex from "./TenFlex";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="text-white w-[90%] mx-auto left-0 right-0 rounded-xl"
    >
      <h2 className="px-[3%] pb-[2%] text-[35px] ">Recent Projects :</h2>
      <div className="sm:flex h-[100vh] sm:h-[50vh]">
        <TenFlex />
        <Netflix />
        <Youtube />
      </div>
      <div className=" w-[40%] h-[5vh] sm:h-[8vh] p-0 sm:w-[15%] mx-auto my-[2%]">
        <Link to={"/projects"}>
          {/* <button className="w-[100%] h-[100%]  rounded-lg  px-[1%] py-[1%] border border-pink-600 hover:bg-pink-600  text-lg">
            Show More
          </button> */}
          <button className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-pink-500 opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-pink-500 opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white  transition-colors duration-200 ease-in-out group-hover:text-white">
              Show More
            </span>
            <span className="absolute inset-0 border-2 border-pink-500 rounded-full"></span>
          </button>
        </Link>
      </div>
    </div>
  );
});

export default Projects;
