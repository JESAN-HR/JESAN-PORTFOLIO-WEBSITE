import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', icon: '⚛️', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', icon: '🟦', level: 90, color: 'bg-blue-600' },
    { name: 'Next.js', icon: '▲', level: 88, color: 'bg-gray-800' },
    { name: 'Tailwind CSS', icon: '🎨', level: 92, color: 'bg-cyan-500' },
    { name: 'Wordpress', icon: '🟢', level: 85, color: 'bg-green-500' },
    { name: 'Figma', icon: '💻', level: 80, color: 'bg-yellow-500' },
  ];

  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description:
        'Building responsive, interactive web applications using modern frameworks and libraries.',
      color: 'text-blue-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Creating beautiful, user-centered designs that enhance user experience and engagement.',
      color: 'text-purple-500',
    },
    {
      icon: Smartphone,
      title: 'SaaS Development',
      description:
        'Developing cross-platform SaaS applications with React Native and responsive design.',
      color: 'text-pink-500',
    },
    {
      icon: Globe,
      title: 'Web Performance',
      description:
        'Optimizing web applications for speed, accessibility, and search engine optimization.',
      color: 'text-green-500',
    },
    {
      icon: Database,
      title: 'Full-Stack Solutions',
      description:
        'Building complete web solutions from database design to deployment and maintenance.',
      color: 'text-indigo-500',
    },
    {
      icon: Zap,
      title: 'API Integration',
      description:
        'Integrating third-party APIs and services to extend application functionality.',
      color: 'text-yellow-500',
    },
  ];

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

  return (
    <section id='about' className='py-20 bg-gray-50 dark:bg-gray-800/50'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='text-center mb-16'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className='text-md text-gray-600 dark:text-gray-400 max-w-xl mx-auto'
            variants={itemVariants}
          >
            Passionate frontend developer with a keen eye for design and a love
            for creating exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
          {/* Bio Section */}
          <motion.div
            className='space-y-6'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                Hi, I'm Khairul Haque
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                With over 6 years of experience in frontend development, I
                specialize in creating modern, responsive web applications that
                not only look great but also deliver exceptional user
                experiences. My journey in web development started with a
                curiosity about how websites work, and it has evolved into a
                passion for crafting digital solutions that make a difference.
              </p>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest technologies and best practices. When
                I'm not coding, you can find me exploring new design trends,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </motion.div>

            <motion.div
              className='flex flex-wrap gap-4'
              variants={itemVariants}
            >
              {[
                'JavaScript',
                'React',
                'TypeScript',
                'Next.js',
                'Tailwind CSS',
                'Firebase',
                'GraphQL',
                'Git',
                'Figma',
                'WordPress',
                'Web Performance',
                'API Integration',
                'Responsive Design',
                'Cross-Browser Compatibility',
              ].map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className='space-y-6'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.h3
              className='text-2xl font-bold text-gray-900 dark:text-white mb-6'
              variants={itemVariants}
            >
              Technical Skills
            </motion.h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className='space-y-2'
                variants={itemVariants}
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-2'>
                    <span className='text-xl'>{skill.icon}</span>
                    <span className='font-medium text-gray-900 dark:text-white'>
                      {skill.name}
                    </span>
                  </div>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    {skill.level}%
                  </span>
                </div>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                  <motion.div
                    className={`h-2 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className='p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <service.icon className={`w-12 h-12 ${service.color} mb-4`} />
              <h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                {service.title}
              </h4>
              <p className='text-gray-600 dark:text-gray-400'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
