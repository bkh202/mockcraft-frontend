import React, { useEffect, useState } from "react";
import {
  getKpiComparison,
  getPerformanceBadge,
  getWeakTopics,
  getStrongTopics
} from "../../../../services/premiumAnalyticsApi";

const InsightsPanel = ({ range }) => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!range) return;

    setLoading(true);
    Promise.all([
      getKpiComparison(range),
      getPerformanceBadge(range),
      getWeakTopics(range),
      getStrongTopics(range)
    ])
      .then(([kpiRes, badgeRes, weakRes, strongRes]) => {
        const kpi = kpiRes.data;
        const badge = badgeRes.data;
        const weak = weakRes.data || [];
        const strong = strongRes.data || [];

        const generated = [];

        const delta = kpi?.deltaAccuracy || 0;
        if (delta > 0) {
          generated.push({
            text: `Your accuracy improved by ${delta.toFixed(1)}% compared to the previous period.`,
            icon: "fa-arrow-up",
            color: "text-black",
          });
        } else if (delta < 0) {
          generated.push({
            text: `Your accuracy declined by ${Math.abs(delta).toFixed(1)}% compared to the previous period.`,
            icon: "fa-arrow-down",
            color: "text-gray-500",
          });
        } else {
          generated.push({
            text: "Your accuracy remained stable compared to last period.",
            icon: "fa-arrow-right",
            color: "text-gray-500",
          });
        }

        if (badge?.badge) {
          generated.push({
            text: `Current performance level: ${badge.badge}.`,
            icon: "fa-trophy",
            color: "text-black",
          });
        }

        if (strong.length > 0) {
          generated.push({
            text: `Your strongest topic is ${strong[0].topic} with ${strong[0].accuracy.toFixed(1)}% accuracy.`,
            icon: "fa-check-circle",
            color: "text-black",
          });
        }

        if (weak.length > 0) {
          generated.push({
            text: `You should improve ${weak[0].topic}. Current accuracy: ${weak[0].accuracy.toFixed(1)}%.`,
            icon: "fa-exclamation-triangle",
            color: "text-gray-600",
          });
        }

        setInsights(generated);
        setLoading(false);
      })
      .catch(() => {
        setInsights([]);
        setLoading(false);
      });
  }, [range]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2">
        <i className="fa fa-lightbulb text-black"></i> Performance Insights ({range})
      </h3>

      {loading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-start gap-3 animate-pulse">
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
              <div className="flex-1 h-5 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : insights.length === 0 ? (
        <p className="text-gray-500 text-center py-4 text-lg font-medium">No insights available</p>
      ) : (
        <ul className="space-y-4">
          {insights.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <i className={`fa ${item.icon} text-xl w-6 text-center ${item.color}`}></i>
              <span className={`flex-1 text-base ${item.color}`}>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InsightsPanel;