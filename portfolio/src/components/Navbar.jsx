import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "services",
    "experience",
    "education",
    "projects",
    "contact",
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="text-green-500">Nfor</span> Algor
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-600 dark:text-gray-300 transition-colors">
          {links.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                className="cursor-pointer hover:text-green-500 dark:hover:text-green-400 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-5 text-2xl">
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

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menu && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
          {links.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              onClick={() => setMenu(false)}
              className="block py-4 px-6 border-b border-slate-200 dark:border-slate-800 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <div className="flex gap-5 px-6 py-4 text-2xl">
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
