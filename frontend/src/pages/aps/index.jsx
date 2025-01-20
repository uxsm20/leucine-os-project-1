import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Layout from '../../components/layout/Layout';
import { 
  ChartBarIcon, 
  CogIcon, 
  ClipboardDocumentCheckIcon,
  CalendarIcon,
  ArrowPathIcon,
  DocumentChartBarIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const APSPage = () => {
  const [categories] = useState({
    'Planning & Scheduling': [
      {
        id: 1,
        title: 'Demand Forecast',
        description: 'Monthly demand data from ERP',
        status: 'Updated 2h ago',
        value: '1,234 units',
        trend: '+4.3%'
      },
      {
        id: 2,
        title: 'Resource Utilization',
        description: 'Machine and labor capacity',
        status: 'Live',
        value: '78%',
        trend: '+2.1%'
      },
      {
        id: 3,
        title: 'Material Inventory',
        description: 'Current stock levels',
        status: 'Live',
        value: '95%',
        trend: '-0.5%'
      }
    ],
    'Optimization': [
      {
        id: 1,
        title: 'Schedule Confidence',
        description: 'Based on current constraints',
        status: 'Live',
        value: '85%',
        trend: '+1.2%'
      },
      {
        id: 2,
        title: 'Resource Bottlenecks',
        description: 'Critical constraints',
        status: 'Updated 1h ago',
        value: '3',
        trend: '-2'
      }
    ],
    'Execution': [
      {
        id: 1,
        title: 'On-Time Delivery',
        description: 'Current month OTIF',
        status: 'Live',
        value: '94%',
        trend: '+0.8%'
      },
      {
        id: 2,
        title: 'Schedule Adherence',
        description: 'Actual vs Planned',
        status: 'Live',
        value: '91%',
        trend: '-1.2%'
      }
    ]
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            Advanced Planning & Scheduling
          </h1>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Generate New Schedule
          </button>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <button className="bg-white overflow-hidden shadow rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CalendarIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">View Schedule</h3>
                <p className="text-xs text-gray-500">Gantt chart view</p>
              </div>
            </div>
          </button>
          
          <button className="bg-white overflow-hidden shadow rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ArrowPathIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Run What-If</h3>
                <p className="text-xs text-gray-500">Scenario planning</p>
              </div>
            </div>
          </button>
          
          <button className="bg-white overflow-hidden shadow rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DocumentChartBarIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Reports</h3>
                <p className="text-xs text-gray-500">Performance analytics</p>
              </div>
            </div>
          </button>
          
          <button className="bg-white overflow-hidden shadow rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Collaborate</h3>
                <p className="text-xs text-gray-500">Share and approve</p>
              </div>
            </div>
          </button>
        </div>

        {/* Metrics Tabs */}
        <div className="mt-8">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow text-blue-700'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white overflow-hidden shadow rounded-lg"
                    >
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-gray-900">
                              {post.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {post.description}
                            </p>
                          </div>
                          <div className="ml-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {post.status}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-baseline">
                            <p className="text-2xl font-semibold text-gray-900">
                              {post.value}
                            </p>
                            <p className={classNames(
                              'ml-2 text-sm',
                              post.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                            )}>
                              {post.trend}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  );
};

export default APSPage;
