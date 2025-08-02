//import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Crypto Price Tracker',
      description: 'A clean and responsive web app to track real-time cryptocurrency prices. Focused on layout balance, typography, color contrast, and dark/light mode experience.Deployed using Vercel — built with React.js and styled-components.',
      image: 'https://i.ibb.co/DPFnJyH7/Screenshot-2025-08-01-at-22-31-34-Crypto-Tracker.png',
      // image: 'https://i.ibb.co/Pv58ynN1/Screenshot-2025-08-01-at-22-31-43-Crypto-Tracker.png',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'CoinGecko API', 'Vercel'],
      github: 'https://github.com/rohan-kumrawat/crypto-tracker',
      live: 'https://crypto-tracker-seven-pearl.vercel.app/',
      featured: true
    },
    {
      title: 'Recipe Suggestion App',
      description: 'A responsive web application that suggests recipes based on ingredients entered by the user. It fetches real-time data using the Spoonacular API and displays detailed recipes including ingredients, preparation steps, and nutritional info. Built with React and TypeScript, the app ensures a smooth and intuitive user experience across all devices.',
      image: 'https://i.ibb.co/sdPhbWyK/Screenshot-2025-08-02-at-16-01-24-Modern-Meal-Suggestion-App-with-Spoonacular-API.png',
      technologies: ['React', 'TypeScript', 'Spoonacular API', 'Tailwind CSS', 'Vercel', 'Vite'],
      github: 'https://github.com/rohan-kumrawat/meal-suggestion',
      live: 'https://meal-suggestion-blue.vercel.app/',
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://i.ibb.co/DfW5rNcS/Screenshot-2025-08-02-at-16-21-47-Task-Management-App.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/rohan-kumrawat/task-management-app',
      live: 'https://task-management-app-beige-nine.vercel.app/',
      featured: true
    },
    {
      title: 'Unsplash Image Search',
      description: 'A responsive image search application that allows users to explore high-quality images from the Unsplash API based on search queries. Users can view, download, and browse curated image results in a clean UI built with React and styled using Tailwind CSS.',
      image: 'https://i.ibb.co/cKm6RCFL/Screenshot-2025-08-02-at-16-31-41-React-App.png',
      technologies: ['React', 'Tailwind CSS', 'Unsplash API', 'Vercel'],
      github: 'https://github.com/rohan-kumrawat/Unsplash-image-search',
      live: 'https://unsplash-image-search-cyan-omega.vercel.app/',
      featured: false
    },
    {
      title: 'Blog CMS',
      description: 'A content management system for blogs with markdown support, SEO optimization, and user role management.',
      image: 'https://i.ibb.co/whq4dVy6/Screenshot-2025-08-02-at-20-28-22-Blog-CMS-Modern-Content-Management-System.png',
      technologies: ['React', 'Notify', 'Tailwind CSS'],
      github: 'https://github.com/rohan-kumrawat/blog-cms',
      live: 'https://calm-dango-dcebda.netlify.app/',
      featured: false
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness tracking application with workout logging, progress tracking, and social features.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
      technologies: ['React Native', 'Redux', 'SQLite', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-300">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-purple-400 rounded text-xs border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;