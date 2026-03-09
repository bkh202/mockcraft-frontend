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
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
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
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>📊</span> KPI Comparison ({range})
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <p className="text-sm text-indigo-600 font-medium">Current Accuracy</p>
          <p className="text-3xl font-bold text-indigo-700">{currentValue?.toFixed(1)}%</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">Previous Period</p>
          <p className="text-3xl font-bold text-gray-700">{previousValue?.toFixed(1)}%</p>
        </div>

        <div className={`p-4 rounded-lg ${improved ? "bg-green-50" : "bg-red-50"}`}>
          <p className={`text-sm font-medium ${improved ? "text-green-600" : "text-red-600"}`}>
            Change
          </p>
          <p className={`text-3xl font-bold ${improved ? "text-green-700" : "text-red-700"}`}>
            {trend === "UP" ? "↑" : trend === "DOWN" ? "↓" : "→"}{" "}
            {Math.abs(deltaPercentage || 0).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default KpiComparisonCards;