import React from 'react';
import cognifyz from  '../images/cognifyz.jpg'

const WorkExperience = () => {
  const experiences = [
    { 
      company: 'Cognifyz Technologies',
      position: 'Java Developer Intern',
      period: 'April 2024 - May 2024',
      description: 'Gained hands-on experience building and maintaining backend services using Java, Spring Boot, and REST APIs. Contributed to new feature development and debugging tasks, applying strong problem-solving skills to improve system reliability. Worked closely with teammates to design scalable endpoints, refactor legacy code, and follow clean architecture principles.',
      logo: cognifyz
    },    
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 dark:text-white transition-colors duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-8">Work Experience</h2>
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src={exp.logo} alt={exp.company + ' logo'} className="w-10 h-10 object-contain rounded" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{exp.company}</h3>
             
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.position}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;