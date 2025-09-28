import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiDatabase, FiMonitor, FiShield, FiCloud, FiCode } from 'react-icons/fi';

const TechnologyStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const technologies = {
    backend: [
      { name: 'Spring Boot', version: '3.1', usage: 'Microservices framework', impact: 'Core platform', proficiency: 95 },
      { name: 'Node.js', version: '20 LTS', usage: 'Real-time services', impact: 'WebSocket connections', proficiency: 90 },
      { name: 'Python', version: '3.11', usage: 'ML services', impact: 'Recommendation engine', proficiency: 88 },
      { name: 'Go', version: '1.21', usage: 'High-performance APIs', impact: 'Critical path services', proficiency: 82 },
    ],
    frontend: [
      { name: 'React', version: '18.2', usage: 'Web application', impact: 'User interface', proficiency: 95 },
      { name: 'TypeScript', version: '5.0', usage: 'Type safety', impact: 'Code quality', proficiency: 92 },
      { name: 'Next.js', version: '14', usage: 'SSR/SSG', impact: 'Performance', proficiency: 88 },
      { name: 'GraphQL', version: '16', usage: 'API layer', impact: 'Data fetching', proficiency: 85 },
    ],
    database: [
      { name: 'PostgreSQL', version: '15', usage: 'Primary datastore', impact: 'Transactional data', proficiency: 93 },
      { name: 'MongoDB', version: '7.0', usage: 'Document store', impact: 'Flexible schemas', proficiency: 87 },
      { name: 'Redis', version: '7.2', usage: 'Caching layer', impact: '10x performance', proficiency: 90 },
      { name: 'Elasticsearch', version: '8.10', usage: 'Search engine', impact: 'Full-text search', proficiency: 85 },
    ],
    infrastructure: [
      { name: 'Kubernetes', version: '1.28', usage: 'Container orchestration', impact: 'Auto-scaling', proficiency: 92 },
      { name: 'Docker', version: '24', usage: 'Containerization', impact: 'Deployment', proficiency: 95 },
      { name: 'AWS', version: 'Multi-service', usage: 'Cloud platform', impact: 'Infrastructure', proficiency: 90 },
      { name: 'Terraform', version: '1.6', usage: 'Infrastructure as Code', impact: 'Automation', proficiency: 88 },
    ],
    monitoring: [
      { name: 'Prometheus', version: '2.47', usage: 'Metrics collection', impact: 'Observability', proficiency: 87 },
      { name: 'Grafana', version: '10.2', usage: 'Visualization', impact: 'Dashboards', proficiency: 90 },
      { name: 'Datadog', version: 'SaaS', usage: 'APM', impact: 'Full-stack monitoring', proficiency: 85 },
      { name: 'ELK Stack', version: '8.10', usage: 'Log aggregation', impact: 'Debugging', proficiency: 88 },
    ],
  };

  const categories = [
    { id: 'all', label: 'All Technologies', icon: FiCode },
    { id: 'backend', label: 'Backend', icon: FiServer },
    { id: 'frontend', label: 'Frontend', icon: FiMonitor },
    { id: 'database', label: 'Database', icon: FiDatabase },
    { id: 'infrastructure', label: 'Infrastructure', icon: FiCloud },
    { id: 'monitoring', label: 'Monitoring', icon: FiShield },
  ];

  const filteredTech = selectedCategory === 'all'
    ? Object.values(technologies).flat()
    : technologies[selectedCategory as keyof typeof technologies] || [];

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Technology Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTech.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {tech.name}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                v{tech.version}
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {tech.usage}
            </p>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{tech.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>

              <div className="text-xs">
                <span className="text-gray-600 dark:text-gray-400">Impact: </span>
                <span className="text-primary-600 dark:text-primary-400 font-medium">{tech.impact}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technology Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-6">Technology Adoption Timeline</h3>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/30"></div>
          {[
            { year: '2020', tech: 'Migrated from monolith to microservices', desc: 'Started with 3 core services' },
            { year: '2021', tech: 'Kubernetes adoption', desc: 'Full container orchestration' },
            { year: '2022', tech: 'Service mesh with Istio', desc: 'Enhanced observability and security' },
            { year: '2023', tech: 'ML-powered features', desc: 'Recommendation engine and fraud detection' },
            { year: '2024', tech: 'Edge computing', desc: 'CDN and edge functions for global scale' },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center mb-8"
            >
              <div className="absolute left-8 w-4 h-4 bg-white rounded-full -translate-x-1/2"></div>
              <div className="ml-16">
                <div className="text-sm opacity-75">{item.year}</div>
                <div className="text-lg font-semibold">{item.tech}</div>
                <div className="text-sm opacity-90">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechnologyStack;