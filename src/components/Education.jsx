import React from 'react';
import au from '../images/au.jpg'
const Education = () => {
  const education = [
    {
      institution: 'Anurag University',
      degree: "Bachelor's of Technology in Computer Science and Engineering (B.Tech CSE)",
      period: '2022 - 2025',
      logo: au
    }
    ,
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 dark:text-white transition-colors duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-8">Education</h2>
      <div className="space-y-4 sm:space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src={edu.logo} alt={edu.institution + ' logo'} className="w-10 h-10 object-contain rounded" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                  <a
                    href="https://anurag.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-none"
                  >
                    {edu.institution}
                  </a>
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;