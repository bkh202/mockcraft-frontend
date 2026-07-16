import React from "react";
import StatsCards from "./components/StatsCards";
import UsersTable from "./components/UsersTable";
import AuditTable from "./components/AuditTable";
import AiUsageGraph from "./components/AiUsageGraph";
import AiGenerationLogTable from "./components/AiGenerationLogTable";
import AdminReviewsTable from "./components/AdminReviewsTable";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black">Admin Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">Welcome back, Administrator</p>
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h2 className="text-xl font-extrabold text-black mb-4">Users</h2>
          <UsersTable />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h2 className="text-xl font-extrabold text-black mb-4">Recent Activity</h2>
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