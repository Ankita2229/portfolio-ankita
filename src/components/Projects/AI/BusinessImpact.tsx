import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import {
  FiDollarSign, FiTrendingUp, FiClock, FiUsers, FiTarget, FiZap,
  FiAward, FiShield, FiGlobe, FiActivity, FiBarChart,
  FiArrowUp, FiArrowDown, FiCheckCircle, FiStar
} from 'react-icons/fi';

const BusinessImpact = () => {
  const [selectedMetric, setSelectedMetric] = useState('roi');
  const [animatedValues, setAnimatedValues] = useState({
    savings: 0,
    efficiency: 0,
    revenue: 0,
    customers: 0
  });

  const roiData = [
    { month: 'Jan', investment: 500, returns: 1200, savings: 800 },
    { month: 'Feb', investment: 520, returns: 1450, savings: 950 },
    { month: 'Mar', investment: 540, returns: 1680, savings: 1150 },
    { month: 'Apr', investment: 560, returns: 1920, savings: 1380 },
    { month: 'May', investment: 580, returns: 2180, savings: 1620 },
    { month: 'Jun', investment: 600, returns: 2450, savings: 1880 },
    { month: 'Jul', investment: 620, returns: 2730, savings: 2150 },
    { month: 'Aug', investment: 640, returns: 3020, savings: 2440 },
    { month: 'Sep', investment: 660, returns: 3320, savings: 2750 },
    { month: 'Oct', investment: 680, returns: 3630, savings: 3080 },
    { month: 'Nov', investment: 700, returns: 3950, savings: 3420 },
    { month: 'Dec', investment: 720, returns: 4280, savings: 3780 },
  ];

  const costSavingsBreakdown = [
    { name: 'Manual Research', value: 35, color: '#3B82F6' },
    { name: 'Data Processing', value: 28, color: '#10B981' },
    { name: 'Analysis Time', value: 22, color: '#8B5CF6' },
    { name: 'Report Generation', value: 15, color: '#F59E0B' }
  ];

  const efficiencyMetrics = [
    { department: 'Market Research', before: 40, after: 8, improvement: 80 },
    { department: 'Competitive Analysis', before: 35, after: 6, improvement: 83 },
    { department: 'Content Analysis', before: 25, after: 4, improvement: 84 },
    { department: 'Report Generation', before: 15, after: 2, improvement: 87 },
    { department: 'Data Collection', before: 50, after: 5, improvement: 90 },
  ];

  const businessMetrics = [
    {
      id: 'savings',
      title: 'Annual Cost Savings',
      value: 5.2,
      unit: 'M',
      prefix: '$',
      change: '+23%',
      positive: true,
      description: 'Direct cost reduction from automation',
      icon: FiDollarSign,
      color: 'green',
      details: [
        'Reduced manual research costs by 85%',
        'Eliminated redundant data collection',
        'Automated report generation',
        'Streamlined analysis workflows'
      ]
    },
    {
      id: 'efficiency',
      title: 'Process Efficiency Gain',
      value: 340,
      unit: '%',
      prefix: '',
      change: '+45%',
      positive: true,
      description: 'Average improvement across all processes',
      icon: FiZap,
      color: 'blue',
      details: [
        'Data processing 10x faster',
        'Real-time insights vs weekly reports',
        'Automated competitive monitoring',
        'Instant alert system'
      ]
    },
    {
      id: 'revenue',
      title: 'Revenue Impact',
      value: 12.8,
      unit: 'M',
      prefix: '$',
      change: '+18%',
      positive: true,
      description: 'Additional revenue from faster decisions',
      icon: FiTrendingUp,
      color: 'purple',
      details: [
        'Faster market opportunity identification',
        'Improved product positioning',
        'Better pricing strategies',
        'Enhanced customer targeting'
      ]
    },
    {
      id: 'time',
      title: 'Time to Insights',
      value: 89,
      unit: '%',
      prefix: '',
      change: 'reduction',
      positive: true,
      description: 'Faster decision-making cycles',
      icon: FiClock,
      color: 'orange',
      details: [
        'Real-time data processing',
        'Automated analysis pipeline',
        'Instant alert notifications',
        'Dashboard-driven insights'
      ]
    }
  ];

  const clientTestimonials = [
    {
      company: 'Fortune 500 Tech Company',
      quote: 'The AI platform reduced our market research time from weeks to hours while providing deeper insights than ever before.',
      metrics: '87% time reduction, 45% cost savings',
      avatar: 'TC',
      role: 'VP of Strategy'
    },
    {
      company: 'Global Financial Services',
      quote: 'Real-time competitive intelligence has transformed our strategic decision-making process completely.',
      metrics: '$2.1M annual savings, 90% accuracy',
      avatar: 'GF',
      role: 'Chief Analytics Officer'
    },
    {
      company: 'E-commerce Leader',
      quote: 'The automated insights helped us identify market opportunities 3x faster than our traditional methods.',
      metrics: '300% efficiency gain, 24/7 monitoring',
      avatar: 'EL',
      role: 'Director of Business Intelligence'
    }
  ];

  const industryBenchmarks = [
    { metric: 'Data Processing Speed', industry: 65, platform: 95 },
    { metric: 'Analysis Accuracy', industry: 78, platform: 95 },
    { metric: 'Cost Efficiency', industry: 45, platform: 89 },
    { metric: 'Time to Insights', industry: 52, platform: 92 },
    { metric: 'Automation Level', industry: 35, platform: 87 }
  ];

  useEffect(() => {
    const targetValues = {
      savings: 5200,
      efficiency: 340,
      revenue: 12800,
      customers: 98
    };

    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      setAnimatedValues({
        savings: Math.floor(targetValues.savings * progress),
        efficiency: Math.floor(targetValues.efficiency * progress),
        revenue: Math.floor(targetValues.revenue * progress),
        customers: Math.floor(targetValues.customers * progress)
      });

      if (progress >= 1) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const renderROIAnalysis = () => (
    <div className="space-y-8">
      {/* ROI Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Return on Investment Analysis
        </h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={roiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}K`, '']} />
              <Area type="monotone" dataKey="returns" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="investment" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">420%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Average ROI</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">$3.6M</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Net Savings</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">6 months</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Payback Period</p>
          </div>
        </div>
      </motion.div>

      {/* Cost Savings Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <FiTarget className="w-5 h-5 mr-2 text-blue-500" />
            Cost Savings Breakdown
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={costSavingsBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {costSavingsBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <FiBarChart className="w-5 h-5 mr-2 text-green-500" />
            Efficiency Improvements
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={efficiencyMetrics} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="department" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="improvement" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderMetricDetails = () => {
    const metric = businessMetrics.find(m => m.id === selectedMetric);
    if (!metric) return null;

    const Icon = metric.icon;

    return (
      <motion.div
        key={selectedMetric}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Metric Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <div className={`p-4 rounded-xl bg-${metric.color}-100 dark:bg-${metric.color}-900/20 mr-6`}>
              <Icon className={`w-8 h-8 text-${metric.color}-600`} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {metric.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                {metric.description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <p className={`text-5xl font-bold text-${metric.color}-600`}>
                {metric.prefix}{metric.value}{metric.unit}
              </p>
              <div className="flex items-center justify-center mt-2">
                {metric.positive ? (
                  <FiArrowUp className="w-5 h-5 text-green-500 mr-1" />
                ) : (
                  <FiArrowDown className="w-5 h-5 text-red-500 mr-1" />
                )}
                <span className={`font-semibold ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Key Impact Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {metric.details.map((detail, index) => (
              <motion.div
                key={detail}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderClientSuccess = () => (
    <div className="space-y-8">
      {/* Client Testimonials */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {clientTestimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
              "{testimonial.quote}"
            </blockquote>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex items-center">
                <FiStar className="w-4 h-4 text-yellow-500 mr-1" />
                <FiStar className="w-4 h-4 text-yellow-500 mr-1" />
                <FiStar className="w-4 h-4 text-yellow-500 mr-1" />
                <FiStar className="w-4 h-4 text-yellow-500 mr-1" />
                <FiStar className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {testimonial.metrics}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Industry Benchmarks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Industry Performance Comparison
        </h3>
        <div className="space-y-6">
          {industryBenchmarks.map((benchmark, index) => (
            <motion.div
              key={benchmark.metric}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="font-medium text-gray-900 dark:text-white min-w-48">
                {benchmark.metric}
              </div>
              <div className="flex items-center space-x-4 flex-1">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Industry Average</span>
                    <span className="text-xs font-medium">{benchmark.industry}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <motion.div
                      className="bg-gray-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${benchmark.industry}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Our Platform</span>
                    <span className="text-xs font-medium">{benchmark.platform}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <motion.div
                      className="bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${benchmark.platform}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Key Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {businessMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border cursor-pointer transition-all hover:shadow-xl ${
                selectedMetric === metric.id
                  ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setSelectedMetric(metric.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${metric.color}-100 dark:bg-${metric.color}-900/20`}>
                  <Icon className={`w-6 h-6 text-${metric.color}-600`} />
                </div>
                {metric.positive ? (
                  <FiArrowUp className="w-5 h-5 text-green-500" />
                ) : (
                  <FiArrowDown className="w-5 h-5 text-red-500" />
                )}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {metric.title}
                </p>
                <p className={`text-2xl font-bold text-${metric.color}-600`}>
                  {metric.prefix}{metric.value}{metric.unit}
                </p>
                <div className="flex items-center">
                  <span className={`text-xs font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-1">vs last year</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="flex space-x-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
          {[
            { id: 'roi', label: 'ROI Analysis', icon: FiDollarSign },
            { id: 'details', label: 'Metric Details', icon: FiTarget },
            { id: 'clients', label: 'Client Success', icon: FiUsers }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedMetric(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedMetric === tab.id
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

      {/* Dynamic Content */}
      <div className="min-h-[600px]">
        {selectedMetric === 'roi' && renderROIAnalysis()}
        {selectedMetric === 'clients' && renderClientSuccess()}
        {!['roi', 'clients'].includes(selectedMetric) && renderMetricDetails()}
      </div>
    </div>
  );
};

export default BusinessImpact;