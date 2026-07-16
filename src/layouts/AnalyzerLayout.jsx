import { Outlet, useNavigate } from "react-router-dom";
import AnalyzerNavbar from "../Componenets/nav/AnalyzerNavbar";

export default function AnalyzerLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black transition-colors">
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
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2">
                <i className="fa fa-bolt text-black"></i> Analyzer Tools
              </h3>
              <div className="space-y-2">

                <button
                  onClick={() => navigate('/resume-analyzer')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-gray-100 text-left transition-colors border border-transparent hover:border-gray-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 text-black flex items-center justify-center group-hover:bg-gray-200 group-hover:text-black transition-colors border border-gray-200">
                      <i className="fa fa-upload text-base"></i>
                    </div>
                    <span className="text-base font-semibold text-gray-700 group-hover:text-black">Scan New Resume</span>
                  </div>
                </button>

                <button
                  onClick={() => navigate('/analyzer/history')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-gray-100 text-left transition-colors border border-transparent hover:border-gray-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 text-black flex items-center justify-center group-hover:bg-gray-200 group-hover:text-black transition-colors border border-gray-200">
                      <i className="fa fa-clock text-base"></i>
                    </div>
                    <span className="text-base font-semibold text-gray-700 group-hover:text-black">Scan History</span>
                  </div>
                </button>

                <button
                  onClick={() => navigate('/ai-mock-interview')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-gray-100 text-left transition-colors border border-transparent hover:border-gray-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 text-black flex items-center justify-center group-hover:bg-gray-200 group-hover:text-black transition-colors border border-gray-200">
                      <i className="fa fa-microphone text-base"></i>
                    </div>
                    <span className="text-base font-semibold text-gray-700 group-hover:text-black">AI Interview Prep</span>
                  </div>
                </button>

                <button
                  onClick={() => navigate('/resume-to-portfolio-dashboard')}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-gray-100 text-left transition-colors border border-transparent hover:border-gray-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 text-black flex items-center justify-center group-hover:bg-gray-200 group-hover:text-black transition-colors border border-gray-200">
                      <i className="fa fa-briefcase text-base"></i>
                    </div>
                    <span className="text-base font-semibold text-gray-700 group-hover:text-black">Portfolio Builder</span>
                  </div>
                </button>

              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-100 text-black rounded-xl flex items-center justify-center border border-gray-200">
                  <i className="fa fa-lightbulb text-xl"></i>
                </div>
                <h3 className="text-lg font-extrabold text-black">Pro Tip</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                Tailor your resume for each job — match keywords from the job description to improve your ATS score significantly.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-base font-semibold text-black">
                  <i className="fa fa-arrow-right mr-2"></i> Upload your resume to get AI-powered feedback
                </p>
              </div>
            </div>

            {/* ATS Secret */}
            <div className="bg-black rounded-2xl p-6 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gray-800 rounded-full blur-2xl opacity-50"></div>
              <h3 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2 relative z-10">
                <i className="fa fa-secret text-gray-400"></i> ATS Secret
              </h3>
              <p className="text-base text-gray-300 leading-relaxed relative z-10">
                Never hide links inside text. Standard ATS parsers extract plain text and will miss your GitHub or Portfolio URLs. Write them out fully!
              </p>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}