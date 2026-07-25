import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaCode,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
  },
  {
    icon: FaBrain,
    title: "AI & ML",
    description: "Building intelligent systems powered by machine learning.",
  },
  {
    icon: FaRocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description: "Working effectively in teams using modern agile practices.",
  },
];

function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-16">
          About <span className="text-green-500">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 leading-8 text-lg mb-6 transition-colors">
              I am a dedicated Software Engineer with a strong foundation in
              Full Stack Development, Artificial Intelligence, and Machine
              Learning. Currently completing my Bachelor of Engineering in
              Software Engineering at the University of Buea.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-8 text-lg mb-6 transition-colors">
              My experience includes building end-to-end web applications,
              integrating RESTful APIs, managing databases, and implementing
              machine learning models. I thrive on solving complex problems and
              creating solutions that make a real impact.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-8 text-lg transition-colors">
              When I'm not coding, I'm exploring new technologies, contributing
              to open-source projects, and staying up-to-date with the latest
              advancements in AI and software engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-green-500/50 transition-colors duration-300"
              >
                <item.icon className="text-green-500 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-6 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
