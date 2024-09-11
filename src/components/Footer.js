import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white mx-auto flex  mt-[3%] mb-4 backdrop-blur-sm py-[1%] bg-opacity-40 bg-neutral-600  order-last">
      <h1 className=" mx-auto flex">
        Copyrights{" "}
        <span>
          <FaCopyright className="mt-1 ml-3" />
        </span>{" "}
        Ninad_Arakh.
      </h1>
    </div>
  );
};

export default Footer;
