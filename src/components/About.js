import React from "react";
import program from "../Assets/programing.png"
import { Cursor, useTypewriter } from "react-simple-typewriter";

const About = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Full Stack Developer",
      "Front-end Developer",
      "MERN Stack Developer",
      "Back-end Developer",
      "Designer",
      "Freelancer",
    ],
      typeSpeed: 120,
      deleteSpeed: 80,
    loop: true,
  });

  return (
    <div
      className="sm:flex z-0 sm:pl-[2%]  sm:mx-auto pb-[4%] sm:w-[85%] sm:pt-[6%] pt-[20%] justify-between text-white "
    >
      <div className="sm:w-[70%] sm:mx-0 mx-[5%] my-[10%] sm:text-3xl text-2xl ">
        <h1>Hello There!</h1>
        <br></br>
        <h1 className="text-3xl ">
          I am <span className="font-bold text-pink-600">{text}</span>
          <span className="text-pink-600">
            <Cursor />{" "}
          </span>
        </h1>
      </div>
      <div className="sm:w-[50%] w-[70%] sm:mr-[8%] pt-[3%] mx-auto">
        <img src={program}  className=""/>
      </div>
    </div>
  );
};

export default About;
