import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaEnvelope className="text-blue-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">support@cloudsuite.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaInstagram className="text-blue-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold">Instagram</h3>
                  <p className="text-gray-600">@cloudsuite_saas</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-gray-600">
                    123 Tech Street<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;