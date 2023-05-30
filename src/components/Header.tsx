import { BiMoon } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const handleClick = () => {
        setToggle((prev) => !prev);
    };

    return (
        <header className="bg-white shadow-lg">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between py-6 max-w-screen-xl mx-auto">
                    {/* desktop view */}
                    <div className="flex items-center font-extrabold text-2xl text-indigo-500">
                        FEMI
                    </div>
                    <ul className="hidden md:flex space-x-4">
                        <li className="font-semibold capitalize text-lg">Projects</li>
                        <li className="font-semibold capitalize text-lg">About Me</li>
                        <li className="font-semibold capitalize text-lg">Contacts</li>
                    </ul>
                    <div className="hidden md:flex space-x-8">
                        <div className="text-md font-semibold bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300">
                            Hire Me
                        </div>
                        <div className="flex items-center justify-end">
                            <BiMoon className="text-gray-600" size={24} />
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
                        <li className="font-semibold capitalize text-lg">Projects</li>
                        <li className="font-semibold capitalize text-lg">About Me</li>
                        <li className="font-semibold capitalize text-lg">Contacts</li>
                        <div className="text-md font-semibold bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300">
                            Hire Me
                        </div>
                    </ul>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;
