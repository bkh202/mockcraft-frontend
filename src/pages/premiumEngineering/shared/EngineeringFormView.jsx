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
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">

        {/* Back button */}
        <button
          onClick={onBack}
          className="group mb-6 inline-flex items-center gap-2 text-base text-gray-600 hover:text-black transition-colors font-bold"
        >
          <i className="fa fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> Back to Subjects
        </button>

        {/* Header */}
        <div className="bg-black rounded-2xl shadow-sm border border-gray-800 p-8 text-white mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Configure AI Quiz for {selectedSubject}
          </h1>
          <p className="text-gray-300 text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              {isGeneratingQuiz ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-black border-t-transparent mb-6" />
                  <h3 className="text-2xl font-extrabold text-black mb-2">AI is Generating Your Quiz</h3>
                  <p className="text-gray-600 text-lg">Creating personalized questions based on your configuration...</p>
                </div>
              ) : (
                <>
                  {/* Topic selector */}
                  {selectedSubjectObj?.topics?.length > 0 && (
                    <div className="mb-8">
                      <label className="block text-lg font-bold text-black mb-4">
                        Select Specific Topic (Optional)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div
                          onClick={() => onSubtopicChange("")}
                          className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedSubtopic === ""
                              ? "border-black bg-gray-100 shadow-sm"
                              : "border-gray-200 hover:border-black hover:bg-gray-50"
                          }`}
                        >
                          <div className="font-bold text-black">All Topics</div>
                          <div className="text-sm text-gray-600 mt-1">Comprehensive practice</div>
                        </div>
                        {selectedSubjectObj.topics.map((topic) => (
                          <div
                            key={topic}
                            onClick={() => onSubtopicChange(topic)}
                            className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                              selectedSubtopic === topic
                                ? "border-black bg-gray-100 shadow-sm"
                                : "border-gray-200 hover:border-black hover:bg-gray-50"
                            }`}
                          >
                            <div className="font-bold text-black">{topic}</div>
                            <div className="text-sm text-gray-600 mt-1">Focused practice</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Company selector */}
                  {companies.length > 0 && (
                    <div className="mb-8">
                      <label className="block text-lg font-bold text-black mb-4">
                        Select Company Focus
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {companies.map((company) => (
                          <div
                            key={company}
                            onClick={() => onCompanyChange(company)}
                            className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                              selectedCompany === company
                                ? "border-black bg-gray-100 shadow-sm"
                                : "border-gray-200 hover:border-black hover:bg-gray-50"
                            }`}
                          >
                            <div className="font-bold text-black">{company}</div>
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
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2">
                <i className={`fa ${formIcon} text-2xl text-black`}></i> How It Works
              </h3>
              <ul className="space-y-4">
                {[
                  { step: 1, title: "Configure Preferences", desc: "Set subject, difficulty, and question count" },
                  { step: 2, title: "Take the Quiz", desc: "Answer AI‑generated questions" },
                  { step: 3, title: "View Results", desc: "Get detailed analysis with AI explanations" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-bold text-black">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-black">{item.title}</p>
                      <p className="text-base text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-extrabold text-black mb-3 flex items-center gap-2">
                <i className="fa fa-bullseye text-black"></i> Recommended Settings
              </h3>
              <div className="space-y-3">
                {[
                  { level: "Beginners",     q: "5-10",  diff: "Easy"   },
                  { level: "Intermediate",  q: "10-15", diff: "Medium" },
                  { level: "Advanced",      q: "15-20", diff: "Hard"   },
                ].map((rec) => (
                  <div key={rec.level} className="flex items-center justify-between">
                    <span className="text-base font-medium text-gray-700">{rec.level}</span>
                    <span className="text-sm font-bold text-black bg-white px-3 py-1 rounded-full border border-gray-300">
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