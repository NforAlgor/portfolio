import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          Contact <span className="text-green-500">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Let's Build Something Great
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-8 mb-10 transition-colors">
              I am open to graduate opportunities, internships, freelance
              projects, and collaborations in Software Engineering, Artificial
              Intelligence, Machine Learning, and Full Stack Development.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <FaEnvelope className="text-green-500" />
                <a
                  href="mailto:nforalgor@gmail.com"
                  className="hover:text-green-500 transition-colors"
                >
                  nforalgor@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-5">
                <FaPhone className="text-green-500" />
                <a
                  href="tel:+237675357012"
                  className="hover:text-green-500 transition-colors"
                >
                  +237 675 357 012
                </a>
              </div>
              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-green-500" />
                <p>Cameroon</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-green-500 focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center gap-3"
            >
              <FaPaperPlane />
              Send Message
            </button>
            {submitted && (
              <p className="text-green-500 font-medium">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
