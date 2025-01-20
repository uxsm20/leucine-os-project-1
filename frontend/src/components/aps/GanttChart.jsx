import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, AdjustmentsHorizontalIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const GanttChart = () => {
  const navigate = useNavigate();
  const [currentDate] = useState(new Date());
  const [zoomLevel, setZoomLevel] = useState(1); // 1 = hourly, 2 = 30min
  const [showDetails, setShowDetails] = useState(null);

  const scheduleData = [
    {
      line: 'Production Line 1',
      capacity: '90%',
      operator: 'John Smith',
      tasks: [
        { 
          id: 1, 
          name: 'Batch A-123',
          product: 'Product Alpha',
          start: 20, 
          duration: 40, 
          status: 'in-progress',
          completion: 65,
          priority: 'high'
        },
        { 
          id: 2, 
          name: 'Batch A-124',
          product: 'Product Beta',
          start: 65, 
          duration: 30, 
          status: 'scheduled',
          completion: 0,
          priority: 'medium'
        },
      ],
    },
    {
      line: 'Production Line 2',
      capacity: '85%',
      operator: 'Sarah Johnson',
      tasks: [
        { 
          id: 3, 
          name: 'Batch B-456',
          product: 'Product Gamma',
          start: 10, 
          duration: 35, 
          status: 'completed',
          completion: 100,
          priority: 'medium'
        },
        { 
          id: 4, 
          name: 'Batch B-457',
          product: 'Product Delta',
          start: 50, 
          duration: 45, 
          status: 'scheduled',
          completion: 0,
          priority: 'low'
        },
      ],
    },
    {
      line: 'Production Line 3',
      capacity: '95%',
      operator: 'Mike Wilson',
      tasks: [
        { 
          id: 5, 
          name: 'Batch C-789',
          product: 'Product Epsilon',
          start: 5, 
          duration: 25, 
          status: 'in-progress',
          completion: 45,
          priority: 'high'
        },
        { 
          id: 6, 
          name: 'Batch C-790',
          product: 'Product Zeta',
          start: 35, 
          duration: 40, 
          status: 'scheduled',
          completion: 0,
          priority: 'medium'
        },
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'scheduled':
        return 'bg-gray-300';
      default:
        return 'bg-gray-200';
    }
  };

  const getPriorityBorder = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-4 border-red-500';
      case 'medium':
        return 'border-l-4 border-yellow-500';
      case 'low':
        return 'border-l-4 border-green-500';
      default:
        return '';
    }
  };

  const handleTaskClick = (taskId) => {
    navigate(`/aps/batch/${taskId}`);
  };

  const TaskTooltip = ({ task }) => (
    <div className="absolute z-10 w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-200 -mt-2 transform -translate-y-full">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-gray-900">{task.name}</h4>
          <p className="text-sm text-gray-500">{task.product}</p>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${
          task.status === 'completed' ? 'bg-green-100 text-green-800' :
          task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {task.status}
        </span>
      </div>
      <div className="mt-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Completion</span>
          <span className="font-medium">{task.completion}%</span>
        </div>
        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${task.completion}%` }}
          />
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-500">
        <div>Priority: <span className="font-medium capitalize">{task.priority}</span></div>
        <div>Duration: <span className="font-medium">{task.duration}h</span></div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex-none bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Production Schedule</h3>
              <p className="mt-1 text-sm text-gray-500">
                {currentDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button className="p-1.5 rounded-lg hover:bg-gray-100">
                  <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-gray-100">
                  <CalendarIcon className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-gray-100">
                  <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setZoomLevel(zoomLevel === 1 ? 2 : 1)}
                  className="p-1.5 rounded-lg hover:bg-gray-100"
                >
                  <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="flex-1 bg-white overflow-hidden">
        <div className="h-full overflow-x-auto overflow-y-auto">
          <div className="min-w-[1200px] p-6">
            {/* Time scale */}
            <div className="flex pl-52 border-b sticky top-0 bg-white z-10">
              {Array.from({ length: 24 * zoomLevel }, (_, i) => (
                <div key={i} className="flex-1 text-xs text-gray-500 text-center pb-2">
                  {Math.floor(i / zoomLevel)}:{(i % zoomLevel) * (60/zoomLevel) || '00'}
                </div>
              ))}
            </div>

            {/* Production lines */}
            <div className="space-y-6 mt-4">
              {scheduleData.map((line, lineIndex) => (
                <div key={lineIndex} className="flex">
                  <div className="w-52 flex-shrink-0 pr-4 sticky left-0 bg-white z-10">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-gray-900">{line.line}</div>
                      <div className="text-xs text-gray-500">Operator: {line.operator}</div>
                      <div className="text-xs text-gray-500">Capacity: {line.capacity}</div>
                    </div>
                  </div>
                  <div className="flex-grow relative h-12">
                    {/* Background grid */}
                    <div className="absolute inset-0 grid grid-cols-24 gap-0">
                      {Array.from({ length: 24 }, (_, i) => (
                        <div key={i} className="border-l border-gray-100" />
                      ))}
                    </div>
                    {/* Tasks */}
                    {line.tasks.map((task) => (
                      <div
                        key={task.id}
                        className={`absolute h-10 rounded ${getStatusColor(task.status)} ${getPriorityBorder(task.priority)} transition-all cursor-pointer hover:shadow-lg`}
                        style={{
                          left: `${(task.start / 24) * 100}%`,
                          width: `${(task.duration / 24) * 100}%`,
                          top: '4px',
                        }}
                        onClick={() => handleTaskClick(task.id)}
                        onMouseEnter={() => setShowDetails(task.id)}
                        onMouseLeave={() => setShowDetails(null)}
                      >
                        <div className="px-2 py-1 text-xs text-white truncate">
                          {task.name}
                          <div className="text-xs opacity-75 truncate">{task.product}</div>
                        </div>
                        {showDetails === task.id && <TaskTooltip task={task} />}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend - Fixed at bottom */}
      <div className="flex-none bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded mr-1" />
                <span>Completed</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded mr-1" />
                <span>In Progress</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded mr-1" />
                <span>Scheduled</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 border-l-4 border-red-500 mr-1" />
                <span>High Priority</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 border-l-4 border-yellow-500 mr-1" />
                <span>Medium Priority</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 border-l-4 border-green-500 mr-1" />
                <span>Low Priority</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttChart;
