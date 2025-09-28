import { motion } from 'framer-motion';
import { FiServer, FiCloud, FiDatabase, FiCode, FiCpu, FiSettings } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
  const { expertise } = portfolioData;

  const iconMap: { [key: string]: React.ElementType } = {
    architecture: FiServer,
    cloud: FiCloud,
    data: FiDatabase,
    api: FiCode,
    ml: FiCpu,
    devops: FiSettings,
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I bring a unique combination of deep technical expertise and strategic thinking to every project.
            My approach focuses on building scalable, maintainable solutions that deliver real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => {
            const Icon = iconMap[item.icon] || FiCode;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">8+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5B+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Records Daily</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-sm uppercase tracking-wide opacity-90">System Uptime</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;