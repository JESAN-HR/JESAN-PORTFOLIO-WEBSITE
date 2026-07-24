import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend UI / UX Developer',
      company: 'Contabo',
      location: 'Remote (Germany)',
      period: '2024 - Present',
      description: [
        'Component Development: Designing and implementing reusable components for the frontend to streamline development and maintain consistency across projects.',
        'Headless CMS Integration: Working with Payload, a headless CMS, to manage and deliver content effectively, ensuring seamless integration with our web applications.',
        'UI/UX Improvements: Creating and refining mockups to transition from outdated UI designs to modern, user-centric interfaces, enhancing overall user experience.',
      ],
      technologies: [
        'Astro',
        'TypeScript',
        'Next.js',
        'GraphQL',
        'Payload CMS',
      ],
      color: 'bg-purple-500',
    },
    {
      title: 'Web Designer',
      company: 'Stellen-kombi GmbH',
      location: 'Esen, Germany',
      period: '2023 - 2024',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Improved application performance by 60% through code optimization and lazy loading',
        'Integrated RESTful APIs and implemented real-time features using WebSockets',
        'Collaborated with cross-functional teams in an Agile environment',
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      color: 'bg-blue-500',
    },
    {
      title: 'Junior Web Developer',
      company: 'Rheinduett GmbH',
      location: 'Köln, Germany',
      period: '2022 - 2023',
      description: [
        'Built responsive websites for various clients using modern web technologies',
        'Worked closely with designers to implement pixel-perfect UI components',
        'Gained experience in version control, testing, and deployment processes',
        'Participated in client meetings and provided technical recommendations',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'React.js'],
      color: 'bg-green-500',
    },
    {
      title: 'Web Development Intern',
      company: 'Braintrust',
      location: 'Bremen, Germany',
      period: '2022',
      description: [
        'Assisted in developing company website and internal tools',
        'Gained hands-on experience with modern web development workflows',
        'Learned about responsive design principles and cross-browser compatibility',
        'Contributed to open-source projects and company technical blog',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'TypeScript'],
      color: 'bg-pink-500',
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id='experience' className='py-20 bg-white dark:bg-gray-900'>
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
            Experience
          </motion.h2>
          <motion.p
            className='text-md text-gray-600 dark:text-gray-400 max-w-xl mx-auto'
            variants={itemVariants}
          >
            My professional journey in frontend development and the impactful
            projects I've worked on
          </motion.p>
        </motion.div>

        <div className='max-w-4xl mx-auto'>
          {/* Timeline */}
          <div className='relative'>
            {/* Vertical Line */}
            <div className='absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500'></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className='absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-purple-500 rounded-full z-10'></div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'>
                    {/* Header */}
                    <div className='mb-4'>
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
                        {exp.title}
                      </h3>
                      <div className='flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2'>
                        <div className='flex items-center space-x-1'>
                          <Building className='w-4 h-4' />
                          <span>{exp.company}</span>
                        </div>
                        <div className='flex items-center space-x-1'>
                          <MapPin className='w-4 h-4' />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className='flex items-center space-x-1 text-sm text-purple-600 dark:text-purple-400'>
                        <Calendar className='w-4 h-4' />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className='space-y-2 mb-4'>
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className='text-gray-600 dark:text-gray-400 text-sm flex items-start'
                        >
                          <span className='w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0'></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className='px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-600'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
