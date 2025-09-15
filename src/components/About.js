import React from "react";
import program from "../Assets/programing.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import RotatingText from "./RotatingText";

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
    typeSpeed: 100,
    deleteSpeed: 30,
    loop: true,
  });

  return (
    <div className="sm:flex z-0 sm:pl-[2%]  sm:mx-auto pb-[4%] sm:w-[85%] sm:pt-[6%] pt-[20%] justify-between text-white gap-3">
      <div className="sm:w-[70%] sm:mx-0 mx-[5%] my-[10%] sm:text-3xl text-2xl  ">
        <h1>Hello There!</h1>
        <br></br>
        <h1 className="text-3xl ">
          I am <span className="font-bold text-pink-600">{text}</span>
          <span className="text-pink-600">
            <Cursor />{" "}
          </span>
        </h1>
        {/* <h1 className="text-3xl  flex gap-3 items-center">
          I am{" "} <span >
          <RotatingText
            texts={[
              "Software Engineer",
              "Full Stack Developer",
              "Front-end Developer",
              "MERN Stack Developer",
              "Back-end Developer",
              "Designer",
              "Freelancer",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-pink-500  text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl font-bold"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
          </span>
        </h1> */}
      </div>
      <div className="sm:w-[50%] w-[70%] sm:mr-[8%] pt-[3%] mx-auto ">
        <img src={program} className="" />
      </div>
    </div>
  );
};

export default About;
