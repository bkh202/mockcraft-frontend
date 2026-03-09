import React, { useEffect, useState } from "react";
import { getPerformanceBadge } from "../../../../services/premiumAnalyticsApi";

const PerformanceBadgeCard = ({ range }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!range) return;

    getPerformanceBadge(range)
      .then(res => setData(res.data))
      .catch(() => setData(null));
  }, [range]);

  if (!data) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="animate-pulse space-y-3">
          <div className="h-6 w-40 bg-gray-200 rounded"></div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-10 bg-gray-200 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const badgeColor = {
    Excellent: "bg-green-100 text-green-700 border-green-200",
    Good: "bg-blue-100 text-blue-700 border-blue-200",
    Average: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Poor: "bg-red-100 text-red-700 border-red-200"
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>🏅</span> Performance Badge ({range})
      </h3>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div
          className={`px-6 py-3 rounded-full font-bold text-lg border-2 ${
            badgeColor[data.badge] || "bg-gray-100 text-gray-700 border-gray-200"
          }`}
        >
          {data.badge}
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Accuracy: <span className="font-semibold text-gray-900">{data.accuracy?.toFixed(1)}%</span>
          </p>
          <p className="text-sm text-gray-500 mt-1 max-w-xs">{data.message}</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceBadgeCard;