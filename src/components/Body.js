import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import bgNight from "../Assets/bg-night.jpg";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

const Body = () => {
  return (
    <div className="scrollbar-thin scrollbar-track-purple-700">
      <img
        alt="bg-img"
        src={bgNight}
        className="-z-10 w-screen h-screen bg- fixed"
      />
      <Header />
      <About />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Body;
