import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiTrendingUp, FiZap, FiActivity } from 'react-icons/fi';

const ScalabilitySection = () => {
  const [podCount, setPodCount] = useState(5);
  const [isScaling, setIsScaling] = useState(false);
  const [loadTest, setLoadTest] = useState({ active: false, rps: 0 });

  const simulateScaling = () => {
    setIsScaling(true);
    const targetPods = 25;
    const interval = setInterval(() => {
      setPodCount(prev => {
        if (prev >= targetPods) {
          clearInterval(interval);
          setIsScaling(false);
          return prev;
        }
        return prev + 2;
      });
    }, 200);
  };

  const simulateLoadTest = () => {
    setLoadTest({ active: true, rps: 1000 });
    let currentRps = 1000;
    const interval = setInterval(() => {
      currentRps += 2000;
      setLoadTest({ active: true, rps: currentRps });
      if (currentRps >= 50000) {
        setTimeout(() => {
          setLoadTest({ active: false, rps: 0 });
          clearInterval(interval);
        }, 2000);
      }
    }, 500);
  };

  return (
    <div className="space-y-12">
      {/* Scaling Simulation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Auto-Scaling Demonstration
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Watch Kubernetes pods scale from 5 to 25 instances during high traffic
          </p>
          <button
            onClick={simulateScaling}
            disabled={isScaling}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isScaling ? 'Scaling in Progress...' : 'Simulate Traffic Spike'}
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-6">
          {Array.from({ length: 25 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: index < podCount ? 1 : 0.3,
                scale: index < podCount ? 1 : 0.7,
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`aspect-square rounded-lg flex items-center justify-center ${
                index < podCount
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
              }`}
            >
              <FiServer className="w-6 h-6" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {podCount} / 25 Pods Active
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {isScaling ? 'Scaling up...' : 'Ready to scale'}
          </div>
        </div>
      </motion.div>

      {/* Load Testing Simulator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Load Testing Performance
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            System performance under increasing load
          </p>
          <button
            onClick={simulateLoadTest}
            disabled={loadTest.active}
            className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadTest.active ? 'Load Test Running...' : 'Start Load Test'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {loadTest.rps.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Requests/Second</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {loadTest.active ? '< 100ms' : '45ms'}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              99.99%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
          <motion.div
            className="bg-gradient-to-r from-yellow-500 to-red-500 h-4 rounded-full flex items-center justify-end pr-2"
            animate={{ width: loadTest.active ? `${(loadTest.rps / 50000) * 100}%` : '2%' }}
            transition={{ duration: 0.5 }}
          >
            <FiZap className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scalability Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white"
        >
          <FiTrendingUp className="w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Horizontal Scaling</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Max Pods per Service:</span>
              <span className="font-semibold">50</span>
            </div>
            <div className="flex justify-between">
              <span>Scale-up Time:</span>
              <span className="font-semibold">30 seconds</span>
            </div>
            <div className="flex justify-between">
              <span>CPU Threshold:</span>
              <span className="font-semibold">70%</span>
            </div>
            <div className="flex justify-between">
              <span>Memory Threshold:</span>
              <span className="font-semibold">80%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-8 text-white"
        >
          <FiActivity className="w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Peak RPS Handled:</span>
              <span className="font-semibold">75,000</span>
            </div>
            <div className="flex justify-between">
              <span>Concurrent Users:</span>
              <span className="font-semibold">100,000+</span>
            </div>
            <div className="flex justify-between">
              <span>Data Processed/Day:</span>
              <span className="font-semibold">50TB</span>
            </div>
            <div className="flex justify-between">
              <span>Global Latency (P95):</span>
              <span className="font-semibold">&lt; 200ms</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScalabilitySection;