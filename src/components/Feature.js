import React from "react";
import { GiSevenPointedStar } from "react-icons/gi";

const Feature = ({ feature }) => {
  console.log(feature);
  return (
    <div className="mt-[3%] flex">
      <h2 className="flex text-pink-600">
        <GiSevenPointedStar className="mt-1 mr-2" /> {feature?.name} <span className="mx-2">{'=>'}</span>
      </h2>
      <p className="ml-[1%]">{feature?.detail}</p>
      
    </div>
  );
};

export default Feature;
