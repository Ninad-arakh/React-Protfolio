import React, { useEffect } from "react";
import "./preloader.css";

const Preloader = () => {
  useEffect(() => {
    const particleContainer = document.querySelector(".particles");

    // Clear existing particles if any
    particleContainer.innerHTML = "";

    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1","#00ffff", "#ff00ff"]; // Array of colors

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement("div");
      particle.className = "particle absolute rounded-full opacity-75";

      const size = Math.random() * 5 + 3; // Random size between 2px and 7px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`; // Make it a circle

      // Random position
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;

      // Random animation duration and direction
      const duration = Math.random() * 10 + 5; // Random duration between 5s and 15s
      const distance = Math.random() * 100 + 50; // Random distance between 50px and 150px
      const direction = Math.random() * 360; // Random direction in degrees

      // Random color
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;

      particle.style.animation = `float-${i} ${duration}s linear infinite, fade 2s ease-in-out infinite`;
      particle.style.transform = `translateY(${distance}px) translateX(${distance}px) rotate(${direction}deg)`;

      // Generate unique keyframes for each particle
      const keyframes = `
        @keyframes float-${i} {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(${distance}px) translateX(${distance}px);
          }
        }
      `;

      // Append the keyframes to the document
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      particleContainer.appendChild(particle);
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="particles fixed inset-0 pointer-events-none"></div>
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-52 w-52 border-t-4 border-b-4 border-purple-500"></div>
        <img
          src="https://i.etsystatic.com/26894392/r/il/9536d4/2967178926/il_1588xN.2967178926_tft3.jpg"
          className="rounded-full h-48 w-48"
          alt="attack on titan"
        />
      </div>
    </div>

    // <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
    //   <div className="relative flex justify-center items-center">
    //     <div className="absolute animate-spin animation-delay-400 rounded-full h-52 w-52 border-t-4 border-b-4 border-purple-500"></div>
    //     <img
    //       src="https://i.etsystatic.com/26894392/r/il/9536d4/2967178926/il_1588xN.2967178926_tft3.jpg"
    //       className="rounded-full h-48 w-48" alt="attack on titan"
    //     />
    //   </div>
    // </div>
  );
};

export default Preloader;
