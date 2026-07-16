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

  const TopicItem = ({ topic, accuracy, type }) => {
    // Differentiate weak vs strong with grayscale
    const isWeak = type === "weak";
    const textColor = isWeak ? "text-gray-600" : "text-black";
    const barColor = isWeak ? "bg-gray-400" : "bg-black";

    return (
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-2 border border-gray-200">
        <span className="font-bold text-black">{topic}</span>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-bold ${textColor}`}>
            {accuracy.toFixed(1)}%
          </span>
          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${barColor}`}
              style={{ width: `${accuracy}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Weakest Topics */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-4">
          <i className="fa fa-arrow-down text-lg text-gray-500"></i>
          <h3 className="text-lg font-extrabold text-gray-700">Weakest Topics</h3>
        </div>
        {weak.length === 0 ? (
          <p className="text-gray-500 font-medium">No weak topics found</p>
        ) : (
          weak.map(t => (
            <TopicItem key={t.id} topic={t.topic} accuracy={t.accuracy} type="weak" />
          ))
        )}
      </div>

      {/* Strongest Topics */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-4">
          <i className="fa fa-arrow-up text-lg text-black"></i>
          <h3 className="text-lg font-extrabold text-black">Strongest Topics</h3>
        </div>
        {strong.length === 0 ? (
          <p className="text-gray-500 font-medium">No strong topics found</p>
        ) : (
          strong.map(t => (
            <TopicItem key={t.id} topic={t.topic} accuracy={t.accuracy} type="strong" />
          ))
        )}
      </div>
    </div>
  );
};

export default WeakStrongSection;