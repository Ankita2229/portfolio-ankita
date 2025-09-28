import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  const socialLinks = [
    { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: FiGithub, href: personal.github, label: 'GitHub' },
    { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">{personal.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {personal.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                {personal.tagline}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              {personal.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 border border-primary-600 dark:border-primary-400"
              >
                <FiDownload />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center gap-6"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={link.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;