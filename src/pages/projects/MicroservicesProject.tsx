import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiHome, FiActivity, FiServer, FiShield, FiTrendingUp } from 'react-icons/fi';
import ProjectHero from '../../components/Projects/ProjectHero';
import ArchitectureDiagram from '../../components/Projects/Architecture/ArchitectureDiagram';
import MetricsDashboard from '../../components/Projects/Metrics/MetricsDashboard';
import TechnologyStack from '../../components/Projects/Technology/TechnologyStack';
import ScalabilitySection from '../../components/Projects/Scalability/ScalabilitySection';
import ResiliencePatterns from '../../components/Projects/Resilience/ResiliencePatterns';
import SecurityArchitecture from '../../components/Projects/Security/SecurityArchitecture';
import DevOpsPipeline from '../../components/Projects/DevOps/DevOpsPipeline';
import BusinessImpact from '../../components/Projects/Business/BusinessImpact';

const MicroservicesProject = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'overview', label: 'Overview', icon: FiHome },
    { id: 'architecture', label: 'Architecture', icon: FiServer },
    { id: 'metrics', label: 'Metrics', icon: FiActivity },
    { id: 'technology', label: 'Tech Stack', icon: FiServer },
    { id: 'scalability', label: 'Scalability', icon: FiTrendingUp },
    { id: 'resilience', label: 'Resilience', icon: FiShield },
    { id: 'security', label: 'Security', icon: FiShield },
    { id: 'devops', label: 'DevOps', icon: FiServer },
    { id: 'business', label: 'Business Impact', icon: FiTrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-600 to-purple-600"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Header */}
      <nav className="sticky top-1 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FiArrowLeft />
                <span>Back to Portfolio</span>
              </Link>
              <span className="text-gray-400 dark:text-gray-600">/</span>
              <span className="text-gray-900 dark:text-white font-semibold">
                Enterprise Microservices Platform
              </span>
            </div>

            {/* Section Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      setActiveSection(section.id);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeSection === section.id
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="inline-block w-4 h-4 mr-1" />
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="overview">
          <ProjectHero />
        </section>

        <section id="architecture" className="py-16">
          <div className="container mx-auto px-4">
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
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Interactive microservices architecture with real-time health monitoring
              </p>
            </motion.div>
            <ArchitectureDiagram />
          </div>
        </section>

        <section id="metrics" className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Real-Time Performance Metrics
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Live dashboard showing system performance and health indicators
              </p>
            </motion.div>
            <MetricsDashboard />
          </div>
        </section>

        <section id="technology" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Technology Stack
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technologies powering enterprise-scale operations
              </p>
            </motion.div>
            <TechnologyStack />
          </div>
        </section>

        <section id="scalability" className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Infinite Scalability
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Auto-scaling capabilities handling 10x traffic spikes seamlessly
              </p>
            </motion.div>
            <ScalabilitySection />
          </div>
        </section>

        <section id="resilience" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Resilience Patterns
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Built-in fault tolerance with self-healing capabilities
              </p>
            </motion.div>
            <ResiliencePatterns />
          </div>
        </section>

        <section id="security" className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Security Architecture
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Zero Trust security model with multi-layer protection
              </p>
            </motion.div>
            <SecurityArchitecture />
          </div>
        </section>

        <section id="devops" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                DevOps Excellence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Fully automated CI/CD pipeline with GitOps workflow
              </p>
            </motion.div>
            <DevOpsPipeline />
          </div>
        </section>

        <section id="business" className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Business Impact
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Measurable business outcomes and ROI
              </p>
            </motion.div>
            <BusinessImpact />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MicroservicesProject;