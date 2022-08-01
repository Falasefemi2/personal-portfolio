import React from "react";
import GPT3 from "../assets/GPT3.PNG";
import CRUD from "../assets/CrudClone.PNG";
import AGENCY from "../assets/AgencyWebsite.PNG";
import CAR from "../assets/CarWebsite.PNG";
import DASHBOARD from "../assets/dashboard1.PNG";
import RESTURANT from "../assets/ReactResturant.PNG";
import SOCIAL from "../assets/SocialBook.PNG";
import STARBUCKS from "../assets/StarBucks.PNG";

const Works = () => {
  return (
    <div className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full pb-14">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent works</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${CRUD})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                CRUD WEBSITE
              </span>
              <div className="pt-8 text-center">
                <a href="https://falasefemi2.github.io/Crud-Clone/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold lext-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Falasefemi2/Crud-Clone">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${GPT3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                GPT3 WEBSITE
              </span>
              <div className="pt-8 text-center">
                <a href="https://falasefemi2.github.io/WhatGpt3/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold lext-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Falasefemi2/WhatGpt3">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${AGENCY})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                AGENCY WEBSITE
              </span>
              <div className="pt-8 text-center">
                <a href="https://falasefemi2.github.io/My-AgencyWebsite/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold lext-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Falasefemi2/My-AgencyWebsite">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${CAR})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                CAR WEBSITE
              </span>
              <div className="pt-8 text-center">
                <a href="https://falasefemi2.github.io/CarWebsite/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold lext-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Falasefemi2/CarWebsite">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${RESTURANT})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                RESTURANT WEBSITE
              </span>
              <div className="pt-8 text-center">
                <a href="https://falasefemi2.github.io/React-Resturant-Website/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold lext-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Falasefemi2/React-Resturant-Website">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${DASHBOARD})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                DASHBOARD
              </span>
              <div className="pt-8 text-center">
                <a href="https://myreactdashboard.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold lext-lg">
                    Demo
                  </button>
                </a>
                <a href="https://falasefemi2.github.io/Dashboard/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${SOCIAL})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                SOCIAL BOOK
              </span>
              <div className="pt-8 text-center">
                <a href="https://falasefemi2.github.io/My-Social-Book/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold lext-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Falasefemi2/My-Social-Book">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${STARBUCKS})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                STARBUCKS WEBSITE
              </span>
              <div className="pt-8 text-center">
                <a href="https://projectsstarbucks.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold lext-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Falasefemi2/Starbucks-Clone-HTML-CSS-JAVASCRIPT">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
