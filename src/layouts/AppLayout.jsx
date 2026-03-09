// AppLayout.jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import AppNavbar from "../Componenets/nav/AppNavbar";
import TrialBanner from "../trail/components/TrialBanner";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
      <TrialBanner /> 
      <AppNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Progress Bar */}
        <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Daily Learning Goal
              </h3>
              <p className="text-xs text-gray-500">
                Complete 5 topics today
              </p>
            </div>
            <span className="text-sm font-semibold text-blue-600">
              60%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-linear-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
              style={{ width: "60%" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* MAIN CONTENT — THIS IS THE KEY */}
          <main className="lg:col-span-3 space-y-6">
           

            <Outlet />
          </main>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">
                Today's Stats
              </h3>

              <div className="space-y-4">
                <Stat label="Time Spent" value="45 min" icon="⏱️" color="blue" />
                <Stat label="Questions Solved" value="28" icon="✅" color="green" />
                <Stat label="Accuracy" value="84%" icon="📈" color="purple" />
              </div>
            </div>

            {/* Upcoming Tests */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">
                Upcoming Tests
              </h3>

              {[
                { title: "Aptitude Mock", time: "Tomorrow, 10 AM" },
                { title: "English Quiz", time: "In 2 days" },
                { title: "Reasoning Test", time: "This Weekend" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50"
                >
                  <div>
                    <p className="text-sm font-medium">{t.title}</p>
                    <p className="text-xs text-gray-500">{t.time}</p>
                  </div>
                  <button className="text-xs text-blue-600">
                    Set Reminder
                  </button>
                </div>
              ))}
            </div>

            {/* Study Tip */}
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">
                💡 Study Tip
              </h3>
              <p className="text-sm text-blue-800">
                Take 5-minute breaks every 25 minutes of study.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, icon, color }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-lg bg-${color}-100 flex items-center justify-center`}>
        <span>{icon}</span>
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
