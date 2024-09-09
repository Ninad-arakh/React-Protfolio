import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin animation-delay-400 rounded-full h-52 w-52 border-t-4 border-b-4 border-purple-500"></div>
        <img
          src="https://i.etsystatic.com/26894392/r/il/9536d4/2967178926/il_1588xN.2967178926_tft3.jpg"
          className="rounded-full h-48 w-48" alt="attack on titan"
        />
      </div>
    </div>
  );
};

export default Preloader;
