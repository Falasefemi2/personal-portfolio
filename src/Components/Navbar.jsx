import React, { useState } from "react";
import Logo from "../assets/FEMI.jpg";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  
  return (
    <div className="fixed h-[80px] w-full flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img className="w-10" src={Logo} alt="FM LOGO" />
      </div>

      <ul className="hidden md:flex">
        <li className="hover:border-b-2 border-pink-600">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:border-b-2 border-pink-600">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:border-b-2 border-pink-600">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="hover:border-b-2 border-pink-600">
          <Link to="/works">Works</Link>
        </li>
        <li className="hover:border-b-2 border-pink-600">
          <Link to="/contacts">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 mr-2">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center scale-up-top"
        }
      >
        <li className="hover:border-b-2 border-pink-600 text-4xl py-2">
          <Link to="/" onClick={handleClose}>Home</Link>
        </li>
        <li className="hover:border-b-2 border-pink-600 text-4xl py-2">
          <Link to="/about" onClick={handleClose}>About</Link>
        </li>
        <li className="hover:border-b-2 border-pink-600 text-4xl py-2">
          <Link to="/skills" onClick={handleClose}>Skills</Link>
        </li>
        <li className="hover:border-b-2 border-pink-600 text-4xl py-2">
          <Link to="/works" onClick={handleClose}>Works</Link>
        </li>
        <li className="hover:border-b-2 border-pink-600 text-4xl py-2">
          <Link to="/contacts" onClick={handleClose}>Contact</Link>
        </li>
      </ul>

      {/* social icon */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              href="www.linkedin.com/in/falase-femi-91121b227"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
              target="_blank"
              href="https://github.com/Falasefemi2"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600">
            <a
              target="_blank"
              href="https://femifalase228@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              href="https://twitter.com/FalaseScript"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
