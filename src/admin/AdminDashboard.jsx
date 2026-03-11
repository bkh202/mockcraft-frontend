import React from "react";
import StatsCards from "./components/StatsCards";
import UsersTable from "./components/UsersTable";
import AuditTable from "./components/AuditTable";
import AiUsageGraph from "./components/AiUsageGraph";
import AiGenerationLogTable from "./components/AiGenerationLogTable";
import AdminReviewsTable from "./components/AdminReviewsTable"; 

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, Administrator</p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8">
        <StatsCards />
      </div>

      {/* AI Usage Graph */}
      <div className="mb-8">
        <AiUsageGraph />
      </div>

      {/* Users + Audit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Users</h2>
          <UsersTable />
        </div>
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <AuditTable />
        </div>
      </div>

      {/* AI Generation Logs */}
      <AiGenerationLogTable />

      <div className="mt-8">
        <AdminReviewsTable />
      </div>

    </div>
  );
};

export default AdminDashboard;