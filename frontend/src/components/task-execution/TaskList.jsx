import React, { useState } from 'react';
import {
  CheckCircleIcon,
  ChevronRightIcon,
  PlayCircleIcon,
  DocumentTextIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon,
  VideoCameraIcon,
  PhotoIcon,
  DocumentTextIcon as DocumentIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolidIcon } from '@heroicons/react/24/solid';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Setup Machine Parameters',
      description: 'Configure temperature and pressure settings for Batch A-123',
      priority: 'high',
      status: 'in-progress',
      type: 'machine-setup',
      steps: [
        { 
          id: 1, 
          text: 'Power on main control unit', 
          completed: true,
          type: 'action',
          verificationRequired: false,
        },
        { 
          id: 2, 
          text: 'Set temperature to 72°C', 
          completed: true,
          type: 'parameter',
          verificationRequired: true,
          value: '72°C',
          target: '70-75°C',
        },
        { 
          id: 3, 
          text: 'Adjust pressure to 2.4 bar', 
          completed: false,
          type: 'parameter',
          verificationRequired: true,
          value: '2.4 bar',
          target: '2.0-2.5 bar',
        },
        { 
          id: 4, 
          text: 'Verify sensor readings', 
          completed: false,
          type: 'verification',
          verificationRequired: true,
          checklist: [
            { id: 1, text: 'Temperature sensor calibrated', completed: false },
            { id: 2, text: 'Pressure sensor responsive', completed: false },
          ],
        },
      ],
      mediaUrl: 'https://example.com/setup-guide.mp4',
      deadline: '2025-01-20T16:30:00',
      resources: [
        { type: 'video', url: '#', title: 'Setup Tutorial' },
        { type: 'document', url: '#', title: 'Machine Manual' },
        { type: 'image', url: '#', title: 'Reference Diagram' },
      ],
    },
    {
      id: 2,
      title: 'Quality Check - Product Alpha',
      description: 'Perform standard quality inspection for Product Alpha batch',
      priority: 'medium',
      status: 'pending',
      type: 'quality-check',
      steps: [
        { id: 1, text: 'Collect sample from production line', completed: false },
        { id: 2, text: 'Measure pH levels', completed: false },
        { id: 3, text: 'Check viscosity', completed: false },
        { id: 4, text: 'Document results', completed: false },
      ],
      deadline: '2025-01-20T17:00:00',
    },
  ]);

  const [activeTask, setActiveTask] = useState(null);
  const [showResources, setShowResources] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('deadline');

  // Filter and sort tasks
  const filteredTasks = tasks
    .filter(task => filterStatus === 'all' || task.status === filterStatus)
    .sort((a, b) => {
      if (sortBy === 'deadline') {
        return new Date(a.deadline) - new Date(b.deadline);
      }
      if (sortBy === 'priority') {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return 0;
    });

  const handleStepToggle = (taskId, stepId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          steps: task.steps.map(step => {
            if (step.id === stepId) {
              // If verification is required, show confirmation dialog
              if (step.verificationRequired) {
                const confirmed = window.confirm('Have you verified this step?');
                if (!confirmed) return step;
              }
              return { ...step, completed: !step.completed };
            }
            return step;
          })
        };
      }
      return task;
    }));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const ResourceIcon = ({ type }) => {
    switch (type) {
      case 'video':
        return <VideoCameraIcon className="h-5 w-5 text-blue-500" />;
      case 'image':
        return <PhotoIcon className="h-5 w-5 text-green-500" />;
      case 'document':
        return <DocumentIcon className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const TaskCard = ({ task }) => {
    const isActive = activeTask === task.id;
    const allStepsCompleted = task.steps.every(step => step.completed);
    const completedSteps = task.steps.filter(step => step.completed).length;
    const totalSteps = task.steps.length;
    const progress = Math.round((completedSteps / totalSteps) * 100);

    return (
      <div className="bg-white rounded-lg shadow transition-all duration-200 hover:shadow-md">
        <div className="p-4">
          <div 
            className="cursor-pointer"
            onClick={() => setActiveTask(isActive ? null : task.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                {allStepsCompleted ? (
                  <CheckCircleSolidIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                ) : (
                  <PlayCircleIcon className="h-6 w-6 text-blue-500 flex-shrink-0" />
                )}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{task.description}</p>
                  <div className="mt-2 flex items-center space-x-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {new Date(task.deadline).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowResources(!showResources);
                  }}
                  className="p-1.5 rounded-lg hover:bg-gray-100"
                >
                  <DocumentTextIcon className="h-5 w-5 text-gray-400" />
                </button>
                <ChevronRightIcon 
                  className={`h-5 w-5 text-gray-400 transform transition-transform ${isActive ? 'rotate-90' : ''}`} 
                />
              </div>
            </div>

            <div className="mt-3">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Resources Panel */}
          {showResources && (
            <div className="mt-4 border-t pt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Resources</h4>
              <div className="grid grid-cols-2 gap-2">
                {task.resources && task.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    className="flex items-center p-2 rounded-md hover:bg-gray-50"
                  >
                    <ResourceIcon type={resource.type} />
                    <span className="ml-2 text-sm text-gray-600">{resource.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Expanded View */}
        {isActive && (
          <div className="border-t border-gray-200 p-4">
            <div className="space-y-4">
              {task.steps.map((step) => (
                <div key={step.id} className="space-y-2">
                  <div
                    className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                    onClick={() => handleStepToggle(task.id, step.id)}
                  >
                    <div className={`flex-shrink-0 h-5 w-5 border-2 rounded-full flex items-center justify-center mt-0.5
                      ${step.completed ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
                    >
                      {step.completed && (
                        <CheckCircleIcon className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <span className={`text-sm ${step.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                        {step.text}
                      </span>
                      
                      {step.type === 'parameter' && (
                        <div className="mt-1 text-xs text-gray-500">
                          Current: {step.value} (Target: {step.target})
                        </div>
                      )}
                      
                      {step.type === 'verification' && step.checklist && (
                        <div className="mt-2 pl-4 space-y-2">
                          {step.checklist.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => {
                                  // Handle checklist item toggle
                                }}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                              />
                              <span className="text-xs text-gray-600">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Filters and Sort */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex items-center space-x-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-md border-gray-300 text-sm"
          >
            <option value="all">All Tasks</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-md border-gray-300 text-sm"
          >
            <option value="deadline">Sort by Deadline</option>
            <option value="priority">Sort by Priority</option>
          </select>
        </div>
        <button
          onClick={() => {
            // Refresh tasks
          }}
          className="p-1.5 rounded-lg hover:bg-gray-100"
        >
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      {/* Task List */}
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
