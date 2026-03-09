// shared/EngineeringFormView.jsx
import { Link } from "react-router-dom";
import PremiumQuizConfig from "../../../Componenets/forms/PremiumQuizConfig";

export default function EngineeringFormView({
  config,
  selectedSubject,
  selectedSubtopic,
  selectedCompany,
  isGeneratingQuiz,
  onSubtopicChange,
  onCompanyChange,
  onStart,
  onBack,
}) {
  const { subjects, companies = [], formIcon, description, category, branch } = config;
  const selectedSubjectObj = subjects.find((s) => s.name === selectedSubject);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">

        {/* Back button */}
        <button
          onClick={onBack}
          className="group mb-6 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Subjects
        </button>

        {/* Header */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Configure AI Quiz for {selectedSubject}
          </h1>
          <p className="text-blue-100 text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
              {isGeneratingQuiz ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-blue-600 border-t-transparent mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">AI is Generating Your Quiz</h3>
                  <p className="text-gray-600">Creating personalized questions based on your configuration...</p>
                </div>
              ) : (
                <>
                  {/* Topic selector */}
                  {selectedSubjectObj?.topics?.length > 0 && (
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Select Specific Topic (Optional)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div
                          onClick={() => onSubtopicChange("")}
                          className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedSubtopic === ""
                              ? "border-blue-500 bg-blue-50 shadow-md"
                              : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                          }`}
                        >
                          <div className="font-medium text-gray-900">All Topics</div>
                          <div className="text-sm text-gray-600 mt-1">Comprehensive practice</div>
                        </div>
                        {selectedSubjectObj.topics.map((topic) => (
                          <div
                            key={topic}
                            onClick={() => onSubtopicChange(topic)}
                            className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                              selectedSubtopic === topic
                                ? "border-blue-500 bg-blue-50 shadow-md"
                                : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                            }`}
                          >
                            <div className="font-medium text-gray-900">{topic}</div>
                            <div className="text-sm text-gray-600 mt-1">Focused practice</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Company selector */}
                  {companies.length > 0 && (
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Select Company Focus
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {companies.map((company) => (
                          <div
                            key={company}
                            onClick={() => onCompanyChange(company)}
                            className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                              selectedCompany === company
                                ? "border-blue-500 bg-blue-50 shadow-md"
                                : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                            }`}
                          >
                            <div className="font-medium text-gray-900">{company}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <PremiumQuizConfig
                    context={{
                      category: category.toLowerCase(),
                      branch: branch.toLowerCase(),
                      subject: selectedSubject,
                      subtopic: selectedSubtopic,
                    }}
                    onStart={onStart}
                  />
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600 text-xl">{formIcon}</span> How It Works
              </h3>
              <ul className="space-y-4">
                {[
                  { step: 1, title: "Configure Preferences", desc: "Set subject, difficulty, and question count" },
                  { step: 2, title: "Take the Quiz", desc: "Answer AI‑generated questions" },
                  { step: 3, title: "View Results", desc: "Get detailed analysis with AI explanations" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-linear-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                <span>🎯</span> Recommended Settings
              </h3>
              <div className="space-y-3">
                {[
                  { level: "Beginners",     q: "5-10",  diff: "Easy"   },
                  { level: "Intermediate",  q: "10-15", diff: "Medium" },
                  { level: "Advanced",      q: "15-20", diff: "Hard"   },
                ].map((rec) => (
                  <div key={rec.level} className="flex items-center justify-between">
                    <span className="text-sm text-emerald-800">{rec.level}</span>
                    <span className="text-sm font-medium text-emerald-900 bg-white/60 px-3 py-1 rounded-full">
                      {rec.q} Questions • {rec.diff}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}