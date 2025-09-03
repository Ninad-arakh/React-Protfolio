import React from "react";
import { GiSevenPointedStar } from "react-icons/gi";

const Feature = ({ feature }) => {
  
  return (
    <div className=" flex mt-2">
      <h2 className="flex text-pink-400 items-center gap-1">
        <GiSevenPointedStar className="text-xs" /> {feature?.name} <span className="mx-2">{'=>'}</span>
      </h2>
      <p className="ml-[%]">{feature?.detail}</p>
      
    </div>
  );
};

export default Feature;
