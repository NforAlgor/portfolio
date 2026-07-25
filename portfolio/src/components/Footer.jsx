import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-10 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Nfor <span className="text-green-500">Algor</span>
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-400 transition-colors">
          Software Engineer &bull; Full Stack Developer &bull; Machine Learning
          Enthusiast
        </p>

        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="https://github.com/NforAlgor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-green-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nfor-algor-5a61622b8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="mt-8 text-gray-400 dark:text-gray-500 transition-colors">
          &copy; {new Date().getFullYear()} Nfor Algor. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
