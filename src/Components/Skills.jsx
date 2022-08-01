import React from "react";
import HTML from "../assets/html.png";
import Tailwind from "../assets/tailwind.png";
import Framework from "../assets/react.png";
import Javascript from "../assets/javascript.png";
import Github from "../assets/github.png";
import Css from "../assets/css.png";

const Skills = () => {
  return (
    <div className="bg-[#0a192f] w-full h-screen text-gray-400">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Skills
          </p>
          <p className="py-4">Technologies i have worked with</p>
        </div>
        <div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={HTML} alt="html" className="w-20 mx-auto" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Css} alt="css" className="w-20 mx-auto" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Javascript} alt="Javascript" className="w-20 mx-auto" />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Framework} alt="react" className="w-20 mx-auto" />
              <p className="my-4">REACT JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Github} alt="Github" className="w-20 mx-auto" />
              <p className="my-4">GITHUB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Tailwind} alt="Tailwind" className="w-20 mx-auto" />
              <p className="my-4">TAILWIND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
