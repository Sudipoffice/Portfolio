import React, { useEffect, useRef, useState } from "react";
import LPU from "../src/assets/images/LPU.webp"
import APS from "../src/assets/images/APS.webp"
import KPS from "../src/assets/images/KPS.webp"

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <div loading="lazy" id="about" className="flex flex-col sm:flex-row pt-20 sm:pt-28 md:pt-36 px-1 sm:px-4 md:px-20 h-fit sm:h-screen bg-slate-200 dark:bg-gray-800">
      <div className="flex flex-col sm:w-3/6 md:w-3/5 ">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extenda40 text-blue-700 z-10"> &lt; ABOUT &gt;</h1>
        <div className={`my-2 sm:my-5 px-4 sm:px-0 text-xs sm:text-sm md:text-lg lg:text-xl font-light text-black dark:text-gray-300 z-10 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
          I'm a passionate and detail-oriented Front-End Web Developer. With a
          solid foundation in HTML, CSS, JavaScript, and modern libraries like
          React, I specialize in creating seamless, responsive, and engaging
          user interfaces. I thrive on translating complex ideas into visually
          appealing, functional, and user-friendly web experiences. I bring a
          blend of creativity and technical proficiency to every project. I'm
          dedicated to continuous learning and staying current with evolving web
          technologies to deliver innovative solutions and ensure the best
          possible performance across all devices.
        </div>
      </div>
      <div className="sm:w-3/6 md:w-2/5">
        <div className="my-4 sm:my-8 flex justify-center text-2xl sm:text-4xl md:text-5xl font-extenda80 text-gray-600 dark:text-gray-400 ">
          EDUCATION
        </div>
        <section ref={sectionRef} className="translate-y-[-14px] transition-opacity duration-700 ">
          <div className="max-w-[1000px] flex flex-wrap relative m-auto before:content-[''] before:absolute before:w-0.5 before:h-full dark:before:bg-gray-500 before:bg-[#2f363e] before:left-[calc(50%_-_1px)] ">

            <div className="w-full relative pb-6 sm:pb-0 md:pb-6 xl:pb-10 last:mb-0 pl-[calc(50%_+_30px)]">
              <div className=" h-4 w-4 bg-blue-700 absolute left-[calc(50%_-_8px)] rounded-[50%] "></div>
              <div  className="flex items-center text-xs sm:text-sm md:text-md lg:text-lg text-blue-700 translate-y-[-14px] ">2019-2023 &nbsp;<img className="w-8 sm:w-12 h-8 sm:h-12" src={LPU} /></div>
              <div  className="">
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-900 dark:text-gray-500 capitalize font-medium ">LOVELY PROFESSIONAL UNIVERSITY</h3>
                <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm md:text-md lg:text-base font-light"> B.Tech Computer Science and Engineering(Hons.)
                </p>
              </div>
            </div>

            <div className="w-full relative pb-6 sm:pb-0 md:pb-6 xl:pb-10 last:mb-0 text-right pr-[calc(50%_+_30px)]">
              <div className=" h-4 w-4 bg-green-600 absolute left-[calc(50%_-_8px)] rounded-[50%] top-1"></div>
              <div className=" flex justify-end text-xs sm:text-sm md:text-md lg:text-lg text-green-600"><img className="w-[3.25em] sm:w-[3.25em] h-8 sm:h-12" src={KPS} />&nbsp; 2019</div>
              <div className="">
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-900 dark:text-gray-500 capitalize font-medium ">KALYANI PUBLIC SCHOOL</h3>
                <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm md:text-md lg:text-base font-light">
                 XII (CBSE)
                </p>
              </div>
            </div>

            <div className="w-full relative pb-6 sm:pb-0 md:pb-2 xl:pb-10 text-xs sm:text-sm md:text-lg lg:text-xl:pb-10 last:mb-0 pl-[calc(50%_+_30px)]">
              <div className=" h-4 w-4 bg-yellow-500 absolute left-[calc(50%_-_8px)] rounded-[50%] "></div>
              <div className="flex items-center text-xs sm:text-sm md:text-md lg:text-lg text-yellow-500 translate-y-[-14px]">2017 &nbsp;<img className="w-8 sm:w-12 h-8 sm:h-12" src={APS} /></div>
              <div className="">
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-900 dark:text-gray-500 capitalize font-medium ">ARMY PUBLIC SCHOOL</h3>
                <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm md:text-md lg:text-base font-light"> X (CBSE)
                </p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
