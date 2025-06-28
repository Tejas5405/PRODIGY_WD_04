import React from 'react';
import { Building, Users, Trophy, Calendar } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef: experienceRef, visibleItems: experienceVisible } = useStaggeredAnimation(3, 300);

  const experiences = [
    {
      id: 1,
      title: 'Design Lead',
      organization: 'IEEE Student Branch',
      duration: '2023 - Present',
      type: 'Leadership Role',
      icon: Building,
      responsibilities: [
        'Lead design initiatives for technical events and workshops',
        'Coordinate with technical teams on user experience improvements',
        'Manage visual communications and branding consistency',
        'Mentor junior members in design principles and tools'
      ],
      impact: 'Increased event participation by 40% through improved design',
      skills: ['UI/UX Design', 'Team Leadership', 'Event Management', 'Visual Communication']
    },
    {
      id: 2,
      title: 'Team Member',
      organization: 'Crieya',
      duration: '2023',
      type: 'Product Development',
      icon: Users,
      responsibilities: [
        'Collaborated on product development initiatives',
        'Contributed to user interface design and development',
        'Participated in agile development processes',
        'Conducted user research and testing sessions'
      ],
      impact: 'Enhanced user experience through data-driven design decisions',
      skills: ['Team Collaboration', 'Agile Methodologies', 'Product Development', 'User Research']
    },
    {
      id: 3,
      title: 'Participant',
      organization: 'Smart India Hackathon 2024',
      duration: '2024',
      type: 'Competition',
      icon: Trophy,
      responsibilities: [
        'Developed innovative solutions for government problem statements',
        'Collaborated with cross-functional team members',
        'Presented solutions to industry experts and judges',
        'Implemented full-stack web applications under time constraints'
      ],
      impact: 'Advanced to regional finals with innovative government solution',
      skills: ['Problem Solving', 'Full-Stack Development', 'Presentation', 'Innovation']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leadership roles, team collaboration, and competitive achievements that shaped my professional journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div ref={experienceRef} className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`relative flex items-center transition-all duration-1000 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${
                  experienceVisible[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10 hover:scale-125 transition-transform duration-300">
                  <experience.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-blue-200 transition-colors duration-300">
                        {experience.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.duration}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{experience.title}</h3>
                    <p className="text-blue-600 font-medium mb-4">{experience.organization}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-green-600 bg-green-50 p-3 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                        <span className="font-semibold">Impact:</span> {experience.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Experience;