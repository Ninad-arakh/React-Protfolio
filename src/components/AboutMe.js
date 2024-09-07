import React, { useState } from "react";

const AboutMe = () => {
  const [expand, setExpand] = useState(false);

  const expandToggleHandler = () => {
    setExpand(!expand);
  };
  return (
    <div
      className="flex pl-[9%] pt-[6%] justify-between  mb-[3%] text-white"
      id="about"
    >
      <div
        className={`${
          !expand
            ? "w-[65%]  rounded-xl px-[1%] pt-[1%] h-96"
            : "w-[65%]  rounded-xl px-[1%] py-[1%] "
        }`}
      >
        <div className={`${!expand ? "h-[60%] overflow-hidden" : ""}`}>
          <h1 className=" text-[35px]  mb-[2%] ">About Me :</h1>
          <p>
            Hey! I'm{" "}
            <span className="font-bold text-red-500 text-lg">Ninad Arakh</span>,
            a passionate software engineer and front-end developer with a keen
            curiosity for technology. My journey in the tech world is driven by
            a relentless desire to learn and explore new possibilities.
          </p>
          <br></br>
          <h1 className="font-bold text-xl ">What I Do</h1>
          <p>
            Currently, I am honing my skills as a front-end developer, focusing
            on creating intuitive and visually appealing user interfaces. My
            expertise spans HTML, CSS, JavaScript, and modern frameworks like
            React, enabling me to build dynamic and responsive web applications.
            I enjoy transforming ideas into functional, user-friendly designs
            that make a difference. I am always eager to grow and apply my knowledge.
          </p>
          <br></br>
          
          <h1 className="font-bold text-xl ">Get in Touch</h1>
          <p>
            I am open to new opportunities and collaborations. If you’d like to
            discuss a project, share ideas, or just connect, feel free to reach
            out!
          </p>
        </div>
        <button className="pl-[80%] mt-[4%] " onClick={expandToggleHandler}>
          ...{expand ? "Show Less" : "Show More"}
        </button>
      </div>
      <div
        className={`${
          !expand ? "w-[25%] mr-[7%] py-[2%] " : "w-[25%] py-[6%] mr-[7%]"
        }`}
      >
        <img
          className="rounded-xl"
          alt="profile"
          src="https://i.neoseeker.com/u/2018/p/39/dragon-ball-z-profile-picture-7.jpg"
        />
      </div>
    </div>
  );
};

export default AboutMe;
