import { Outlet, useNavigate } from "react-router-dom";
 // Tera existing navbar
import AnalyzerNavbar from "../Componenets/nav/AnalyzerNavbar";

export default function AnalyzerLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-[#0b0f19] transition-colors">
      <AnalyzerNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* MAIN CONTENT AREA (Yahan tera ResumeAnalyzerPage render hoga) */}
          <main className="lg:col-span-3">
            <Outlet />
          </main>

          {/* RIGHT SIDEBAR (ATS Tools & Info) */}
          <aside className="space-y-6 hidden lg:block">
            
            {/* Quick Actions */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-slate-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                ⚡ Analyzer Tools
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={() => navigate('/resume-analyzer')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 text-left transition-colors border border-transparent hover:border-teal-100 dark:hover:border-teal-800 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-slate-300 group-hover:text-teal-700 dark:group-hover:text-teal-400">Scan New Resume</span>
                  </div>
                </button>

                <button 
                  onClick={() => navigate('/analyzer/history')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-left transition-colors border border-transparent hover:border-indigo-100 dark:hover:border-indigo-800 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-slate-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-400">Scan History</span>
                  </div>
                </button>

                {/* AI Interview Teaser (Next Module) */}
                <button 
                  onClick={() => navigate('/ai-mock-interview')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-900/20 text-left transition-colors border border-transparent hover:border-rose-100 dark:hover:border-rose-800 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-slate-300 group-hover:text-rose-700 dark:group-hover:text-rose-400">AI Interview Prep</span>
                  </div>
                </button>
                 <button 
                  onClick={() => navigate('/resume-to-portfolio-dashboard')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-900/20 text-left transition-colors border border-transparent hover:border-rose-100 dark:hover:border-rose-800 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-slate-300 group-hover:text-rose-700 dark:group-hover:text-rose-400">Portfolio Builder</span>
                  </div>
                </button>
              </div>
            </div>

            {/* AI Scan Limits Widget */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">AI Deep Scans</h3>
                <span className="text-xs font-bold text-teal-600 bg-teal-50 dark:bg-teal-900/30 dark:text-teal-400 px-2 py-1 rounded-md">FREE PLAN</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-400 mb-4">You have used 1 out of 5 free resume scans today.</p>
              
              <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2 mb-2 overflow-hidden">
                <div className="bg-linear-to-r from-teal-400 to-emerald-500 h-2 rounded-full w-1/5"></div>
              </div>
              <button className="w-full mt-4 text-xs font-bold text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Upgrade to Pro for Unlimited Scans ↗
              </button>
            </div>

            {/* ATS Pro Tip */}
            <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-slate-700 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl"></div>
              <h3 className="font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                <span className="text-teal-400">💡</span> ATS Secret
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed relative z-10">
                Never hide links inside text (e.g., clicking on your name). Standard ATS parsers extract plain text and will permanently miss your GitHub or Portfolio URLs. Write them out fully!
              </p>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}