import { GraduationCap, Briefcase, BookOpen } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor's Degree in Communication and Computer Networks
                </h3>
                <p className="text-blue-600 font-semibold mb-4">2021 - 2025</p>
                <p className="text-gray-700 mb-4">
                  Graduated with a strong foundation in computer science
                  fundamentals, software engineering, and modern development
                  practices.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen size={18} className="text-blue-600" />
                    Relevant Coursework
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                    <li>• Data Structures & Algorithms</li>
                    <li>• Web Development</li>
                    <li>• Database Management Systems</li>
                    <li>• Software Engineering</li>
                    <li>• Object-Oriented Programming</li>
                    <li>• Computer Networks</li>
                    <li>• Operating Systems</li>
                    <li>• Mobile Application Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Briefcase className="text-green-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Software Development Experience - Ministry of ICT and the
                  Digital Economy
                </h3>
                <p className="text-gray-700 mb-4">
                  Hands-on experience building full-stack applications,
                  implementing RESTful APIs, and collaborating on projects using
                  version control systems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Collaborative Development:</strong> Extensive
                      experience with Git and GitHub for version control, code
                      reviews, and team collaboration
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Full-Stack Projects:</strong> Developed multiple
                      end-to-end applications using modern frameworks and
                      databases
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>API Development:</strong> Created and consumed
                      RESTful APIs with proper authentication and data
                      validation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
