import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import bgRed from "../Assets/bg-red.jpg"

const Body = () => {
  return (
    <div className="">
      <img
        alt="bg-img"
        src={"bgRed"}
        className="-z-10 w-screen h-screen bg-neutral-950 fixed"
      />

      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Body;
