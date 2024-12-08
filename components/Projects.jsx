import React, { useEffect, useState } from "react";

const Projects = () => {

  const newsFlash = ["https://sudipoffice.github.io/portfolioImages/images/NewsFlash/Home.webp", "https://sudipoffice.github.io/portfolioImages/images/NewsFlash/TopStories.webp", "https://sudipoffice.github.io/portfolioImages/images/NewsFlash/Categories.webp", "https://sudipoffice.github.io/portfolioImages/images/NewsFlash/Videos.webp"]

  const easyEats = ["https://sudipoffice.github.io/portfolioImages/images/EasyEats-AI/Home.webp", "https://sudipoffice.github.io/portfolioImages/images/EasyEats-AI/Trending.webp", "https://sudipoffice.github.io/portfolioImages/images/EasyEats-AI/AIChef.webp", "https://sudipoffice.github.io/portfolioImages/images/EasyEats-AI/Ingredients.webp"]


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=> {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex+1) % newsFlash.length)
    }, 5000);
    return () => clearInterval(interval)
  },[newsFlash.length])

  return (
    <div to="projects" className="pt-20 sm:pt-28 md:pt-36 md:px-[0] lg:px-0 xl:px-20 h-auto flex flex-col bg-gray-200 dark:bg-gray-800">
      <div loading="lazy" className=" flex  justify-end text-5xl sm:text-6xl md:text-8xl font-extenda40 text-blue-700  px-16">
        {" "}
        [ PROJECTS ]
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-0 my-4 sm:my-12 flex-wrap gap-4">

      {/* NewsFlash */}
          <div>
          <div className="relative mx-5 md:mx-12 border-gray-800 dark:border-gray-600 bg-gray-800 border-[4px] md:border-[8px] rounded-t-xl h-auto w-auto ">
            <div className="rounded-lg overflow-hidden h-auto bg-white dark:bg-gray-600">
                <a href="https://newsflash-web.netlify.app/" target="_blank" className=" m-1 flex justify-end items-end hover:opacity-80">
                      <div className="flex flex-row  w-auto h-auto aspect-5/3 rounded-lg transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {newsFlash.map((img,i)=> {
                          return <div key={i} className="flex-shrink-0 aspect-5/3 h-fit w-fit">
                                    <img loading="lazy"
                                      className=" aspect-5/3 h-auto w-full object-cover relative"
                                        src={img}
                                      alt=""
                                          />
                                  </div>
                        })}
                      </div>
                      
                      <p className="bi bi-box-arrow-up-right absolute p-4 cursor-pointer duration-500  hover:scale-125" ></p>
                    </a>
            </div>
          </div>
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-600 rounded-b-xl rounded-t-sm h-[12px] md:h-[21px] w-auto">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
          </div>

     

        {/* EasyEats-AI */}

        <div className="mx-2 md:mx-12">
        <div class="relative  border-gray-800 dark:border-gray-700 bg-gray-800 border-[8px] md:border-[16px] rounded-t-2xl aspect-5/3  h-fit w-fit">
            <div class="rounded-xl overflow-hidden aspect-5/3 h-fit w-fit  bg-white dark:bg-gray-600">
            <a href="https://newsflash-web.netlify.app/" target="_blank" className=" m-1 flex justify-end items-end hover:opacity-80">
                              <div className="flex flex-row  w-fit h-fit aspect-5/3 rounded-lg transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                {easyEats.map((img,i)=> {
                                  return <div key={i} className="flex-shrink-0 h-fit w-fit aspect-5/3">
                                            <img loading="lazy"
                                              className=" aspect-5/3 h-fit w-fit object-cover relative"
                                                src={img}
                                              alt=""
                                                  />
                                          </div>
                                })}
                              </div>
                              
                              <p className="bi bi-box-arrow-up-right absolute p-4 cursor-pointer duration-500  hover:scale-125" ></p>
                            </a>
            </div>
        </div>
        <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[20px] md:h-[42px] w-auto"></div>
        <div class="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>

        </div>


        {/* Countries App */}

<div class="relative mx-[10%] md:mx-[12%] border-gray-800 dark:border-gray-600 bg-gray-800 border-[10px] rounded-[2.5rem] h-auto w-auto">
    <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-600 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-600 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-600 absolute -start-[13px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-600 absolute -end-[13px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden h-auto bg-gray-800">
        <a href="https://countries-tour.netlify.app/" target="_blank" className=" m-1 flex justify-end items-end hover:opacity-80">
          <img loading="lazy"
            className=" h-auto w-auto  object-cover relative"
            src="https://sudipoffice.github.io/portfolioImages/images/countries-app.webp"
            alt=""
          />
          <div>
            
          </div>
          <p className="bi bi-box-arrow-up-right absolute p-4 cursor-pointer duration-500  hover:scale-125 z-10" ></p>
        </a>
    </div>
</div>

       
     {/* Taskify   */}

<div class="relative mx-[20%] md:mx-[25%] my-[4%] border-gray-800 dark:border-gray-700 bg-gray-800 border-[10px] md:border-[12px] rounded-[2.5rem] h-auto w-auto shadow-xl ">
    <div class="w-[45%] h-[2%] bg-gray-800 dark:bg-gray-700 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-700 absolute -start-[13px] md:-start-[15px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-700 absolute -start-[13px] md:-start-[15px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-700 absolute -end-[13px] md:-end-[15px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-auto h-auto bg-gray-700 ">
    <a href="https://sudipoffice.github.io/Taskify/" target="_blank" className=" m-1 flex justify-end items-end hover:opacity-80">
          <img loading="lazy"
            className=" h-auto w-auto aspect-auto object-cover relative"
            src="https://sudipoffice.github.io/portfolioImages/images/taskify.webp"
            alt=""
          />
          <p  className="bi bi-box-arrow-up-right absolute p-4 cursor-pointer duration-500 hover:scale-125"></p>
        </a>
    </div>
</div>


        <a href="https://sudipoffice.github.io/Weather/" target="_blank" className=" m-1 flex justify-end items-end hover:opacity-80">
          <img loading="lazy"
            className=" auto  w-full object-cover relative"
            src="https://sudipoffice.github.io/portfolioImages/images/weather-app.webp"
            alt=""
          />
          <p className="bi bi-box-arrow-up-right absolute p-4 cursor-pointer duration-500 hover:scale-125"></p>
        </a>

        <a href="" target="_blank" className=" m-1 flex justify-end items-end hover:opacity-80">
          <img loading="lazy"
            className=" h-48 sm:h-64 md:h-80 lg:h-92 xl:h-96  w-full object-cover relative"
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
