import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Feature from "./Feature";
import Header from "./Header";
import bgNight from "../Assets/bg-night.jpg";

const SingleProject = () => {
  const projectDetails = useSelector((store) => store.projects);
  const [id] = useSearchParams();
  const pname = id.get("name");
  const navigate = useNavigate();

  const data =
    projectDetails && projectDetails.filter((data) => data.name === pname);

  if (projectDetails === null) return null;

  const handleOnClick = () => {
    navigate("/demoVideo?jbv=" + data[0]?.ytKey);
  };
  return (
    <div className="">
      <Header />
      <div className="h-full w-screen text-white  pt-[8%] px-[10%]">
        <img
          className="fixed -z-10 w-screen bg-cover h-screen -mt-[8%] sm:-mt-[8%] -mx-[10%]"
          src={bgNight}
        />
        <div className="flex justify-between sm:mt-0 mt-[15%] ">
          <h1 className=" sm:text-3xl text-2xl sm:ml-0 -ml-[7%]">
            {data[0]?.name}
          </h1>
          <div className="flex gap-2">
            {data[0].videoAvailable && (
              <button
                href="#_"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-xl shadow-2xl group"
                onClick={handleOnClick}
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                {/* <!-- Top glass gradient --> */}
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                {/* <!-- Bottom gradient --> */}
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                {/* <!-- Left gradient --> */}
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                {/* <!-- Right gradient --> */}
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-xl opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span className="relative">Demo Video</span>
              </button>
            )}

            {data[0].isLive && (
              <a href={data[0]?.liveLink} target="_blank">
                <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-xl shadow-2xl group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                  {/* <!-- Top glass gradient --> */}
                  <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                  {/* <!-- Bottom gradient --> */}
                  <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                  {/* <!-- Left gradient --> */}
                  <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                  {/* <!-- Right gradient --> */}
                  <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                  <span className="absolute inset-0 w-full h-full border border-white rounded-xl opacity-10"></span>
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                  <span className="relative">Live</span>
                </button>
              </a>
            )}

            <a href={data[0]?.github} target="_blank">
              <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-xl shadow-2xl group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                {/* <!-- Top glass gradient --> */}
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                {/* <!-- Bottom gradient --> */}
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                {/* <!-- Left gradient --> */}
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                {/* <!-- Right gradient --> */}
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-xl opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span className="relative">GitHub</span>
              </button>
            </a>
          </div>
        </div>
        <h1 className="pt-[5%] sm:ml-0 -ml-[7%] ">{data[0]?.description}</h1>
        <div>
          {data[0]?.features.map((feature, i) => (
            <Feature key={i} feature={feature} />
          ))}
        </div>
        <p className="py-[5%]">{data[0]?.summary}</p>
        <div className="w-full h-full  pb-[10%]">
          <img
            alt="project image"
            src={data[0]?.imageLink}
            className="mx-auto left-0 right-0 rounded-xl border border-[#590d5a] shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
