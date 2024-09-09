import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectDet = ({ details }) => {
    const navigate = useNavigate()
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/singleProject?name="+details.name);
  };
  return (
    <div
      className="relative group/bg  pt-2 sm:w-[30%] h-[19rem] mx-[1%] my-[1%] cursor-pointer "
      onClick={handleClick}
    >
      <div className="absolute blur bg-gradient-to-r from-pink-600 to-purple-600 opacity-25 inset-0  rounded-xl  group-hover/bg:opacity-40 duration-[1000ms] group-hover/bg:duration-200 p-2"></div>

      <div className=" group/img  border rounded-xl border-neutral-700  overflow-hidden relative bg-neutral-900 p-2 w-[99%] h-[99%]">
        <div className="overflow-hidden  rounded-xl">
          <img
            className="  rounded-xl group-hover/img:scale-110 transition-all z-0 duration-300"
            alt="image"
            src={details?.imageLink}
          />
        </div>
        <div className=" px-2 my-2">
          <h1 className="text-xl group-hover/img:text-pink-600 duration-200">
            {details?.name}
          </h1>
          <p className="text-xs my-2">
            {details?.summary} lorem ipsum dolar solat
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDet;
