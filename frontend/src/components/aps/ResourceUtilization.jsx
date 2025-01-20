import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ResourceUtilization = () => {
  const data = [
    { name: 'Line 1', current: 85, target: 90 },
    { name: 'Line 2', current: 75, target: 90 },
    { name: 'Line 3', current: 92, target: 90 },
    { name: 'Line 4', current: 88, target: 90 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Resource Utilization</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" name="Current" fill="#4F46E5" />
            <Bar dataKey="target" name="Target" fill="#E5E7EB" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResourceUtilization;
