import { GrClose } from "react-icons/gr"
import emailjs from 'emailjs-com';


type closeProp ={
    closeModal: () => void
}

const Hire = ({ closeModal }: closeProp) => {
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0rqshaf', 'template_aa0iflm', e.target as HTMLFormElement, '9ZstpyXUm1kS8a33v')
          .then((result) => {
            console.log(result.text);
            // Add any success handling logic here
          }, (error) => {
            console.log(error.text);
            // Add any error handling logic here
          });
    
        closeModal();
      };
    
  return (
    <div>
        <div className="fixed inset-0 z-30 transition-all duration-500">
            <div className="bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>
            <main className="flex flex-col items-center justify-center h-full w-full">
                <div className="flex items-center z-30">
                    <div className="max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
                        <div className="flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
                            <h5 className=" text-primary-dark dark:text-primary-light text-xl">What project are you looking for?</h5>
                            <button className="px-4 font-bold text-primary-dark dark:text-primary-light" onClick={closeModal}>
                                <GrClose />
                            </button>
                        </div>
                        <div className="p-5 w-full h-full">
                            <form className="max-w-xl m-4 text-left" onSubmit={sendEmail}>
                                <div>
                                    <input type="text" className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light" id="name" name="name" placeholder="Name" aria-label="Name" />
                                </div>
                                <div className="mt-6">
                                <input type="text" className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light" id="email" name="email" placeholder="Email" aria-label="Email" />
                                </div>
                                <div className="mt-6">
                                    <select name="subject" id="subject" typeof="text" aria-label="Project Category" className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light">
                                        <option className=" text-base md:text-lg">Web Application</option>
                                        <option className=" text-base md:text-lg">Mobile Application</option>
                                    </select>
                                </div>
                                <div className="mt-6">
                                    <textarea id="message" name="message" cols={14} rows={6} aria-label="Details" placeholder="Project description" spellCheck={false} className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"></textarea>
                                </div>
                                <div className="mt-6 pb-4 md:pb-1">
                                    <span typeof="submit" className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500" aria-label="Submit Request">
                                        <button>Send Request</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className="mt-2 md:mt-0 py-5 px-8 text-right">
                            <span typeof="submit" className="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500" aria-label="Close Modal" onClick={closeModal}>
                                <button>Close</button>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Hire