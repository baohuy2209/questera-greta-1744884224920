import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const userActivityOptions = {
    title: {
      text: 'User Activity',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: Array.from({ length: 7 }, (_, i) => 
        format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd')
      ).reverse()
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      smooth: true
    }]
  };

  const storageUsageOptions = {
    title: {
      text: 'Storage Usage',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [{
      type: 'pie',
      radius: '50%',
      data: [
        { value: 40, name: 'Documents' },
        { value: 30, name: 'Images' },
        { value: 20, name: 'Videos' },
        { value: 10, name: 'Other' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 max-w-7xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Users" value="1,234" />
        <StatCard title="Active Users" value="892" />
        <StatCard title="Storage Used" value="45.3 GB" />
        <StatCard title="Uptime" value="99.9%" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ReactECharts option={userActivityOptions} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ReactECharts option={storageUsageOptions} />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <ActivityItem
            action="File Upload"
            user="John Doe"
            time="2 minutes ago"
            description="Uploaded presentation.pdf"
          />
          <ActivityItem
            action="User Login"
            user="Jane Smith"
            time="15 minutes ago"
            description="Logged in from New York"
          />
          <ActivityItem
            action="Settings Change"
            user="Admin"
            time="1 hour ago"
            description="Updated security settings"
          />
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-semibold mt-2">{value}</p>
  </div>
);

const ActivityItem = ({ action, user, time, description }) => (
  <div className="flex items-center justify-between py-3 border-b last:border-0">
    <div>
      <p className="font-medium">{action}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div className="text-right">
      <p className="text-sm font-medium">{user}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  </div>
);

export default Dashboard;