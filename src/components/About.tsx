import React from 'react';
import { MapPin, GraduationCap, Heart, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { containerRef: competenciesRef, visibleItems: competenciesVisible } = useStaggeredAnimation(4, 150);

  const competencies = [
    { icon: Heart, label: 'Detail-Oriented', description: 'Meticulous attention to code quality and user experience' },
    { icon: Lightbulb, label: 'Creative Problem Solver', description: 'Innovative approaches to complex technical challenges' },
    { icon: Users, label: 'Team Collaborator', description: 'Strong communication and teamwork skills' },
    { icon: TrendingUp, label: 'Continuous Learner', description: 'Always exploring new technologies and methodologies' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 delay-300 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <img 
                  src="/WhatsApp Image 2025-06-28 at 21.00.35 copy.jpeg" 
                  alt="Tejas Raykar"
                  className="w-full h-full rounded-full object-cover border-4 border-white/50 hover:scale-105 transition-transform duration-500"
                  style={{ 
                    objectPosition: 'center 88%', 
                    transform: 'scale(1.45)',
                    objectFit: 'cover'
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/10 via-transparent to-purple-600/10"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg rotate-12 animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg rotate-45 animate-bounce shadow-lg"></div>
              <div className="absolute top-10 -right-8 w-6 h-6 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute bottom-20 -left-8 w-4 h-4 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full animate-ping shadow-lg"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue-600 mb-4 bg-blue-50/50 backdrop-blur-sm p-3 rounded-lg hover:bg-blue-50/70 transition-colors duration-300">
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">MIT ADT University, Pune</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 mb-6 bg-gray-50/50 backdrop-blur-sm p-3 rounded-lg hover:bg-gray-50/70 transition-colors duration-300">
              <MapPin className="w-5 h-5" />
              <span>Pune, Maharashtra, India</span>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/70 transition-all duration-300">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                I'm a passionate Computer Science student with demonstrated expertise in Java programming and full-stack development. 
                My journey in technology is driven by a desire to create meaningful digital solutions that make a real impact.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                With proven experience in UI/UX design principles, competitive hackathon participation, and industry-recognized 
                certifications from Oracle and Google, I bring both technical skills and creative thinking to every project I undertake.
              </p>
            </div>
          </div>
        </div>

        <div 
          ref={competenciesRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {competencies.map((competency, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/20 group ${
                competenciesVisible[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <competency.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{competency.label}</h3>
              <p className="text-gray-600 text-sm">{competency.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;