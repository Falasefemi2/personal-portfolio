import { BiMoon, BiSun } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom"
import Hire from "./Hire";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

const Header = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [isHireOpen, setIsHireOpen] = useState<boolean>(false);
    const [activeTheme, setTheme] = useThemeSwitcher();

    const toggleTheme = () => {
        setTheme(activeTheme === 'dark' ? 'light' : 'dark');
    };


    const handleClick = () => {
        setToggle((prev) => !prev);
    };

    const openHireModal = () => {
        setIsHireOpen(true);
    };

    const closeHireModal = () => {
        setIsHireOpen(false);
    };

    return (
        <header className="bg-white shadow-lg">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between py-6 max-w-screen-xl mx-auto">
                    {/* desktop view */}
                    <Link to="/">
                        <div className="flex items-center font-extrabold text-2xl text-indigo-500">
                            FEMI
                        </div>
                    </Link>
                    <ul className="hidden md:flex space-x-4">
                        <Link to="/projects">
                            <li className="font-semibold capitalize text-lg">Projects</li>
                        </Link>
                        <Link to="/aboutme">
                            <li className="font-semibold capitalize text-lg">About Me</li>
                        </Link>
                        <Link to="/contact">
                            <li className="font-semibold capitalize text-lg">Contacts</li>
                        </Link>
                    </ul>
                    <div className="hidden md:flex space-x-8">
                        <div className="text-md font-semibold bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300 cursor-pointer" onClick={openHireModal}>
                            Hire Me
                        </div>
                        {isHireOpen && <Hire closeModal={closeHireModal} />}
                        <div className="flex items-center justify-end">
                            <div className="cursor-pointer" onClick={toggleTheme}>
                                {activeTheme === 'dark' ? (
                                    <BiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
                                ) : (
                                    <BiSun className="text-gray-200 hover:text-gray-50 text-xl" />
                                )}
                            </div>
                        </div>
                    </div>
                    {/* mobile view */}
                    <div className="md:hidden flex items-center space-x-2">
                        <BiMoon className="text-gray-600" size={24} />
                        <div onClick={handleClick} className="cursor-pointer">
                            {toggle ? (
                                <GrClose className="text-gray-600" size={24} />
                            ) : (
                                <GiHamburgerMenu className="text-gray-600" size={24} />
                            )}
                        </div>
                    </div>
                    <ul
                        className={`md:hidden mt-4 space-y-2 ${toggle ? "block" : "hidden"
                            } p-6 bg-secondary-light absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl shadow-2xl space-y-6`}
                    >
                        <Link to="/projects">
                            <li className="font-semibold capitalize text-lg py-2">Projects</li>
                        </Link>
                        <Link to="/aboutme">
                            <li className="font-semibold capitalize text-lg py-2">About Me</li>
                        </Link>
                        <Link to="/contact">
                            <li className="font-semibold capitalize text-lg py-2">Contacts</li>
                        </Link>
                        <div className="text-md font-semibold bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300" onClick={openHireModal}>
                            Hire Me
                        </div>
                        {isHireOpen && <Hire closeModal={closeHireModal} />}
                    </ul>

                </div>
            </div>
        </header>
    );
};

export default Header;
