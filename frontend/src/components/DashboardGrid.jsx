import {
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import DashboardCard from './DashboardCard';

const modules = [
  {
    title: 'Advanced Planning and Scheduling',
    subtitle: 'Optimize production scheduling',
    icon: CalendarIcon,
    bgColor: 'bg-indigo-500',
    metrics: [
      { label: 'Active Orders', value: '24' },
      { label: 'Schedule Efficiency', value: '95%', color: 'text-green-600' },
    ],
    route: '/aps'
  },
  {
    title: 'Real-Time Task Execution',
    subtitle: 'Monitor ongoing operations',
    icon: ClockIcon,
    bgColor: 'bg-blue-500',
    metrics: [
      { label: 'Active Tasks', value: '12' },
      { label: 'Completion Rate', value: '88%', color: 'text-green-600' },
    ],
  },
  {
    title: 'Quality Management',
    subtitle: 'Ensure compliance standards',
    icon: ClipboardDocumentCheckIcon,
    bgColor: 'bg-green-500',
    metrics: [
      { label: 'Quality Score', value: '98%', color: 'text-green-600' },
      { label: 'Open Issues', value: '3' },
    ],
  },
  {
    title: 'Maintenance Management',
    subtitle: 'Equipment health tracking',
    icon: CogIcon,
    bgColor: 'bg-yellow-500',
    metrics: [
      { label: 'Equipment Status', value: 'Operational', color: 'text-green-600' },
      { label: 'Next Maintenance', value: '48h' },
    ],
  },
  {
    title: 'Performance Metrics',
    subtitle: 'Real-time analytics',
    icon: ChartBarIcon,
    bgColor: 'bg-purple-500',
    metrics: [
      { label: 'OEE Score', value: '92%', color: 'text-green-600' },
      { label: 'Productivity', value: '↑ 5%' },
    ],
  },
  {
    title: 'Operator Empowerment',
    subtitle: 'Gamification & training',
    icon: UserGroupIcon,
    bgColor: 'bg-pink-500',
    metrics: [
      { label: 'Active Operators', value: '15' },
      { label: 'Training Progress', value: '85%', color: 'text-green-600' },
    ],
  },
  {
    title: 'Traceability',
    subtitle: 'Audit trail management',
    icon: DocumentDuplicateIcon,
    bgColor: 'bg-teal-500',
    metrics: [
      { label: 'Tracked Items', value: '1,234' },
      { label: 'Compliance Rate', value: '100%', color: 'text-green-600' },
    ],
  },
  {
    title: 'Collaboration',
    subtitle: 'Team communication',
    icon: ChatBubbleLeftRightIcon,
    bgColor: 'bg-orange-500',
    metrics: [
      { label: 'Active Chats', value: '8' },
      { label: 'Response Time', value: 'under 5 min', color: 'text-green-600' },
    ],
  },
];

const DashboardGrid = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome to LeucineOS
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Your comprehensive manufacturing execution system
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {modules.map((module) => (
              <DashboardCard
                key={module.title}
                {...module}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
