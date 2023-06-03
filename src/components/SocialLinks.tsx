import { GrTwitter } from "react-icons/gr"
import { GrGithub } from "react-icons/gr"
import { GrLinkedin } from "react-icons/gr"
import { GrFacebook } from "react-icons/gr"

const SocialLinks = () => {
  return (
    <div className="container mx-auto">
        <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
                <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">Follow Me</p>
                <ul className="flex gap-4 sm:gap-8">
                    <a href="https://twitter.com/FemiFalase" target="_blank" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                        <GrTwitter size={24} />
                    </a>
                    <a href="https://github.com/Falasefemi2" target="_blank" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                        <GrGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/falase-femi-91121b227/" target="_blank" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                        <GrLinkedin size={24} />
                    </a>
                    <a href="https://web.facebook.com/falase.femisamuel/" target="_blank" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                        <GrFacebook size={24} />
                    </a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SocialLinks