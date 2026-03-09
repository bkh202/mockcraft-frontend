// QuickStats.jsx
import React from 'react';

const QuickStats = ({ topics, trend }) => {
  const bestTopic = topics.length > 0
    ? topics.reduce((best, current) => current.accuracy > best.accuracy ? current : best).subject
    : 'N/A';

  const worstTopic = topics.length > 0
    ? topics.reduce((worst, current) => current.accuracy < worst.accuracy ? current : worst).subject
    : 'N/A';

  const latestScore = trend.length > 0 ? `${trend[trend.length - 1].accuracy}%` : 'N/A';

  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
      <h3 className="font-medium text-gray-900 mb-4">Quick Stats</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Best Topic</span>
          <span className="font-medium">{bestTopic}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Need Improvement</span>
          <span className="font-medium">{worstTopic}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Latest Score</span>
          <span className="font-medium">{latestScore}</span>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;