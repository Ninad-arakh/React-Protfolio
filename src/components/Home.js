import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import bgRed from "../Assets/bg-red.jpg"
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div className="">
        <img alt="bg-img" src="{bgRed}" className="-z-10 w-screen h-screen bg-neutral-950 fixed" />
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
