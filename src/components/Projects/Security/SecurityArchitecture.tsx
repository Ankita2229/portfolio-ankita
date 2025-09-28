import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiKey, FiEye, FiCheckCircle } from 'react-icons/fi';

const SecurityArchitecture = () => {
  const securityLayers = [
    { name: 'WAF', description: 'Web Application Firewall', status: 'active', threats: '1M+ blocked/day' },
    { name: 'API Gateway', description: 'Rate limiting & Auth', status: 'active', threats: '500K+ filtered' },
    { name: 'OAuth 2.0', description: 'Token-based auth', status: 'active', threats: '0 breaches' },
    { name: 'mTLS', description: 'Service-to-service encryption', status: 'active', threats: 'E2E encrypted' },
    { name: 'RBAC', description: 'Role-based access control', status: 'active', threats: '99.9% compliance' }
  ];

  const complianceBadges = [
    { name: 'SOC 2 Type II', status: 'certified', color: 'bg-blue-600' },
    { name: 'PCI DSS Level 1', status: 'certified', color: 'bg-green-600' },
    { name: 'GDPR Compliant', status: 'certified', color: 'bg-purple-600' },
    { name: 'HIPAA Ready', status: 'certified', color: 'bg-yellow-600' },
  ];

  return (
    <div className="space-y-12">
      {/* Zero Trust Architecture */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Zero Trust Security Model</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <FiShield className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Never Trust</h4>
            <p className="text-sm opacity-90">Verify every request, regardless of source</p>
          </div>
          <div className="text-center">
            <FiEye className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Always Verify</h4>
            <p className="text-sm opacity-90">Multi-factor authentication for all access</p>
          </div>
          <div className="text-center">
            <FiLock className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Least Privilege</h4>
            <p className="text-sm opacity-90">Minimal access rights for each user/service</p>
          </div>
        </div>
      </motion.div>

      {/* Security Layers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Defense in Depth
          </h3>
          {securityLayers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex items-center space-x-4"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 dark:text-white">{layer.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{layer.description}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-green-600">{layer.status.toUpperCase()}</div>
                <div className="text-xs text-gray-500">{layer.threats}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            OAuth 2.0 Authentication Flow
          </h3>
          <div className="space-y-4">
            {[
              'Client requests authorization',
              'User authenticates with IdP',
              'Authorization code returned',
              'Exchange code for access token',
              'API access with bearer token',
              'Token validation & refresh'
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">{step}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Compliance Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Compliance & Certifications
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {complianceBadges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${badge.color} text-white rounded-xl p-6 text-center relative overflow-hidden`}
            >
              <FiCheckCircle className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold text-sm">{badge.name}</div>
              <div className="text-xs opacity-90 mt-1">{badge.status}</div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-600 text-white rounded-xl p-6 text-center"
        >
          <FiShield className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold mb-2">0</div>
          <div className="text-sm opacity-90">Security Breaches</div>
          <div className="text-xs opacity-75 mt-2">Last 24 months</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-blue-600 text-white rounded-xl p-6 text-center"
        >
          <FiKey className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold mb-2">256-bit</div>
          <div className="text-sm opacity-90">Encryption Standard</div>
          <div className="text-xs opacity-75 mt-2">AES encryption</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-purple-600 text-white rounded-xl p-6 text-center"
        >
          <FiEye className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold mb-2">24/7</div>
          <div className="text-sm opacity-90">Security Monitoring</div>
          <div className="text-xs opacity-75 mt-2">SIEM integration</div>
        </motion.div>
      </div>
    </div>
  );
};

export default SecurityArchitecture;