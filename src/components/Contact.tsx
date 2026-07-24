import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'haquemmkhairul@gmail.com',
      href: 'mailto:info@pyonet.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Germany',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mkhaque',
      color: 'hover:text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/mkhaque1',
      color: 'hover:text-gray-800 dark:hover:text-gray-300',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/mkhaque1',
      color: 'hover:text-blue-400',
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

  // Verification modal state
  const [showVerify, setShowVerify] = useState(false);
  const [verifyInput, setVerifyInput] = useState('');
  const [verified, setVerified] = useState(false);
  const [verifyError, setVerifyError] = useState('');

  // Programmer question and answer
  const question = 'What is the output of 2 + (3*1) in JavaScript?';
  const answer = '5';

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-md text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll do my best to get back to you!
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div className="space-y-4" variants={itemVariants}>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-purple-500 group-hover:text-purple-600 transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-200 hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white"
              variants={itemVariants}
            >
              <h4 className="text-xl font-bold mb-2">
                Ready to start your project?
              </h4>
              <p className="mb-4 opacity-90">
                Let's discuss your ideas and turn them into reality. I'm here to
                help!
              </p>
              <motion.button
                type="button"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowVerify(true)}
                disabled={verified}
              >
                <Mail className="w-4 h-4" />
                <span>
                  {verified ? (
                    <a href="mailto:mkhaque29@gmail.com" className="underline">
                      Email me directly
                    </a>
                  ) : (
                    'Email me directly'
                  )}
                </span>
              </motion.button>
              {/* Verification Modal */}
              {showVerify && !verified && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-sm w-full">
                    <h5 className="font-bold mb-2 text-gray-900 dark:text-white">
                      Human Verification
                    </h5>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      {question}
                    </p>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 mb-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                      value={verifyInput}
                      onChange={(e) => setVerifyInput(e.target.value)}
                      placeholder="Your answer"
                      autoFocus
                    />
                    {verifyError && (
                      <p className="text-red-500 text-sm mb-2">{verifyError}</p>
                    )}
                    <div className="flex justify-end space-x-2">
                      <button
                        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        onClick={() => {
                          setShowVerify(false);
                          setVerifyInput('');
                          setVerifyError('');
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 py-2 rounded bg-purple-500 text-white font-semibold"
                        onClick={() => {
                          if (verifyInput.trim() === answer) {
                            setVerified(true);
                            setShowVerify(false);
                            setVerifyInput('');
                            setVerifyError('');
                            setTimeout(() => {
                              window.location.href =
                                'mailto:mkhaque29@gmail.com';
                            }, 300);
                          } else {
                            setVerifyError('Incorrect! Try again.');
                          }
                        }}
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
