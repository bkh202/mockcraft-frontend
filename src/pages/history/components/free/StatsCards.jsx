import React from 'react';

const StatsCards = ({ topics, totalQuestions }) => {
  const avgAccuracy = topics.length > 0
    ? Math.round(topics.reduce((sum, t) => sum + t.accuracy, 0) / topics.length)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-gray-100 text-black mr-4 border border-gray-200">
            <i className="fa fa-book text-xl"></i>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Topics</p>
            <p className="text-2xl font-bold text-black">{topics.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-gray-100 text-black mr-4 border border-gray-200">
            <i className="fa fa-bullseye text-xl"></i>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Avg. Accuracy</p>
            <p className="text-2xl font-bold text-black">{avgAccuracy}%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-gray-100 text-black mr-4 border border-gray-200">
            <i className="fa fa-check-circle text-xl"></i>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Questions Practiced</p>
            <p className="text-2xl font-bold text-black">{totalQuestions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;