import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FiActivity, FiCpu, FiDatabase, FiHardDrive, FiTrendingUp, FiAlertCircle } from 'react-icons/fi';

const MetricsDashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1h');
  const [metrics, setMetrics] = useState({
    throughput: 52346,
    avgLatency: 45,
    p95Latency: 120,
    p99Latency: 350,
    errorRate: 0.02,
    activeConnections: 12543
  });

  // Generate mock data for charts
  const generateTimeSeriesData = () => {
    const data = [];
    const now = new Date();
    for (let i = 59; i >= 0; i--) {
      data.push({
        time: new Date(now - i * 60000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        requests: Math.floor(45000 + Math.random() * 10000),
        latency: Math.floor(40 + Math.random() * 20),
        errors: Math.floor(Math.random() * 50)
      });
    }
    return data;
  };

  const [timeSeriesData, setTimeSeriesData] = useState(generateTimeSeriesData());

  const serviceLatencyData = [
    { service: 'API Gateway', latency: 12, color: '#3B82F6' },
    { service: 'User Service', latency: 45, color: '#10B981' },
    { service: 'Product Service', latency: 35, color: '#F59E0B' },
    { service: 'Order Service', latency: 120, color: '#EF4444' },
    { service: 'Payment Service', latency: 200, color: '#8B5CF6' },
    { service: 'Analytics', latency: 500, color: '#EC4899' }
  ];

  const trafficDistribution = [
    { name: 'North America', value: 35, color: '#3B82F6' },
    { name: 'Europe', value: 28, color: '#10B981' },
    { name: 'Asia Pacific', value: 22, color: '#F59E0B' },
    { name: 'South America', value: 10, color: '#8B5CF6' },
    { name: 'Other', value: 5, color: '#6B7280' }
  ];

  // Update metrics every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        throughput: prev.throughput + Math.floor(Math.random() * 1000 - 500),
        avgLatency: 45 + Math.floor(Math.random() * 10 - 5),
        p95Latency: 120 + Math.floor(Math.random() * 20 - 10),
        p99Latency: 350 + Math.floor(Math.random() * 50 - 25),
        errorRate: Math.max(0, prev.errorRate + (Math.random() * 0.01 - 0.005)),
        activeConnections: prev.activeConnections + Math.floor(Math.random() * 200 - 100)
      }));

      setTimeSeriesData(prev => {
        const newData = [...prev.slice(1)];
        newData.push({
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          requests: Math.floor(45000 + Math.random() * 10000),
          latency: Math.floor(40 + Math.random() * 20),
          errors: Math.floor(Math.random() * 50)
        });
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const MetricCard = ({ icon: Icon, title, value, unit, trend, color }: any) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className={`flex items-center text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            <FiTrendingUp className={trend < 0 ? 'rotate-180' : ''} />
            <span className="ml-1">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        {typeof value === 'number' ? value.toLocaleString() : value}
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">{unit}</span>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{title}</div>
    </motion.div>
  );

  return (
    <div className="space-y-8">
      {/* Time Range Selector */}
      <div className="flex justify-end">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
          {['1h', '6h', '24h', '7d', '30d'].map((range) => (
            <button
              key={range}
              onClick={() => setSelectedTimeRange(range)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTimeRange === range
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={FiActivity}
          title="Throughput"
          value={metrics.throughput}
          unit="RPS"
          trend={5.2}
          color="bg-blue-500"
        />
        <MetricCard
          icon={FiCpu}
          title="Avg Latency"
          value={metrics.avgLatency}
          unit="ms"
          trend={-2.3}
          color="bg-green-500"
        />
        <MetricCard
          icon={FiAlertCircle}
          title="Error Rate"
          value={metrics.errorRate.toFixed(3)}
          unit="%"
          trend={-0.5}
          color="bg-red-500"
        />
        <MetricCard
          icon={FiDatabase}
          title="Active Connections"
          value={metrics.activeConnections}
          unit=""
          trend={3.1}
          color="bg-purple-500"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Request Volume Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Request Volume
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Line
                type="monotone"
                dataKey="requests"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Service Latency Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Service Response Times
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={serviceLatencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="service" stroke="#9CA3AF" fontSize={12} angle={-45} textAnchor="end" />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Bar dataKey="latency" fill="#3B82F6">
                {serviceLatencyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Error Rate Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Error Rate Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Area
                type="monotone"
                dataKey="errors"
                stroke="#EF4444"
                fill="#EF4444"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Traffic Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Geographic Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={trafficDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {trafficDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Latency Percentiles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Latency Percentiles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {metrics.avgLatency}ms
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">P50 (Median)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {metrics.p95Latency}ms
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">P95</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">
              {metrics.p99Latency}ms
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">P99</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MetricsDashboard;