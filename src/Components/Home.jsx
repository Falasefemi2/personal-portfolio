import React from 'react'
import { FaDownload } from "react-icons/fa"
import Resume from "../assets/Falase_Femi Samuel_Resume_18-03-2022-11-42-48-1.pdf";


const Home = () => {
  return (
    <div className='bg-[#0a192f] w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#DBDFFD]'>Falase Femi</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#0AA1DD]'>I'm a Front End Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a self taught front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications</p>
          <div>
            <a href={Resume} download className='group bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'>Download CV
            <span className='group-hover:rotate-90 duration-300'>
              <FaDownload className='ml-2' />
            </span>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Home