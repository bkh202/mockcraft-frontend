import React from 'react';

const TopicPerformance = ({ topics }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-extrabold text-black mb-6">Topic Performance</h2>
      <div className="space-y-5">
        {topics.map((topic, index) => {
          // Determine text and bar color based on accuracy
          let textColor = 'text-black';
          let barColor = 'bg-black';
          if (topic.accuracy >= 80) {
            textColor = 'text-black';
            barColor = 'bg-black';
          } else if (topic.accuracy >= 60) {
            textColor = 'text-gray-700';
            barColor = 'bg-gray-600';
          } else {
            textColor = 'text-gray-400';
            barColor = 'bg-gray-300';
          }

          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-black">{topic.subject}</p>
                  <p className="text-sm text-gray-500">{topic.unit}</p>
                </div>
                <span className={`font-bold ${textColor}`}>
                  {topic.accuracy}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${barColor}`}
                  style={{ width: `${topic.accuracy}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopicPerformance;