import React from 'react';

const Skills = () => {
  const skills = [
    'Java', 'Spring Boot','React.js', 'SQL', 'MySQL','Javascript', 'HTML/CSS',
    'TailwindCSS','Supabase', 'VS Code', 'Git/GitHub'
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 dark:text-white transition-colors duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-violet-600 dark:hover:bg-violet-500 cursor-default transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;