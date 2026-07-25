import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-16">
          <span className="text-green-500">Experience</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-4 border-green-500 pl-8"
        >
          <div className="mb-12">
            <p className="text-green-500 text-sm font-medium mb-1">
              2024 &mdash; Present
            </p>
            <h3 className="text-2xl font-bold">Software Engineering Intern</h3>
            <p className="text-green-500 font-medium">Bitsvalley iLabs</p>
            <p className="text-gray-500 dark:text-gray-400 mt-4 leading-8 transition-colors">
              Worked on web application development, REST API integration,
              database management, UI implementation, debugging, software
              testing, Git version control, and collaborative software
              development using modern engineering practices.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["React", "Node.js", "REST APIs", "MySQL", "Git", "Agile"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
