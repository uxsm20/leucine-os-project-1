import React, { useState } from 'react';
import {
  ExclamationTriangleIcon,
  MicrophoneIcon,
  PaperClipIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

const IssueReporting = () => {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('medium');
  const [isRecording, setIsRecording] = useState(false);

  const issueTypes = [
    { id: 'machine', name: 'Machine Error' },
    { id: 'quality', name: 'Quality Deviation' },
    { id: 'safety', name: 'Safety Incident' },
    { id: 'process', name: 'Process Deviation' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, submit to API
    console.log({
      issueType,
      description,
      severity,
      timestamp: new Date().toISOString(),
      operatorId: 'OP123', // Would come from auth context
    });
    
    // Reset form
    setIssueType('');
    setDescription('');
    setSeverity('medium');
  };

  const toggleVoiceRecording = () => {
    setIsRecording(!isRecording);
    // In real app, implement voice recording logic
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />
            <h2 className="text-lg font-medium text-gray-900">Report an Issue</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={toggleVoiceRecording}
              >
                <MicrophoneIcon className={`h-5 w-5 mr-2 ${isRecording ? 'text-red-500' : 'text-gray-400'}`} />
                {isRecording ? 'Stop Recording' : 'Voice Report'}
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <PhotoIcon className="h-5 w-5 mr-2 text-gray-400" />
                Take Photo
              </button>
            </div>

            {/* Issue Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Issue Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {issueTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      issueType === type.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    onClick={() => setIssueType(type.id)}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Severity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Severity
              </label>
              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Describe the issue..."
              />
            </div>

            {/* Attachments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments
              </label>
              <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <PaperClipIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                      <span>Upload files</span>
                      <input type="file" className="sr-only" multiple />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, PDF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Recent Issues List - Could be expanded in a real app */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Issues</h3>
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {/* Sample issue */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Machine Error</p>
                <p className="text-sm text-gray-500">Temperature sensor malfunction</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                High
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Reported 5 minutes ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueReporting;
