import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import bgNight from "../Assets/bg-night.jpg";
import ProjectDet from "./ProjectDet";

const ProjectsPage = () => {
  const proj = useSelector((store) => store.projects);
  if (proj === null) return null;
  return (
    <div className="">
      <img
        alt="bg-img"
        src={bgNight}
        className="h-full w-screen bg-cover fixed -z-10"
      />
      <Header />
      <div className="text-white flex justify-center flex-wrap pt-[8%] mx-[5%]">
        {proj.map((pro) => (
          <ProjectDet key={pro.id} details={pro} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
