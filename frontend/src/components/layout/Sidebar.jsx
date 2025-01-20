import { Link, useLocation } from 'react-router-dom';
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

const navigation = [
  { name: 'Advanced Planning and Scheduling', href: '/aps', icon: CalendarIcon },
  { name: 'Real-Time Task Execution', href: '/task-execution', icon: ClockIcon },
  { name: 'Quality Management', href: '/quality', icon: ClipboardDocumentCheckIcon },
  { name: 'Maintenance Management', href: '/maintenance', icon: CogIcon },
  { name: 'Performance Metrics', href: '/metrics', icon: ChartBarIcon },
  { name: 'Operator Empowerment', href: '/operator', icon: UserGroupIcon },
  { name: 'Traceability', href: '/traceability', icon: DocumentDuplicateIcon },
  { name: 'Collaboration', href: '/collaboration', icon: ChatBubbleLeftRightIcon },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-indigo-700">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-2xl font-bold text-white">LeucineOS</span>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive
                      ? 'bg-indigo-800 text-white'
                      : 'text-white hover:bg-indigo-600'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                >
                  <item.icon
                    className="mr-3 flex-shrink-0 h-6 w-6"
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
