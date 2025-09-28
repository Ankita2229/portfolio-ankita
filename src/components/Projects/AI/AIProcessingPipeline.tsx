import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFile, FiCpu, FiDatabase, FiUpload, FiDownload, FiCheckCircle } from 'react-icons/fi';

const AIProcessingPipeline = () => {
  const [simulationActive, setSimulationActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [processingStage, setProcessingStage] = useState(0);

  const pipelineStages = [
    {
      id: 1,
      name: 'Content Discovery',
      icon: FiSearch,
      description: 'Intelligent web crawling and source identification',
      duration: '2-5s',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Multi-format Extraction',
      icon: FiFile,
      description: 'PDF, HTML, CSV, JSON processing with OCR',
      duration: '3-8s',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      name: 'AI Analysis',
      icon: FiCpu,
      description: 'NLP, entity recognition, sentiment analysis',
      duration: '5-12s',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 4,
      name: 'Knowledge Graph',
      icon: FiDatabase,
      description: 'Relationship mapping and insight generation',
      duration: '3-7s',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const mockResults = {
    entities: [
      { text: 'Tesla Inc.', type: 'ORGANIZATION', confidence: 0.95 },
      { text: 'Elon Musk', type: 'PERSON', confidence: 0.92 },
      { text: 'Q3 2024', type: 'DATE', confidence: 0.89 },
      { text: '$23.4B Revenue', type: 'MONEY', confidence: 0.94 },
    ],
    sentiment: {
      positive: 65,
      neutral: 25,
      negative: 10,
      overall: 'Positive',
      confidence: 0.87,
    },
    categories: [
      { name: 'Financial Report', probability: 0.92 },
      { name: 'Earnings Call', probability: 0.78 },
      { name: 'Market Analysis', probability: 0.65 },
    ],
  };

  const simulateProcessing = () => {
    if (simulationActive) return;

    setSimulationActive(true);
    setProcessingStage(0);

    pipelineStages.forEach((_, index) => {
      setTimeout(() => {
        setProcessingStage(index + 1);
        if (index === pipelineStages.length - 1) {
          setTimeout(() => setSimulationActive(false), 1000);
        }
      }, (index + 1) * 2000);
    });
  };

  const handleFileUpload = (fileName: string) => {
    setUploadedFile(fileName);
    simulateProcessing();
  };

  return (
    <div className="space-y-12">
      {/* Pipeline Diagram */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          AI Processing Pipeline
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {pipelineStages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = simulationActive && processingStage >= stage.id;
            const isCompleted = processingStage > stage.id;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < pipelineStages.length - 1 && (
                  <div className="absolute top-12 left-full w-6 h-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: '0%' }}
                      animate={{
                        width: isCompleted ? '100%' : isActive ? '50%' : '0%'
                      }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                )}

                <div className="text-center">
                  <motion.div
                    className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4 relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                    animate={isActive ? {
                      boxShadow: [
                        '0 0 0 0 rgba(59, 130, 246, 0.7)',
                        '0 0 0 10px rgba(59, 130, 246, 0)',
                        '0 0 0 0 rgba(59, 130, 246, 0)',
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                  >
                    <Icon className="w-8 h-8 text-white" />

                    {isCompleted && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-1 right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <FiCheckCircle className="w-4 h-4 text-white" />
                      </motion.div>
                    )}

                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-white/50"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                    )}
                  </motion.div>

                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {stage.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {stage.description}
                  </p>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                    {stage.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* File Upload Simulator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Document Processing Demo
          </h3>

          {/* Drag & Drop Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center mb-6 transition-colors ${
              simulationActive
                ? 'border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
            }`}
          >
            <FiUpload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Drop files here or click to upload
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {['Tesla-Q3-Report.pdf', 'Market-Analysis.html', 'Earnings-Data.csv'].map((fileName) => (
                <button
                  key={fileName}
                  onClick={() => handleFileUpload(fileName)}
                  disabled={simulationActive}
                  className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {fileName}
                </button>
              ))}
            </div>

            {uploadedFile && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 inline-block"
              >
                <div className="flex items-center space-x-2">
                  <FiFile className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {uploadedFile}
                  </span>
                  {simulationActive && (
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Processing Status */}
          {simulationActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 mb-6"
            >
              {pipelineStages.map((stage, index) => (
                <div key={stage.id} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    processingStage >= stage.id ? 'bg-green-500' :
                    processingStage === stage.id - 1 ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'
                  }`} />
                  <span className={`text-sm ${
                    processingStage >= stage.id ? 'text-green-600 dark:text-green-400' : 'text-gray-500'
                  }`}>
                    {stage.name}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          <button
            onClick={simulateProcessing}
            disabled={simulationActive}
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {simulationActive ? 'Processing...' : 'Start Demo Processing'}
          </button>
        </motion.div>

        {/* Results Display */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Extraction Results
          </h3>

          {processingStage >= 4 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Entity Extraction */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Named Entities
                </h4>
                <div className="space-y-2">
                  {mockResults.entities.map((entity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <span className="font-medium text-gray-900 dark:text-white">
                        {entity.text}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {entity.type}
                        </span>
                        <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                          {(entity.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sentiment Analysis */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Sentiment Analysis
                </h4>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {mockResults.sentiment.positive}%
                    </div>
                    <div className="text-xs text-gray-500">Positive</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-600">
                      {mockResults.sentiment.neutral}%
                    </div>
                    <div className="text-xs text-gray-500">Neutral</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">
                      {mockResults.sentiment.negative}%
                    </div>
                    <div className="text-xs text-gray-500">Negative</div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Overall: {mockResults.sentiment.overall}
                  </span>
                  <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                    {(mockResults.sentiment.confidence * 100).toFixed(0)}% confidence
                  </span>
                </div>
              </div>

              {/* Categorization */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Content Categories
                </h4>
                <div className="space-y-2">
                  {mockResults.categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-900 dark:text-white">
                        {category.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-purple-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${category.probability * 100}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 min-w-8">
                          {(category.probability * 100).toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center space-x-2">
                <FiDownload className="w-4 h-4" />
                <span>Download Results</span>
              </button>
            </motion.div>
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <FiCpu className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Upload a document to see AI analysis results</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AIProcessingPipeline;