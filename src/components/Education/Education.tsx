import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Education = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuous learning and academic excellence driving innovation in technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiBook className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  {edu.status && (
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900 rounded-full mb-2">
                      {edu.status}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FiCalendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                {edu.gpa && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    GPA: <span className="font-semibold">{edu.gpa}</span>
                  </p>
                )}
                {edu.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8"
        >
          <div className="flex items-center justify-center mb-6">
            <FiAward className="w-8 h-8 text-white" />
            <h3 className="text-2xl font-bold text-white ml-3">Professional Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <p className="text-white font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;