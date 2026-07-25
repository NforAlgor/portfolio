import skills from "../data/Skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills" className="py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-16">
          Technical <span className="text-green-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-green-500">
                {group.category}
              </h3>

              {group.items.map((skill) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-3 mt-2 transition-colors">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="bg-green-500 h-3 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
