import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

const Header = ({ scrollToAbout, scrollToProject, scrollToContact }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const screenWidth = window.screen.width;
  let isMobile;
  if (screenWidth < 640) isMobile = true;

  const handleOnClick = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  if (isMobile) {
    return (
      <div className="pt-2 pr-7 w-full flex justify-between fixed bg-opacity-60 backdrop-blur-sm ">
        <div className="w-[18%] py-[2%] ml-[5%] self-center">
          <img alt="ninad img" src={logo} />
        </div>
        <div
          className="text-white text-[30px] self-center pr-[2%] relaive"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoIosCloseCircle /> : <TiThMenu />}
        </div>
        {menu && (
          <div className="-z-10 pl-auto absolute w-[60%] right-0 h-screen bg-[#fca311]">
            <li className="flex text-black font-bold flex-col">
              <ul
                className="text-[30px] py-[8%] px-[10%] "
                onClick={() => handleOnClick("Home")}
              >
                Home
              </ul>
              <ul
                className="text-[30px] py-[8%] px-[10%]   "
                onClick={scrollToAbout}
              >
                About
              </ul>
              <ul
                className="text-[30px] py-[8%] px-[10%]   "
                onClick={scrollToProject}
              >
                Projects
              </ul>

              <ul
                className="text-[30px] py-[8%] px-[10%] "
                onClick={scrollToContact}
              >
                Contact_Me
              </ul>
            </li>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="pr-7 w-full flex justify-between fixed bg-opacity-60 backdrop-blur-sm ">
        <div className="w-[8%] pt-[1%] ml-[10%] self-center">
          <img alt="ninad img" src={logo} className="  " />
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
              onClick={scrollToAbout}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
            </ul>
            <ul
              className=" px-[8%] cursor-pointer group relative   "
              onClick={scrollToProject}
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
            </ul>

            <ul
              className=" px-[8%] cursor-pointer group relative   "
              onClick={scrollToContact}
            >
              Contact_Me
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
            </ul>
          </li>
        </div>
      </div>
    );
  }
};

export default Header;
