import { AiOutlineMail } from "react-icons/ai"
import { GrLocation } from "react-icons/gr"
import {BsTelephonePlus} from "react-icons/bs"
import emailjs from "emailjs-com"
import { toast } from "react-hot-toast"


const Contacts = () => {
    
    function sendEmail(e: any) {
        e.preventDefault();
      
        emailjs.sendForm('service_0rqshaf', 'template_wj8h6wc', e.target, '9ZstpyXUm1kS8a33v')
          .then((result) => {
            console.log(result.text);
            toast.success('Message sent!'); 

            // Optionally, show a success message to the user
          }, (error) => {
            console.log(error.text);
            // Optionally, show an error message to the user
            toast.error('Failed to send message.'); // Display error toast
          });
      }
    return (
        <div className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10">
            <div className="w-full lg:w-1/2">
                <div className="leading-loose">
                    <form className="max-w-xl m-4 p-6 md:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left" onSubmit={sendEmail}>
                        <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">Contact Form</p>
                        <div className="mb-4">
                            <label className="block text-lg text-primary-dark dark:text-primary-light mb-1">Full Name</label>
                            <input type="text" className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" placeholder="Your Name" aria-label="Name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg text-primary-dark dark:text-primary-light mb-1">Email</label>
                            <input type="text" className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" placeholder="Your Name" aria-label="Email" required />
                        </div>
                        <div className="mt-6">
                            <label className="block text-lg text-primary-dark dark:text-primary-light mb-1">Message</label>
                            <textarea className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="message" name="message" cols={14} rows={6} aria-label="Message" spellCheck="false"></textarea>
                        </div>
                        <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                <div className="text-left max-w-xl px-6">
                    <h2 className="text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">Contact details</h2>
                    <ul className="">
                        <li className="flex">
                            <GrLocation size={24} className="text-2xl text-gray-500 dark:text-gray-400 mr-4" />
                            <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">37 Oba Ni Jesu Ijoko, Ogun State, Nigeria</span>
                        </li>
                        <li className="flex">
                            <AiOutlineMail size={24} className="text-2xl text-gray-500 dark:text-gray-400 mr-4" />
                            <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">femifalase228@gmail.com</span>
                        </li>
                        <li className="flex">
                            <BsTelephonePlus size={24} className="text-2xl text-gray-500 dark:text-gray-400 mr-4" />
                            <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">+234 7013329953</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Contacts

