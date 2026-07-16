import React, { useEffect, useState } from "react";
import { getSummary } from "../../../../services/premiumAnalyticsApi";

const SummaryCards = ({ range }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!range) return;
    getSummary(range).then(res => setData(res.data));
  }, [range]);

  // Loading skeleton
  if (!data) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 animate-pulse"
          >
            <div className="h-8 w-12 mx-auto bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-20 mx-auto bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  const cards = [
    {
      label: "Total Attempts",
      value: data.totalAttempts,
      icon: "fa-pencil-alt",
    },
    {
      label: "Avg Score",
      value: data.averageScore?.toFixed(1) || 0,
      icon: "fa-chart-bar",
    },
    {
      label: "Best Score",
      value: data.bestScore,
      icon: "fa-trophy",
    },
    {
      label: "Questions Solved",
      value: data.totalQuestionsSolved,
      icon: "fa-check-circle",
    },
    {
      label: "Accuracy %",
      value: data.accuracyPercentage?.toFixed(1) || 0,
      icon: "fa-bullseye",
    },
    {
      label: "Avg Time",
      value: (data.averageTimePerQuiz?.toFixed(0) || 0) + "s",
      icon: "fa-clock",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((c, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg mb-3 mx-auto border border-gray-200">
            <i className={`fa ${c.icon} text-black`}></i>
          </div>
          <h2 className="text-2xl font-bold text-black text-center">{c.value}</h2>
          <p className="text-sm font-medium text-gray-500 text-center mt-1">{c.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;