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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-extrabold text-black mb-4">Quick Stats</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-600">Best Topic</span>
          <span className="font-bold text-black">{bestTopic}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-600">Need Improvement</span>
          <span className="font-bold text-black">{worstTopic}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-600">Latest Score</span>
          <span className="font-bold text-black">{latestScore}</span>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;