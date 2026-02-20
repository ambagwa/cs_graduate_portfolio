import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'Expense Tracker App',
      description:
        'A full-stack expense tracking application with user authentication, budget management, and data visualization. Features real-time updates and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      github: 'https://github.com/ambagwa/budget-buddy',
      demo: 'https://github.com/ambagwa/budget-buddy',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Model Portfolio',
      description:
        'Professional portfolio website showcasing creative work with smooth animations, image galleries, and contact forms. Built with modern web technologies.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/ambagwa/model-portfolio',
      demo: 'https://ambagwa.github.io/model-portfolio/',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Blog Management System',
      description:
        'Content management platform with rich text editor, user roles, and comment system. Includes admin dashboard for post management and analytics.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/ambagwa/blog-site',
      demo: 'https://blog-site-frontend-1ol0.onrender.com',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Task Management API',
      description:
        'RESTful API for task management with CRUD operations, authentication, and team collaboration features. Fully documented with Postman collection.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
