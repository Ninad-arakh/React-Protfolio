import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import bgRed from "../Assets/bg-red.jpg"
import bgNight from "../Assets/bg-night.jpg"
import Header from "./Header";

const Body = () => {
  return (
    <div className="">
      <img
        alt="bg-img"
        src={bgNight}
        className="-z-10 w-screen h-screen bg- fixed"
      />
      <Header />

      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Body;
