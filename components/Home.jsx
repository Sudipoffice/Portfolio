import React, { useEffect } from "react";
import Resume from "../src/assets/files/SudipMandalResume.pdf"

const Home = ({ imgLoad}) => {
  const [isImageLoaded, setIsImageLoaded] = imgLoad;

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (

    <div id="home" className="flex flex-col sm:flex-row-reverse justify-around  bg-white dark:bg-gray-900 font-display:swap pb-32 sm:pb-0 min-w-screen overflow-hidden" loading="eager" >

    {/* image part */}
    <div onContextMenu={(e) => e.preventDefault()} className="flex flex-row justify-center sm:justify-evenly pt-0 sm:pt-12 md:pt-12 lg:pt-0 xl:pt-0 w-screen sm:w-5/6 md:w-4/6 lg:w-5/6 xl:w-3/6 animate-slideInRight ">
      {isImageLoaded ? (
        <img
          src={"https://sudipoffice.github.io/portfolioImages/images/Portfolio/sudipBW.webp"}
          alt="Sudip Mandal"
          loading="eager"
          className="h-6/7 w-4/6 px-4  sm:px-0 flex justify-end items-end select-none  z-0"
          onLoad={handleImageLoad} 
        />
        
      ) : (
        <></>
      )}
        
        <div className="flex flex-col justify-end items-center py-2 sm:py-4 md:py-4 lg:py-20 xl:py-44 gap-4 text-gray-600 dark:text-gray-500 text-md sm:text-xl md:text-xl xl:text-2xl">
          <div className="bg-blue-700 h-20 sm:h-28 w-[3px] sm:w-1"></div>
          <a
            className="bi bi-linkedin transition-transform duration-300 hover:scale-110 hover:text-blue-700 z-10"
            href="https://www.linkedin.com/in/sudipmandal/"
            target="_blank"
          ></a>
          <a
            className="bi bi-github transition-transform duration-300 hover:scale-110 hover:text-gray-900 dark:hover:text-gray-300 z-10"
            href="https://github.com/Sudipoffice"
            target="_blank"
          ></a>
          <a
            className="bi bi-envelope-fill transition-transform duration-300 hover:scale-110 hover:text-yellow-400 z-10"
            href="mailto:mandalsudipoffice@gmail.com"
            target="_blank"
          ></a>
          <a
            className="bi bi-whatsapp transition-transform duration-300 hover:scale-110 hover:text-green-500 z-10"
            href="https://api.whatsapp.com/send?phone=7003071143"
            target="_blank"
          ></a>
        </div>
      </div>

      {/* content part */}
      <div className="flex flex-col w-screen sm:w-3/6 h-fit sm:h-40 md:h-48 lg:h-48 xl:h-fit mt-4 sm:mt-64 md:mt-64 lg:mt-80 xl:mt-48 mx-0 sm:mx-4 md:mx-8 lg:mx-4 xl:mx-8 justify-center items-center relative animate-slideInLeft z-10">
        <div className="">
          <div className="flex flex-row justify-around w-5/6 ">
            <p className="font-extenda20 text-gray-500 dark:text-gray-400 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl extraTight">
              HI THERE
            </p>
            <p className="font-extenda50 text-gray-800 dark:text-gray-300 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl extraTight">
              I'M
            </p>
          </div>
          <p className="font-extenda30  text-blue-700 dark:text-blue-500 sm:dark:text-blue-700 text-7xl sm:text-6xl md:text-9xl lg:text-8xl xl:text-9xl extraTight ">
            &lt;SUDIP MANDAL&gt;
          </p>
          <div className="flex flex-row justify-around ">
            <p className="font-extenda10 text-black dark:text-gray-100 text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex items-end extraTight z-10">
              A
            </p>
            <p rel="preload" className="font-extenda90 text-gray-600 dark:text-gray-500 sm:text-gray-600 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl extraTight z-10">
              WEB <br /> DEVELOPER
            </p>
          </div>
        </div>
        <div className="justify-center items-center text-center font-light text-sm sm:text-sm md:text-base lg:text-xl w-5/6 sm:w-6/6 md:w-4/6 my-2 sm:my-8 text-black dark:text-gray-300">
          Nice to meet you. Welcome to my portfolio, Let’s connect and discuss how we can make an impact
          together!
        </div>

        <button className="border-solid border-2   border-[#2e6dffbd]   hover:border-double hover:border-4  p-1 sm:p-2 rounded-sm text-gray-800 dark:text-gray-100 font-light text-sm tracking-widest">
          <a href={Resume} target="_blank">My Resume</a>
        </button>
      </div>
      <div className="block sm:hidden absolute rounded-full translate-x-[10%] translate-y-[70%] w-[19rem] h-[19rem] object-contain overflow-hidden  bg-blue-300 dark:bg-blue-900 z-0"></div>
      {/* <div className="block sm:hidden w-1 h-40 bg-gray-900">

      </div> */}
    </div>
    

    
  );
};


export default Home;
