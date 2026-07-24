import { useMemo } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../projects/projects';
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Full-Stack'];

  // Use useMemo to optimize filtering performance and ensure consistent results
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  // Handle category change with proper state reset
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Reset any selected project when changing categories
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projects.find((p) => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projects.find((p) => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex(
          (prev) => (prev - 1 + project.images.length) % project.images.length
        );
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-md text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8"
            variants={itemVariants}
          >
            A showcase of my recent work and the technologies I've used to bring
            ideas to life
          </motion.p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-xs opacity-75">
                    ({projects.filter((p) => p.category === category).length})
                  </span>
                )}
                {category === 'All' && (
                  <span className="ml-2 text-xs opacity-75">
                    ({projects.length})
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid (Bento Style) with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory} // Key ensures re-render when category changes
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeCategory}-${project.id}`} // Unique key for each category-project combination
                className={`relative group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? 'md:col-span-2' : ''
                } ${index === 1 ? 'md:row-span-2' : ''} ${
                  index === 4 ? 'lg:col-span-2' : ''
                }`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                layout // Enable layout animations
                onClick={() => {
                  setSelectedProject(project.id);
                  setCurrentImageIndex(0);
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 md:h-56 lg:h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Stronger dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-6 z-10">
                    <div className="text-white drop-shadow-lg">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for the selected category.
            </p>
          </motion.div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(
                    (p) => p.id === selectedProject
                  );
                  if (!project) return null;

                  return (
                    <>
                      {/* Modal Header */}
                      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        >
                          <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </button>
                      </div>

                      {/* Modal Content */}
                      <div className="p-6">
                        {/* Image Gallery */}
                        <div className="relative mb-6">
                          <img
                            src={project.images[currentImageIndex]}
                            alt={project.title}
                            className="w-full h-64 md:h-80 object-cover rounded-lg"
                          />

                          {project.images.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors duration-200"
                              >
                                <ChevronLeft className="w-6 h-6" />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors duration-200"
                              >
                                <ChevronRight className="w-6 h-6" />
                              </button>

                              {/* Image Indicators */}
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {project.images.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                      index === currentImageIndex
                                        ? 'bg-white'
                                        : 'bg-white/50'
                                    }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>

                        {/* Project Details */}
                        <div className="space-y-6">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {project.longDescription}
                          </p>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Tags */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                              Project Tags
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Links */}
                          <div className="flex space-x-4 pt-4">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                              <Github className="w-5 h-5" />
                              <span>View Code</span>
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span>Live Demo</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
