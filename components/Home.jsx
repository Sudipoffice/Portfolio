import React from "react";
import sudipBW from "../src/assets/images/sudipBW.png";
import hi from "../src/assets/images/hi.png";
import Resume from "../src/assets/files/SudipMandalResume.pdf"

const Home = () => {
  return (
      <div id="home" className="flex flex-row justify-around bg-white dark:bg-gray-900">
      <div className="flex flex-col w-6/6 sm:w-3/6 h-fit sm:h-40 md:h-48 lg:h-48 xl:h-fit mt-28 sm:mt-64 md:mt-64 lg:mt-80 xl:mt-48 mx-3 sm:mx-4 md:mx-8 lg:mx-4 xl:mx-8 justify-start sm:justify-center items-start sm:items-center absolute sm:relative">
        <div className="">
          <div className="flex flex-row justify-around w-5/6 ">
            <p className="font-extenda20 text-gray-500 dark:text-gray-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-extra-tight">
              HI THERE
            </p>
            <p className="font-extenda50 text-gray-800 dark:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-extra-tight">
              I'M
            </p>
          </div>
          <p className="font-extenda30 text-blue-700 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-extra-tight">
            &lt;SUDIP MANDAL&gt;
          </p>
          <div className="flex flex-row justify-around ">
            <p className="font-extenda10 text-black dark:text-gray-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex items-end leading-extra-tight z-10">
              A
            </p>
            <p className="font-extenda90 text-gray-500 sm:text-gray-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-extra-tight">
              WEB <br /> DEVELOPER
            </p>
          </div>
        </div>
        <div className=" justify-center items-center text-center font-light text-xs sm:text-sm md:text-md lg:text-base w-2/6 sm:w-6/6 md:w-4/6 my-8 text-black dark:text-gray-300">
          Nice to meet you. Welcome to my portfolio, Let’s connect and discuss how we can make an impact
          together!
        </div>
       
        <button className="bg-gray-500 hover:bg-[#2e6dffbd] p-1 sm:p-2 rounded-3xl text-white font-light text-xs sm:text-sm tracking-widest"><a href={Resume} target="_blank">My Resume</a></button>
      
      </div>
      <div className="flex flex-row justify-end sm:justify-evenly sm:pt-12 md:pt-12 lg:pt-0 xl:pt-0 w-5/6 sm:w-5/6 md:w-4/6 lg:w-5/6 xl:w-3/6 ">
        <img
          src={sudipBW}
          alt=""
          className=" h-6/7  w-4/6 flex justify-end items-end  "
        />
        <div className=" flex flex-col justify-end items-center py-2 sm:py-4 md:py-4 lg:py-20 xl:py-44 gap-4 text-gray-600 dark:text-gray-500 text-sm sm:text-xl md:text-xl xl:text-2xl">
        <div className="bg-blue-700 h-20 sm:h-28 w-[3px] sm:w-1"></div>
          <a
            className="bi bi-linkedin transition-transform duration-300 hover:scale-110 hover:text-blue-700 "
            href="https://www.linkedin.com/in/sudipmandal/"
            target="_blank"
          ></a>
          <a
            className="bi bi-github transition-transform duration-300 hover:scale-110 hover:text-gray-900 dark:hover:text-gray-300"
            href="https://github.com/Sudipoffice"
            target="_blank"
          ></a>
          <a
            className="bi bi-envelope-fill transition-transform duration-300 hover:scale-110 hover:text-yellow-400"
            href="mailto:mandalsudipoffice@gmail.com"
            target="_blank"
          ></a>
          <a
            className="bi bi-whatsapp transition-transform duration-300 hover:scale-110 hover:text-green-500"
            href="https://api.whatsapp.com/send?phone=7003071143"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
