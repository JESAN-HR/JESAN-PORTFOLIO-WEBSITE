import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  ArrowUp,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mkhaque1', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mkhaque',
      label: 'LinkedIn',
    },
    { icon: Twitter, href: 'https://twitter.com/mkhaque1', label: 'Twitter' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">JD</span>
              </div>
              <span className="text-2xl font-bold">Khairul Haque</span>
            </motion.div>
            <motion.p
              className="text-gray-400 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Frontend Developer & UI Designer passionate about creating
              beautiful, functional web experiences. Let's build something
              amazing together.
            </motion.p>
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="mailto:info@pyonet.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">mkhaque.com</span>
              </a>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">+49 01525 xxx</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Social Links */}
          <div>
            <motion.h3
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Connect
            </motion.h3>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-sm text-gray-400 mb-2">
                Stay updated with my latest work
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-r-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Khairul Haque © {currentYear}. All rights reserved.</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-all duration-200 text-sm"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
