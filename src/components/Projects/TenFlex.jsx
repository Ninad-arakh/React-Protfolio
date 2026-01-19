import React from "react";
import TenFleximg from "../../Assets/TenFlex.png";
import useProject from "../../Hook/useProject";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";

const TenFlex = () => {
  const navigate = useNavigate();

  useProject();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/singleProject?name=TenFlex`);
  };

  useGSAP(() => {
    // gsap.from()
  }, []);

  return (
    <div
      className={`sm:w-[32%] w-[90%] my-[2%] sm:my-0 h-[32%] mx-auto sm:h-[100%] py-2 border  border-gray-500 sm:mx-[2%] group rounded-3xl   hover:scale-110 duration-500 relative overflow-hidden`}
    >
      <div className="w-full h-full ">
        <img
          alt="image"
          src={TenFleximg}
          className="object-cover w-full h-full "
        />
      </div>

      <div
        className="absolute bottom-0 left-0 w-full
                  bg-gradient-to-t from-pink-600
                  translate-y-full
                  group-hover:translate-y-5
                  transition-transform duration-300"
      >
        <p className="text- w-full h-full bg-black bg-opacity-50 px-[2%] sm:px-[15%] sm:mb-5 leading-tight">
          TenFlex is a dynamic freelancing platform inspired by Fiverr, designed
          to connect clients with skilled freelancers. Built with Next.js for
          the frontend and Django for the backend, the website offers a
          full-featured experience including secure login/logout functionality,
          credential storage using hashed passwords, and Cloudinary support for
          efficient image handling.
          <img
            className=" bg-white rounded-full border-2 mt-8 b-2 mb-25 border-stone-800 hover:border-purple-400 opacity-0 group-hover:opacity-80 h-12 group-hover:-translate-y-1  w-12  mx-[42%] sm:mx-[35%] justify-center shadow-2xl cursor-pointer"
            src="https://brandeps.com/icon-download/L/Link-icon-vector-01.svg"
            onClick={handleClick}
          />
        </p>
      </div>
    </div>
  );
};

export default TenFlex;
