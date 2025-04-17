import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="$29"
            features={[
              "5GB Storage",
              "10 Team Members",
              "Basic Analytics",
              "24/7 Support",
              "API Access"
            ]}
          />
          <PricingCard
            title="Professional"
            price="$99"
            featured={true}
            features={[
              "50GB Storage",
              "Unlimited Team Members",
              "Advanced Analytics",
              "Priority Support",
              "API Access",
              "Custom Integration"
            ]}
          />
          <PricingCard
            title="Enterprise"
            price="$299"
            features={[
              "500GB Storage",
              "Unlimited Everything",
              "Custom Analytics",
              "Dedicated Support",
              "Custom API Access",
              "White Labeling"
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

const PricingCard = ({ title, price, features, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-lg shadow-lg overflow-hidden ${
        featured ? 'border-2 border-blue-500' : ''
      }`}
    >
      <div className={`p-6 ${featured ? 'bg-blue-600' : 'bg-white'}`}>
        <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <div className={`text-4xl font-bold mb-4 ${featured ? 'text-white' : 'text-gray-900'}`}>
          {price}
          <span className={`text-lg font-normal ${featured ? 'text-blue-100' : 'text-gray-500'}`}>/month</span>
        </div>
      </div>
      <div className="bg-white p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full mt-8 px-4 py-2 rounded-md font-semibold ${
          featured
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-800 text-white hover:bg-gray-900'
        }`}>
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default Pricing;