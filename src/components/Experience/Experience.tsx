import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A track record of delivering high-impact solutions across diverse industries and technologies.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>

            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 ml-12 md:ml-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {job.current && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full mb-3">
                        Current
                      </span>
                    )}

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>

                    <div className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {job.company}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {job.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;