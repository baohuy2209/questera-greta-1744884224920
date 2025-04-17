import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { FaCloud, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaCloud className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">CloudSuite</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            {isAuthenticated && <NavLink to="/dashboard">Dashboard</NavLink>}
            {isAuthenticated && <NavLink to="/profile">Profile</NavLink>}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/features" onClick={() => setIsOpen(false)}>Features</MobileNavLink>
            <MobileNavLink to="/pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
            {isAuthenticated && (
              <>
                <MobileNavLink to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</MobileNavLink>
                <MobileNavLink to="/profile" onClick={() => setIsOpen(false)}>Profile</MobileNavLink>
              </>
            )}
            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Login
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;