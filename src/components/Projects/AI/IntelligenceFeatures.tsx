import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import {
  FiTrendingUp, FiTarget, FiEye, FiActivity, FiGlobe, FiCpu,
  FiBarChart, FiMonitor, FiZap, FiAlertTriangle, FiCheckCircle
} from 'react-icons/fi';

const IntelligenceFeatures = () => {
  const [activeTab, setActiveTab] = useState('competitive');
  const [realTimeData, setRealTimeData] = useState(0);

  const trendData = [
    { date: 'Jan', competitors: 85, market: 92, sentiment: 78 },
    { date: 'Feb', competitors: 88, market: 89, sentiment: 82 },
    { date: 'Mar', competitors: 92, market: 95, sentiment: 85 },
    { date: 'Apr', competitors: 90, market: 98, sentiment: 88 },
    { date: 'May', competitors: 94, market: 102, sentiment: 91 },
    { date: 'Jun', competitors: 97, market: 105, sentiment: 89 },
  ];

  const competitorData = [
    { name: 'Competitor A', marketShare: 28, sentiment: 85, mentions: 1247 },
    { name: 'Competitor B', marketShare: 22, sentiment: 78, mentions: 892 },
    { name: 'Competitor C', marketShare: 18, sentiment: 82, mentions: 634 },
    { name: 'Your Company', marketShare: 32, sentiment: 91, mentions: 1589 },
  ];

  const alertData = [
    {
      id: 1,
      type: 'critical',
      title: 'Competitor Price Drop Detected',
      description: 'Competitor A reduced pricing by 15% across enterprise plans',
      time: '2 minutes ago',
      impact: 'High',
      confidence: 94,
    },
    {
      id: 2,
      type: 'opportunity',
      title: 'Market Gap Identified',
      description: 'Emerging demand for AI-powered analytics in healthcare sector',
      time: '1 hour ago',
      impact: 'Medium',
      confidence: 87,
    },
    {
      id: 3,
      type: 'trend',
      title: 'Positive Sentiment Surge',
      description: 'Brand mentions increased 34% with 89% positive sentiment',
      time: '3 hours ago',
      impact: 'High',
      confidence: 91,
    },
  ];

  const tabs = [
    {
      id: 'competitive',
      label: 'Competitive Intelligence',
      icon: FiTarget,
      color: 'blue',
    },
    {
      id: 'market',
      label: 'Market Analysis',
      icon: FiTrendingUp,
      color: 'green',
    },
    {
      id: 'realtime',
      label: 'Real-time Alerts',
      icon: FiActivity,
      color: 'purple',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => Math.round(prev + Math.random() * 10 - 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return FiAlertTriangle;
      case 'opportunity': return FiTarget;
      case 'trend': return FiTrendingUp;
      default: return FiCheckCircle;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      case 'opportunity': return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      case 'trend': return 'text-blue-500 bg-blue-50 dark:bg-blue-900/20';
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const renderCompetitiveIntelligence = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Market Position Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <FiTarget className="w-5 h-5 mr-2 text-blue-500" />
            Market Position Analysis
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={competitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="marketShare" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Sentiment Analysis */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <FiCpu className="w-5 h-5 mr-2 text-purple-500" />
            Sentiment vs Market Share
          </h3>
          <div className="space-y-4">
            {competitorData.map((competitor, index) => (
              <motion.div
                key={competitor.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {competitor.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {competitor.mentions} mentions
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {competitor.marketShare}%
                    </div>
                    <div className="text-xs text-gray-500">Market</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {competitor.sentiment}%
                    </div>
                    <div className="text-xs text-gray-500">Sentiment</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Competitive Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Market Leaders Tracked',
            value: '47',
            change: '+5 this month',
            icon: FiTarget,
            color: 'blue'
          },
          {
            title: 'Price Changes Detected',
            value: '156',
            change: '+23% this week',
            icon: FiTrendingUp,
            color: 'green'
          },
          {
            title: 'Feature Launches Monitored',
            value: '89',
            change: '12 in last 30 days',
            icon: FiZap,
            color: 'purple'
          },
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {metric.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {metric.change}
                  </p>
                </div>
                <div className={`p-3 rounded-full bg-${metric.color}-100 dark:bg-${metric.color}-900/20`}>
                  <Icon className={`w-6 h-6 text-${metric.color}-600`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const renderMarketAnalysis = () => (
    <div className="space-y-8">
      {/* Market Trends Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <FiBarChart className="w-5 h-5 mr-2 text-green-500" />
          Market Trend Analysis (6 Months)
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="market" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
              <Area type="monotone" dataKey="competitors" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
              <Area type="monotone" dataKey="sentiment" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Market Growth</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Competitive Activity</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Market Sentiment</span>
          </div>
        </div>
      </motion.div>

      {/* Market Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Market Size',
            value: '$2.4B',
            trend: '+12.5% YoY',
            description: 'Total addressable market growing rapidly',
            icon: FiGlobe,
            color: 'green'
          },
          {
            title: 'Growth Rate',
            value: '18.3%',
            trend: 'Above industry avg',
            description: 'Outpacing traditional analytics by 8%',
            icon: FiTrendingUp,
            color: 'blue'
          },
          {
            title: 'Market Maturity',
            value: 'Early Growth',
            trend: '2-3 years to mature',
            description: 'Significant opportunity for market leaders',
            icon: FiTarget,
            color: 'purple'
          },
        ].map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full bg-${insight.color}-100 dark:bg-${insight.color}-900/20`}>
                  <Icon className={`w-6 h-6 text-${insight.color}-600`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {insight.title}
                  </h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {insight.value}
                  </p>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    {insight.trend}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {insight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const renderRealTimeAlerts = () => (
    <div className="space-y-8">
      {/* Alert Stream */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <FiActivity className="w-5 h-5 mr-2 text-purple-500" />
            Live Intelligence Alerts
          </h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Live</span>
          </div>
        </div>

        <div className="space-y-4">
          {alertData.map((alert, index) => {
            const Icon = getAlertIcon(alert.type);
            return (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-4 rounded-xl border ${getAlertColor(alert.type)}`}
              >
                <div className="flex items-start space-x-3">
                  <Icon className="w-5 h-5 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {alert.title}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {alert.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {alert.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        Impact: {alert.impact}
                      </span>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                        {alert.confidence}% confidence
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: 'Active Monitors',
            value: '1,247',
            icon: FiMonitor,
            color: 'blue',
            live: true
          },
          {
            title: 'Alerts Today',
            value: '89',
            icon: FiAlertTriangle,
            color: 'red',
            live: true
          },
          {
            title: 'Processing Speed',
            value: '2.3s',
            icon: FiZap,
            color: 'yellow',
            live: true
          },
          {
            title: 'Data Points',
            value: `${(450 + realTimeData).toLocaleString()}K`,
            icon: FiActivity,
            color: 'purple',
            live: true
          },
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden"
            >
              {metric.live && (
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {metric.title}
                  </p>
                  <motion.p
                    key={metric.value}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {metric.value}
                  </motion.p>
                </div>
                <Icon className={`w-8 h-8 text-${metric.color}-500`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
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

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === 'competitive' && renderCompetitiveIntelligence()}
        {activeTab === 'market' && renderMarketAnalysis()}
        {activeTab === 'realtime' && renderRealTimeAlerts()}
      </div>
    </div>
  );
};

export default IntelligenceFeatures;