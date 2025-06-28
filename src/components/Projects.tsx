import React from 'react';
import { ExternalLink, Github, Database, Brain, Car, Code2 } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef: projectsRef, visibleItems: projectsVisible } = useStaggeredAnimation(2, 200);

  const projects = [
    {
      id: 1,
      title: 'Recipe Recommendation System',
      description: 'AI-powered recipe suggestion platform using machine learning algorithms to analyze user preferences and provide personalized meal recommendations.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Flask', 'MySQL', 'HTML/CSS', 'JavaScript', 'ML'],
      features: [
        'User preference analysis',
        'Ingredient-based matching system',
        'Nutritional information display',
        'Personalized recommendations'
      ],
      impact: 'Solves meal planning challenges for busy professionals',
      icon: Brain,
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Car Rental DBMS Simulation',
      description: 'Comprehensive database management system for vehicle rental operations with complete inventory management and customer booking system.',
      image: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', 'MySQL', 'JDBC', 'Swing GUI', 'Database Design'],
      features: [
        'Vehicle inventory management',
        'Customer booking system',
        'Automated billing and invoicing',
        'Comprehensive reporting dashboard'
      ],
      impact: 'Streamlines rental operations and improves customer experience',
      icon: Car,
      status: 'Completed',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
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
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my technical capabilities and problem-solving approach through real-world applications
          </p>
        </div>

        <div ref={projectsRef} className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/20 group ${
                projectsVisible[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  {project.status}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-3 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-colors duration-300">
                    <p className="text-sm font-medium text-green-800">
                      <span className="font-semibold">Impact:</span> {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-300 group/link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all duration-300 group/link"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;