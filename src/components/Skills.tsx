import React from 'react';
import { Code2, Database, Palette, Wrench } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef: skillsRef, visibleItems: skillsVisible } = useStaggeredAnimation(4, 200);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'blue',
      skills: [
        { name: 'Java', level: 90, description: 'Advanced proficiency with OOP, Spring framework' },
        { name: 'Python', level: 80, description: 'Data analysis, web development, ML algorithms' },
        { name: 'JavaScript', level: 75, description: 'ES6+, async programming, DOM manipulation' },
        { name: 'HTML5', level: 95, description: 'Semantic markup, accessibility, modern standards' },
        { name: 'CSS3', level: 90, description: 'Flexbox, Grid, animations, responsive design' },
        { name: 'SQL', level: 70, description: 'Complex queries, database optimization' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'React.js', level: 60, description: 'Component architecture, hooks, state management' },
        { name: 'Node.js', level: 50, description: 'Server-side JavaScript, API development' },
        { name: 'Flask', level: 75, description: 'Python web framework, RESTful APIs' },
        { name: 'Bootstrap', level: 80, description: 'Responsive frameworks, component libraries' },
        { name: 'Responsive Design', level: 90, description: 'Mobile-first, cross-browser compatibility' }
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'purple',
      skills: [
        { name: 'UI/UX Principles', level: 85, description: 'Google UX certified, user-centered design' },
        { name: 'Prototyping', level: 70, description: 'Wireframing, user flow design' },
        { name: 'Figma', level: 75, description: 'Design systems, collaborative design' },
        { name: 'User Research', level: 60, description: 'Usability testing, persona development' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'orange',
      skills: [
        { name: 'Git/GitHub', level: 80, description: 'Version control, collaboration workflows' },
        { name: 'VS Code', level: 95, description: 'Advanced IDE usage, extensions, debugging' },
        { name: 'MySQL', level: 75, description: 'Database design, query optimization' },
        { name: 'AWS', level: 55, description: 'Cloud practitioner certified, basic deployment' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-gradient-to-br from-blue-100 to-blue-200',
      green: 'text-green-600 bg-gradient-to-br from-green-100 to-green-200',
      purple: 'text-purple-600 bg-gradient-to-br from-purple-100 to-purple-200',
      orange: 'text-orange-600 bg-gradient-to-br from-orange-100 to-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getProgressColor = (color: string) => {
    const colors = {
      blue: 'bg-gradient-to-r from-blue-500 to-blue-600',
      green: 'bg-gradient-to-r from-green-500 to-green-600',
      purple: 'bg-gradient-to-r from-purple-500 to-purple-600',
      orange: 'bg-gradient-to-r from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical competencies across programming, web development, design, and modern tools
          </p>
        </div>

        <div ref={skillsRef} className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 ${
                skillsVisible[categoryIndex] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 ${getColorClasses(category.color)}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full group-hover:bg-gray-200 transition-colors duration-300">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ease-out shadow-sm ${getProgressColor(category.color)}`}
                        style={{ 
                          width: skillsVisible[categoryIndex] ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                    
                    <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-50/80 backdrop-blur-sm p-2 rounded-lg">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full border border-blue-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span className="font-medium">Always learning and expanding my skillset</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;