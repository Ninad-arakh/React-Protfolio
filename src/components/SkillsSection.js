import React from "react";
import { useSelector } from "react-redux";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

const SkillsSection = () => {
  const section = useSelector((store) => store.button);
  return (
    <div
      className={`${
        section === "skills"
          ? "sm:w-[70%] w-[90%]  mx-auto text-left  opacity-100 pt-[2%] border border-white rounded-xl p-[2%] mt-[4%] ease-in-out duration-700 "
          : "w-[0%] h-0  opacity-0 overflow-hidden border border-white  ease-in"
      }`}
    >
      <h1 className="font-bold text-xl py-[1%] text-pink-700">
        Programming Languages
      </h1>
      <br></br>
      <p className="flex  justify-evenly -pb-10 -mb-5 sm:mb-0">
        <span className="sm:mx-[3%] group w-[6%] text-center">
          <RiJavascriptFill className="icons group-hover:text-yellow-300  " />{" "}
          <span className="texts">javascript</span>
        </span>
        <span className="sm:mx-[3%] group w-[6%] text-center">
          <FaJava className="icons group-hover:text-red-600" />
          <span className="texts">java</span>
        </span>
        <span className="sm:mx-[3%] group w-[6%] text-center">
          <BiLogoTypescript className="icons group-hover:text-blue-500" />
          <span className="texts">typescript</span>
        </span>
        <span className="sm:mx-[3%] group w-[6%] text-center">
          <FaDatabase className="icons group-hover:text-teal-500" />
          <span className="texts">SQL</span>
        </span>
        <span className="sm:mx-[3%] group w-[6%] text-center">
          <FaNodeJs className="icons group-hover:text-green-500" />
          <span className="texts">NodeJs</span>
        </span>
        <span className="sm:mx-[3%] group w-[6%] text-center">
          <SiCplusplus className="icons group-hover:text-blue-500" />
          <span className="texts">C++</span>
        </span>{" "}
        <span className="sm:mx-[3%] group w-[6%] text-center">
          <FaHtml5 className="icons group-hover:text-orange-600" />
          <span className="texts">HTML</span>
        </span>
      </p>
      <br></br>
      <h1 className="font-bold text-xl pb-[1%] text-pink-700">
        Frameworks/libraries{" "}
      </h1>
      <br></br>
      <p className="flex ">
        ReactJs, Angular, ReduxJs, TailwindCss, CSS, BootStrap, Spring Boot,
        REST API
      </p>{" "}
      <br></br>
      <h1 className="font-bold text-xl py-[1%] text-pink-700">Other</h1>
      <br></br>
      <p className="flex">
        Git,{" "}  GitHub, {" "}  Operating System, {" "}  Data Structures & Algorithms, 
        {" "} Communication,  {" "} Web Development,  {" "} Photoshop.
      </p>
      <br></br>
    </div>
  );
};

export default SkillsSection;
