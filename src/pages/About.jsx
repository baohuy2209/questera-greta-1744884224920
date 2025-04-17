import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About CloudSuite</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with innovative cloud solutions since 2023
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded by Robert in 2023, CloudSuite was born from a vision to simplify cloud computing
              for businesses of all sizes. With years of experience in the tech industry, Robert
              identified the need for a more intuitive and comprehensive cloud solution.
            </p>
            <p className="text-gray-600">
              Today, CloudSuite serves thousands of businesses worldwide, helping them leverage the
              power of cloud computing to grow and scale their operations efficiently.
            </p>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Robert - Founder"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-center mb-2">Robert</h3>
              <p className="text-gray-600 text-center mb-4">Founder & CEO</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;