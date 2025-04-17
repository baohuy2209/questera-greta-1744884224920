import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBell, FaLock, FaUser, FaCreditCard } from 'react-icons/fa';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <nav className="space-y-2">
              <SettingsTab
                icon={<FaUser />}
                title="Profile"
                active={activeTab === 'profile'}
                onClick={() => setActiveTab('profile')}
              />
              <SettingsTab
                icon={<FaBell />}
                title="Notifications"
                active={activeTab === 'notifications'}
                onClick={() => setActiveTab('notifications')}
              />
              <SettingsTab
                icon={<FaLock />}
                title="Security"
                active={activeTab === 'security'}
                onClick={() => setActiveTab('security')}
              />
              <SettingsTab
                icon={<FaCreditCard />}
                title="Billing"
                active={activeTab === 'billing'}
                onClick={() => setActiveTab('billing')}
              />
            </nav>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {activeTab === 'profile' && <ProfileSettings />}
              {activeTab === 'notifications' && <NotificationSettings />}
              {activeTab === 'security' && <SecuritySettings />}
              {activeTab === 'billing' && <BillingSettings />}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SettingsTab = ({ icon, title, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 w-full p-2 rounded-md ${
      active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
    }`}
  >
    {icon}
    <span>{title}</span>
  </button>
);

const ProfileSettings = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Profile Settings</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  </div>
);

const NotificationSettings = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Notification Preferences</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span>Email Notifications</span>
        <input type="checkbox" className="toggle" />
      </div>
      <div className="flex items-center justify-between">
        <span>Push Notifications</span>
        <input type="checkbox" className="toggle" />
      </div>
      <div className="flex items-center justify-between">
        <span>SMS Notifications</span>
        <input type="checkbox" className="toggle" />
      </div>
    </div>
  </div>
);

const SecuritySettings = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Security Settings</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Current Password</label>
        <input
          type="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">New Password</label>
        <input
          type="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
        <input
          type="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Update Password
      </button>
    </div>
  </div>
);

const BillingSettings = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Billing Information</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Update Billing Info
      </button>
    </div>
  </div>
);

export default Settings;