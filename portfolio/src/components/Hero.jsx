import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import profile from "../assets/profile-placeholder.jpg";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-green-500 font-semibold mb-4">Hello, I'm</p>

          <h1 className="text-6xl font-black leading-tight">
            Nfor
            <span className="text-green-500"> Algor</span>
          </h1>

          <div className="text-2xl mt-5 font-semibold text-gray-600 dark:text-gray-300 transition-colors">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "Machine Learning Engineer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-gray-500 dark:text-gray-400 leading-8 max-w-xl transition-colors">
            Passionate Software Engineer specializing in Full Stack
            Development, Artificial Intelligence, Machine Learning and
            scalable web applications. I enjoy transforming ideas into
            powerful, user-friendly digital solutions.
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href="#projects"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-600 dark:text-green-400 px-8 py-3 rounded-xl flex items-center gap-3 hover:bg-green-500 hover:text-white transition-colors"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">
            <a
              href="https://github.com/NforAlgor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="hover:text-green-500 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/nfor-algor-5a61622b8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-green-500 blur-3xl opacity-30" />
            <img
              src={profile}
              alt="Nfor Algor - Software Engineer"
              className="relative w-96 h-96 rounded-full border-8 border-green-500 object-cover shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
