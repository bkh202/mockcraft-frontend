// TopicPerformance.jsx
import React from 'react';

const TopicPerformance = ({ topics }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Topic Performance</h2>
      <div className="space-y-5">
        {topics.map((topic, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">{topic.subject}</p>
                <p className="text-sm text-gray-500">{topic.unit}</p>
              </div>
              <span className={`font-semibold ${topic.accuracy >= 80 ? 'text-green-600' :
                topic.accuracy >= 60 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                {topic.accuracy}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${topic.accuracy >= 80 ? 'bg-green-500' :
                  topic.accuracy >= 60 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                style={{ width: `${topic.accuracy}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicPerformance;