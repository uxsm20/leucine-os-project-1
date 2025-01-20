import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const MetricCard = ({ title, value, trend, trendValue, status }) => {
  const isPositive = trend === 'up';
  
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          </div>
          <div className="ml-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {status}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <div className={`ml-2 flex items-center text-sm ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {isPositive ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
              <span className="ml-1">{trendValue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduleMetrics = () => {
  const metrics = [
    {
      title: 'Schedule Adherence',
      value: '94%',
      trend: 'up',
      trendValue: '2.3%',
      status: 'On Track'
    },
    {
      title: 'Resource Utilization',
      value: '87%',
      trend: 'up',
      trendValue: '1.2%',
      status: 'Optimized'
    },
    {
      title: 'On-Time Delivery',
      value: '96%',
      trend: 'down',
      trendValue: '0.8%',
      status: 'Good'
    },
    {
      title: 'Schedule Confidence',
      value: '92%',
      trend: 'up',
      trendValue: '3.1%',
      status: 'High'
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
};

export default ScheduleMetrics;
