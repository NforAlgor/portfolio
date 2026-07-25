import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBrain,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Development",
    description:
      "Building complete web applications with React, Node.js, Express, and modern databases. From concept to deployment, I deliver scalable and maintainable solutions.",
    technologies: ["React", "Node.js", "Express", "REST APIs"],
  },
  {
    icon: FaBrain,
    title: "AI & Machine Learning",
    description:
      "Developing intelligent systems using Python, TensorFlow, and Scikit-Learn. From data analysis to model deployment, I build solutions that learn and adapt.",
    technologies: ["Python", "TensorFlow", "Scikit-Learn", "Pandas"],
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Web Design",
    description:
      "Creating beautiful, responsive interfaces that work seamlessly across all devices. Focused on UX/UI principles and modern design patterns.",
    technologies: ["Tailwind CSS", "Framer Motion", "CSS3", "HTML5"],
  },
  {
    icon: FaDatabase,
    title: "Database Design",
    description:
      "Designing and managing efficient database architectures. Skilled in both SQL and NoSQL databases with a focus on performance and data integrity.",
    technologies: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    icon: FaCloud,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications in cloud environments. Experience with CI/CD pipelines, containerization, and infrastructure management.",
    technologies: ["Docker", "AWS", "GitHub Actions", "Linux"],
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user experiences. Combining aesthetics with functionality to create interfaces users love.",
    technologies: ["Figma", "Canva", "Wireframing", "Prototyping"],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-16">
          My <span className="text-green-500">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-green-500/50 transition-colors duration-300 group"
            >
              <service.icon className="text-green-500 text-4xl mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-7 mb-6 transition-colors">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
