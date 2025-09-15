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
  const frameworks = [
    "NextJs",
    "ReactJs",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "Angular",
    "ReduxJs",
    "TailwindCss",
    "DaisyUI",
    "CSS",
    "BootStrap",
    "Spring Boot",
    "REST API",
    "MYSQL",
  ];

  const other = [
    "Git",
    "GitHub",
    "AWS",
    "Microservices",
    "LLD",
    "Operating System",
    "Jest",
    "Rest API",
    "Web Sockets",
    "Vs Code",
    "Artificial Intelligence",
    "Team Work",
    "Data Structures & Algorithms",
    "Communication",
    "Web Development",
    "Photoshop",
  ];
  return (
    <div
      className={`${
        section === "skills"
          ? "sm:w-[70%] w-[90%]  mx-auto text-left  opacity-100 pt-[2%] border  border-gray-700 rounded-xl p-[2%] mt-[4%] ease-in-out duration-700 "
          : "w-[0%] h-0  opacity-0 overflow-hidden border border-gray-700  ease-in"
      }`}
    >
      <h1 className="font-bold text-xl py-[1%] text-pink-700">
        Programming Languages
      </h1>
      <div className="flex  justify-evenly -pb-10 -mb-5 sm:mb-0">
        <div className=" group w-[6%] flex flex-col items-center">
          <RiJavascriptFill className="icons group-hover:text-yellow-300  " />{" "}
          <span className="texts">javascript</span>
        </div>
        <div className=" group w-[6%] flex flex-col items-center">
          <FaJava className="icons group-hover:text-red-600" />
          <span className="texts">java</span>
        </div>
        <div className=" group w-[6%] flex flex-col items-center">
          <BiLogoTypescript className="icons group-hover:text-blue-500" />
          <span className="texts">typescript</span>
        </div>
        <div className=" group w-[6%] flex flex-col items-center">
          <FaDatabase className="icons group-hover:text-teal-500" />
          <span className="texts">SQL</span>
        </div>
        <div className=" group w-[6%] flex flex-col items-center">
          <SiCplusplus className="icons group-hover:text-blue-500" />
          <span className="texts">C++</span>
        </div>{" "}
        <div className=" group w-[6%] flex flex-col items-center">
          <FaHtml5 className="icons group-hover:text-orange-600" />
          <span className="texts">HTML</span>
        </div>
      </div>
      <br></br>

      <div>
        <h1 className="font-bold text-xl pb-[1%] text-pink-700">
          Frameworks/libraries{" "}
        </h1>
        <div className="flex flex-wrap">
          {frameworks.map((item, i) => (
            <span key={i} className="px-1">
              {item}
            </span>
          ))}
        </div>
      </div>
      <br></br>

      <div>
        <h1 className="font-bold text-xl py-[1%] text-pink-700">Other</h1>
        <div className="flex flex-wrap">
          {other.map((item, i) => (
            <span key={i} className="px-1">
              {item},
            </span>
          ))}
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default SkillsSection;
