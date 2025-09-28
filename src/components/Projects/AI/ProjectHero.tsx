import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiDatabase, FiCpu, FiTrendingUp, FiZap, FiActivity } from 'react-icons/fi';

const ProjectHero = () => {
  const [metrics, setMetrics] = useState({
    dataProcessed: 10.2,
    activeCrawlers: 487,
    accuracy: 95.3,
    uptime: 99.94,
  });

  const [crawlerLocations] = useState([
    { id: 1, x: 15, y: 30, status: 'active', region: 'US East' },
    { id: 2, x: 25, y: 35, status: 'active', region: 'US West' },
    { id: 3, x: 48, y: 25, status: 'active', region: 'Europe' },
    { id: 4, x: 78, y: 40, status: 'processing', region: 'Asia Pacific' },
    { id: 5, x: 52, y: 55, status: 'active', region: 'Africa' },
    { id: 6, x: 32, y: 65, status: 'active', region: 'South America' },
    { id: 7, x: 85, y: 28, status: 'active', region: 'Japan' },
    { id: 8, x: 73, y: 35, status: 'active', region: 'China' },
  ]);

  const technologies = [
    { name: 'Python', color: 'text-yellow-500' },
    { name: 'Scrapy', color: 'text-green-500' },
    { name: 'Playwright', color: 'text-blue-500' },
    { name: 'Apache Spark', color: 'text-orange-500' },
    { name: 'TensorFlow', color: 'text-red-500' },
    { name: 'Elasticsearch', color: 'text-purple-500' },
    { name: 'AWS', color: 'text-yellow-600' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        dataProcessed: Number((prev.dataProcessed + Math.random() * 0.5).toFixed(1)),
        activeCrawlers: prev.activeCrawlers + Math.floor(Math.random() * 10 - 5),
        accuracy: Number((95.0 + Math.random() * 0.8).toFixed(1)),
        uptime: Number((99.9 + Math.random() * 0.09).toFixed(2)),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                AI-Powered
                <br />
                Market Intelligence
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-8"
              >
                Enterprise Data Intelligence & Competitive Analysis System
              </motion.p>
            </div>

            {/* Key Metrics Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <motion.div
                    key={metrics.dataProcessed}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-blue-400"
                  >
                    {metrics.dataProcessed}TB+
                  </motion.div>
                  <div className="text-xs text-gray-400">Daily Processing</div>
                </div>
                <div>
                  <motion.div
                    key={metrics.activeCrawlers}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-green-400"
                  >
                    {metrics.activeCrawlers}+
                  </motion.div>
                  <div className="text-xs text-gray-400">Sources</div>
                </div>
                <div>
                  <motion.div
                    key={metrics.accuracy}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-purple-400"
                  >
                    {metrics.accuracy}%
                  </motion.div>
                  <div className="text-xs text-gray-400">ML Accuracy</div>
                </div>
                <div>
                  <motion.div
                    key={metrics.uptime}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-yellow-400"
                  >
                    {metrics.uptime}%
                  </motion.div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>
            </motion.div>

            {/* Technology Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <p className="text-gray-400 font-medium">Powered by:</p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${tech.color} font-medium text-sm`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - World Map with Crawlers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Global Crawler Network</h3>

              {/* World Map Visualization */}
              <div className="relative aspect-[2/1] bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl overflow-hidden">
                {/* Simple world map outline */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30"
                  viewBox="0 0 100 50"
                  fill="none"
                >
                  {/* Continents outlines (simplified) */}
                  <path d="M10 20 L30 18 L35 25 L25 35 L15 30 Z" fill="currentColor" opacity="0.3" />
                  <path d="M40 15 L60 12 L65 20 L58 28 L45 25 Z" fill="currentColor" opacity="0.3" />
                  <path d="M70 25 L90 20 L88 35 L75 40 L72 30 Z" fill="currentColor" opacity="0.3" />
                </svg>

                {/* Crawler Locations */}
                {crawlerLocations.map((location) => (
                  <motion.div
                    key={location.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${location.x}%`, top: `${location.y}%` }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + location.id * 0.1 }}
                  >
                    {/* Pulsing dot */}
                    <motion.div
                      className={`w-4 h-4 rounded-full ${
                        location.status === 'active'
                          ? 'bg-green-400 shadow-lg shadow-green-400/50'
                          : 'bg-yellow-400 shadow-lg shadow-yellow-400/50'
                      }`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: location.id * 0.2,
                      }}
                    />
                    {/* Ripple effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full border-2 ${
                        location.status === 'active' ? 'border-green-400' : 'border-yellow-400'
                      }`}
                      animate={{
                        scale: [1, 3],
                        opacity: [0.8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: location.id * 0.2,
                      }}
                    />
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                      {location.region}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status Legend */}
              <div className="flex justify-center space-x-6 mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Active Crawling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Processing</span>
                </div>
              </div>
            </div>

            {/* Real-time Activity Indicators */}
            <div className="absolute -top-4 -right-4 space-y-2">
              <motion.div
                className="bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiActivity className="w-4 h-4" />
                <span>Live Processing</span>
              </motion.div>
              <motion.div
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiZap className="w-4 h-4" />
                <span>Real-time</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center text-gray-400">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectHero;