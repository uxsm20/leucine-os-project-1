import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../../components/layout/Layout';
import {
  ArrowLeftIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  BeakerIcon,
  UserIcon,
  CogIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const BatchDetails = () => {
  const { batchId } = useParams();
  const navigate = useNavigate();
  
  // Mock data - In real app, fetch this based on batchId
  const batchData = {
    id: batchId,
    name: 'Batch A-123',
    product: 'Product Alpha',
    status: 'in-progress',
    completion: 65,
    priority: 'high',
    startTime: '2025-01-20T10:00:00',
    endTime: '2025-01-21T02:00:00',
    line: 'Production Line 1',
    operator: 'John Smith',
    quantity: '1000 units',
    quality: {
      passed: 450,
      failed: 50,
      pending: 500,
    },
    parameters: [
      { name: 'Temperature', value: '72°C', status: 'normal' },
      { name: 'Pressure', value: '2.4 bar', status: 'warning' },
      { name: 'pH Level', value: '7.2', status: 'normal' },
      { name: 'Viscosity', value: '320 cP', status: 'normal' },
    ],
  };

  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'scheduled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getParameterStatusColor = (status) => {
    switch (status) {
      case 'normal':
        return 'text-green-500';
      case 'warning':
        return 'text-yellow-500';
      case 'critical':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <Layout>
      <div className="min-h-full">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="mr-4 p-2 rounded-full hover:bg-gray-100"
                >
                  <ArrowLeftIcon className="h-5 w-5 text-gray-500" />
                </button>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {batchData.name}
                  </h1>
                  <p className="mt-1 text-sm text-gray-500">
                    {batchData.product}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(batchData.status)}`}>
                  {batchData.status}
                </span>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Edit Batch
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-6">
            {/* Left column - Key Information */}
            <div className="col-span-2 space-y-6">
              {/* Progress Card */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Progress</h2>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-500">Completion</span>
                  <span className="font-medium">{batchData.completion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${batchData.completion}%` }}
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-lg font-semibold text-green-700">
                      {batchData.quality.passed}
                    </div>
                    <div className="text-sm text-green-600">Passed</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <div className="text-lg font-semibold text-red-700">
                      {batchData.quality.failed}
                    </div>
                    <div className="text-sm text-red-600">Failed</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-lg font-semibold text-gray-700">
                      {batchData.quality.pending}
                    </div>
                    <div className="text-sm text-gray-600">Pending</div>
                  </div>
                </div>
              </div>

              {/* Parameters Card */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Process Parameters</h2>
                <div className="grid grid-cols-2 gap-6">
                  {batchData.parameters.map((param) => (
                    <div
                      key={param.name}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <BeakerIcon className={`h-5 w-5 mr-3 ${getParameterStatusColor(param.status)}`} />
                        <span className="text-sm font-medium text-gray-900">
                          {param.name}
                        </span>
                      </div>
                      <span className={`text-sm font-medium ${getParameterStatusColor(param.status)}`}>
                        {param.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Details and Actions */}
            <div className="space-y-6">
              {/* Batch Details Card */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Batch Details</h2>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-500">Production Line</dt>
                    <dd className="text-sm font-medium text-gray-900">{batchData.line}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-500">Operator</dt>
                    <dd className="text-sm font-medium text-gray-900">{batchData.operator}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-500">Start Time</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {new Date(batchData.startTime).toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-500">End Time</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {new Date(batchData.endTime).toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-500">Quantity</dt>
                    <dd className="text-sm font-medium text-gray-900">{batchData.quantity}</dd>
                  </div>
                </dl>
              </div>

              {/* Quick Actions Card */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 mr-3 text-gray-400" />
                      <span>Adjust Timeline</span>
                    </div>
                    <ArrowLeftIcon className="h-5 w-5 text-gray-400 transform rotate-180" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <CogIcon className="h-5 w-5 mr-3 text-gray-400" />
                      <span>Update Parameters</span>
                    </div>
                    <ArrowLeftIcon className="h-5 w-5 text-gray-400 transform rotate-180" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <ChartBarIcon className="h-5 w-5 mr-3 text-gray-400" />
                      <span>View Analytics</span>
                    </div>
                    <ArrowLeftIcon className="h-5 w-5 text-gray-400 transform rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default BatchDetails;
