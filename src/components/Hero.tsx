import React from 'react';
import { ChevronDown, Mail, Phone, Sparkles, Code, Palette } from 'lucide-react';

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-violet-50 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-32 animate-bounce">
          <Code className="w-8 h-8 text-blue-500/30" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce" style={{ animationDelay: '1s' }}>
          <Palette className="w-6 h-6 text-purple-500/30" />
        </div>
        <div className="absolute top-1/2 right-20 animate-bounce" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-7 h-7 text-pink-500/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 shadow-lg animate-fade-in">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Welcome to my portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            <span className="block">Hi, I'm</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 animate-gradient">
              Tejas Raykar
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Computer Science Student & Full-Stack Developer
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Building the future through code and design. Passionate about creating impactful digital products that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={handleScrollToProjects}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={handleScrollToContact}
              className="border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-border text-transparent bg-clip-text px-8 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transform hover:-translate-y-1 transition-all duration-200 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #3b82f6, #8b5cf6) border-box',
                color: '#3b82f6'
              }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>
          </div>

          <div className="flex justify-center items-center gap-6 text-gray-500 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm">raykarejas05@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-sm">+91 80103 13375</span>
            </div>
          </div>

          <div className="animate-bounce" style={{ animationDelay: '1s' }}>
            <ChevronDown className="w-6 h-6 text-gray-400 mx-auto cursor-pointer hover:text-blue-600 transition-colors" onClick={handleScrollToProjects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;