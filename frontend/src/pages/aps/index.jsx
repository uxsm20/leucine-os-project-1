import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import GanttChart from '../../components/aps/GanttChart';
import ResourceUtilization from '../../components/aps/ResourceUtilization';
import ScheduleMetrics from '../../components/aps/ScheduleMetrics';
import ConstraintsPanel from '../../components/aps/ConstraintsPanel';
import { 
  CalendarIcon,
  ArrowPathIcon,
  DocumentChartBarIcon,
  ChatBubbleLeftRightIcon,
  PlayIcon,
  PauseIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

const APSPage = () => {
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);

  const handleSimulation = () => {
    setIsSimulationRunning(!isSimulationRunning);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            Advanced Planning & Scheduling
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={handleSimulation}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                isSimulationRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isSimulationRunning ? (
                <>
                  <PauseIcon className="h-5 w-5 mr-2" />
                  Stop Simulation
                </>
              ) : (
                <>
                  <PlayIcon className="h-5 w-5 mr-2" />
                  Run Simulation
                </>
              )}
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
              Configure Schedule
            </button>
          </div>
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

        {/* Schedule Metrics */}
        <div className="mt-6">
          <ScheduleMetrics />
        </div>

        {/* Main Content */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Gantt Chart - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <GanttChart />
          </div>
          
          {/* Constraints Panel */}
          <div>
            <ConstraintsPanel />
          </div>
        </div>

        {/* Resource Utilization */}
        <div className="mt-6">
          <ResourceUtilization />
        </div>
      </div>
    </Layout>
  );
};

export default APSPage;
