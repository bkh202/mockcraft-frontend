import React, { useEffect, useState } from "react";
import { getInsightSummary } from "../../../../services/premiumAnalyticsApi";

const InsightsSummary = ({ range }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!range) return;
    console.log("Range value:", range);

    const mapRange = {
      "7d": "SEVEN_DAYS",
      "30d": "THIRTY_DAYS",
      "all": "ALL"
    };

    getInsightSummary(mapRange[range] || range)
      .then(res => setData(res.data))
      .catch(() => setData(null));
  }, [range]);

  if (!data) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
          <span className="text-gray-500 font-medium">Loading insights...</span>
        </div>
      </div>
    );
  }

  const {
    trendStatus,
    trendStrength,
    volatilityScore,
    consistencyLevel,
    projectedNext7DaysAccuracy,
    mostAtRiskTopic
  } = data;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-6">
      <h3 className="text-xl font-extrabold text-black flex items-center gap-2">
        <i className="fa fa-brain text-black"></i> Performance Intelligence
      </h3>

      {/* Trend Status */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-3">
        <p className="text-sm font-medium text-gray-500">Trend Status</p>
        <p className="text-xl font-bold text-black">
          {trendStatus} <span className="text-sm font-medium text-gray-500">({trendStrength})</span>
        </p>
      </div>

      {/* Consistency */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-3">
        <p className="text-sm font-medium text-gray-500">Consistency</p>
        <p className="text-xl font-bold text-black">
          {consistencyLevel} <span className="text-sm font-medium text-gray-500">(Volatility: {volatilityScore})</span>
        </p>
      </div>

      {/* Projection */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-3">
        <p className="text-sm font-medium text-gray-500">Projected Next 7 Days</p>
        <p className="text-xl font-bold text-black">{projectedNext7DaysAccuracy}%</p>
      </div>

      {/* Risk Topic */}
      {mostAtRiskTopic && (
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-500">Most At-Risk Topic</p>
          <p className="text-xl font-bold text-black">
            {mostAtRiskTopic.topic} <span className="text-sm font-medium text-gray-500">({mostAtRiskTopic.accuracy}%)</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default InsightsSummary;