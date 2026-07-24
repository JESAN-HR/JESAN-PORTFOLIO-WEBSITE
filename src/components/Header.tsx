import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor, Download } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = window.innerHeight * 0.15; // 15% of viewport height
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  };

  const ThemeIcon = themeIcons[theme];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/M M Khairul Haque_CV_2025.pdf';
    link.download = 'M_M_Khairul_Haque_CV.pdf';
    link.click();
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out"
      style={{
        paddingTop: scrollProgress > 0 ? '8px' : '20px',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="transition-all duration-500 ease-out rounded-2xl backdrop-blur-xl border shadow-lg"
        style={{
          width: scrollProgress > 0 ? '80%' : '95%',
          maxWidth: scrollProgress > 0 ? '1200px' : '1400px',
          backgroundColor:
            scrollProgress > 0
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(255, 255, 255, 0.05)',
          borderColor:
            scrollProgress > 0
              ? 'rgba(255, 255, 255, 0.2)'
              : 'rgba(255, 255, 255, 0.1)',
          boxShadow:
            scrollProgress > 0
              ? '0 8px 32px rgba(0, 0, 0, 0.1)'
              : '0 4px 16px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className="px-4 md:px-6">
          <nav className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MK</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                Khairul Haque
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200 text-sm font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Theme Toggle */}
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={() =>
                    setTheme(
                      theme === 'light'
                        ? 'dark'
                        : theme === 'dark'
                        ? 'system'
                        : 'light'
                    )
                  }
                  className="p-2 rounded-lg bg-white/10 dark:bg-gray-800/30 hover:bg-white/20 dark:hover:bg-gray-700/40 transition-colors duration-200 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ThemeIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </motion.button>

                {/* CV Download */}
                <motion.button
                  onClick={handleDownloadCV}
                  className="relative flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Download className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">CV</span>

                  {/* Animated border */}
                  <div
                    className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
                      backgroundSize: '200% 200%',
                      animation: 'shimmer 2s infinite',
                    }}
                  />
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
          </nav>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden overflow-hidden ${
              isMenuOpen ? 'max-h-96' : 'max-h-0'
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4 bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl rounded-lg mt-2 border border-white/20 dark:border-gray-700/30">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}

              <div className="flex items-center justify-between px-4 pt-2 border-t border-white/20 dark:border-gray-700/30">
                <motion.button
                  onClick={() =>
                    setTheme(
                      theme === 'light'
                        ? 'dark'
                        : theme === 'dark'
                        ? 'system'
                        : 'light'
                    )
                  }
                  className="p-2 rounded-lg bg-white/10 dark:bg-gray-800/30 hover:bg-white/20 dark:hover:bg-gray-700/40 transition-colors duration-200 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ThemeIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </motion.button>

                <motion.button
                  onClick={handleDownloadCV}
                  className="relative flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Download className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Download CV</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
