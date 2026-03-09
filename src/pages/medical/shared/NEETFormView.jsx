import { Link } from "react-router-dom";
import QuizConfigForm from "../../../Componenets/forms/QuizConfigForm";

export default function NEETFormView({
  config,
  selectedSubject,
  selectedSubtopic,
  isGeneratingQuiz,
  onSubtopicChange,
  onStart,
  onBack,
}) {
  const { subjects, formIcon, formDescription, category, branch } = config;
  const selectedSubjectObj = subjects.find((s) => s.name === selectedSubject);

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <button onClick={onBack} className="hover:text-blue-600 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Topics
        </button>
        <span>→</span>
        <span className="font-medium text-gray-900">Configure AI Quiz</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Configure AI Quiz for {selectedSubject}
          </h1>
          <p className="text-blue-100">{formDescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              {isGeneratingQuiz ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI is Generating Your Quiz
                  </h3>
                  <p className="text-gray-600">
                    Creating personalized questions based on your configuration...
                  </p>
                </div>
              ) : (
                <>
                  {selectedSubjectObj && (selectedSubjectObj.topics || selectedSubjectObj.subtopics).length > 0 && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Specific Topic (Optional)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div
                          onClick={() => onSubtopicChange("")}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedSubtopic === ""
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="font-medium text-gray-900">All Topics</div>
                          <div className="text-sm text-gray-600 mt-1">Comprehensive practice</div>
                        </div>
                        {(selectedSubjectObj.topics || selectedSubjectObj.subtopics).map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => onSubtopicChange(item)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              selectedSubtopic === item
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="font-medium text-gray-900">{item}</div>
                            <div className="text-sm text-gray-600 mt-1">Focused practice</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <QuizConfigForm
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
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600 text-xl">{formIcon}</span> How It Works
              </h3>
              <ul className="space-y-3">
                {[
                  { step: 1, title: "Configure Preferences", desc: "Set topic, difficulty, and question count" },
                  { step: 2, title: "Take the Quiz", desc: "Answer NEET pattern questions (+4/-1)" },
                  { step: 3, title: "View Results", desc: "Get detailed analysis with rank prediction" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
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

            <div className="bg-linear-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                <span>🎯</span> Recommended Settings
              </h3>
              <div className="space-y-3">
                {[
                  { level: "Beginners", q: "5-10", diff: "Easy" },
                  { level: "Intermediate", q: "10-15", diff: "Medium" },
                  { level: "Advanced", q: "15-20", diff: "Hard" },
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

            {selectedSubjectObj && selectedSubjectObj.chapters && (
              <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">📚 NCERT Chapters</h3>
                <p className="text-sm text-blue-800 mb-2">{selectedSubjectObj.chapters}</p>
                <p className="text-xs text-blue-700">Weightage: {selectedSubjectObj.weightage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}