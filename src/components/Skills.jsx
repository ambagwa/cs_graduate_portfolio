export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'PHP', 'Java'],
      color: 'blue',
    },
    {
      category: 'Frontend',
      skills: ['React', 'HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind CSS'],
      color: 'cyan',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Laravel', 'REST APIs', 'JWT Authentication'],
      color: 'green',
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'MySQL'],
      color: 'yellow',
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
      color: 'gray',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      gray: 'bg-gray-100 text-gray-700 border-gray-200',
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border ${getColorClasses(
                      category.color
                    )} transition-all hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
