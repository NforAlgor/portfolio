import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
