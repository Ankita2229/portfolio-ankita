import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiShield, FiLock, FiEye, FiFileText, FiUsers, FiGlobe,
  FiCheckCircle, FiAlertTriangle, FiSettings, FiHeart,
  FiTarget, FiActivity, FiKey, FiDatabase, FiMonitor,
  FiAward, FiBook, FiUserCheck
} from 'react-icons/fi';

const ComplianceEthics = () => {
  const [activeTab, setActiveTab] = useState('compliance');

  const complianceFrameworks = [
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Certified',
      coverage: 95,
      requirements: [
        'Data Subject Rights Implementation',
        'Privacy by Design Architecture',
        'Data Protection Impact Assessments',
        'Breach Notification Procedures',
        'Data Minimization Practices'
      ],
      icon: FiShield,
      color: 'blue'
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act',
      status: 'Compliant',
      coverage: 92,
      requirements: [
        'Consumer Rights Implementation',
        'Data Sale Opt-out Mechanisms',
        'Privacy Policy Transparency',
        'Data Retention Policies',
        'Third-party Disclosure Controls'
      ],
      icon: FiLock,
      color: 'green'
    },
    {
      name: 'ISO 27001',
      description: 'Information Security Management',
      status: 'Certified',
      coverage: 98,
      requirements: [
        'Information Security Policies',
        'Risk Assessment Procedures',
        'Security Control Implementation',
        'Incident Response Protocols',
        'Continuous Monitoring Systems'
      ],
      icon: FiDatabase,
      color: 'purple'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control',
      status: 'Audited',
      coverage: 96,
      requirements: [
        'Security Control Effectiveness',
        'Availability Monitoring',
        'Processing Integrity Checks',
        'Confidentiality Safeguards',
        'Privacy Protection Measures'
      ],
      icon: FiAward,
      color: 'orange'
    }
  ];

  const ethicalPrinciples = [
    {
      principle: 'Transparency',
      description: 'Clear explanation of AI decision-making processes',
      implementation: [
        'Explainable AI models with interpretation layers',
        'Decision audit trails for all automated processes',
        'Clear documentation of data sources and processing',
        'Regular transparency reports published quarterly'
      ],
      icon: FiEye,
      color: 'blue'
    },
    {
      principle: 'Fairness',
      description: 'Bias detection and mitigation across all AI systems',
      implementation: [
        'Automated bias testing in ML model pipelines',
        'Diverse training datasets with bias monitoring',
        'Regular fairness audits by independent assessors',
        'Bias correction mechanisms in real-time processing'
      ],
      icon: FiUsers,
      color: 'green'
    },
    {
      principle: 'Accountability',
      description: 'Human oversight and responsibility for AI decisions',
      implementation: [
        'Human-in-the-loop validation for critical decisions',
        'Clear escalation procedures for edge cases',
        'Regular model performance reviews and updates',
        'Designated AI ethics officer and review board'
      ],
      icon: FiUserCheck,
      color: 'purple'
    },
    {
      principle: 'Privacy',
      description: 'Data protection and user privacy by design',
      implementation: [
        'End-to-end encryption for all data processing',
        'Differential privacy techniques for analytics',
        'Automated data anonymization procedures',
        'Strict data retention and deletion policies'
      ],
      icon: FiLock,
      color: 'orange'
    }
  ];

  const crawlingEthics = [
    {
      practice: 'Robots.txt Compliance',
      description: 'Strict adherence to website crawling guidelines',
      status: 'Automated',
      details: [
        'Real-time robots.txt parsing and compliance',
        'Automatic crawl delay respect (minimum 1 second)',
        'Blocked path recognition and avoidance',
        'User-agent identification and rate limiting'
      ],
      icon: FiActivity,
      compliance: 100
    },
    {
      practice: 'Rate Limiting',
      description: 'Respectful crawling to prevent server overload',
      status: 'Active',
      details: [
        'Adaptive rate limiting based on server response times',
        'Maximum 1 request per second per domain default',
        'Automatic throttling during high server load',
        'Distributed crawling to minimize single-point impact'
      ],
      icon: FiTarget,
      compliance: 98
    },
    {
      practice: 'Content Respect',
      description: 'Ethical handling of copyrighted and sensitive content',
      status: 'Enforced',
      details: [
        'Copyright detection and respect mechanisms',
        'Sensitive content filtering and protection',
        'Fair use assessment for content analysis',
        'Takedown request processing within 24 hours'
      ],
      icon: FiFileText,
      compliance: 95
    },
    {
      practice: 'Data Minimization',
      description: 'Collecting only necessary data for analysis purposes',
      status: 'Implemented',
      details: [
        'Purpose-limited data collection strategies',
        'Automatic PII detection and masking',
        'Selective content extraction (relevance-based)',
        'Regular data purging of unnecessary information'
      ],
      icon: FiDatabase,
      compliance: 97
    }
  ];

  const securityMeasures = [
    {
      category: 'Data Encryption',
      measures: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'End-to-end encryption for sensitive data',
        'Key rotation every 90 days'
      ],
      icon: FiKey,
      strength: 'Military Grade'
    },
    {
      category: 'Access Control',
      measures: [
        'Multi-factor authentication required',
        'Role-based access control (RBAC)',
        'Zero-trust network architecture',
        'Regular access reviews and audits'
      ],
      icon: FiLock,
      strength: 'Enterprise Level'
    },
    {
      category: 'Monitoring',
      measures: [
        '24/7 security operations center',
        'Real-time threat detection and response',
        'Automated incident response procedures',
        'Regular penetration testing'
      ],
      icon: FiMonitor,
      strength: 'Continuous'
    },
    {
      category: 'Compliance',
      measures: [
        'Regular compliance audits and assessments',
        'Data protection impact assessments',
        'Privacy policy updates and reviews',
        'Staff training and certification programs'
      ],
      icon: FiShield,
      strength: 'Comprehensive'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', authority: 'International Organization for Standardization', date: '2024' },
    { name: 'SOC 2 Type II', authority: 'AICPA', date: '2024' },
    { name: 'GDPR Compliance', authority: 'EU Data Protection Board', date: '2024' },
    { name: 'NIST Framework', authority: 'National Institute of Standards', date: '2024' },
    { name: 'Cloud Security Alliance', authority: 'CSA', date: '2024' },
    { name: 'Ethical AI Certification', authority: 'Partnership on AI', date: '2024' }
  ];

  const renderComplianceOverview = () => (
    <div className="space-y-8">
      {/* Compliance Frameworks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {complianceFrameworks.map((framework, index) => {
          const Icon = framework.icon;
          return (
            <motion.div
              key={framework.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-3 rounded-xl bg-${framework.color}-100 dark:bg-${framework.color}-900/20 mr-4`}>
                    <Icon className={`w-6 h-6 text-${framework.color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                      {framework.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {framework.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    framework.status === 'Certified'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  }`}>
                    {framework.status}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Compliance Coverage</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {framework.coverage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`bg-${framework.color}-500 h-2 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${framework.coverage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Requirements
                </h4>
                {framework.requirements.map((req, reqIndex) => (
                  <motion.div
                    key={req}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: reqIndex * 0.1 }}
                    className="flex items-center text-xs text-gray-600 dark:text-gray-400"
                  >
                    <FiCheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    {req}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Security Measures */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Security Framework
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityMeasures.map((security, index) => {
            const Icon = security.icon;
            return (
              <motion.div
                key={security.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {security.category}
                </h4>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {security.strength}
                </p>
                <div className="space-y-2">
                  {security.measures.map((measure, measureIndex) => (
                    <div key={measure} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      {measure}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );

  const renderEthicalAI = () => (
    <div className="space-y-8">
      {/* Ethical Principles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {ethicalPrinciples.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={principle.principle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-${principle.color}-100 dark:bg-${principle.color}-900/20 mr-4`}>
                  <Icon className={`w-6 h-6 text-${principle.color}-600`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    {principle.principle}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {principle.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Implementation
                </h4>
                {principle.implementation.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="flex items-start"
                  >
                    <div className={`w-2 h-2 bg-${principle.color}-500 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* AI Ethics Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center">
          <FiHeart className="w-6 h-6 text-red-500 mr-2" />
          AI Ethics Monitoring Dashboard
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { metric: 'Bias Detection', value: '99.2%', status: 'Optimal', icon: FiTarget },
            { metric: 'Transparency Score', value: '94.8%', status: 'Excellent', icon: FiEye },
            { metric: 'Human Oversight', value: '100%', status: 'Active', icon: FiUsers },
            { metric: 'Privacy Compliance', value: '98.5%', status: 'Certified', icon: FiShield }
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {metric.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {metric.metric}
                </p>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                  {metric.status}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );

  const renderCrawlingEthics = () => (
    <div className="space-y-8">
      {/* Crawling Ethics Practices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {crawlingEthics.map((practice, index) => {
          const Icon = practice.icon;
          return (
            <motion.div
              key={practice.practice}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/20 mr-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {practice.practice}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {practice.description}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  practice.status === 'Automated'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                }`}>
                  {practice.status}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Compliance Rate</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {practice.compliance}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${practice.compliance}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Implementation Details
                </h4>
                {practice.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detail}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: detailIndex * 0.1 }}
                    className="flex items-center text-xs text-gray-600 dark:text-gray-400"
                  >
                    <FiCheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    {detail}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center">
          <FiAward className="w-6 h-6 text-yellow-500 mr-2" />
          Certifications & Compliance
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <FiAward className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                {cert.name}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                {cert.authority}
              </p>
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                {cert.date}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const tabs = [
    { id: 'compliance', label: 'Compliance Framework', icon: FiShield },
    { id: 'ethics', label: 'Ethical AI', icon: FiHeart },
    { id: 'crawling', label: 'Crawling Ethics', icon: FiGlobe }
  ];

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="flex space-x-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === 'compliance' && renderComplianceOverview()}
        {activeTab === 'ethics' && renderEthicalAI()}
        {activeTab === 'crawling' && renderCrawlingEthics()}
      </div>
    </div>
  );
};

export default ComplianceEthics;