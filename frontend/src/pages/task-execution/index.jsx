import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import TaskList from '../../components/task-execution/TaskList';
import TaskMonitoring from '../../components/task-execution/TaskMonitoring';
import IssueReporting from '../../components/task-execution/IssueReporting';
import { Tab } from '@headlessui/react';
import {
  ClipboardDocumentListIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const TaskExecutionPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isShiftActive, setIsShiftActive] = useState(false);

  // Mock data for metrics
  const metrics = [
    {
      id: 1,
      name: 'Tasks Completed',
      value: '12/15',
      change: '+2',
      changeType: 'increase',
      icon: CheckCircleIcon,
      color: 'text-green-600',
    },
    {
      id: 2,
      name: 'On-Time Completion',
      value: '94%',
      change: '+1.2%',
      changeType: 'increase',
      icon: ClockIcon,
      color: 'text-blue-600',
    },
    {
      id: 3,
      name: 'Active Issues',
      value: '2',
      change: '-1',
      changeType: 'decrease',
      icon: ExclamationTriangleIcon,
      color: 'text-yellow-600',
    },
    {
      id: 4,
      name: 'Operator Efficiency',
      value: '97%',
      change: '+0.5%',
      changeType: 'increase',
      icon: BoltIcon,
      color: 'text-purple-600',
    },
  ];

  const tabs = [
    {
      name: 'Task Instructions',
      icon: ClipboardDocumentListIcon,
      component: TaskList,
      badge: '3',
      badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
      name: 'Real-Time Monitoring',
      icon: ChartBarIcon,
      component: TaskMonitoring,
      badge: '4',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      name: 'Issue Reporting',
      icon: ExclamationTriangleIcon,
      component: IssueReporting,
      badge: '2',
      badgeColor: 'bg-yellow-100 text-yellow-800',
    },
  ];

  const handleShiftToggle = () => {
    if (isShiftActive) {
      // Handle shift end logic
      if (window.confirm('Are you sure you want to end your shift? This will save all current progress.')) {
        setIsShiftActive(false);
      }
    } else {
      // Handle shift start logic
      setIsShiftActive(true);
    }
  };

  return (
    <Layout>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Task Execution
                </h1>
              </div>
              <button
                onClick={handleShiftToggle}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                  isShiftActive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {isShiftActive ? 'End Shift' : 'Start Shift'}
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Metrics */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="relative bg-white pt-5 px-4 pb-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-md bg-gray-50">
                    <metric.icon
                      className={`h-6 w-6 ${metric.color}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-500 truncate">
                      {metric.name}
                    </p>
                    <div className="flex items-baseline">
                      <p className="text-2xl font-semibold text-gray-900">
                        {metric.value}
                      </p>
                      <p
                        className={`ml-2 flex items-baseline text-sm font-semibold ${
                          metric.changeType === 'increase'
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {metric.change}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          {isShiftActive ? (
            <Tab.Group onChange={setSelectedTab}>
              <Tab.List className="flex space-x-4 bg-white p-1 rounded-lg shadow mb-6">
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      `flex-1 flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-md relative
                      ${
                        selected
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`
                    }
                  >
                    <tab.icon className="h-5 w-5 mr-2" />
                    {tab.name}
                    {tab.badge && (
                      <span
                        className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${tab.badgeColor}`}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels>
                {tabs.map((tab, idx) => (
                  <Tab.Panel key={idx}>
                    <tab.component />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Start Your Shift</h3>
              <p className="text-gray-500 mb-4">Click the Start Shift button to begin your work session</p>
              <button
                onClick={handleShiftToggle}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
              >
                Start Shift
              </button>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default TaskExecutionPage;
