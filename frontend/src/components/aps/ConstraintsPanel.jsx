import React from 'react';
import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const ConstraintItem = ({ name, status, impact, description }) => {
  const isWarning = status === 'warning';
  
  return (
    <div className="border-b border-gray-200 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
      <div className="flex items-start">
        {isWarning ? (
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400 mt-0.5" />
        ) : (
          <CheckCircleIcon className="h-5 w-5 text-green-400 mt-0.5" />
        )}
        <div className="ml-3 flex-1">
          <h4 className="text-sm font-medium text-gray-900">{name}</h4>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
          <div className="mt-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              isWarning ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
            }`}>
              {impact}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConstraintsPanel = () => {
  const constraints = [
    {
      name: 'Material Availability',
      status: 'warning',
      impact: 'High Impact',
      description: 'Raw material inventory for Product A-123 is below safety stock level'
    },
    {
      name: 'Machine Capacity',
      status: 'ok',
      impact: 'Optimized',
      description: 'All production lines operating within optimal capacity range'
    },
    {
      name: 'Labor Allocation',
      status: 'warning',
      impact: 'Medium Impact',
      description: 'Skilled operator shortage for evening shift on Line 2'
    },
    {
      name: 'Quality Requirements',
      status: 'ok',
      impact: 'Compliant',
      description: 'All quality parameters within specified limits'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Active Constraints</h3>
        <div className="space-y-4">
          {constraints.map((constraint) => (
            <ConstraintItem key={constraint.name} {...constraint} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstraintsPanel;
