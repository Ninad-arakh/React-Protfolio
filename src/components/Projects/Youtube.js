import React from "react";
import YouTube from "../../Assets/YouTube.png";
import useProject from "../../Hook/useProject";
import { useNavigate } from "react-router-dom";

const Youtube = () => {

  const navigate = useNavigate()

  useProject();

  const handleClick = () => {
    navigate(`/singleProject?name=ReactTube`)

  }
  return (
    <div
      className={`w-[32%] h-[48vh] py-2 border mx-[2%] group rounded-3xl overflow-hidden cursor-pointer hover:scale-110 duration-500`}
    >
      <div className="">
        <img alt="image" src={YouTube} />
      </div>

      <div className="bg-gradient-to-t from-pink-600 group-hover:-translate-y-[112%] duration-200">
        <p className="text- bg-black bg-opacity-50  px-[15%] mb-5">
          ReactTube is a cutting-edge video streaming platform built with
          React.js and Redux for a seamless user experience. Designed for high
          performance and speed, ReactTube offers fast loading times to keep you
          engaged with minimal wait.
          <img
            className=" bg-white rounded-full border-2 mt-10 mb-25 border-stone-800 hover:border-purple-400 opacity-0 group-hover:opacity-80 h-12  w-12  mx-[10vh]  justify-center shadow-2xl"
            src="https://brandeps.com/icon-download/L/Link-icon-vector-01.svg"
            onClick={handleClick}
          />
        </p>
      </div>
    </div>
  );
};

export default Youtube;
