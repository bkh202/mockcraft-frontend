import React from "react";
import { Link } from "react-router-dom";

const UserHistoryDashboard = () => {
  return (
    <div className="min-h-screen bg-white text-black">

      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black flex items-center gap-3">
            <i className="fa fa-history text-black"></i> Your Learning History
          </h1>
          <p className="text-lg text-gray-600 mt-1">
            Review your past attempts and performance metrics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">

          {/* FREE TIER */}
          <Link
            to="/history/free"
            className="block bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:bg-gray-200 transition-colors">
                <i className="fa fa-star text-xl text-black"></i>
              </div>
              <h2 className="text-xl font-bold text-black">Free Tier History</h2>
            </div>
            <div className="p-6">
              <p className="text-lg text-gray-700">
                Basic performance tracking for your practice tests.
              </p>
              <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                <i className="fa fa-arrow-right text-xs"></i> Click to view
              </p>
            </div>
          </Link>

          {/* PREMIUM TIER */}
          <Link
            to="/history/premium"
            className="block bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:bg-gray-200 transition-colors">
                <i className="fa fa-crown text-xl text-black"></i>
              </div>
              <h2 className="text-xl font-bold text-black">Premium Analytics</h2>
            </div>
            <div className="p-6">
              <p className="text-lg text-gray-700">
                Advanced analytics with trend graphs and deep insights.
              </p>
              <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                <i className="fa fa-arrow-right text-xs"></i> Click to view
              </p>
            </div>
          </Link>

        </div>

        {/* Optional extra info */}
        <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-200 pt-6">
          <i className="fa fa-info-circle mr-1"></i> Select a section to dive deeper into your performance.
        </div>
      </div>
    </div>
  );
};

export default UserHistoryDashboard;