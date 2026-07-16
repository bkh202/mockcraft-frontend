import { Outlet, useNavigate } from "react-router-dom";
import PortfolioNavbar from "../Componenets/nav/PortfolioNavbar";

export default function PortfolioLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black">
      <PortfolioNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* MAIN CONTENT AREA */}
          <main className="lg:col-span-3">
            <Outlet />
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6 hidden lg:block">

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2">
                <i className="fa fa-bolt text-black"></i> Quick Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/ai-mock-interview')}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 text-left transition-colors border border-transparent hover:border-gray-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 text-black flex items-center justify-center group-hover:bg-gray-200 group-hover:text-black transition-colors border border-gray-200">
                      <i className="fa fa-microphone text-base"></i>
                    </div>
                    <span className="text-base font-semibold text-gray-700 group-hover:text-black">AI Interview</span>
                  </div>
                </button>

                <button
                  onClick={() => navigate('/resume-analyzer')}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 text-left transition-colors border border-transparent hover:border-gray-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 text-black flex items-center justify-center group-hover:bg-gray-200 group-hover:text-black transition-colors border border-gray-200">
                      <i className="fa fa-file-alt text-base"></i>
                    </div>
                    <span className="text-base font-semibold text-gray-700 group-hover:text-black">Resume Analyzer</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Portfolio Tip */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-100 text-black rounded-xl flex items-center justify-center border border-gray-200">
                  <i className="fa fa-rocket text-xl"></i>
                </div>
                <h3 className="text-lg font-extrabold text-black">Portfolio Tip</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                A strong portfolio increases your chances of getting shortlisted by <span className="font-bold text-black">3x</span>. Add your best projects with live links and GitHub repos.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-base font-semibold text-black">
                  <i className="fa fa-arrow-right mr-2"></i> Build your portfolio from resume in 1 click
                </p>
              </div>
            </div>

            {/* AI Pro Tip */}
            <div className="bg-black rounded-2xl p-6 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gray-800 rounded-full blur-2xl opacity-50"></div>
              <h3 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2 relative z-10">
                <i className="fa fa-lightbulb text-gray-400"></i> AI Pro Tip
              </h3>
              <p className="text-base text-gray-300 leading-relaxed relative z-10">
                Keep your resume concise. Our AI parses bullet points better if they start with strong action verbs like "Developed" or "Designed".
              </p>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}