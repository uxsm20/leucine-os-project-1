import React, { useState, useEffect } from 'react';
import {
  BeakerIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const TaskMonitoring = () => {
  // Mock data - In real app, fetch from API and update with WebSocket
  const [parameters, setParameters] = useState([
    {
      id: 1,
      name: 'Temperature',
      value: 72.5,
      unit: '°C',
      status: 'normal',
      min: 70,
      max: 75,
      trend: 'up',
      history: [71, 71.5, 72, 72.5],
    },
    {
      id: 2,
      name: 'Pressure',
      value: 2.4,
      unit: 'bar',
      status: 'warning',
      min: 2.0,
      max: 2.5,
      trend: 'up',
      history: [2.2, 2.3, 2.35, 2.4],
    },
    {
      id: 3,
      name: 'Speed',
      value: 1200,
      unit: 'RPM',
      status: 'normal',
      min: 1000,
      max: 1500,
      trend: 'stable',
      history: [1200, 1200, 1200, 1200],
    },
    {
      id: 4,
      name: 'pH Level',
      value: 7.2,
      unit: 'pH',
      status: 'normal',
      min: 6.8,
      max: 7.4,
      trend: 'down',
      history: [7.3, 7.25, 7.22, 7.2],
    },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setParameters(params =>
        params.map(param => ({
          ...param,
          value: param.value + (Math.random() - 0.5) * 0.1,
          history: [...param.history.slice(1), param.value],
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'normal':
        return 'text-green-600 bg-green-50';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50';
      case 'critical':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />;
      case 'down':
        return <ArrowTrendingDownIcon className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const ParameterCard = ({ parameter }) => {
    const percentage = ((parameter.value - parameter.min) / (parameter.max - parameter.min)) * 100;
    
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <BeakerIcon className="h-6 w-6 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900">{parameter.name}</h3>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(parameter.status)}`}>
            {parameter.status}
          </span>
        </div>

        <div className="flex items-end justify-between mb-2">
          <div>
            <span className="text-3xl font-semibold text-gray-900">
              {parameter.value.toFixed(1)}
            </span>
            <span className="ml-1 text-gray-500">{parameter.unit}</span>
          </div>
          {getTrendIcon(parameter.trend)}
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>{parameter.min}</span>
            <span>{parameter.max}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                parameter.status === 'normal' ? 'bg-green-500' :
                parameter.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
            />
          </div>
        </div>

        {parameter.status === 'warning' && (
          <div className="mt-4 flex items-start space-x-2 text-sm text-yellow-600 bg-yellow-50 p-2 rounded">
            <ExclamationTriangleIcon className="h-5 w-5 flex-shrink-0" />
            <p>Parameter approaching critical threshold</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {parameters.map((parameter) => (
        <ParameterCard key={parameter.id} parameter={parameter} />
      ))}
    </div>
  );
};

export default TaskMonitoring;
