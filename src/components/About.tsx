import React from 'react';
import { Code, Server, Database, EyeIcon } from 'lucide-react';

const About = () => {
  const specialties = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Building robust APIs and server-side applications using Node.js, Express, and cloud platforms.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Design',
      description: 'Designing and optimizing databases with MySQL, MongoDB, and implementing efficient data structures.'
    },
    {
      icon: <EyeIcon className="w-8 h-8" />,
      title: 'Creative Quality Review',
      description: 'Reviewing visual designs, layouts, and UI elements for accuracy, clarity, and consistency using tools like Figma, Canva, and Google Slides. Focused on design quality, instruction adherence, and user experience.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
                  I’m a freelance web developer with a passion for visual clarity, user experience, and creative quality.
    Over the past year, I’ve worked on full-stack projects, focusing not just on functionality, but also on how the designs look, feel, and communicate.
    

   
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
             Now, I’m expanding into creative quality review roles — where I can apply my attention to detail, design sense, and platform experience to help improve user-facing content for global brands.
              Tools I’m currently learning: Figma, Canva, Adobe Photoshop
    Traits: Organized | Reliable | Eager to Learn | Quality-Driven.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-purple-400 border border-gray-700">
                1+ Years Experience
              </span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-blue-400 border border-gray-700">
                3+ Projects Completed
              </span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-green-400 border border-gray-700">
                Remote Friendly
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold">
                  RK
                </div>
                <h3 className="text-2xl font-bold mb-2">Rohan Kumrawat</h3>
                <p className="text-purple-400 mb-4">Full Stack Developer</p>
                <p className="text-gray-300 text-sm">
                  "Turning complex problems into elegant solutions"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-purple-400 mb-4 group-hover:text-blue-400 transition-colors">
                {specialty.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {specialty.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;