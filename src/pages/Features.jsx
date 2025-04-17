import { motion } from 'framer-motion';
import { FaCloud, FaLock, FaChartLine, FaUsers, FaCog, FaRocket } from 'react-icons/fa';

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Features</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Discover the powerful features that make CloudSuite the perfect solution for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaCloud />}
            title="Cloud Storage"
            description="Secure and scalable storage solutions with automatic backups"
          />
          <FeatureCard
            icon={<FaLock />}
            title="Advanced Security"
            description="Enterprise-grade security with encryption at rest and in transit"
          />
          <FeatureCard
            icon={<FaChartLine />}
            title="Analytics"
            description="Comprehensive analytics and reporting dashboard"
          />
          <FeatureCard
            icon={<FaUsers />}
            title="Team Collaboration"
            description="Real-time collaboration tools for your entire team"
          />
          <FeatureCard
            icon={<FaCog />}
            title="API Integration"
            description="Easy integration with your existing tools and workflows"
          />
          <FeatureCard
            icon={<FaRocket />}
            title="Performance"
            description="Lightning-fast performance with global CDN integration"
          />
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="text-blue-600 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default Features;