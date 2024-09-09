import React from "react";
import YouTube from "../../Assets/YouTube.png";
import useProject from "../../Hook/useProject";
import { useNavigate } from "react-router-dom";

const Youtube = () => {
  const navigate = useNavigate();

  useProject();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/singleProject?name=ReactTube`);
  };
  return (
    <div
      className={`sm:w-[32%] w-[90%] my-[2%] sm:my-0 h-[32%] mx-auto sm:h-[100%] py-2 border sm:mx-[2%] group rounded-3xl overflow-hidden  hover:scale-110 duration-500`}
    >
      <div className="">
        <img alt="image" src={YouTube} />
      </div>

      <div className="bg-gradient-to-t from-pink-600 pb-[10%] sm:pb-[1%] group-hover:-translate-y-[100%] duration-200">
        <p className="text- bg-black bg-opacity-50 px-[2%] sm:px-[15%] sm:mb-5">
          ReactTube is a cutting-edge video streaming platform built with
          React.js and Redux for a seamless user experience. Designed for high
          performance and speed, ReactTube offers fast loading times to keep you
          engaged with minimal wait.
          <img
            className=" bg-white rounded-full border-2 mt-8 b-2 mb-25 border-stone-800 hover:border-purple-400 opacity-0 group-hover:opacity-80 h-12 group-hover:-translate-y-1  w-12  mx-[42%] sm:mx-[35%] justify-center shadow-2xl cursor-pointer"
            src="https://brandeps.com/icon-download/L/Link-icon-vector-01.svg"
            onClick={handleClick}
          />
        </p>
      </div>
    </div>
  );
};

export default Youtube;
