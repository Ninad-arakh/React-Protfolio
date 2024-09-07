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
      className="flex pl-[2%] mx-auto pb-[4%] w-[85%] pt-[6%] justify-between text-white"
      id="about"
    >
      <div className="w-[70%] mx-[5%] my-[10%] text-3xl ">
        <h1>Hello There!</h1>
        <br></br>
        <h1 className="text-3xl ">
          I am <span className="font-bold text-pink-600">{text}</span>
          <span className="text-pink-600">
            <Cursor />{" "}
          </span>
        </h1>
      </div>
      <div className="w-[50%] mr-[8%] pt-[3%]">
        <img src={program}  className=""/>
      </div>
    </div>
  );
};

export default About;
