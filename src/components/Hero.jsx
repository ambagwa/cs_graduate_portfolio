import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Eugene Nixon Ambagwa
          </h1>
          <p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate problem solver with a strong foundation in software
            development. I build scalable, user-centric applications using
            modern technologies and best practices. Experienced in both frontend
            and backend development, with a focus on clean code and efficient
            solutions that make a real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all"
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/ambagwa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/ambagwa-eugene/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:ambagwaeugene09@gmail.com"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-blue-600" size={32} />
        </div>
      </div>
    </section>
  );
}
