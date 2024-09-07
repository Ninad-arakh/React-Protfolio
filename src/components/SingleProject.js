import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Feature from "./Feature";
import Header from "./Header";
import bgNight from "../Assets/bg-night.jpg"

const SingleProject = () => {
  const projectDetails = useSelector((store) => store.projects);
  const [id] = useSearchParams();
  const pname = id.get("name");

  const data =
    projectDetails && projectDetails.filter((data) => data.name === pname);

  if (projectDetails === null) return null;

  return (
    <div className="">
      <Header />
      <div className="h-full w-screen text-white  pt-[8%] px-[10%]">
        <img className="fixed -z-10 w-screen -mt-[10%] -mx-[10%]" src={bgNight}/>
        <div className="flex justify-between">
          <h1 className="font-med text-3xl">{data[0]?.name}</h1>
          <div className="flex">
            <button className="m-2 border-pink-500 border px-4 rounded-xl hover:bg-pink-600">Live</button>
            <button className="m-2 border-pink-500 border px-4 rounded-xl hover:bg-pink-600">Github</button>
          </div>
        </div>
        <h1 className="pt-[5%]">{data[0]?.description}</h1>
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
            className="mx-auto left-0 right-0 rounded-xl border border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;