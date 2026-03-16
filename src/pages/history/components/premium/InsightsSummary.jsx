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

  if (!data)
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100">
        Loading insights...
      </div>
    );

  const {
    trendStatus,
    trendStrength,
    volatilityScore,
    consistencyLevel,
    projectedNext7DaysAccuracy,
    mostAtRiskTopic
  } = data;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 space-y-6">

      <h3 className="text-lg font-semibold text-slate-800">
        Performance Intelligence
      </h3>

      {/* Trend Status */}
      <div>
        <p className="text-sm text-slate-500">Trend Status</p>
        <p className="text-xl font-semibold text-indigo-600">
          {trendStatus} ({trendStrength})
        </p>
      </div>

      {/* Consistency */}
      <div>
        <p className="text-sm text-slate-500">Consistency</p>
        <p className="text-xl font-semibold">
          {consistencyLevel} (Volatility: {volatilityScore})
        </p>
      </div>

      {/* Projection */}
      <div>
        <p className="text-sm text-slate-500">Projected Next 7 Days</p>
        <p className="text-xl font-semibold text-emerald-600">
          {projectedNext7DaysAccuracy}%
        </p>
      </div>

      {/* Risk Topic */}
      {mostAtRiskTopic && (
        <div>
          <p className="text-sm text-slate-500">Most At-Risk Topic</p>
          <p className="text-xl font-semibold text-red-600">
            {mostAtRiskTopic.topic} ({mostAtRiskTopic.accuracy}%)
          </p>
        </div>
      )}

    </div>
  );
};

export default InsightsSummary;
