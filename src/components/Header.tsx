const Header = () => {
  return (
    <header className="container mx-auto">
        <div className="flex items-center justify-between py-6 max-w-screen-lg">
            {/* desktop view */}
            <div className="flex items-center font-extrabold text-2xl">FEMI</div>
            <ul className="hidden md:flex space-x-4">
                <li className=" font-semibold capitalize text-lg">Projects</li>
                <li className=" font-semibold capitalize text-lg">About Me</li>
                <li className=" font-semibold capitalize text-lg">Contacts</li>
            </ul>
            <div className="hidden md:flex space-x-8">
                <div className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300">Hire Me</div>
                <div className="flex items-center justify-end">dark</div>
            </div>
            {/* mobile view */}
        </div>
    </header>
  )
}

export default Header