import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar } from 'recharts';
import {
  FiCpu, FiTarget, FiTrendingUp, FiEye, FiFileText, FiUsers,
  FiLayers, FiZap, FiDatabase, FiActivity, FiCheckCircle,
  FiArrowUp, FiAward, FiSettings, FiGlobe
} from 'react-icons/fi';

// Force refresh
const MLCapabilities = () => {
  const [activeModel, setActiveModel] = useState('overview');
  const [trainingProgress, setTrainingProgress] = useState(0);

  const modelPerformance = [
    { model: 'Text Classification', accuracy: 95.3, precision: 94.8, recall: 95.7, f1: 95.2 },
    { model: 'Entity Recognition', accuracy: 92.1, precision: 93.4, recall: 90.8, f1: 92.1 },
    { model: 'Sentiment Analysis', accuracy: 89.7, precision: 88.9, recall: 90.5, f1: 89.7 },
    { model: 'Content Similarity', accuracy: 91.4, precision: 92.1, recall: 90.7, f1: 91.4 },
    { model: 'Topic Modeling', accuracy: 87.9, precision: 89.2, recall: 86.6, f1: 87.9 },
  ];

  const modelTraining = [
    { epoch: 1, accuracy: 65.2, loss: 1.24, validation: 62.8 },
    { epoch: 5, accuracy: 78.9, loss: 0.89, validation: 76.3 },
    { epoch: 10, accuracy: 87.4, loss: 0.54, validation: 85.1 },
    { epoch: 15, accuracy: 91.8, loss: 0.38, validation: 89.6 },
    { epoch: 20, accuracy: 94.2, loss: 0.27, validation: 92.4 },
    { epoch: 25, accuracy: 95.3, loss: 0.21, validation: 94.1 },
  ];

  const mlModels = [
    {
      id: 'classification',
      name: 'Document Classification',
      description: 'Automatically categorizes documents into business domains',
      accuracy: 95.3,
      throughput: '50K docs/hour',
      technology: 'Transformer-based (BERT)',
      useCases: ['Content categorization', 'Spam detection', 'Quality filtering'],
      icon: FiFileText,
      color: 'blue',
      metrics: {
        precision: 94.8,
        recall: 95.7,
        f1Score: 95.2,
        processingTime: '12ms'
      }
    },
    {
      id: 'ner',
      name: 'Named Entity Recognition',
      description: 'Extracts entities like companies, people, locations, dates',
      accuracy: 92.1,
      throughput: '75K entities/hour',
      technology: 'BiLSTM-CRF + BERT',
      useCases: ['Information extraction', 'Knowledge graphs', 'Data enrichment'],
      icon: FiTarget,
      color: 'green',
      metrics: {
        precision: 93.4,
        recall: 90.8,
        f1Score: 92.1,
        processingTime: '8ms'
      }
    },
    {
      id: 'sentiment',
      name: 'Sentiment Analysis',
      description: 'Analyzes emotional tone and opinion in text content',
      accuracy: 89.7,
      throughput: '100K texts/hour',
      technology: 'CNN + Attention',
      useCases: ['Brand monitoring', 'Market research', 'Customer feedback'],
      icon: FiActivity,
      color: 'purple',
      metrics: {
        precision: 88.9,
        recall: 90.5,
        f1Score: 89.7,
        processingTime: '5ms'
      }
    },
    {
      id: 'similarity',
      name: 'Content Similarity',
      description: 'Measures semantic similarity between documents',
      accuracy: 91.4,
      throughput: '25K comparisons/hour',
      technology: 'Sentence Transformers',
      useCases: ['Duplicate detection', 'Content clustering', 'Recommendation'],
      icon: FiLayers,
      color: 'orange',
      metrics: {
        precision: 92.1,
        recall: 90.7,
        f1Score: 91.4,
        processingTime: '15ms'
      }
    },
    {
      id: 'topic',
      name: 'Topic Modeling',
      description: 'Discovers hidden topics and themes in document collections',
      accuracy: 87.9,
      throughput: '10K docs/hour',
      technology: 'LDA + Neural Topic Models',
      useCases: ['Content discovery', 'Trend analysis', 'Research insights'],
      icon: FiCpu,
      color: 'indigo',
      metrics: {
        precision: 89.2,
        recall: 86.6,
        f1Score: 87.9,
        processingTime: '45ms'
      }
    }
  ];

  const aiCapabilities = [
    {
      category: 'Natural Language Processing',
      capabilities: [
        'Multi-language text analysis (50+ languages)',
        'Context-aware entity extraction',
        'Advanced sentiment and emotion detection',
        'Intent recognition and classification',
        'Text summarization and key phrase extraction'
      ],
      icon: FiFileText,
      color: 'blue'
    },
    {
      category: 'Computer Vision',
      capabilities: [
        'OCR and document structure analysis',
        'Image content classification',
        'Logo and brand recognition',
        'Chart and graph data extraction',
        'Visual similarity matching'
      ],
      icon: FiEye,
      color: 'green'
    },
    {
      category: 'Predictive Analytics',
      capabilities: [
        'Market trend forecasting',
        'Competitive intelligence prediction',
        'Anomaly and outlier detection',
        'Customer behavior modeling',
        'Risk assessment and scoring'
      ],
      icon: FiTrendingUp,
      color: 'purple'
    },
    {
      category: 'Knowledge Extraction',
      capabilities: [
        'Relationship mapping and graph building',
        'Fact extraction and verification',
        'Timeline and event sequence analysis',
        'Concept clustering and categorization',
        'Cross-document information linking'
      ],
      icon: FiDatabase,
      color: 'orange'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        const newProgress = prev + Math.random() * 2;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const renderModelOverview = () => (
    <div className="space-y-8">
      {/* Model Performance Radar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          ML Model Performance Overview
        </h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={modelPerformance}>
              <PolarGrid />
              <PolarAngleAxis dataKey="model" />
              <PolarRadiusAxis angle={0} domain={[80, 100]} />
              <Radar name="Accuracy" dataKey="accuracy" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
              <Radar name="Precision" dataKey="precision" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
              <Radar name="Recall" dataKey="recall" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
              <Radar name="F1-Score" dataKey="f1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Model Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mlModels.map((model, index) => {
          const Icon = model.icon;
          return (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setActiveModel(model.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-${model.color}-100 dark:bg-${model.color}-900/20 mr-4`}>
                  <Icon className={`w-6 h-6 text-${model.color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    {model.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <div className={`w-2 h-2 bg-${model.color}-500 rounded-full mr-2`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Active</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {model.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Accuracy</span>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {model.accuracy}%
                    </span>
                    <FiArrowUp className="w-4 h-4 text-green-500 ml-1" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Throughput</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {model.throughput}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {model.technology}
                  </span>
                  <FiAward className={`w-4 h-4 text-${model.color}-500`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const renderModelDetails = () => {
    const selectedModel = mlModels.find(model => model.id === activeModel);
    if (!selectedModel) return null;

    const Icon = selectedModel.icon;

    return (
      <div className="space-y-8">
        {/* Model Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center mb-6">
            <div className={`p-4 rounded-xl bg-${selectedModel.color}-100 dark:bg-${selectedModel.color}-900/20 mr-6`}>
              <Icon className={`w-8 h-8 text-${selectedModel.color}-600`} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {selectedModel.name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                {selectedModel.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(selectedModel.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {typeof value === 'number' ? `${value}%` : value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Training Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <FiSettings className="w-5 h-5 mr-2 text-blue-500" />
            Training History
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={modelTraining}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="epoch" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="accuracy" stroke="#3B82F6" strokeWidth={3} />
                <Line type="monotone" dataKey="validation" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Use Cases & Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedModel.useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {useCase}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };

  const renderAICapabilities = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {aiCapabilities.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-${category.color}-100 dark:bg-${category.color}-900/20 mr-4`}>
                  <Icon className={`w-6 h-6 text-${category.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-3">
                {category.capabilities.map((capability, capIndex) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: capIndex * 0.1 }}
                    className="flex items-start"
                  >
                    <div className={`w-2 h-2 bg-${category.color}-500 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {capability}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Real-time Training Monitor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <FiCpu className="w-5 h-5 mr-2 text-purple-500" />
            Live Training Monitor
          </h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 dark:text-green-400">Training Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current Epoch</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {Math.floor(trainingProgress / 4) + 1}/25
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Progress</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
              <motion.div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: `${trainingProgress}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {trainingProgress.toFixed(1)}%
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">GPU Utilization</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {(85 + Math.random() * 10).toFixed(0)}%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Model Overview', icon: FiCpu },
    { id: 'capabilities', label: 'AI Capabilities', icon: FiZap },
    ...(activeModel !== 'overview' && activeModel !== 'capabilities' ? [
      { id: activeModel, label: 'Model Details', icon: FiSettings }
    ] : [])
  ];

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveModel(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeModel === tab.id
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

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeModel === 'overview' && renderModelOverview()}
        {activeModel === 'capabilities' && renderAICapabilities()}
        {activeModel !== 'overview' && activeModel !== 'capabilities' && renderModelDetails()}
      </div>
    </div>
  );
};

export default MLCapabilities;