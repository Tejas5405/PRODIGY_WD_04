import React from 'react';
import { Award, Calendar, Building, CheckCircle, Star, Trophy } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Certifications = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef: certsRef, visibleItems: certsVisible } = useStaggeredAnimation(6, 150);

  const certifications = [
    {
      id: 1,
      title: 'Oracle Java Foundations',
      issuer: 'Oracle Corporation',
      year: '2024',
      achievement: 'Top 5% of learners worldwide',
      description: 'Advanced Java programming capabilities with comprehensive understanding of OOP principles, data structures, and Java ecosystem.',
      impact: 'Enhanced programming foundation for enterprise-level development',
      color: 'red',
      verified: true,
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png',
      category: 'Programming',
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'Google UX Design Certificate',
      issuer: 'Google via Coursera',
      year: '2023',
      achievement: '6-course professional program completion',
      description: 'Comprehensive UX design skills including user research, wireframing, prototyping, and usability testing.',
      impact: 'Practical UX design skills and portfolio development',
      color: 'blue',
      verified: true,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      category: 'Design',
      level: 'Professional'
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023',
      achievement: 'Cloud computing foundational knowledge',
      description: 'Understanding of AWS services, cloud architecture, security, and billing practices.',
      impact: 'Modern deployment and scaling understanding',
      color: 'yellow',
      verified: true,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      category: 'Cloud',
      level: 'Foundation'
    },
    {
      id: 4,
      title: 'Infosys Springboard Certification',
      issuer: 'Infosys Limited',
      year: '2023',
      achievement: 'Java Certified Foundations Associate: Java Concepts & Features',
      description: 'Industry-standard development practices, software engineering principles, and Java programming fundamentals.',
      impact: 'Professional development methodology knowledge',
      color: 'purple',
      verified: true,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
      category: 'Programming',
      level: 'Associate'
    },
    {
      id: 5,
      title: 'Python Programming',
      issuer: 'Cisco Networking Academy',
      year: '2022',
      achievement: 'Python fundamentals and data handling',
      description: 'Core Python programming concepts, data structures, file handling, and basic algorithm implementation.',
      impact: 'Strengthened programming foundation',
      color: 'green',
      verified: true,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
      category: 'Programming',
      level: 'Foundation'
    },
    {
      id: 6,
      title: 'Deloitte Technology Job Simulation',
      issuer: 'Deloitte Virtual Internship Program',
      year: '2025',
      achievement: 'Real-world coding and development tasks',
      description: 'Practical experience in software development, code reviews, and technology consulting methodologies.',
      impact: 'Industry exposure and practical development experience',
      color: 'teal',
      verified: true,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
      authority: 'Signed by Tina McCreery, Chief HR Officer',
      category: 'Professional',
      level: 'Simulation'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'from-red-50 via-red-50/80 to-red-100/60 border-red-200/50',
      blue: 'from-blue-50 via-blue-50/80 to-blue-100/60 border-blue-200/50',
      yellow: 'from-yellow-50 via-yellow-50/80 to-yellow-100/60 border-yellow-200/50',
      purple: 'from-purple-50 via-purple-50/80 to-purple-100/60 border-purple-200/50',
      green: 'from-green-50 via-green-50/80 to-green-100/60 border-green-200/50',
      teal: 'from-teal-50 via-teal-50/80 to-teal-100/60 border-teal-200/50'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getAccentColor = (color: string) => {
    const colors = {
      red: 'text-red-600',
      blue: 'text-blue-600',
      yellow: 'text-yellow-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      teal: 'text-teal-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getLevelBadgeColor = (level: string) => {
    const colors = {
      'Advanced': 'bg-gradient-to-r from-red-500 to-red-600 text-white',
      'Professional': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
      'Foundation': 'bg-gradient-to-r from-green-500 to-green-600 text-white',
      'Associate': 'bg-gradient-to-r from-purple-500 to-purple-600 text-white',
      'Simulation': 'bg-gradient-to-r from-teal-500 to-teal-600 text-white'
    };
    return colors[level as keyof typeof colors] || colors.Foundation;
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
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
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">Professional Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating commitment to professional development and technical excellence
          </p>
        </div>

        <div ref={certsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className={`bg-gradient-to-br ${getColorClasses(cert.color)} backdrop-blur-sm border-2 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden ${
                certsVisible[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                          fallback.textContent = cert.issuer.charAt(0);
                        }
                      }}
                    />
                    <div className="hidden w-full h-full flex items-center justify-center text-2xl font-bold text-gray-600"></div>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {cert.year}
                    </div>
                    <div className="flex items-center gap-1 text-green-600 text-sm bg-green-100/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      <CheckCircle className="w-4 h-4" />
                      Verified
                    </div>
                  </div>
                </div>

                {/* Title and Category */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelBadgeColor(cert.level)} shadow-sm`}>
                      {cert.level}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-700 shadow-sm">
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{cert.title}</h3>
                </div>
                
                {/* Issuer */}
                <div className="flex items-center gap-2 text-gray-600 mb-4 bg-white/50 backdrop-blur-sm p-3 rounded-lg hover:bg-white/60 transition-colors duration-300">
                  <Building className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.issuer}</span>
                </div>

                {/* Achievement Highlight */}
                <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/50 rounded-lg p-3 mb-4 hover:from-blue-100/80 hover:to-purple-100/80 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className={`w-4 h-4 ${getAccentColor(cert.color)}`} />
                    <p className="text-sm font-semibold text-gray-800">Achievement:</p>
                  </div>
                  <p className="text-sm text-gray-700">{cert.achievement}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">{cert.description}</p>

                {/* Impact */}
                <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm border border-green-200/50 rounded-lg p-3 mb-4 hover:from-green-100/80 hover:to-emerald-100/80 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="w-4 h-4 text-green-600" />
                    <p className="text-sm font-semibold text-green-800">Impact:</p>
                  </div>
                  <p className="text-sm text-green-700">{cert.impact}</p>
                </div>

                {/* Authority (if present) */}
                {cert.authority && (
                  <div className="text-xs text-gray-500 italic bg-gray-50/80 backdrop-blur-sm p-2 rounded-lg border border-gray-200/50">
                    <Award className="w-3 h-3 inline mr-1" />
                    {cert.authority}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 text-lg">6 Professional Certifications</p>
                <p className="text-sm text-gray-600">From industry leaders including Oracle, Google, AWS, Infosys, Cisco, and Deloitte</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 text-lg">100% Verified</p>
                <p className="text-sm text-gray-600">All certifications authenticated and current</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;