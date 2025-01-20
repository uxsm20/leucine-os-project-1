import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const DashboardCard = ({ title, subtitle, icon: Icon, bgColor, metrics, route }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (route) {
      navigate(route);
    } else {
      setExpanded(!expanded);
    }
  };

  return (
    <div 
      className="bg-white overflow-hidden shadow-sm rounded-lg cursor-pointer" 
      onClick={handleClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${bgColor} rounded-md p-3`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium text-gray-900">{title}</h2>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          </div>
          <div className="ml-4">
            {!route && (
              <ChevronDownIcon 
                className={`h-5 w-5 text-gray-500 transition-transform ${
                  expanded ? 'rotate-180' : ''
                }`}
              />
            )}
          </div>
        </div>
        
        {expanded && !route && (
          <div className="mt-4">
            <div className="border-t pt-4">
              {metrics.map((metric, index) => (
                <div 
                  key={metric.label} 
                  className={`flex justify-between items-center ${
                    index !== metrics.length - 1 ? 'mb-2' : ''
                  }`}
                >
                  <span className="text-sm font-medium text-gray-500">
                    {metric.label}
                  </span>
                  <span className={`text-sm font-semibold ${metric.color || 'text-gray-900'}`}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
