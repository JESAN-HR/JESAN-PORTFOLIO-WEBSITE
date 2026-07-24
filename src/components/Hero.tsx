import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Palette } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const metallicTextVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.8 },
    },
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden pt-20'
    >
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 opacity-50' />

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          className='text-center max-w-4xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Greeting */}
          <motion.div
            className='inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 mb-8'
            variants={itemVariants}
          >
            <span className='text-2xl'>👋</span>
            <span className='text-gray-700 dark:text-gray-300 text-sm md:text-base'>
              Hello, I'm Khairul Haque
            </span>
          </motion.div>

          {/* Main Heading with Responsive Text and One-time Metallic Animation */}
          <motion.h1
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight'
            variants={itemVariants}
          >
            <span className='text-gray-900 dark:text-white'>
              Frontend Developer &{' '}
            </span>
            <motion.span
              className='inline-block metallic-text-onetime'
              variants={metallicTextVariants}
              initial='hidden'
              animate='visible'
            >
              CMS Expert
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className='text-md text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed px-4'
            variants={itemVariants}
          >
            I create stunning, interactive web experiences that blend beautiful
            design with cutting-edge technology. Specialized in React,
            TypeScript, and modern frontend frameworks.
          </motion.p>

          {/* Stats */}
          <motion.div
            className='flex flex-wrap justify-center gap-4 md:gap-8 mb-12'
            variants={itemVariants}
          >
            {[
              {
                icon: Palette,
                label: '5+ Years Experience',
                color: 'text-purple-500',
              },
              { icon: Code, label: '100+ Projects', color: 'text-blue-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className='flex items-center space-x-2 text-gray-700 dark:text-gray-300'
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                <span className='font-medium text-sm md:text-base'>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons with Enhanced Animations */}
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4'
            variants={itemVariants}
          >
            <motion.a
              href='#projects'
              className='relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg text-sm md:text-base overflow-hidden group'
              variants={buttonVariants}
              whileHover='hover'
              whileTap='tap'
            >
              {/* Animated background */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              {/* Animated border */}
              <div className='absolute inset-0 rounded-lg'>
                <div className='absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-purple-400 via-white to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse' />
              </div>

              {/* Shimmer effect */}
              <div className='absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out' />

              <span className='relative z-10'>View My Work</span>
            </motion.a>

            <motion.a
              href='#contact'
              className='relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border-2 border-gray-200 dark:border-gray-700 text-sm md:text-base overflow-hidden group'
              variants={buttonVariants}
              whileHover='hover'
              whileTap='tap'
            >
              {/* Animated background */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              {/* Animated border */}
              <div
                className='absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ padding: '2px', margin: '-2px' }}
              >
                <div className='bg-white dark:bg-gray-800 rounded-lg w-full h-full' />
              </div>

              <span className='relative z-10 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300'>
                Get In Touch
              </span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className='flex flex-col items-center space-y-2'
            variants={itemVariants}
          >
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className='w-5 h-5 text-gray-400' />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Animated Shapes */}
        <motion.div
          className='absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full'
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className='absolute top-40 right-20 w-16 h-16 bg-pink-500/10 rounded-lg'
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className='absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/10 rounded-full'
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
