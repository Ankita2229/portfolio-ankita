import { motion } from 'framer-motion';
import { FiDollarSign, FiTrendingUp, FiUsers, FiClock, FiTarget, FiAward } from 'react-icons/fi';

const BusinessImpact = () => {
  const impactMetrics = [
    { icon: FiDollarSign, title: 'Cost Reduction', value: '$2.4M', period: 'annually', description: '40% infrastructure savings through auto-scaling', color: 'bg-green-600' },
    { icon: FiTrendingUp, title: 'Revenue Impact', value: '$8.7M', period: 'additional', description: 'Increased conversion through 60% faster load times', color: 'bg-blue-600' },
    { icon: FiUsers, title: 'User Experience', value: '94%', period: 'satisfaction', description: 'Customer satisfaction score improvement', color: 'bg-purple-600' },
    { icon: FiClock, title: 'Time to Market', value: '65%', period: 'faster', description: 'Feature delivery acceleration', color: 'bg-orange-600' },
  ];

  const beforeAfter = [
    { metric: 'Deployment Frequency', before: '1x/month', after: '50x/week', improvement: '200x' },
    { metric: 'Lead Time', before: '2-4 weeks', after: '2-4 hours', improvement: '95%' },
    { metric: 'MTTR', before: '4-8 hours', after: '< 30 minutes', improvement: '90%' },
    { metric: 'Failure Rate', before: '15%', after: '0.5%', improvement: '97%' },
    { metric: 'Infrastructure Cost', before: '$50K/month', after: '$30K/month', improvement: '40%' },
  ];

  const roi = [
    { category: 'Development Productivity', saving: '$1.2M', description: '50% faster debugging and deployment' },
    { category: 'Infrastructure Optimization', saving: '$800K', description: 'Auto-scaling and resource optimization' },
    { category: 'Reduced Downtime', saving: '$600K', description: '99.97% uptime vs 99.5% previously' },
    { category: 'Security & Compliance', saving: '$400K', description: 'Avoided penalties and security breaches' },
  ];

  return (
    <div className="space-y-12">
      {/* Impact Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`${metric.color} text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all`}
            >
              <Icon className="w-12 h-12 mb-4" />
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm opacity-90 mb-3">{metric.period}</div>
              <div className="text-xs opacity-80">{metric.description}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Before vs After Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Transformation Impact: Before vs After Microservices
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Metric</th>
                <th className="text-center py-4 px-4 font-semibold text-red-600">Before (Monolith)</th>
                <th className="text-center py-4 px-4 font-semibold text-green-600">After (Microservices)</th>
                <th className="text-center py-4 px-4 font-semibold text-blue-600">Improvement</th>
              </tr>
            </thead>
            <tbody>
              {beforeAfter.map((item, index) => (
                <motion.tr
                  key={item.metric}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">{item.metric}</td>
                  <td className="py-4 px-4 text-center text-red-600">{item.before}</td>
                  <td className="py-4 px-4 text-center text-green-600">{item.after}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.improvement}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* ROI Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold text-center mb-8">Return on Investment (ROI)</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-6">Annual Cost Savings</h4>
            <div className="space-y-4">
              {roi.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-semibold">{item.category}</div>
                    <div className="text-xl font-bold text-green-300">{item.saving}</div>
                  </div>
                  <div className="text-sm opacity-90">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <FiTarget className="w-16 h-16 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">$3M+</div>
              <div className="text-lg opacity-90 mb-4">Total Annual Savings</div>
              <div className="text-6xl font-bold text-green-300 mb-2">340%</div>
              <div className="text-xl opacity-90">ROI in Year 1</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team Productivity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Developer Productivity Gains
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Debugging Time</span>
                <span className="text-sm font-semibold text-green-600">-70%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Feature Development Speed</span>
                <span className="text-sm font-semibold text-blue-600">+85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Code Quality Score</span>
                <span className="text-sm font-semibold text-purple-600">+60%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Business Metrics
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Customer Acquisition</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Faster onboarding</div>
              </div>
              <div className="text-2xl font-bold text-green-600">+42%</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Page Load Speed</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average improvement</div>
              </div>
              <div className="text-2xl font-bold text-blue-600">60%</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Market Expansion</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">New regions supported</div>
              </div>
              <div className="text-2xl font-bold text-purple-600">5</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Awards and Recognition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white text-center"
      >
        <FiAward className="w-16 h-16 mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-6">Industry Recognition</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-lg font-semibold mb-2">"Architecture Excellence Award"</div>
            <div className="text-sm opacity-90">CloudTech Summit 2023</div>
          </div>
          <div>
            <div className="text-lg font-semibold mb-2">"Innovation in DevOps"</div>
            <div className="text-sm opacity-90">TechLeaders Conference</div>
          </div>
          <div>
            <div className="text-lg font-semibold mb-2">"Top 10 Scaling Stories"</div>
            <div className="text-sm opacity-90">Enterprise Tech Magazine</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessImpact;