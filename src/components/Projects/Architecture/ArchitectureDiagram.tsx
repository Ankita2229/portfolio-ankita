import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiDatabase, FiShield, FiActivity, FiCloud, FiGlobe } from 'react-icons/fi';

interface Service {
  id: string;
  name: string;
  description: string;
  tech: string[];
  status: 'healthy' | 'warning' | 'critical';
  metrics: {
    latency: string;
    throughput: string;
    errorRate: string;
  };
  position: { x: number; y: number };
  icon: React.ElementType;
}

const ArchitectureDiagram = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'api-gateway',
      name: 'API Gateway',
      description: 'Central entry point for all client requests',
      tech: ['Kong', 'Nginx', 'OAuth 2.0'],
      status: 'healthy',
      metrics: { latency: '12ms', throughput: '50K RPS', errorRate: '0.01%' },
      position: { x: 50, y: 20 },
      icon: FiGlobe
    },
    {
      id: 'user-service',
      name: 'User Management',
      description: 'Authentication and user profile management',
      tech: ['Spring Boot', 'JWT', 'PostgreSQL'],
      status: 'healthy',
      metrics: { latency: '45ms', throughput: '10K RPS', errorRate: '0.02%' },
      position: { x: 25, y: 35 },
      icon: FiShield
    },
    {
      id: 'product-service',
      name: 'Product Catalog',
      description: 'Product inventory and search functionality',
      tech: ['Spring Boot', 'Elasticsearch', 'Redis'],
      status: 'healthy',
      metrics: { latency: '35ms', throughput: '20K RPS', errorRate: '0.01%' },
      position: { x: 50, y: 35 },
      icon: FiServer
    },
    {
      id: 'order-service',
      name: 'Order Processing',
      description: 'Order management and workflow orchestration',
      tech: ['Spring Boot', 'Apache Kafka', 'MongoDB'],
      status: 'warning',
      metrics: { latency: '120ms', throughput: '5K RPS', errorRate: '0.5%' },
      position: { x: 75, y: 35 },
      icon: FiActivity
    },
    {
      id: 'payment-service',
      name: 'Payment Gateway',
      description: 'Secure payment processing and reconciliation',
      tech: ['Spring Boot', 'Stripe API', 'PostgreSQL'],
      status: 'healthy',
      metrics: { latency: '200ms', throughput: '3K RPS', errorRate: '0.001%' },
      position: { x: 25, y: 50 },
      icon: FiShield
    },
    {
      id: 'notification-service',
      name: 'Notifications',
      description: 'Email, SMS, and push notification delivery',
      tech: ['Node.js', 'AWS SES', 'RabbitMQ'],
      status: 'healthy',
      metrics: { latency: '150ms', throughput: '15K RPS', errorRate: '0.1%' },
      position: { x: 75, y: 50 },
      icon: FiActivity
    },
    {
      id: 'analytics-service',
      name: 'Analytics Engine',
      description: 'Real-time analytics and reporting',
      tech: ['Apache Spark', 'Kafka Streams', 'Cassandra'],
      status: 'healthy',
      metrics: { latency: '500ms', throughput: '2K RPS', errorRate: '0.05%' },
      position: { x: 50, y: 50 },
      icon: FiDatabase
    },
    {
      id: 'recommendation-service',
      name: 'Recommendation Engine',
      description: 'ML-powered product recommendations',
      tech: ['Python', 'TensorFlow', 'Redis'],
      status: 'healthy',
      metrics: { latency: '80ms', throughput: '8K RPS', errorRate: '0.03%' },
      position: { x: 25, y: 65 },
      icon: FiCloud
    },
    {
      id: 'inventory-service',
      name: 'Inventory Management',
      description: 'Real-time inventory tracking and updates',
      tech: ['Spring Boot', 'PostgreSQL', 'Redis'],
      status: 'healthy',
      metrics: { latency: '40ms', throughput: '12K RPS', errorRate: '0.02%' },
      position: { x: 50, y: 65 },
      icon: FiDatabase
    },
    {
      id: 'shipping-service',
      name: 'Shipping & Logistics',
      description: 'Shipping integration and tracking',
      tech: ['Spring Boot', 'FedEx API', 'MongoDB'],
      status: 'healthy',
      metrics: { latency: '180ms', throughput: '4K RPS', errorRate: '0.08%' },
      position: { x: 75, y: 65 },
      icon: FiServer
    }
  ];

  const connections = [
    { from: 'api-gateway', to: 'user-service' },
    { from: 'api-gateway', to: 'product-service' },
    { from: 'api-gateway', to: 'order-service' },
    { from: 'user-service', to: 'order-service' },
    { from: 'product-service', to: 'order-service' },
    { from: 'order-service', to: 'payment-service' },
    { from: 'order-service', to: 'inventory-service' },
    { from: 'order-service', to: 'notification-service' },
    { from: 'product-service', to: 'recommendation-service' },
    { from: 'order-service', to: 'shipping-service' },
    { from: 'payment-service', to: 'notification-service' },
    { from: 'inventory-service', to: 'analytics-service' },
    { from: 'shipping-service', to: 'notification-service' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-500 border-green-500';
      case 'warning': return 'text-yellow-500 border-yellow-500';
      case 'critical': return 'text-red-500 border-red-500';
      default: return 'text-gray-500 border-gray-500';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-500/10';
      case 'warning': return 'bg-yellow-500/10';
      case 'critical': return 'bg-red-500/10';
      default: return 'bg-gray-500/10';
    }
  };

  return (
    <div className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 overflow-hidden">
      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#6B7280" />
          </marker>
        </defs>
        {connections.map((conn, index) => {
          const fromService = services.find(s => s.id === conn.from);
          const toService = services.find(s => s.id === conn.to);
          if (!fromService || !toService) return null;

          return (
            <motion.line
              key={index}
              x1={`${fromService.position.x}%`}
              y1={`${fromService.position.y}%`}
              x2={`${toService.position.x}%`}
              y2={`${toService.position.y}%`}
              stroke="#6B7280"
              strokeWidth="1"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: index * 0.05 }}
              className="opacity-30"
            />
          );
        })}
      </svg>

      {/* Service Nodes */}
      <div className="relative min-h-[600px]">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isHovered = hoveredService === service.id;
          const isSelected = selectedService?.id === service.id;

          return (
            <motion.div
              key={service.id}
              className="absolute cursor-pointer"
              style={{
                left: `${service.position.x}%`,
                top: `${service.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setSelectedService(service)}
            >
              <div
                className={`
                  relative p-4 bg-white dark:bg-gray-900 rounded-xl border-2
                  transition-all duration-300 ${getStatusColor(service.status)}
                  ${isHovered || isSelected ? 'scale-110 shadow-2xl z-10' : 'shadow-lg'}
                  ${getStatusBg(service.status)}
                `}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-6 h-6 ${getStatusColor(service.status)}`} />
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">
                      {service.name}
                    </div>
                    {(isHovered || isSelected) && (
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {service.tech[0]}
                      </div>
                    )}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                  service.status === 'healthy' ? 'bg-green-500' :
                  service.status === 'warning' ? 'bg-yellow-500' :
                  'bg-red-500'
                } animate-pulse`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Service Details Popup */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 z-20"
        >
          <button
            onClick={() => setSelectedService(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ✕
          </button>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {selectedService.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {selectedService.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">Latency</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {selectedService.metrics.latency}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">Throughput</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {selectedService.metrics.throughput}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">Error Rate</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {selectedService.metrics.errorRate}
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Technology Stack:
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedService.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ArchitectureDiagram;