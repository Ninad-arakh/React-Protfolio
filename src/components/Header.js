import React, {  useEffect, useRef, useState } from "react";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = ({ scrollToAbout, scrollToProject, scrollToContact }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const logoRef = useRef()
  const menuRef = useRef()

  const screenWidth = window.screen.width;
  let isMobile;
  if (screenWidth < 640) isMobile = true;

  const handleOnClick = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from(logoRef.current, {
      y: -20,
      duration: 1, 
      delay: 0.2,
      opacity: 0,
      ease: "back.out(1.7)"
    })
    if(!isMobile) {
    tl.from(menuRef.current.querySelectorAll("li"), {
      y: -20,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2
    },"-=0.5")
  }
  })

  useEffect(() => {
  if (isMobile && menu && menuRef.current) {
    const tl = gsap.timeline();
    tl.from("#div",{
      x: 200,
      duration: 0.3,
      opacity: 0,
      ease: "power1.out"
    })
    tl.from(menuRef.current.querySelectorAll("li"), {
      x: 20,
      duration: 0.3,
      opacity: 0,
      stagger: 0.2,
    });
  }
}, [menu, isMobile]);

  if (isMobile) {
    return (
      <div className="pt-2 pr-7 w-full flex justify-between fixed bg-opacity-60 backdrop-blur-sm ">
        <div className="w-[18%] py-[2%] ml-[5%] self-center">
          <img alt="ninad img" src={logo} ref={logoRef}/>
        </div>
        <div
          className="text-white text-[30px] self-center absolute top-3 right-1 relaive"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoIosCloseCircle /> : <TiThMenu />}
        </div>
        {menu && (
          <div className="-z-10 pt-[10%] absolute top-0 w-[60%] right-0 h-screen bg-gradient-to-r from-purple-800 via-blue-900 to-gray-900 flex justify-center " id="div">
            <ul className="flex text-white font-bold flex-col" ref={menuRef}>
              <li
                className="text-[30px] py-[8%] px-[10%] "
                onClick={() => handleOnClick("Home")}
              >
                Home
              </li>
              <li
                className="text-[30px] py-[8%] px-[10%]   "
                onClick={scrollToAbout}
              >
                About
              </li>
              <li
                className="text-[30px] py-[8%] px-[10%]   "
                onClick={scrollToProject}
              >
                Projects
              </li>

              <li
                className="text-[30px] py-[8%] px-[10%] "
                onClick={scrollToContact}
              >
                Contact_Me
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="pr-7 w-full flex justify-between fixed bg-opacity-60 backdrop-blur-sm ">
        <div className="w-[8%] pt-[1%] ml-[10%] self-center z-50">
          <img alt="ninad img" src={logo} ref={logoRef}/>
        </div>

        <div className="text-white mr-[9%]  self-center">
          <ul className="flex justify-center text-center" ref={menuRef}>
            <li
              className=" px-[8%] cursor-pointer  group relative   "
              onClick={() => handleOnClick("Home")}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
            </li>
            <li
              className=" px-[8%] cursor-pointer group relative   "
              onClick={scrollToAbout}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
            </li>
            <li
              className=" px-[8%] cursor-pointer group relative   "
              onClick={scrollToProject}
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
            </li>

            <li
              className=" px-[8%] cursor-pointer group relative   "
              onClick={scrollToContact}
            >
              Contact_Me
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-600 group-hover:pl-[2%] group-hover:w-[100%] duration-500"></span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Header;
