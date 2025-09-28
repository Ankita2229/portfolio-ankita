import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { FiGlobe, FiDatabase, FiActivity, FiTrendingUp, FiFile, FiImage, FiCode, FiFileText } from 'react-icons/fi';

const CrawlingDashboard = () => {
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    pagesCrawled: 10247892,
    dataProcessed: 52.3,
    successRate: 99.5,
    activeSources: 487,
  });

  const [crawlingData, setCrawlingData] = useState([
    { time: '00:00', pages: 45000, success: 98.2 },
    { time: '04:00', pages: 52000, success: 99.1 },
    { time: '08:00', pages: 68000, success: 99.5 },
    { time: '12:00', pages: 71000, success: 99.7 },
    { time: '16:00', pages: 65000, success: 99.4 },
    { time: '20:00', pages: 58000, success: 99.2 },
  ]);

  const dataSourceBreakdown = [
    { name: 'Financial', value: 30, color: '#3B82F6' },
    { name: 'News', value: 25, color: '#10B981' },
    { name: 'Patents', value: 20, color: '#F59E0B' },
    { name: 'Regulatory', value: 15, color: '#8B5CF6' },
    { name: 'E-commerce', value: 10, color: '#EF4444' },
  ];

  const contentTypeData = [
    { type: 'PDF', count: 35000, icon: FiFileText, color: '#EF4444' },
    { type: 'HTML', count: 45000, icon: FiCode, color: '#3B82F6' },
    { type: 'JSON', count: 28000, icon: FiFile, color: '#10B981' },
    { type: 'CSV', count: 15000, icon: FiDatabase, color: '#F59E0B' },
    { type: 'Images', count: 8000, icon: FiImage, color: '#8B5CF6' },
  ];

  const processingStages = [
    { name: 'Discovery', status: 'active', progress: 87, color: 'bg-blue-500' },
    { name: 'Extraction', status: 'active', progress: 92, color: 'bg-green-500' },
    { name: 'Processing', status: 'active', progress: 78, color: 'bg-yellow-500' },
    { name: 'Storage', status: 'active', progress: 95, color: 'bg-purple-500' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeMetrics(prev => ({
        pagesCrawled: prev.pagesCrawled + Math.floor(Math.random() * 1000),
        dataProcessed: Number((prev.dataProcessed + Math.random() * 2 - 1).toFixed(1)),
        successRate: Number((99.0 + Math.random() * 0.9).toFixed(1)),
        activeSources: prev.activeSources + Math.floor(Math.random() * 10 - 5),
      }));

      setCrawlingData(prev => {
        const newData = [...prev];
        const lastPoint = newData[newData.length - 1];
        newData.push({
          time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          pages: lastPoint.pages + Math.floor(Math.random() * 10000 - 5000),
          success: Number((99.0 + Math.random() * 0.9).toFixed(1)),
        });
        return newData.slice(-6);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Real-time Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <FiGlobe className="w-8 h-8 text-blue-500" />
            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
              Live
            </span>
          </div>
          <motion.div
            key={realTimeMetrics.pagesCrawled}
            initial={{ scale: 1.1, color: '#3B82F6' }}
            animate={{ scale: 1, color: '#1F2937' }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {realTimeMetrics.pagesCrawled.toLocaleString()}+
          </motion.div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Pages Crawled Daily</p>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <FiTrendingUp className="w-4 h-4 mr-1" />
            +12.5% from yesterday
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <FiDatabase className="w-8 h-8 text-green-500" />
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Processing</span>
            </div>
          </div>
          <motion.div
            key={realTimeMetrics.dataProcessed}
            initial={{ scale: 1.1, color: '#10B981' }}
            animate={{ scale: 1, color: '#1F2937' }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {realTimeMetrics.dataProcessed}GB+
          </motion.div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Data Processed Hourly</p>
          <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-green-500 h-2 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '73%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <FiActivity className="w-8 h-8 text-purple-500" />
            <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
              ML
            </span>
          </div>
          <motion.div
            key={realTimeMetrics.successRate}
            initial={{ scale: 1.1, color: '#8B5CF6' }}
            animate={{ scale: 1, color: '#1F2937' }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {realTimeMetrics.successRate}%
          </motion.div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
          <div className="mt-4">
            <svg className="w-16 h-16" viewBox="0 0 42 42">
              <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e5e7eb" strokeWidth="2"/>
              <motion.circle
                cx="21" cy="21" r="15.915"
                fill="transparent"
                stroke="#8B5CF6"
                strokeWidth="2"
                strokeDasharray={`${realTimeMetrics.successRate} ${100 - realTimeMetrics.successRate}`}
                strokeDashoffset="25"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <FiGlobe className="w-8 h-8 text-orange-500" />
            <div className="flex items-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-orange-500 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </div>
          <motion.div
            key={realTimeMetrics.activeSources}
            initial={{ scale: 1.1, color: '#F59E0B' }}
            animate={{ scale: 1, color: '#1F2937' }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {realTimeMetrics.activeSources}+
          </motion.div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Sources</p>
          <div className="mt-4 grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="h-2 bg-gray-200 dark:bg-gray-700 rounded"
                animate={{
                  backgroundColor: Math.random() > 0.3 ? '#F59E0B' : '#E5E7EB',
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Live Crawling Activity Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Real-time Crawling Activity</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Pages/Hour</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Success Rate</span>
            </div>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={crawlingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis yAxisId="left" stroke="#9CA3AF" />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="pages"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="success"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Data Source & Content Type Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Data Source Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataSourceBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dataSourceBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dataSourceBreakdown.map((source, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }}></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{source.name} ({source.value}%)</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Content Type Processing</h3>
          <div className="space-y-4">
            {contentTypeData.map((content, index) => {
              const Icon = content.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${content.color}20` }}>
                      <Icon className="w-5 h-5" style={{ color: content.color }} />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{content.type}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {content.count.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">files processed</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Processing Pipeline Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Processing Pipeline Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {processingStages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 ${stage.color} opacity-20`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white relative z-10">
                    {stage.progress}%
                  </span>
                </div>
                <motion.div
                  className={`absolute inset-0 rounded-full border-4 ${stage.color.replace('bg-', 'border-')}`}
                  style={{
                    borderTopColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderBottomColor: 'transparent',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{stage.name}</h4>
              <span className={`text-xs px-2 py-1 rounded-full ${
                stage.status === 'active'
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}>
                {stage.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CrawlingDashboard;