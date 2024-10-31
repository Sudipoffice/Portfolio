import React from "react";


const Skills = () => {
  const skillNames = ["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS", "Github"];
  return (
    <div to="skills" className=" pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:mb-0  lg:px-0 xl:px-48 h-fit  md:h-screen flex flex-col bg-white dark:bg-gray-900 ">
      <div className="flex justify-center text-5xl sm:text-6xl md:text-8xl font-extenda40 text-blue-700">
        {'{ SKILLS }'}
      </div>
      <div className="flex flex-row justify-center items-center mx-2 sm:mx-4 md:mx-12 lg:mx-16 xl:mx-20  flex-wrap">
        {skillNames.map((skillName, i) => {
            const imagePath = `https://sudipoffice.github.io/portfolioImages/images/${skillName.toLowerCase().replace(" ")}.webp`;
          return (
            <div key={i} className="flex flex-col border-none rounded-xl bg-[#5d5d5ddd] dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-blue-700 w-24 sm:w-28 md:w-40 h-24 sm:h-28 md:h-40 m-2 sm:m-4 md:m-8 text-xs sm:text-sm md:text-md lg:text-base justify-evenly items-center">
              <img className="w-12 justify-center items-center " src={imagePath} alt={`${skillName} image`}/>
              <h1 className="text-white text-xs sm:text-md font-sans font-bold">{skillName}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
