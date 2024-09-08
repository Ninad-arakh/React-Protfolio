import React from "react";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const scrollToElement = (elementId) => {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
  };
  const handleOnClick = (value) => {
    navigate("/");
  };
  return (
    <div className=" w-full flex justify-between fixed bg-opacity-60 backdrop-blur-sm ">
      <div className="w-[8%] pt-[1%] ml-[10%] self-center">
        <img alt="logo" src={logo} className="  " />
      </div>

      <div className="text-white mr-[9%]  self-center">
        <li className="flex justify-center text-center ">
          <ul
            className=" px-[8%] cursor-pointer  group relative   "
            onClick={() => handleOnClick("Home")}
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
          </ul>
          <ul
            className=" px-[8%] cursor-pointer group relative   "
            onClick={() => handleOnClick("About")}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
          </ul>
          <ul
            className=" px-[8%] cursor-pointer group relative   "
            onClick={() => handleOnClick("Projects")}
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
          </ul>

          <ul
            className=" px-[8%] cursor-pointer group relative   "
            onClick={() => handleOnClick("Contact")}
          >
            Contact_Me
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Header;
