import React, { useState } from 'react'
import darksky from "../src/assets/images/nightsky.webp"
import lightsky from "../src/assets/images/daysky.webp"

const DarkLightMode = ({theme}) => {
  const [isDark, setIsDark] = theme

  const handleToggle = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDarkMode", !isDark);
  };

  return (
    <div
      id="toggleSwitch"
      className="flex justify-center items-center flex-row relative "
    >
      <label id="toggleContainer" className="relative inline-block w-[50px] sm:w-16 h-[25px] sm:h-8">
        <input
          type="checkbox"
          checked={isDark}
          onChange={handleToggle}
          className="opacity-0 w-0 h-0"
        />
        <span 
          id="toggleSlider"
          className={`absolute cursor-pointer inset-0 transition duration-400 rounded-full flex items-center justify-between px-2 ${
            isDark ? "bg-darksky" : "bg-lightsky"
          }`}
          style={{
            backgroundImage: `url(${isDark ? darksky : lightsky})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Light Icon */}
          <i
            id="light"
            className={`bi bi-sun text-gray-900 translate-x-[-4px] sm:translate-x-[-2.5px] text-sm sm:text-xl transition-opacity duration-1000 z-10 ${
              isDark ? "opacity-0" : "opacity-100"
            }`}
          ></i>

          {/* Dark Icon */}
          <i
            id="dark"
            className={`bi bi-moon text-gray-100 translate-x-[1px] sm:translate-x-0 text-xs sm:text-lg transition-opacity duration-1000 z-10 ${
              isDark ? "opacity-100" : "opacity-0"
            }`}
          ></i>

          {/* Moving Circle */}
          <span
            className={`absolute top-1 bottom-1 bg-gray-100 rounded-full w-5 sm:w-6 h-5 sm:h-6 transform transition-transform duration-700 ${
              isDark ? "translate-x-5 sm:translate-x-7 translate-y-[-2px] sm:translate-y-0 bg-gray-800" : "translate-x-[-6px] sm:translate-x-[-4px] translate-y-[-2px] sm:translate-y-0"
            }`}
          ></span>
        </span>
      </label>
    </div>
  );
}


export default DarkLightMode
