import React, { useState } from "react";

const Skills = () => {
  const [section, setSection] = useState("skills");

  const handleOnClick = (value) => {
    setSection(value);
  };
  return (
    <div className="text-white justify-center text-center  mb-[5%]">
      <div className="justify-around">
        <button
          className={
            section === "skills"
              ? "px-[3%] text-2xl hover:text-red-500 text-red-500 underline"
              : "px-[3%] text-2xl hover:text-pink-600"
          }
          onClick={() => handleOnClick("skills")}
        >
          Skills
        </button>

        <button
          className={
            section === "experiance"
              ? "px-[3%] text-2xl hover:text-red-500 text-red-500 underline"
              : "px-[3%] text-2xl hover:text-pink-600"
          }
          onClick={() => handleOnClick("experiance")}
        >
          Experiance
        </button>

        <button
          className={
            section === "education"
              ? "px-[3%] text-2xl hover:text-red-500 text-red-500 underline"
              : "px-[3%] text-2xl hover:text-pink-600"
          }
          onClick={() => handleOnClick("education")}
        >
          Education
        </button>
      </div>
      <div
        className={`${
          section === "skills"
            ? "w-[70%] mx-auto text-left  opacity-100 pt-[2%] border border-white rounded-xl p-[2%] mt-[4%] ease-in-out duration-700 "
            : "w-[0%] h-0  opacity-0 overflow-hidden border border-white  ease-in"
        }`}
      >
        <h1 className="font-bold text-xl py-[1%] text-pink-700">
          Programming Languages
        </h1>
        <br></br>
        <p>JavaScript, Java, TypeScript, SQL, NodeJs, C++, HTML</p>
        <br></br>
        <h1 className="font-bold text-xl py-[1%] text-pink-700">
          Frameworks/libraries{" "}
        </h1>
        <br></br>
        <p>
          ReactJs, Angular, ReduxJs, TailwindCss, CSS, BootStrap, Spring Boot,
          REST API
        </p>{" "}
        <br></br>
        <h1 className="font-bold text-xl py-[1%] text-pink-700">Other</h1>
        <br></br>
        <p>
          Git, GitHub, Operating System, Data Structures & Algorithms,
          Communication, Web Development
        </p>
        <br></br>
      </div>

      <div
        className={`${
          section === "experiance"
            ? "w-[70%] mx-auto text-left opacity-100 pt-[2%] border border-white rounded-xl p-[2%]  ease-in-out duration-700 mt-[4%]"
            : "w-[0%] h-0 opacity-0 overflow-hidden mt-[4%]  ease-in-out"
        }`}
      >
        <h1 className="font-bold flex justify-between py-[2%]">
          <p className=" text-xl text-pink-700">Namaste React 🚀 </p>
          <p> Jun 2024 - Sep 2024</p>
        </h1>
        <br></br>
        <p>
          In this series on ReactJS, I delved into key concepts such as
          bundlers, why React is fast, components, hooks, custom hooks, state
          management, and Redux store. I also learned how to improve web
          application loading and much more.
        </p>
        <br></br>
        <h1 className="font-bold flex justify-between py-[2%]">
          <p className=" text-xl text-pink-700">Codesoft Internship </p>
          <p> Jan 2024 - Feb 2024</p>
        </h1>
        <br></br>
        <p>
          This internship focuses on gaining experience and earning a
          certificate through completing a series of practical projects. Interns
          work on real-world tasks at their own pace, receiving mentorship and
          feedback throughout. Successful completion of all projects results in
          certification, validating the skills acquired.
        </p>
        <br></br>
        <h1 className="font-bold flex justify-between py-[2%]">
          <p className=" text-xl text-pink-700">
            Java Full stack Development Training at JBK institute Pune{" "}
          </p>
          <p> Mar 2022 - Sep 2022</p>
        </h1>
        <br></br>
        <p>
          This is where I began learning to code, specifically with Java. Before
          this, I knew nothing about programming. Here, I learned the basics of
          coding, how Java code executes, and about concepts like classes,
          functions, methods, and interfaces.
        </p>
      </div>

      <div
        className={`${
          section === "education"
            ? "w-[70%] mx-auto  opacity-100  text-left border border-white rounded-xl p-[2%] mb-[4%] ease-in-out duration-700"
            : "w-[0%] h-0 overflow-hidden opacity-0  ease-in-out"
        }`}
      >
        <h1 className=" flex  justify-between">
          <p className="font-bold text-xl text-pink-700">Graduation</p>
          <p className="font-bold">Graduation year - Apr 2025</p>
        </h1>
        <br></br>
        <h1 className="font-bold">
          Bachelor's of Science - Computer Science (GPA: 7.61){" "}
        </h1>
        <br></br>
        <p>
          <span className="font-bold">University : </span> Dr. Babasaheb
          Ambedkar Marathwada University Ch. Sambhajinagar.
        </p>
        <br></br>
        <p>
          <span className="font-bold">Courses : </span> Data Structures &
          Algorithms, Java OOP, C/C++, Web Development, Computer Networks, Data
          Analytics.
        </p>
      </div>
    </div>
  );
};

export default Skills;
