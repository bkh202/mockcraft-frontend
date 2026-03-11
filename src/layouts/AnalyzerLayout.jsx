// AnalyzerLayout.jsx
import { Outlet, useNavigate } from "react-router-dom";
import AnalyzerNavbar from "../Componenets/nav/AnalyzerNavbar";

export default function AnalyzerLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 transition-colors">
      <AnalyzerNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* MAIN CONTENT */}
          <main className="lg:col-span-3">
            <Outlet />
          </main>

          {/* SIDEBAR */}
          <aside className="space-y-6 hidden lg:block">

            {/* Analyzer Tools */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                ⚡ Analyzer Tools
              </h3>
              <div className="space-y-2">

                <button onClick={() => navigate('/resume-analyzer')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-indigo-50 text-left transition-colors border border-transparent hover:border-indigo-100 group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-indigo-700">Scan New Resume</span>
                  </div>
                </button>

                <button onClick={() => navigate('/analyzer/history')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-indigo-50 text-left transition-colors border border-transparent hover:border-indigo-100 group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-indigo-700">Scan History</span>
                  </div>
                </button>

                <button onClick={() => navigate('/ai-mock-interview')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-purple-50 text-left transition-colors border border-transparent hover:border-purple-100 group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-700">AI Interview Prep</span>
                  </div>
                </button>

                <button onClick={() => navigate('/resume-to-portfolio-dashboard')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-indigo-50 text-left transition-colors border border-transparent hover:border-indigo-100 group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-indigo-700">Portfolio Builder</span>
                  </div>
                </button>

              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl">
                  💡
                </div>
                <h3 className="text-sm font-bold text-gray-900">Pro Tip</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Tailor your resume for each job — match keywords from the job description to improve your ATS score significantly.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-xs font-semibold text-indigo-600">
                  ✨ Upload your resume to get AI-powered feedback
                </p>
              </div>
            </div>

            {/* ATS Secret */}
            <div className="bg-linear-to-br from-slate-900 to-indigo-950 rounded-2xl p-6 border border-indigo-900/50 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl"></div>
              <h3 className="font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                <span className="text-indigo-400">💡</span> ATS Secret
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed relative z-10">
                Never hide links inside text. Standard ATS parsers extract plain text and will miss your GitHub or Portfolio URLs. Write them out fully!
              </p>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}