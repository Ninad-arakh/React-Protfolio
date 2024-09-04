import React, { useState } from "react";

const About = () => {
  const [expand, setExpand] = useState(false);

  const expandToggleHandler = () => {
    setExpand(!expand);
  };

  return (
    <div className="flex pl-[9%] pt-[6%] justify-between  text-white">
      <div
        className={`${
          !expand
            ? "w-[65%]  rounded-xl px-[1%] pt-[1%] h-96"
            : "w-[65%]  rounded-xl px-[1%] py-[1%] "
        }`}
      >
        <div className={`${!expand ? "h-[60%] overflow-hidden" : ""}`}>
          <h1 className="font-bold text-xl ">About Me</h1>
          <p>
            Hello! I'm{" "}
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
            that make a difference.
          </p>
          <br></br>
          <h1 className="font-bold text-xl ">My Approach</h1>
          <p>
            My approach to technology is fueled by a love for learning and a
            willingness to tackle new challenges. I spend time practicing coding
            problems on platforms like LeetCode, GeeksForGeeks to sharpen my
            problem-solving skills and stay updated with best practices. Whether
            it's delving into a new framework or experimenting with innovative
            techniques, I am always eager to grow and apply my knowledge.
          </p>
          <br></br>
          <h1 className="font-bold text-xl ">Projects & Practice</h1>
          <p>
            In addition to my coursework, I actively work on personal projects
            that allow me to apply and expand my technical skills. These
            projects showcase my commitment to quality and innovation. I also
            regularly engage in coding challenges to enhance my problem-solving
            abilities and keep up with industry trends.
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
          !expand ? "w-[25%] mr-[5%] py-[2%] " : "w-[25%] py-[6%] mr-[5%]"
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

export default About;
