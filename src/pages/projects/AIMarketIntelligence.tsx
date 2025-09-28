import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiHome, FiActivity, FiServer, FiShield, FiTrendingUp, FiGlobe, FiDatabase, FiCpu, FiTarget } from 'react-icons/fi';
import ProjectHero from '../../components/Projects/AI/ProjectHero';
import CrawlingDashboard from '../../components/Projects/AI/CrawlingDashboard';
import AIProcessingPipeline from '../../components/Projects/AI/AIProcessingPipeline';
import IntelligenceFeatures from '../../components/Projects/AI/IntelligenceFeatures';
import TechnicalArchitecture from '../../components/Projects/AI/TechnicalArchitecture';
import MLCapabilities from '../../components/Projects/AI/MLCapabilities';
import BusinessImpact from '../../components/Projects/AI/BusinessImpact';
import ComplianceEthics from '../../components/Projects/AI/ComplianceEthics';

const AIMarketIntelligence = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'overview', label: 'Overview', icon: FiHome },
    { id: 'crawling', label: 'Live Crawling', icon: FiGlobe },
    { id: 'pipeline', label: 'AI Pipeline', icon: FiCpu },
    { id: 'intelligence', label: 'Intelligence', icon: FiTrendingUp },
    { id: 'architecture', label: 'Architecture', icon: FiServer },
    { id: 'ml-capabilities', label: 'ML Models', icon: FiDatabase },
    { id: 'business', label: 'Business Impact', icon: FiTarget },
    { id: 'compliance', label: 'Compliance', icon: FiShield },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FiArrowLeft className="w-4 h-4" />
                <span>Back to Portfolio</span>
              </Link>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                AI Market Intelligence Platform
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="overview" className="relative">
          <ProjectHero />
        </section>

        {/* Crawling Dashboard */}
        <section id="crawling" className="relative">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Live Crawling Dashboard
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Real-time monitoring and control of our distributed web crawling infrastructure processing data from 500+ sources worldwide.
              </p>
            </motion.div>
            <CrawlingDashboard />
          </div>
        </section>

        {/* AI Processing Pipeline */}
        <section id="pipeline" className="relative">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                AI Processing Pipeline
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Advanced multi-stage AI pipeline for content extraction, analysis, and intelligence generation with 95% accuracy.
              </p>
            </motion.div>
            <AIProcessingPipeline />
          </div>
        </section>

        {/* Intelligence Features */}
        <section id="intelligence" className="relative">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Market Intelligence Features
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive competitive intelligence and market analysis tools powered by advanced AI algorithms.
              </p>
            </motion.div>
            <IntelligenceFeatures />
          </div>
        </section>

        {/* Technical Architecture */}
        <section id="architecture" className="relative">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                System Architecture
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Scalable microservices architecture supporting 10TB+ daily processing with enterprise-grade reliability.
              </p>
            </motion.div>
            <TechnicalArchitecture />
          </div>
        </section>

        {/* ML Capabilities */}
        <section id="ml-capabilities" className="relative">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Machine Learning Capabilities
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                State-of-the-art ML models for document classification, entity recognition, and predictive analytics.
              </p>
            </motion.div>
            <MLCapabilities />
          </div>
        </section>

        {/* Business Impact */}
        <section id="business" className="relative">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Business Impact & ROI
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Demonstrable business value with $5M+ annual savings and 60% faster strategic decision making.
              </p>
            </motion.div>
            <BusinessImpact />
          </div>
        </section>

        {/* Compliance & Ethics */}
        <section id="compliance" className="relative">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Compliance & Ethics
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Ethical AI practices with full compliance to data protection regulations and responsible crawling standards.
              </p>
            </motion.div>
            <ComplianceEthics />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIMarketIntelligence;