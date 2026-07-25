import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import placeholder from "../assets/project-placeholder.png";

const projects = [
  {
    title: "Student Fee Booking System",
    image: placeholder,
    description:
      "A full-stack web application that enables University students to reserve bank payment slots, reducing congestion during fee payment periods. Features include authentication, PDF ticket generation, notifications, dashboards, and role-based access control.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/NforAlgor",
    demo: "#",
  },
  {
    title: "Student Productivity Prediction",
    image: placeholder,
    description:
      "Machine Learning model for predicting student productivity using Python, Scikit-Learn, and data visualization techniques.",
    technologies: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib",
    ],
    github: "https://github.com/NforAlgor",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    image: placeholder,
    description:
      "Modern portfolio website built with React, Tailwind CSS, and Framer Motion featuring animations and responsive layouts.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/NforAlgor",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          Featured <span className="text-green-500">Projects</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-7 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 my-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5 text-xl">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="hover:text-green-500 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="hover:text-green-500 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
