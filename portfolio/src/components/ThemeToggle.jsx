import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-24 right-8 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 p-4 rounded-full transition-colors z-50 shadow-lg"
    >
      {dark ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-slate-700" />
      )}
    </button>
  );
}

export default ThemeToggle;
