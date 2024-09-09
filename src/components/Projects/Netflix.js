import React from "react";
import netflix from "../../Assets/Netflix.png";
import useProject from "../../Hook/useProject";
import { useNavigate } from "react-router-dom";

const Netflix = () => {

  const navigate = useNavigate();
    useProject();
    
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/singleProject?name=" + "ReactFlix");
  }
  return (
    <div
    className={`sm:w-[32%] my-[2%] sm:my-0 w-[90%] h-[32%] mx-auto sm:h-[100%] py-2 border sm:mx-[2%] group rounded-3xl overflow-hidden  hover:scale-110 duration-500`}
    >
      <div>
        <img alt="img" src={netflix} />
      </div>

      <div className="bg-gradient-to-t from-pink-600 pb-[10%] sm:pb-[1%] group-hover:-translate-y-[100%] duration-200">
        <p className="text- bg-black bg-opacity-50 px-[2%] sm:px-[15%] sm:mb-5">
          ReactFlix is a high-performance video streaming platform designed with
          React.js and Redux for a smooth, interactive user experience. It
          offers rapid content loading to keep you engaged without unnecessary
          delays.
        <img
          className=" bg-white rounded-full border-2 mt-10 mb-25 border-stone-800 hover:border-purple-400 opacity-0 group-hover:opacity-80 h-12  w-12  mx-[42%] sm:mx-[35%]  justify-center cursor-pointer"
          src="https://brandeps.com/icon-download/L/Link-icon-vector-01.svg"
          onClick={handleClick}
        />
        </p>
      </div>
    </div>
  );
};

export default Netflix;
