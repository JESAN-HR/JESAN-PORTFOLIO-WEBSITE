import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -25, 0],
          x: [0, 35, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 30, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Code-like floating elements */}
      <motion.div
        className="absolute top-20 right-1/4 text-4xl opacity-10 dark:opacity-5"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'</>'}
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/3 text-4xl opacity-10 dark:opacity-5"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'{code}'}
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-10 text-3xl opacity-10 dark:opacity-5"
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'(error?)'}
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-2">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-purple-500 rounded-full"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.02,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;
