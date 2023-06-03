import { useQuery } from "@tanstack/react-query";
import { client, urlFor } from "../client";


const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

type Project = {
    description: string;
    githubLink: string;
    image: {
        _type: 'image';
        asset: any; // You can specify the type for the `asset` property if you have the information
    };
    liveSite: string;
    title: string;
    _createdAt?: string;
    _id: string;
    _rev?: string;
    _type?: 'project';
    _updatedAt?: string;
};

const fetchProjects = async () => {
    const projects = await client.fetch(`*[_type == "project"]`);
    return projects;
};

const Projects = () => {
    const { data: projects } = useQuery<Project[], Error>(["projects"], fetchProjects);
    console.log(projects);

    return (
        <section className="py-5 md:py-10 mt-5 md:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Projects portfolio</p>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 md:gap-10">
                    {projects && projects.map((project) => (
                        <div key={project._id} className="border border-gray-200 rounded-md p-4">
                            <img src={urlFor(project.image)} alt={project.title} className="w-full h-auto mb-4" />
                            <h2 className="font-medium text-lg mb-2">{project.title}</h2>
                            <p className="text-gray-500 mb-2">{truncateString(project.description, 100)}</p>
                            <div className="flex justify-between">
                                <button className="text-md font-semibold bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300">
                                    <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                                        Live Site
                                    </a>
                                </button>
                                <button className="text-md font-semibold bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                                        GitHub
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
