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
                  onClick={() => navigate('/portfolio/create')}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-indigo-50 text-left transition-colors border border-transparent hover:border-indigo-100 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      +
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-indigo-700">New Portfolio</span>
                  </div>
                </button>

                <button 
                  onClick={() => navigate('/portfolio/resumes')}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-left transition-colors border border-transparent hover:border-emerald-100 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      📄
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-emerald-700">Upload Resume</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Storage / Limits Widget */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-900">Workspace Usage</h3>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">FREE PLAN</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">You have used 2 out of 5 free portfolios.</p>
              
              <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                <div className="bg-linear-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-2/5"></div>
              </div>
              <button className="w-full mt-4 text-xs font-bold text-gray-500 hover:text-indigo-600 transition-colors">
                Upgrade to Pro ↗
              </button>
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