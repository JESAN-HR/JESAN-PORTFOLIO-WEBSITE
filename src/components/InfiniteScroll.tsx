import React from 'react';
import { motion } from 'framer-motion';

const InfiniteScroll = () => {
  const keywords = [
    'React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'GraphQL', 
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Figma', 'Responsive Design', 
    'Web Performance', 'SEO', 'Accessibility', 'UI/UX', 'Frontend', 'Full-Stack',
    'API Integration', 'Database Design', 'Cloud Computing', 'DevOps', 'Testing',
    'Agile', 'Team Leadership', 'Code Review', 'Mentoring', 'Problem Solving'
  ];

  const duplicatedKeywords = [...keywords, ...keywords];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-8">
        <motion.div
          className="flex space-x-6 whitespace-nowrap"
          animate={{
            x: [0, -50 * keywords.length],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedKeywords.map((keyword, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                #{keyword}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <motion.div
          className="flex space-x-6 whitespace-nowrap"
          animate={{
            x: [-50 * keywords.length, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedKeywords.reverse().map((keyword, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-200/50 dark:border-purple-700/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-700 dark:text-purple-300 font-medium text-sm">
                #{keyword}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-50 dark:from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-indigo-50 dark:from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
};

export default InfiniteScroll;