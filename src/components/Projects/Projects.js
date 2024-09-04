import React from "react";
import Youtube from "./Youtube";
import Netflix from "./Netflix"

const Projects = () => {
  return (
    <div className="text-white flex w-[80%] border mx-auto left-0 right-0 rounded-xl">
      
      <div className="w-[32%] py-2 border mx-[2%]">Youtube </div>
      <div className="w-[32%] py-2 border mx-[2%]">Netflix </div>
      <div className="w-[32%] py-2 border mx-[2%]">project 3</div>
    </div>
  );
};

export default Projects;
