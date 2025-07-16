import React, { useState, useRef } from 'react';
import { Home, Github, Linkedin, Twitter, Sun, Moon, Mail, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const FloatingNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Kallem-Akash' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kallemakash018/' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },

  ];

  // Track mouse X position for dock effect
  const mouseX = useMotionValue(Infinity);

  // Helper to render a dock icon
  const renderDockIcon = (item, index, isTheme = false, responsive = false) => {
    const ref = useRef(null);
    // Calculate distance from mouse to icon center
    const distance = useTransform(mouseX, x => {
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds) return Infinity;
      return Math.abs(x - (bounds.left + bounds.width / 2));
    });
    // Map distance to scale (closer = bigger)
    const scale = useTransform(distance, [0, 80], [1.2, 1]); // slightly reduced scale for mobile friendliness
    // Responsive icon size: 20 on mobile, 24 on desktop
    const iconSize = typeof window !== 'undefined' && window.innerWidth < 640 ? 20 : 24;
    return (
      <motion.div
        key={item.label}
        ref={ref}
        style={{ scale }}
        className="relative flex items-center justify-center"
        onMouseEnter={() => setHoveredItem(item.label)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        {isTheme ? (
          <button
            onClick={toggleTheme}
            className="p-2 sm:p-3 text-gray-600 dark:text-gray-300 rounded-full transition-all duration-200 hover:text-violet-500 dark:hover:text-violet-400"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={iconSize} /> : <Moon size={iconSize} />}
          </button>
        ) : (
          <a
            href={item.href}
            className="p-2 sm:p-3 text-gray-600 dark:text-gray-300 rounded-full transition-all duration-200 hover:text-violet-500 dark:hover:text-violet-400"
            aria-label={item.label}
            target={item.href && item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href && item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {item.icon ? <item.icon size={iconSize} /> : null}
          </a>
        )}
        {/* Tooltip */}
        {hoveredItem === item.label && !isTheme && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded shadow-lg whitespace-nowrap z-50 animate-fade-in">
            {item.label}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
          </div>
        )}
      </motion.div>
    );
  };

  // Helper to render a dock image
  const renderDockImage = (src, alt, label) => {
    const ref = useRef(null);
    const distance = useTransform(mouseX, x => {
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds) return Infinity;
      return Math.abs(x - (bounds.left + bounds.width / 2));
    });
    const scale = useTransform(distance, [0, 80], [1.5, 1]);
    return (
      <motion.div
        ref={ref}
        style={{ scale }}
        className="relative flex items-center justify-center"
        onMouseEnter={() => setHoveredItem(label)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <img
          src={src}
          alt={alt}
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 transition-all duration-200"
        />
        {/* Tooltip */}
        {hoveredItem === label && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded shadow-lg whitespace-nowrap z-50 animate-fade-in">
            {label}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      onMouseMove={e => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-2xl px-1 sm:px-2 py-2 flex items-center justify-center gap-x-3 sm:gap-x-6 min-w-[140px] sm:min-w-[200px] transition-all duration-300 sm:hover:min-w-[280px] sm:hover:px-6">
        <div className="flex w-full justify-between items-center">
          {navItems.map((item, index) => renderDockIcon(item, index, false, true))}
          {renderDockIcon({ label: 'Toggle Theme' }, navItems.length, true, true)}
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;