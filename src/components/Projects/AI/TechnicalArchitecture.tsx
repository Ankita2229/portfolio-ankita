import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiServer, FiDatabase, FiCloud, FiGlobe, FiShield, FiZap,
  FiLayers, FiCpu, FiHardDrive, FiMonitor, FiActivity, FiArrowRight,
  FiBox, FiSettings, FiTrendingUp
} from 'react-icons/fi';

const TechnicalArchitecture = () => {
  const [activeLayer, setActiveLayer] = useState('overview');

  const architectureLayers = [
    {
      id: 'overview',
      name: 'System Overview',
      description: 'High-level architecture overview'
    },
    {
      id: 'data',
      name: 'Data Layer',
      description: 'Data ingestion and storage'
    },
    {
      id: 'processing',
      name: 'Processing Layer',
      description: 'AI/ML processing pipeline'
    },
    {
      id: 'api',
      name: 'API Layer',
      description: 'Service APIs and gateways'
    },
    {
      id: 'frontend',
      name: 'Presentation Layer',
      description: 'User interfaces and dashboards'
    }
  ];

  const microservices = [
    {
      name: 'Crawler Service',
      icon: FiGlobe,
      description: 'Distributed web crawling',
      technologies: ['Python', 'Scrapy', 'Selenium'],
      instances: 50,
      cpu: '2.4 GHz',
      memory: '8 GB',
      color: 'blue'
    },
    {
      name: 'Parser Service',
      icon: FiSettings,
      description: 'Content extraction & parsing',
      technologies: ['Python', 'BeautifulSoup', 'OCR'],
      instances: 30,
      cpu: '3.2 GHz',
      memory: '16 GB',
      color: 'green'
    },
    {
      name: 'AI Analysis Service',
      icon: FiCpu,
      description: 'ML model inference',
      technologies: ['TensorFlow', 'PyTorch', 'CUDA'],
      instances: 20,
      cpu: '3.8 GHz',
      memory: '32 GB',
      color: 'purple'
    },
    {
      name: 'Data Pipeline',
      icon: FiDatabase,
      description: 'ETL processing pipeline',
      technologies: ['Apache Spark', 'Kafka', 'Airflow'],
      instances: 15,
      cpu: '2.8 GHz',
      memory: '24 GB',
      color: 'orange'
    },
    {
      name: 'API Gateway',
      icon: FiServer,
      description: 'API management & routing',
      technologies: ['Node.js', 'Kong', 'Redis'],
      instances: 10,
      cpu: '2.2 GHz',
      memory: '8 GB',
      color: 'red'
    },
    {
      name: 'Storage Service',
      icon: FiHardDrive,
      description: 'Distributed data storage',
      technologies: ['MongoDB', 'Elasticsearch', 'S3'],
      instances: 25,
      cpu: '2.0 GHz',
      memory: '64 GB',
      color: 'indigo'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Throughput',
      value: '10TB+/day',
      description: 'Daily data processing capacity',
      icon: FiTrendingUp,
      color: 'blue'
    },
    {
      metric: 'Latency',
      value: '<50ms',
      description: 'Average API response time',
      icon: FiZap,
      color: 'yellow'
    },
    {
      metric: 'Availability',
      value: '99.99%',
      description: 'System uptime SLA',
      icon: FiShield,
      color: 'green'
    },
    {
      metric: 'Scalability',
      value: '1000x',
      description: 'Auto-scaling capability',
      icon: FiLayers,
      color: 'purple'
    }
  ];

  const dataFlow = [
    { id: 1, name: 'Web Sources', icon: FiGlobe, x: 5, y: 50 },
    { id: 2, name: 'Load Balancer', icon: FiServer, x: 20, y: 50 },
    { id: 3, name: 'Crawler Pool', icon: FiBox, x: 35, y: 30 },
    { id: 4, name: 'Message Queue', icon: FiLayers, x: 35, y: 70 },
    { id: 5, name: 'AI Processing', icon: FiCpu, x: 55, y: 50 },
    { id: 6, name: 'Data Lake', icon: FiDatabase, x: 75, y: 30 },
    { id: 7, name: 'Analytics DB', icon: FiHardDrive, x: 75, y: 70 },
    { id: 8, name: 'API Gateway', icon: FiMonitor, x: 90, y: 50 }
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
    { from: 5, to: 7 },
    { from: 6, to: 8 },
    { from: 7, to: 8 }
  ];

  const renderSystemOverview = () => (
    <div className="space-y-8">
      {/* Data Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          System Data Flow
        </h3>

        <div className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((connection, index) => {
              const from = dataFlow.find(node => node.id === connection.from);
              const to = dataFlow.find(node => node.id === connection.to);
              if (!from || !to) return null;

              return (
                <motion.line
                  key={index}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke="#6366F1"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                />
              );
            })}
          </svg>

          {/* Data Flow Nodes */}
          {dataFlow.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {node.name}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Flow Animation */}
          {connections.map((connection, index) => {
            const from = dataFlow.find(node => node.id === connection.from);
            const to = dataFlow.find(node => node.id === connection.to);
            if (!from || !to) return null;

            return (
              <motion.div
                key={`flow-${index}`}
                className="absolute w-2 h-2 bg-blue-500 rounded-full"
                initial={{
                  left: `${from.x}%`,
                  top: `${from.y}%`,
                  opacity: 0
                }}
                animate={{
                  left: [`${from.x}%`, `${to.x}%`],
                  top: [`${from.y}%`, `${to.y}%`],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "linear"
                }}
              />
            );
          })}
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${metric.color}-100 dark:bg-${metric.color}-900/20 flex items-center justify-center`}>
                <Icon className={`w-6 h-6 text-${metric.color}-600`} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {metric.metric}
              </h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {metric.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const renderMicroservices = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {microservices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-${service.color}-100 dark:bg-${service.color}-900/20 mr-4`}>
                  <Icon className={`w-6 h-6 text-${service.color}-600`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Instances:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{service.instances}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">CPU:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{service.cpu}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Memory:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{service.memory}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Health Indicator */}
              <div className="flex items-center mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                    Healthy
                  </span>
                </div>
                <div className="ml-auto">
                  <FiActivity className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const renderInfrastructure = () => (
    <div className="space-y-8">
      {/* Cloud Infrastructure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Cloud Infrastructure
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Compute Layer',
              items: [
                'Auto-scaling EC2 instances',
                'Kubernetes orchestration',
                'Load balancing',
                'GPU clusters for ML'
              ],
              icon: FiCpu,
              color: 'blue'
            },
            {
              title: 'Storage Layer',
              items: [
                'S3 data lake (100TB+)',
                'MongoDB clusters',
                'Redis caching',
                'Elasticsearch indexing'
              ],
              icon: FiDatabase,
              color: 'green'
            },
            {
              title: 'Network Layer',
              items: [
                'CloudFront CDN',
                'VPC security groups',
                'API Gateway',
                'Route 53 DNS'
              ],
              icon: FiCloud,
              color: 'purple'
            }
          ].map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${layer.color}-100 dark:bg-${layer.color}-900/20 flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 text-${layer.color}-600`} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                  {layer.title}
                </h4>
                <ul className="space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Security & Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <FiShield className="w-6 h-6 mr-2 text-green-500" />
            Security Framework
          </h3>
          <div className="space-y-4">
            {[
              'End-to-end encryption (AES-256)',
              'OAuth 2.0 / JWT authentication',
              'Role-based access control',
              'API rate limiting',
              'DDoS protection',
              'Security audit logging'
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <FiMonitor className="w-6 h-6 mr-2 text-blue-500" />
            Monitoring & Observability
          </h3>
          <div className="space-y-4">
            {[
              'Real-time metrics (Prometheus)',
              'Distributed tracing (Jaeger)',
              'Log aggregation (ELK Stack)',
              'Health check dashboards',
              'Alert management (PagerDuty)',
              'Performance profiling'
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Layer Navigation */}
      <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
        {architectureLayers.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setActiveLayer(layer.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeLayer === layer.id
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <div className="text-center">
              <div className="font-semibold">{layer.name}</div>
              <div className="text-xs opacity-75">{layer.description}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Layer Content */}
      <div className="min-h-[600px]">
        {(activeLayer === 'overview' || activeLayer === 'data') && renderSystemOverview()}
        {(activeLayer === 'processing' || activeLayer === 'api') && renderMicroservices()}
        {activeLayer === 'frontend' && renderInfrastructure()}
      </div>
    </div>
  );
};

export default TechnicalArchitecture;