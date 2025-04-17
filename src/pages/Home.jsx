import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloud, FaRocket, FaShieldAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Welcome to CloudSuite
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8"
            >
              Empower your business with our comprehensive cloud solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/features"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaCloud className="w-12 h-12" />}
              title="Cloud Storage"
              description="Secure and scalable storage solutions for your business needs"
            />
            <FeatureCard
              icon={<FaRocket className="w-12 h-12" />}
              title="Fast Performance"
              description="Lightning-fast performance with global CDN integration"
            />
            <FeatureCard
              icon={<FaShieldAlt className="w-12 h-12" />}
              title="Enterprise Security"
              description="Advanced security features to protect your data"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-lg text-center"
    >
      <div className="text-blue-600 flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default Home;