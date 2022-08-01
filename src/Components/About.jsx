import React from "react";

const About = () => {
  return (
    <div className="bg-[#0a192f] w-full h-screen text-gray-400">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">
              About Me
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Femi, please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building web applications and javascript. I work hard and i care about writing clean code and genuinely love to learn new things. I am looking for the right position in the company where I can contribute to the growth of the company and make a difference in the world. I also want to progress to become a full stack developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
