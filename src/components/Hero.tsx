import {AiOutlineCloudDownload} from "react-icons/ai"

const Hero = () => {
    return (
        <div className="container mx-auto">
            <section className="flex flex-col md:flex-row md:justify-between items-center mt-12 md:mt-2">
                <div className="w-full md:w-1/3 text-left">
                    <h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">Hi, I am Femi</h1>
                    <p className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">A FrontEnd Developer</p>
                    <div className="flex justify-center md:block">
                        <a href="https://drive.google.com/file/d/1NX67exiDrY4L6PMBPAdVdacvztakVSI4/view?usp=drive_link" className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500">
                            <AiOutlineCloudDownload  />
                            <span className="ml-4 text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-right mt-8 md:mt-0 float-right">
                    <img src="https://react-tailwindcss-portfolio.netlify.app/static/media/developer.ef097afb.svg" alt="developer" />
                </div>
            </section>
        </div>
    )
}

export default Hero