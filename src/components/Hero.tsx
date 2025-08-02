//import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white mb-2">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Rohan Kumrawat
              </span>
            </h1>
            <div className="mt-6 text-xl sm:text-2xl text-gray-300 font-light">
              <span className="block">Full Stack Developer</span>
              <span className="block text-lg mt-2 text-gray-400">
                a detail-focused creative enthusiast and web developer with a strong eye for design quality. I specialize in reviewing UI layouts, web visuals, and ensuring creative consistency across projects.
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            
            📍 Based in Indore, India | Open to remote opportunities
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              View Work
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:alex@example.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;