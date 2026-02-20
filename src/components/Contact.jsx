import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or
            collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:ambagwaeugene09@gmail.com"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">ambagwaeugene09@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ambagwa-eugene/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <p className="text-gray-600">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/ambagwa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">GitHub</p>
                  <p className="text-gray-600">View my projects</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
