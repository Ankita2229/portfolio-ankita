import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGitBranch, FiCheckCircle, FiPlay, FiPackage, FiCloud, FiMonitor } from 'react-icons/fi';

const DevOpsPipeline = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const pipelineStages = [
    { name: 'Source', icon: FiGitBranch, duration: '0.5s', status: 'completed', description: 'Git push triggers pipeline' },
    { name: 'Build', icon: FiPackage, duration: '2.3s', status: 'completed', description: 'Maven build & unit tests' },
    { name: 'Test', icon: FiCheckCircle, duration: '4.1s', status: 'completed', description: 'Integration & E2E tests' },
    { name: 'Security', icon: FiMonitor, duration: '1.8s', status: 'completed', description: 'SAST & dependency scan' },
    { name: 'Package', icon: FiPackage, duration: '3.2s', status: 'completed', description: 'Docker image build' },
    { name: 'Deploy', icon: FiCloud, duration: '5.7s', status: 'running', description: 'Kubernetes deployment' },
  ];

  const runPipeline = () => {
    setIsRunning(true);
    setActiveStage(0);

    pipelineStages.forEach((stage, index) => {
      setTimeout(() => {
        setActiveStage(index);
        if (index === pipelineStages.length - 1) {
          setIsRunning(false);
        }
      }, index * 1000);
    });
  };

  return (
    <div className="space-y-12">
      {/* Pipeline Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            CI/CD Pipeline
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Automated deployment pipeline with GitOps workflow
          </p>
          <button
            onClick={runPipeline}
            disabled={isRunning}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 flex items-center space-x-2 mx-auto"
          >
            <FiPlay className="w-4 h-4" />
            <span>{isRunning ? 'Pipeline Running...' : 'Run Pipeline'}</span>
          </button>
        </div>

        <div className="flex justify-between items-center mb-8 overflow-x-auto">
          {pipelineStages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = activeStage === index && isRunning;
            const isCompleted = activeStage > index || (!isRunning && stage.status === 'completed');

            return (
              <div key={stage.name} className="flex flex-col items-center min-w-0 flex-1">
                <div className="flex items-center w-full">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      isCompleted ? 'bg-green-500 border-green-500 text-white' :
                      isActive ? 'bg-blue-500 border-blue-500 text-white animate-pulse' :
                      'bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500'
                    }`}
                    whileScale={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {index < pipelineStages.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${
                      activeStage > index ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`} />
                  )}
                </div>

                <div className="mt-2 text-center">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {stage.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stage.duration}
                  </div>
                  {isActive && (
                    <div className="text-xs text-blue-600 mt-1">
                      {stage.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* GitOps Workflow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-6">GitOps Deployment Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <FiGitBranch className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Git as Source of Truth</h4>
            <p className="text-sm opacity-90">All infrastructure and application configs in Git</p>
          </div>
          <div className="text-center">
            <FiPlay className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Automated Sync</h4>
            <p className="text-sm opacity-90">ArgoCD continuously syncs desired state</p>
          </div>
          <div className="text-center">
            <FiMonitor className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Observability</h4>
            <p className="text-sm opacity-90">Full deployment history and rollback capability</p>
          </div>
        </div>
      </motion.div>

      {/* Deployment Strategies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Blue-Green Deployment
          </h3>
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                <FiCloud className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-medium">Blue (Live)</div>
              <div className="text-xs text-gray-500">v1.2.3</div>
            </div>
            <div className="text-center">
              <div className="text-2xl">→</div>
              <div className="text-xs text-gray-500 mt-1">Traffic</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                <FiCloud className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-medium">Green (Staging)</div>
              <div className="text-xs text-gray-500">v1.2.4</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Zero-downtime deployments with instant rollback capability
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Canary Releases
          </h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-3/4 bg-blue-500 h-4 rounded-l"></div>
              <div className="w-1/4 bg-green-500 h-4 rounded-r"></div>
              <span className="ml-2 text-sm">5% → v1.2.4</span>
            </div>
            <div className="flex items-center">
              <div className="w-1/2 bg-blue-500 h-4 rounded-l"></div>
              <div className="w-1/2 bg-green-500 h-4 rounded-r"></div>
              <span className="ml-2 text-sm">50% → v1.2.4</span>
            </div>
            <div className="flex items-center">
              <div className="w-full bg-green-500 h-4 rounded"></div>
              <span className="ml-2 text-sm">100% → v1.2.4</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Gradual rollout with automated monitoring and rollback
          </p>
        </motion.div>
      </div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          DevOps Performance Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">12 min</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Deployment Time</div>
            <div className="text-xs text-gray-500 mt-1">End-to-end</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Deployments/Month</div>
            <div className="text-xs text-gray-500 mt-1">All services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.5%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Deployment Success</div>
            <div className="text-xs text-gray-500 mt-1">First attempt</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">30 sec</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">MTTR</div>
            <div className="text-xs text-gray-500 mt-1">Mean time to recovery</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DevOpsPipeline;