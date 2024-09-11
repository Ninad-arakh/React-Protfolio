import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import bgNight from "../Assets/bg-night.jpg";
import ProjectDet from "./ProjectDet";

const ProjectsPage = () => {
  const proj = useSelector((store) => store.projects);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (proj === null) return null;

  return (
    <div>
      <img
        alt="bg-img"
        src={bgNight}
        className="h-full w-screen bg-cover fixed -z-10"
      />
      <Header />
      <div className="text-white sm:flex justify-center flex-wrap pt-[15%] sm:pt-[8%] mx-[5%]">
        {proj.map((pro) => (
          <ProjectDet key={pro.id} details={pro} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
