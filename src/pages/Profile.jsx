import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaEnvelope, FaCalendar } from 'react-icons/fa';

const Profile = () => {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="absolute -bottom-16 left-8">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 pb-8 px-8">
            <h1 className="text-3xl font-bold text-gray-900">{user?.name || 'Demo User'}</h1>
            <p className="text-gray-600">Software Engineer</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <ProfileField
                    icon={<FaUser />}
                    label="Full Name"
                    value={user?.name || 'Demo User'}
                  />
                  <ProfileField
                    icon={<FaEnvelope />}
                    label="Email"
                    value={user?.email || 'demo@cloudsuite.com'}
                  />
                  <ProfileField
                    icon={<FaCalendar />}
                    label="Member Since"
                    value="January 2024"
                  />
                </div>
              </div>

              {/* Activity Summary */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Activity Summary</h2>
                <div className="grid grid-cols-2 gap-4">
                  <ActivityCard title="Projects" value="12" />
                  <ActivityCard title="Tasks" value="48" />
                  <ActivityCard title="Storage Used" value="2.4 GB" />
                  <ActivityCard title="Team Members" value="8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProfileField = ({ icon, label, value }) => (
  <div className="flex items-center space-x-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-gray-900">{value}</p>
    </div>
  </div>
);

const ActivityCard = ({ title, value }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-semibold text-gray-900">{value}</p>
  </div>
);

export default Profile;