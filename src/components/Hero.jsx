import React, { useEffect, useState } from 'react';
import { MapPin, Clock, Mail, FileText } from 'lucide-react';
import profile from '../images/profile.jpeg';

const Hero = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
            Hi, I'm <span className="text-violet-600 dark:text-violet-400 font-bold">Akash</span>{' '}
            <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
          Software Developer. I love building things and exploring new technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start w-full gap-2 sm:gap-4">
            <div className="flex flex-row items-center gap-4 flex-1 justify-center sm:justify-start flex-wrap sm:flex-nowrap">
              <a
                href="mailto:akashgoud018@gmail.com"
                className="flex items-center gap-1.5 sm:gap-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 text-gray-600 dark:text-gray-400"
                aria-label="Send mail"
              >
                <Mail size={16} />
                <span className="inline">Email</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1YrHzAVZ5S1kotZchwkkwQz26xobajDb-/view?usp=sharing"
                className="flex items-center gap-1.5 sm:gap-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 text-gray-600 dark:text-gray-400"
                aria-label="View Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} />
                <span className="inline">View Resume</span>
              </a>
              <div className="flex items-center gap-1.5 sm:gap-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 text-gray-600 dark:text-gray-400">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 text-gray-600 dark:text-gray-400">
                <Clock size={16} />
                <span className="font-mono">{currentTime}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 order-first lg:order-last mb-6 lg:mb-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-violet-200 via-violet-400 to-violet-600 dark:from-violet-900 dark:via-violet-700 dark:to-violet-500 ring-4 ring-violet-300 dark:ring-violet-700">
            <img 
              src={profile}
              alt="Akash's profile photo"
              className="w-full h-full object-cover transition-transform duration-300 hover:rotate-1 hover:brightness-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;