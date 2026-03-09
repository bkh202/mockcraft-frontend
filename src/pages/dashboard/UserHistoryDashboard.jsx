import React from "react";
import { Link } from "react-router-dom";

const UserHistoryDashboard = () => {

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Learning History
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid gap-6 md:grid-cols-2">

          {/* FREE */}
          <Link
            to="/history/free"
            className="block bg-white rounded-xl shadow-sm border hover:shadow-md transition"
          >
            <div className="bg-blue-50 px-4 py-3 border-b">
              <h2 className="text-lg font-semibold text-blue-900">
                Free Tier History
              </h2>
            </div>
            <div className="p-4 text-gray-600">
              Basic performance tracking.
            </div>
          </Link>

          {/* PREMIUM */}
          <Link
            to="/history/premium"
            className="block bg-white rounded-xl shadow-sm border hover:shadow-md transition"
          >
            <div className="bg-purple-50 px-4 py-3 border-b">
              <h2 className="text-lg font-semibold text-purple-900">
                Premium Analytics
              </h2>
            </div>
            <div className="p-4 text-gray-600">
              Advanced analytics and trend graphs.
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default UserHistoryDashboard;
