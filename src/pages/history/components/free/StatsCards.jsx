// StatsCards.jsx
import React from 'react';

const StatsCards = ({ topics, totalQuestions }) => {
  const avgAccuracy = topics.length > 0
    ? Math.round(topics.reduce((sum, t) => sum + t.accuracy, 0) / topics.length)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6 border">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Topics</p>
            <p className="text-2xl font-semibold">{topics.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Avg. Accuracy</p>
            <p className="text-2xl font-semibold">{avgAccuracy}%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-purple-100 text-purple-600 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Questions Practiced</p>
            <p className="text-2xl font-semibold">{totalQuestions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;