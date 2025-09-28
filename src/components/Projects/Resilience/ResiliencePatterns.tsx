import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiRefreshCw, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

const ResiliencePatterns = () => {
  const [circuitState, setCircuitState] = useState('closed');
  const [retryAttempt, setRetryAttempt] = useState(0);

  const patterns = [
    {
      name: 'Circuit Breaker',
      description: 'Prevents cascade failures by monitoring service health',
      implementation: 'Netflix Hystrix pattern',
      metrics: { threshold: '50 failures', timeout: '30 seconds', recovery: '10 seconds' }
    },
    {
      name: 'Retry with Backoff',
      description: 'Exponential backoff for transient failures',
      implementation: 'Polly library integration',
      metrics: { attempts: '3 max', backoff: 'Exponential', jitter: 'Full jitter' }
    },
    {
      name: 'Bulkhead Isolation',
      description: 'Resource isolation prevents total system failure',
      implementation: 'Separate thread pools',
      metrics: { pools: '4 isolated', capacity: '25% each', overflow: 'Shared pool' }
    },
    {
      name: 'Health Checks',
      description: 'Continuous monitoring of service availability',
      implementation: 'Spring Boot Actuator',
      metrics: { interval: '30 seconds', timeout: '5 seconds', grace: '3 failures' }
    }
  ];

  const simulateCircuitBreaker = () => {
    if (circuitState === 'closed') {
      setCircuitState('open');
      setTimeout(() => {
        setCircuitState('half-open');
        setTimeout(() => {
          setCircuitState('closed');
        }, 3000);
      }, 5000);
    }
  };

  const simulateRetry = () => {
    setRetryAttempt(1);
    const intervals = [1000, 2000, 4000];
    intervals.forEach((delay, index) => {
      setTimeout(() => {
        setRetryAttempt(index + 2);
        if (index === intervals.length - 1) {
          setTimeout(() => setRetryAttempt(0), 1000);
        }
      }, delay);
    });
  };

  return (
    <div className="space-y-12">
      {/* Interactive Circuit Breaker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Circuit Breaker Pattern
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Prevents cascade failures by monitoring downstream service health
          </p>
          <button
            onClick={simulateCircuitBreaker}
            disabled={circuitState !== 'closed'}
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50"
          >
            Simulate Service Failure
          </button>
        </div>

        <div className="flex justify-center items-center space-x-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2">
              <FiShield className="w-8 h-8 text-white" />
            </div>
            <div className="text-sm font-medium">Client</div>
          </div>

          <div className="flex-1 relative">
            <div className={`h-2 rounded-full transition-all duration-300 ${
              circuitState === 'closed' ? 'bg-green-500' :
              circuitState === 'open' ? 'bg-red-500' :
              'bg-yellow-500'
            }`} />
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <span className={`text-xs font-medium px-2 py-1 rounded ${
                circuitState === 'closed' ? 'bg-green-100 text-green-800' :
                circuitState === 'open' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {circuitState.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="text-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
              circuitState === 'closed' ? 'bg-green-500' : 'bg-red-500'
            }`}>
              {circuitState === 'closed' ? 
                <FiCheckCircle className="w-8 h-8 text-white" /> :
                <FiAlertTriangle className="w-8 h-8 text-white" />
              }
            </div>
            <div className="text-sm font-medium">Service</div>
          </div>
        </div>
      </motion.div>

      {/* Retry Pattern Simulation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Retry with Exponential Backoff
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Automatically retries failed requests with increasing delays
          </p>
          <button
            onClick={simulateRetry}
            disabled={retryAttempt > 0}
            className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 disabled:opacity-50"
          >
            {retryAttempt > 0 ? `Retry Attempt ${retryAttempt}` : 'Simulate Retry Pattern'}
          </button>
        </div>

        <div className="flex justify-center space-x-4">
          {[1, 2, 3].map((attempt) => (
            <motion.div
              key={attempt}
              className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${
                retryAttempt >= attempt ? 'bg-yellow-500 border-yellow-500 text-white' :
                'bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500'
              }`}
              animate={{
                scale: retryAttempt === attempt ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <FiRefreshCw className={`w-6 h-6 ${retryAttempt === attempt ? 'animate-spin' : ''}`} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center space-x-16 mt-4 text-sm text-gray-600 dark:text-gray-400">
          <span>1s</span>
          <span>2s</span>
          <span>4s</span>
        </div>
      </motion.div>

      {/* Patterns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patterns.map((pattern, index) => (
          <motion.div
            key={pattern.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {pattern.name}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {pattern.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Implementation:</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {pattern.implementation}
                </span>
              </div>
              {Object.entries(pattern.metrics).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-500 capitalize">{key}:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recovery Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-6">Disaster Recovery Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">4 min</div>
            <div className="text-sm opacity-90">Recovery Time Objective (RTO)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">30 sec</div>
            <div className="text-sm opacity-90">Recovery Point Objective (RPO)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">99.97%</div>
            <div className="text-sm opacity-90">System Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3 AZs</div>
            <div className="text-sm opacity-90">Multi-Region Deployment</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResiliencePatterns;