import { Code2, GitBranch, Layers, Lightbulb } from "lucide-react";

export default function About() {
  const strengths = [
    {
      icon: <Lightbulb className="text-blue-600" size={32} />,
      title: "Problem Solving",
      description:
        "Analytical approach to breaking down complex challenges into elegant solutions",
    },
    {
      icon: <Code2 className="text-blue-600" size={32} />,
      title: "Clean Code Practices",
      description:
        "Writing maintainable, readable, and well-documented code following industry standards",
    },
    {
      icon: <GitBranch className="text-blue-600" size={32} />,
      title: "Version Control",
      description:
        "Proficient with Git workflows, branching strategies, and collaborative development",
    },
    {
      icon: <Layers className="text-blue-600" size={32} />,
      title: "Full Stack Development",
      description:
        "Comprehensive understanding of both frontend and backend technologies",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            I'm a recent Communications and Computer Networks graduate with a
            passion for creating innovative software solutions. Throughout my
            academic journey and personal projects, I've developed a strong
            foundation in software engineering principles, data structures, and
            algorithms. My technical interests span across web development,
            database design, and building scalable applications that solve
            real-world problems. I'm constantly learning new technologies and
            staying updated with industry trends to deliver modern, efficient
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="mb-4">{strength.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {strength.title}
              </h3>
              <p className="text-gray-600 text-sm">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
