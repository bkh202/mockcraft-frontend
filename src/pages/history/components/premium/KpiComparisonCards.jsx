import React, { useEffect, useState } from "react";
import { getKpiComparison } from "../../../../services/premiumAnalyticsApi";

const KpiComparisonCards = ({ range }) => {
  const [accuracyMetric, setAccuracyMetric] = useState(null);

  useEffect(() => {
    if (!range) return;

    getKpiComparison(range)
      .then(res => {
        const metrics = res.data?.metrics || [];
        const accuracy = metrics.find(m => m.label === "Accuracy (%)");
        setAccuracyMetric(accuracy || null);
      })
      .catch(() => setAccuracyMetric(null));
  }, [range]);

  if (!accuracyMetric) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="animate-pulse space-y-3">
          <div className="h-6 w-40 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const { currentValue, previousValue, deltaPercentage, trend } = accuracyMetric;
  const improved = trend === "UP";

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2">
        <i className="fa fa-chart-bar text-black"></i> KPI Comparison ({range})
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Current Accuracy</p>
          <p className="text-3xl font-bold text-black">{currentValue?.toFixed(1)}%</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Previous Period</p>
          <p className="text-3xl font-bold text-black">{previousValue?.toFixed(1)}%</p>
        </div>

        <div className={`p-4 rounded-lg border border-gray-200 ${improved ? "bg-gray-50" : "bg-gray-50"}`}>
          <p className="text-sm font-medium text-gray-500">Change</p>
          <p className="text-3xl font-bold text-black flex items-center gap-1">
            {trend === "UP" ? (
              <i className="fa fa-arrow-up text-black"></i>
            ) : trend === "DOWN" ? (
              <i className="fa fa-arrow-down text-gray-500"></i>
            ) : (
              <i className="fa fa-arrow-right text-gray-400"></i>
            )}
            {Math.abs(deltaPercentage || 0).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default KpiComparisonCards;