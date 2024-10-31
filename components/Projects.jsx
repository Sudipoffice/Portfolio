import React from "react";

const Projects = () => {
  return (
    <div to="projects" className="pt-20 sm:pt-28 md:pt-36 md:px-[0] lg:px-0 xl:px-20 h-auto flex flex-col bg-gray-200 dark:bg-gray-800">
      <div className=" flex  justify-end text-5xl sm:text-6xl md:text-8xl font-extenda40 text-blue-700  px-16">
        {" "}
        [ PROJECTS ]
      </div>

      <div className="flex flex-row justify-center items-center my-4 sm:my-12 flex-wrap">
        <a href="https://countries-tour.netlify.app/" target="_blank" className=" m-1 flex justify-end items-end hover:opacity-80">
          <img
            className=" h-32 sm:h-44 md:h-56 lg:h-80 xl:h-80 w-full object-cover relative"
            src="https://sudipoffice.github.io/portfolioImages/images/countries-app.webp"
            alt=""
          />
          <div>
            
          </div>
          <p className="bi bi-box-arrow-up-right absolute p-4 cursor-pointer duration-500  hover:scale-125" ></p>
        </a>

        <a href="https://sudipoffice.github.io/Taskify/" target="_blank" className=" m-1 flex justify-end items-end hover:opacity-80">
          <img
            className=" h-32 sm:h-44 md:h-56 lg:h-80 xl:h-80  w-full object-cover relative"
            src="https://sudipoffice.github.io/portfolioImages/images/taskify.webp"
            alt=""
          />
          <p  className="bi bi-box-arrow-up-right absolute p-4 cursor-pointer duration-500 hover:scale-125"></p>
        </a>

        <a href="https://sudipoffice.github.io/Weather/" target="_blank" className=" m-1 flex justify-end items-end hover:opacity-80">
          <img
            className=" h-32 sm:h-44 md:h-56 lg:h-80 xl:h-80  w-full object-cover relative"
            src="https://sudipoffice.github.io/portfolioImages/images/weather-app.webp"
            alt=""
          />
          <p className="bi bi-box-arrow-up-right absolute p-4 cursor-pointer duration-500 hover:scale-125"></p>
        </a>

        <a href="" target="_blank" className=" m-1 flex justify-end items-end hover:opacity-80">
          <img
            className=" h-32 sm:h-44 md:h-56 lg:h-80 xl:h-80  w-full object-cover relative"
            src="https://sudipoffice.github.io/portfolioImages/images/calculator.webp"
            alt=""
          />
          <p className="bi bi-box-arrow-up-right absolute p-4 cursor-pointer duration-500 hover:scale-125"></p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
