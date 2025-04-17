import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CloudSuite</h3>
            <p className="text-gray-400">
              Empowering businesses with powerful cloud solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#/features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:support@cloudsuite.com" className="flex items-center text-gray-400 hover:text-white">
                <FaEnvelope className="mr-2" />
                support@cloudsuite.com
              </a>
              <a href="https://instagram.com/cloudsuite_saas" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white">
                <FaInstagram className="mr-2" />
                @cloudsuite_saas
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CloudSuite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;