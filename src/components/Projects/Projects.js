import React from "react";
import Youtube from "./Youtube";
import Netflix from "./Netflix";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="text-white w-[90%] mx-auto left-0 right-0 rounded-xl"
    >
      <h2 className="px-[3%] pb-[2%] text-[35px] ">Recent Projects :</h2>
      <div className="sm:flex h-[100vh] sm:h-[50vh]">
        <Youtube />
        <Netflix />
        <LoginPage />
      </div>
      <div className=" w-[40%] h-[5vh] sm:h-[8vh] p-0 sm:w-[15%] mx-auto my-[2%]">
        <Link to={"/projects"}>
          <button className="w-[100%] h-[100%]  rounded-lg  px-[1%] py-[1%] border border-pink-600 hover:bg-pink-600  text-lg">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
});

export default Projects;
