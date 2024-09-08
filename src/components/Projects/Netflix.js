import React from "react";
import netflix from "../../Assets/Netflix.png";
import useProject from "../../Hook/useProject";
import { useNavigate } from "react-router-dom";

const Netflix = () => {

  const navigate = useNavigate();
    useProject();
    
  const handleClick = () => {
    navigate("/singleProject?name=" + "ReactFlix");
  }
  return (
    <div
      className={`w-[32%] h-[48vh] py-2 border mx-[2%] group rounded-3xl overflow-hidden  hover:scale-110 duration-500`}
    >
      <div>
        <img alt="img" src={netflix} />
      </div>

      <div className="bg-gradient-to-t from-pink-600 group-hover:-translate-y-[115%] duration-200">
        <p className="text-sm bg-black bg-opacity-50  px-[20%] mb-5">
          ReactFlix is a high-performance video streaming platform designed with
          React.js and Redux for a smooth, interactive user experience. It
          offers rapid content loading to keep you engaged without unnecessary
          delays.
        <img
          className=" bg-white rounded-full border-2 mt-10 mb-25 border-stone-800 hover:border-purple-400 opacity-0 group-hover:opacity-80 h-12  w-12  mx-[10vh]  justify-center cursor-pointer"
          src="https://brandeps.com/icon-download/L/Link-icon-vector-01.svg"
          onClick={handleClick}
        />
        </p>
      </div>
    </div>
  );
};

export default Netflix;
