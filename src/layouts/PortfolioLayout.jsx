import { Outlet, useNavigate } from "react-router-dom";
import PortfolioNavbar from "../Componenets/nav/PortfolioNavbar"; // Jo upar banaya hai

export default function PortfolioLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50/50">
      <PortfolioNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* MAIN CONTENT AREA */}
          <main className="lg:col-span-3">
            {/* Yahan par tera Dashboard, Edit Page, ya Create Page render hoga */}
            <Outlet />
          </main>

          {/* RIGHT SIDEBAR (Tools & Info) */}
          <aside className="space-y-6 hidden lg:block">

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                ⚡ Quick Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/ai-mock-interview')}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-indigo-50 text-left transition-colors border border-transparent hover:border-indigo-100 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      +
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-indigo-700">AI Interview</span>
                  </div>
                </button>

                <button
                  onClick={() => navigate('/resume-analyzer')}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-left transition-colors border border-transparent hover:border-emerald-100 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      📄
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-emerald-700">Resume Analyzer</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Storage / Limits Widget */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl">
                  🚀
                </div>
                <h3 className="text-sm font-bold text-gray-900">Portfolio Tip</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                A strong portfolio increases your chances of getting shortlisted by <span className="font-bold text-indigo-600">3x</span>. Add your best projects with live links and GitHub repos.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-xs font-semibold text-indigo-600">
                  ✨ Build your portfolio from resume in 1 click
                </p>
              </div>
            </div>

            {/* AI Pro Tip */}
            <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>
              <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2 relative z-10">
                <span>💡</span> AI Pro Tip
              </h3>
              <p className="text-sm text-indigo-800/80 leading-relaxed relative z-10">
                Keep your resume concise. Our AI parses bullet points better if they start with strong action verbs like "Developed" or "Designed".
              </p>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}