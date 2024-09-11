import React from "react";
import bgNight from "../Assets/bg-night.jpg";
import { useSearchParams } from "react-router-dom";
import Header from "./Header";

const YtVideoDemo = () => {
  const [param] = useSearchParams();
  const key = param.get("jbv");

  if (key === "") {
    return (
      <div className="h-full w-[100%] text-white  pt-[8%] px-[10%] ">
        <img
          className="fixed -z-10 w-[100%] h-screen object-cover -mt-[8%] sm:-mt-[8%] -mx-[10%]"
          src={bgNight}
        />
        <div className="py-[50%] sm:py-[10%]">
          <h1>Oops! The demo video isn’t available right now.</h1>
          <br></br>
          <p>
            We’re working on getting it back up as soon as possible. In the
            meantime, feel free to contact us for more information.
          </p>
          <br></br>
          <p>Thank you for your patience!</p>
        </div>
      </div>
    );
  }
  return (
    <div className="h-full w-[100%] text-white  pt-[8%] px-[10%] ">
      <img
        className="fixed -z-10 w-[100%] h-screen object-cover -mt-[8%] sm:-mt-[8%] -mx-[10%]"
        src={bgNight}
      />

      <div className="flex  justify-center w-[100%] h-[80vh] sm:h-[100vh] mt-[25%] sm:-mt-[7%] ">
        <iframe
          className="rounded-2xl w-screen aspect-video border border-gray-800 h-[50%] sm:h-[90%]"
          src={`https://www.youtube.com/embed/${key}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YtVideoDemo;
