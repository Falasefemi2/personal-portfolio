// import Femi from "../FEMI.jpeg"
import femi from "../FEMI.jpeg"

const AboutMe = () => {
    return (
        <div className="container mx-auto">
            <div className="block md:flex md:gap-10 mt-10 md:mt-20">
                <div className="w-full md:w-1/4 mb-7 md:mb-0">
                    <img src={femi} alt="Femi" className="rounded-lg w-96" />
                </div>
                <div className="w-full md:3/4 text-left">
                    <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                        Hello, I'm Falase Femi, a passionate frontend developer with experience as an intern at Sterling Bank. I have a strong interest in creating engaging and user-friendly web applications that provide seamless experiences for users.

                        During my internship at Sterling Bank, I had the opportunity to work alongside a talented team of developers, where I gained hands-on experience in building and maintaining web applications. I collaborated on various projects, contributing to the development of responsive and visually appealing interfaces using modern frontend technologies.

                        My technical skills include proficiency in HTML, CSS, and JavaScript, along with a solid understanding of frontend frameworks like React. I enjoy utilizing my creativity and problem-solving abilities to design intuitive user interfaces and implement interactive features that enhance user engagement.

                        Beyond technical skills, I am a highly motivated and detail-oriented individual, always eager to learn and explore new technologies and industry trends. I believe in continuous improvement and actively seek out opportunities to expand my knowledge and enhance my skillset.

                        As a frontend developer, I value clean and maintainable code, as well as the importance of teamwork and effective communication. I enjoy collaborating with cross-functional teams, including designers and backend developers, to ensure seamless integration and a cohesive user experience.

                        In addition to my technical expertise, I possess strong analytical and problem-solving skills, allowing me to tackle challenges and find efficient solutions. I am adaptable and thrive in dynamic environments where I can contribute my skills to create impactful digital experiences.

                        I am currently seeking new opportunities to apply and further develop my frontend development skills. If you have any exciting projects or opportunities, I would love to connect and discuss how I can contribute to your team.

                        Thank you for taking the time to learn more about me. I look forward to the possibility of working together and contributing to innovative and user-centric web applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe