import React, { useEffect, useState } from "react";
import { getWeakTopics, getStrongTopics } from "../../../../services/premiumAnalyticsApi";

const WeakStrongSection = ({ range }) => {
  const [weak, setWeak] = useState([]);
  const [strong, setStrong] = useState([]);

  useEffect(() => {
    if (!range) return;

    Promise.all([getWeakTopics(range), getStrongTopics(range)])
      .then(([w, s]) => {
        setWeak(w.data || []);
        setStrong(s.data || []);
      });
  }, [range]);

  const TopicItem = ({ topic, accuracy, color }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-2">
      <span className="font-medium">{topic}</span>
      <div className="flex items-center gap-2">
        <span className={`text-sm font-semibold ${color}`}>{accuracy.toFixed(1)}%</span>
        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${color === "text-red-500" ? "bg-red-500" : "bg-green-500"}`}
            style={{ width: `${accuracy}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🔻</span>
          <h3 className="font-semibold text-red-500">Weakest Topics</h3>
        </div>
        {weak.length === 0 ? (
          <p className="text-gray-400">No weak topics found</p>
        ) : (
          weak.map(t => (
            <TopicItem key={t.id} topic={t.topic} accuracy={t.accuracy} color="text-red-500" />
          ))
        )}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🔺</span>
          <h3 className="font-semibold text-green-500">Strongest Topics</h3>
        </div>
        {strong.length === 0 ? (
          <p className="text-gray-400">No strong topics found</p>
        ) : (
          strong.map(t => (
            <TopicItem key={t.id} topic={t.topic} accuracy={t.accuracy} color="text-green-500" />
          ))
        )}
      </div>
    </div>
  );
};

export default WeakStrongSection;