import React from "react";
import logo from "../Assets/logo.png";

const Header = () => {
  const handleOnClick = (value) => {
    console.log(value, "clicked!!!!");
  };
  return (
    <div className="bg-neutral-950 w-full flex justify-between fixed bg-opacity-90 ">
      <div className="w-[8%] pt-[1%] ml-[10%] self-center">
        <img alt="logo" src={logo} className="  " />
      </div>

      <div className="text-white mr-[15%]  self-center">
        <li className="flex justify-center text-center ">
          <ul
            className=" px-[8%] hover:cursor-pointer duration-500 hover:text-red-400  "
            onClick={() =>handleOnClick("Home")}
          >
            Home
          </ul>
          <ul
            className=" px-[8%] hover:cursor-pointer duration-500 hover:text-red-400  "
            onClick={() =>handleOnClick("About")}
          >
            About
          </ul>
          <ul
            className=" px-[8%] hover:cursor-pointer duration-500 hover:text-red-400  "
            onClick={() =>handleOnClick("Projects")}
          >
            Projects
          </ul>
          <ul
            className=" px-[8%] hover:cursor-pointer duration-500 hover:text-red-400  "
            onClick={() =>handleOnClick("Expertise")}
          >
            My_Expertise
          </ul>
          <ul
            className=" px-[8%] hover:cursor-pointer duration-500 hover:text-red-400  "
            onClick={() =>handleOnClick("Contact")}
          >
            Contact_Me
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Header;
