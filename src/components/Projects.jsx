import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '../images/project1.png';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.png';

const Projects = () => {
  const projects = [
    {
      title: 'CLIPZIP - Video Downloader Platform',
      description: 'Full-stack video downloader with secure login, responsive UI, multi-platform support, and real-time download status tracking. Enables users to download videos from platforms like YouTube and Instagram.',
      image: project1,
      technologies: ['Java', 'Spring Boot', 'React', 'TailwindCSS', 'Rapid API'],
      link: 'https://clipzip.vercel.app/',
      github: 'https://github.com/Kallem-Akash/ClipZip-Frontend'
    },
    {
      title: 'CodeConvert AI',
      description: 'CodeConvert is an AI-powered code converter that instantly transforms code between programming languages like Python, Java, JavaScript, and more. Built for developers to save time and effort when switching stacks or learning new languages.',
      image: project3,
      technologies: ['Java', 'Spring Boot', 'OpenAI API', 'React.js', 'Tailwind CSS'],
      link: 'https://codexconvert.vercel.app/', 
      github: 'https://github.com/Kallem-Akash/CodeConvert-Backend' 
    }
    ,
    {
      title: 'Student Management Web Application',
      description: 'Student Management System for handling, updating, and organizing student records efficiently. The system supports CRUD operations for student data, including personal details.',
      image: project2,
      technologies: ['Java', 'MySQL', 'HTML', 'CSS',],
      link: '/',
      github: 'https://github.com/Kallem-Akash/Student-Management-Web-Application'
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 dark:text-white transition-colors duration-300">
      <div className="text-center mb-8 sm:mb-12">
        <span className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-200 inline-block">
          My Projects
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-6 sm:mt-8 mb-4 sm:mb-6">
          Check out my latest work
        </h2>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"> 
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg dark:shadow-xl transition-all duration-500 group hover:shadow-2xl hover:scale-105 hover:-translate-y-2 flex flex-col justify-between"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 to-transparent dark:from-violet-900/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title + ' screenshot'}
                className="w-full h-44 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700 bg-gray-100 dark:bg-gray-700"
              />
            </div>
            <div className="p-3 sm:p-4 relative z-20 flex flex-col gap-1 flex-1 justify-between">
              <div>
                <div className="flex flex-wrap gap-1 mb-1 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-0.5 rounded text-xs hover:scale-110 hover:bg-violet-100 dark:hover:bg-violet-900 transition-all duration-300 border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mb-2"></div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1 leading-relaxed transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 mt-1">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-violet-700 dark:bg-violet-500 text-white px-3 py-1.5 rounded-lg hover:bg-violet-800 dark:hover:bg-violet-600 transition-all duration-300 hover:scale-110 hover:shadow-xl text-xs sm:text-sm font-semibold shadow-md dark:shadow-lg">
                  <ExternalLink size={16} />
                  Website
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-1.5 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-900 transition-all duration-300 hover:scale-110 hover:shadow-xl text-xs sm:text-sm font-semibold border border-gray-200 dark:border-gray-600 shadow-md dark:shadow-lg">
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;