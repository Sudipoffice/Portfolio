import React, { useState } from "react";
import Resume from "../src/assets/files/SudipMandalResume.pdf";

const Contact = () => {
  return (
    <div to="projects" className=" px-20 flex flex-col pt-12 sm:pt-24 md:pt-24 lg:pt-28 xl:pt-28 bg-white dark:bg-gray-900">
      <div className=" flex justify-center text-5xl sm:text-6xl md:text-8xl font-extenda40 text-blue-700">
        {" "}
        ` CONTACT `{" "}
      </div>

      <div className="flex flex-row justify-center">
        <div className="relative mx-0 sm:mx-4">
          <div className="bg-[#f1f1f1] dark:bg-slate-300 flex flex-col-reverse rounded-br-3xl rounded-tl-3xl  p-2 sm:p-6 w-20 sm:w-28 md:w-36 lg:w-44 xl:w-60 h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 m-4 relative z-10">
            <div className="flex flex-col justify-end items-start h-3/5">
              <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-3xl font-extenda50 text-blue-800">Phone</h1>
              <p className="text-xs sm:text-sm md:text-sm xl:text-lg ">+91 7003071143</p>
            </div>
            <div className="flex justify-end items-start h-2/5">
              <img
                className="w-4 sm:w-12 md:w-16 xl:w-24 h-4 sm:h-12 md:h-16 xl:h-24"
                src="https://img.icons8.com/badges/100/phone.png"
                alt="phone"
              />
            </div>
          </div>
          <div className="bg-[#203b6096] dark:bg-[#417aca96] w-20 sm:w-28 md:w-36 lg:w-44 xl:w-60 h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 rounded-br-3xl rounded-tl-4xl absolute right-0 top-0 translate-x-0 translate-y-8 z-0"></div>
        </div>

        <div className="relative mx-0 sm:mx-4 ">
          <div className="bg-[#f1f1f1] dark:bg-slate-300 flex flex-col-reverse sm:py-8 md:py-0 p-4 md:p-4 lg:p-2 xl:p-6 w-28 sm:w-48 md:w-60 lg:w-72 xl:w-96 h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72  m-4 justify-between rounded-br-3xl rounded-tl-3xl relative z-10">
            <div className="flex flex-col p-1 justify-end items-center h-3/5">
              <h1 className="flex text-xl sm:text-2xl md:text-3xl xl:text-3xl font-extenda50 text-blue-800">Email</h1>
              <p className="text-xs sm:text-sm md:text-sm xl:text-lg font-sans break-words w-20 md:w-fit h-36 sm:h-6 ">mandalsudipoffice@gmail.com</p>
            </div>
            <div className="flex justify-end items-start h-2/5">
              <img className="w-4 sm:w-12 md:w-16 xl:w-28 h-4 sm:h-12 md:h-16 xl:h-28"
                src="https://img.icons8.com/carbon-copy/100/email.png"
                
              />
            </div>
          </div>
          <div className="bg-[#203b6096] dark:bg-[#417aca96] w-28 sm:w-48 md:w-60 lg:w-72 xl:w-96 h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 rounded-br-3xl rounded-tl-4xl absolute right-0 top-0 translate-x-0  translate-y-8 z-0"></div>
        </div>

        <div className="relative mx-0 sm:mx-4 ">
          <div className="bg-[#f1f1f1] dark:bg-slate-300 flex flex-col-reverse p-2 sm:p-6 w-20 sm:w-28 md:w-36 lg:w-40 xl:w-56 h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 m-4 justify-center rounded-br-3xl rounded-tl-3xl relative z-10">
            <div className="flex flex-col justify-end items-start h-3/5">
              <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-3xl font-extenda50 text-blue-800">Address</h1>
              <div className="flex flex-row justify-end items-end">
                <p className="text-xs sm:text-sm md:text-sm xl:text-lg font-sans">Kolkata, India</p>
              </div>
            </div>
            <div className="flex justify-end items-start h-2/5">
              <img
                className="w-4 sm:w-12 md:w-16 xl:w-24 h-4 sm:h-12 md:h-16 xl:h-24"
                src="https://img.icons8.com/pulsar-line/96/home.png"
                alt="home"
              />
            </div>
          </div>
          <div className="bg-[#203b6096] dark:bg-[#417aca96] w-20 sm:w-28 md:w-36 lg:w-40 xl:w-56 h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 rounded-br-3xl rounded-tl-4xl absolute right-0 top-0 translate-x-0 translate-y-8 z-0"></div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 sm:mt-20 pb-10">
        <button className=" bg-gray-500 dark:bg-gray-700 dark:hover:bg-blue-800 hover:bg-blue-600 p-2 rounded-full text-white font-light text-xs sm:text-xs md:text-sm tracking-widest font-sans w-24 sm:w-32">
          <a href={Resume} download="SudipMandal">
          <i className="bi bi-download"></i> Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
