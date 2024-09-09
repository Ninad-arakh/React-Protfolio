import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import bgNight from "../Assets/bg-night.jpg";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Preloader from "./Preloader";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../Utils/preloaderSlice";

const Body = () => {
  const AboutRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  const preloader = useSelector((store) => store.preload)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() =>{
      dispatch(changeState(false))
    }, 1000);
  } , [])

  const scrollToAbout = () => {
    if (AboutRef.current) {
      AboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProject = () => {
    if (ProjectsRef.current) {
      ProjectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    if (ContactRef.current) {
      ContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if(preloader){
    return(
      <div className="bg-black w-full h-full">
      {preloader && <Preloader />}   
      </div>
    )
  }
  else{
    return (
      <div >
        <img
          alt="bg-img"
          src={bgNight}
          className="-z-10 w-[110%] h-full  fixed"
        />
        <Header
          scrollToAbout={scrollToAbout}
          scrollToProject={scrollToProject}
          scrollToContact={scrollToContact}
        />
        <About />
        <AboutMe ref={AboutRef}/>
        <Skills />
        <Projects ref={ProjectsRef}/>
        <Contact ref={ContactRef}/>
      </div>
    );
  }
};

export default Body;
