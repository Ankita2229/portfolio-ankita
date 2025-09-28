import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';

const ProjectHero = () => {
  const [metrics, setMetrics] = useState({
    uptime: 99.97,
    users: 100000,
    apiCalls: 500000000,
    rps: 50000
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        uptime: 99.97 + (Math.random() * 0.02),
        users: prev.users + Math.floor(Math.random() * 100),
        apiCalls: prev.apiCalls + Math.floor(Math.random() * 10000),
        rps: 50000 + Math.floor(Math.random() * 5000)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const technologies = [
    'Spring Boot', 'Kubernetes', 'AWS', 'PostgreSQL', 'Redis',
    'Docker', 'Apache Kafka', 'Elasticsearch', 'Prometheus', 'Grafana',
    'React', 'TypeScript', 'GraphQL', 'gRPC', 'Istio'
  ];

  return (
    <div className="relative min-h-[70vh] bg-gradient-to-br from-primary-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Project Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Enterprise E-Commerce
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Microservices Platform
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Netflix-Scale Architecture Handling 50K+ RPS
          </motion.p>

          {/* Real-time Metrics Ticker */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <div className="flex items-center space-x-2">
                <FiActivity className="text-green-400" />
                <span className="text-white font-semibold">
                  {metrics.uptime.toFixed(2)}% Uptime
                </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <div className="flex items-center space-x-2">
                <FiUsers className="text-blue-400" />
                <span className="text-white font-semibold">
                  {metrics.users.toLocaleString()}+ Users
                </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <div className="flex items-center space-x-2">
                <FiTrendingUp className="text-purple-400" />
                <span className="text-white font-semibold">
                  {(metrics.apiCalls / 1000000).toFixed(0)}M+ API Calls
                </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <div className="flex items-center space-x-2">
                <FiAward className="text-yellow-400" />
                <span className="text-white font-semibold">
                  {metrics.rps.toLocaleString()} RPS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Technology Badge Carousel */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex animate-scroll">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <span className="text-white font-medium whitespace-nowrap">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-yellow-400 mb-2">60%</div>
              <div className="text-gray-300">Latency Reduction</div>
              <div className="text-sm text-gray-400 mt-2">
                From 350ms to 140ms average response time
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-gray-300">Scalability Improvement</div>
              <div className="text-sm text-gray-400 mt-2">
                Handling Black Friday traffic with ease
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
              <div className="text-sm text-gray-400 mt-2">
                Through auto-scaling and resource optimization
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ProjectHero;