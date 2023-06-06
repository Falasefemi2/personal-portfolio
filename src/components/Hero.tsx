import { AiOutlineCloudDownload } from "react-icons/ai"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="container mx-auto">
            <section className="flex flex-col md:flex-row md:justify-between items-center mt-12 md:mt-2">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-1/3 text-left">
                    <h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">Hi, I am Femi</h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">A FrontEnd Developer</motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex justify-center md:block">
                        <a href="https://drive.google.com/file/d/1NX67exiDrY4L6PMBPAdVdacvztakVSI4/view?usp=drive_link" className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500">
                            <AiOutlineCloudDownload />
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                                className="ml-4 text-sm sm:text-lg font-general-medium duration-100">Download CV</motion.span>
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-2/3 text-right mt-8 md:mt-0 float-right">
                    <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        src="https://react-tailwindcss-portfolio.netlify.app/static/media/developer.ef097afb.svg" alt="developer" />
                </motion.div>
            </section>
        </div>
    )
}

export default Hero