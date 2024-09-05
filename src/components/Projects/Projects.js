import React from "react";
import Youtube from "./Youtube";
import Netflix from "./Netflix";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="text-white  w-[80%] mx-auto left-0 right-0 rounded-xl">
      <div className="flex ">
        <Youtube />
        <Netflix />
        <LoginPage />
      </div>
      <Link to={"/projects"}>
        <button
          className="w-[16%] rounded-lg mx-[42%] px-[2%] py-[1%] border border-pink-600 hover:bg-pink-600 mt-[4%] text-lg"
        >
          Show More
        </button>
      </Link>
    </div>
  );
};

export default Projects;
