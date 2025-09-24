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
import Footer from "./Footer";
import gsap from "gsap";

const Body = () => {
  const AboutRef = useRef(null);
  const SkillRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  const preloader = useSelector((store) => store.preload)
  const dispatch = useDispatch()
  const tl = gsap.timeline()

  useEffect(() => {
    setTimeout(() =>{
      dispatch(changeState(false))
    }, 1000);
  } , [])

  const scrollToAbout = () => {
    if (AboutRef.current) {
      AboutRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline:"nearest" });
    }
  };
  const scrollToSkill = () => {
    if (SkillRef.current) {
      SkillRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline:"nearest" });
    }
  };
  const scrollToProject = () => {
    if (ProjectsRef.current) {
      ProjectsRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline:"nearest" });
    }
  };
  const scrollToContact = () => {
    if (ContactRef.current) {
      ContactRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline:"nearest" });
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
          className="-z-10 w-[110%] bg-cover h-full object-cover fixed"
        />
        <Header
          scrollToAbout={scrollToAbout}
          scrollToSkill={scrollToSkill}
          scrollToProject={scrollToProject}
          scrollToContact={scrollToContact}
          tl={tl}
        />
        <About tl={tl}/>
        <AboutMe ref={AboutRef} />
        <Skills ref={SkillRef} />
        <Projects ref={ProjectsRef}/>
        <Contact ref={ContactRef}/>
        <Footer />
      </div>
    );
  }
};

export default Body;
