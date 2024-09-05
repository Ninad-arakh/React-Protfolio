import React from "react";
import logo from "../Assets/logo.png";

const Header = () => {
  const handleOnClick = (value) => {};
  return (
    <div className="bg-neutral-950 w-full flex justify-between fixed bg-opacity-60 backdrop-blur-sm ">
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
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
          </ul>
          <ul
            className=" px-[8%] cursor-pointer group relative   "
            onClick={() => handleOnClick("About")}
          >
            About
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
          </ul>
          <ul
            className=" px-[8%] cursor-pointer group relative   "
            onClick={() => handleOnClick("Projects")}
          >
            Projects
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
          </ul>

          <ul
            className=" px-[8%] cursor-pointer group relative   "
            onClick={() => handleOnClick("Contact")}
          >
            Contact_Me
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Header;
