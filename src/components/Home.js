import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-">        
      <Outlet />
    </div>
  );
};

export default Home;
