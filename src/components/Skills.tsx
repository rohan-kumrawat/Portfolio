//import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Angular', level: 80 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'JWT Authentication', level: 95 },
        { name: 'Cloud Deployment', level: 95 }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Mongoose', level: 70 },
        { name: 'Firebase', level: 75 },
        { name: 'SQL Querying & Join', level: 70 }
      ]
    },
    {
      title: 'Platform & Tools',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Vercel', level: 95 },
        { name: 'Linux', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 }
      ]
    },
    {
      title: 'Other Tools',
      skills: [
        { name: 'Figma', level: 'Beginner' },
        { name: 'Canva', level: 'Beginner' },
        { name: 'Google Slides', level: 'Intermediate' },
        { name: 'PowerPoint', level: 'Intermediate' },
        { name: 'Photoshop / Illustrator', level: 'Beginner' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here's a breakdown of the technologies and tools I work with regularly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    {typeof skill.level === 'number' ? (
                      <>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-purple-400 text-sm font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: `${skill.level}%`,
                                animation: `fillBar 1.5s ease-out ${skillIndex * 0.1}s both`
                              }}
                            ></div>
                          </div>
                          <div
                            className="absolute top-0 h-full bg-gradient-to-r from-purple-400/50 to-blue-400/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </>
                    ) : (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-blue-400 text-sm font-semibold px-2 py-0.5 bg-gray-700 rounded-full border border-blue-400">
                          {skill.level}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-300 mb-8">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'HTML5', 'CSS3', 'Webpack', 'Vite', 'PayPal', 'Socket.io', 'JWT', 'OAuth', 'rendering', 'RESTful APIs', 'Agile Methodologies','CI/CD', 'Unit Testing', 'Responsive Design', 'Cross-Browser Compatibility', 'Performance Optimization', 'SEO Best Practices'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-800 text-gray-300 rounded-full border border-gray-600 hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
