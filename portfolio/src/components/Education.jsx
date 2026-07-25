import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-16">
          <span className="text-green-500">Education</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-10 transition-colors duration-300"
        >
          <p className="text-green-500 text-sm font-medium mb-1">
            2023 &mdash; 2026
          </p>
          <h3 className="text-2xl font-bold">
            Bachelor of Engineering in Software Engineering
          </h3>
          <p className="text-green-500 mt-2 font-medium">
            University of Buea
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400 leading-8 transition-colors">
            Focused on Software Engineering principles, Software Construction,
            Machine Learning, Artificial Intelligence, Data Mining, Mobile
            Development, Web Development, Cloud Computing, Database Systems,
            Networking, and Software Project Management.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
