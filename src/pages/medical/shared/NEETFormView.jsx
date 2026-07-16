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
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      {/* Back button */}
      <div className="flex items-center gap-2 text-base text-gray-600 mb-6">
        <button onClick={onBack} className="hover:text-black transition-colors flex items-center gap-1 font-bold">
          <i className="fa fa-arrow-left text-sm"></i> Back to Topics
        </button>
        <span className="text-gray-400">/</span>
        <span className="font-bold text-black">Configure AI Quiz</span>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header – black background */}
        <div className="bg-black rounded-2xl shadow-sm border border-gray-800 p-6 text-white mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
            Configure AI Quiz for {selectedSubject}
          </h1>
          <p className="text-gray-300 text-lg">{formDescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              {isGeneratingQuiz ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-black border-t-transparent mb-4" />
                  <h3 className="text-2xl font-extrabold text-black mb-2">
                    AI is Generating Your Quiz
                  </h3>
                  <p className="text-lg text-gray-600">
                    Creating personalized questions based on your configuration...
                  </p>
                </div>
              ) : (
                <>
                  {selectedSubjectObj && (selectedSubjectObj.topics || selectedSubjectObj.subtopics).length > 0 && (
                    <div className="mb-6">
                      <label className="block text-lg font-bold text-black mb-3">
                        Select Specific Topic (Optional)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div
                          onClick={() => onSubtopicChange("")}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedSubtopic === ""
                              ? "border-black bg-gray-100 shadow-sm"
                              : "border-gray-200 hover:border-black hover:bg-gray-50"
                          }`}
                        >
                          <div className="font-bold text-black">All Topics</div>
                          <div className="text-sm text-gray-600 mt-1">Comprehensive practice</div>
                        </div>
                        {(selectedSubjectObj.topics || selectedSubjectObj.subtopics).map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => onSubtopicChange(item)}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              selectedSubtopic === item
                                ? "border-black bg-gray-100 shadow-sm"
                                : "border-gray-200 hover:border-black hover:bg-gray-50"
                            }`}
                          >
                            <div className="font-bold text-black">{item}</div>
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
            {/* How It Works */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2">
                <i className={`fa ${formIcon} text-2xl text-black`}></i> How It Works
              </h3>
              <ul className="space-y-3">
                {[
                  { step: 1, title: "Configure Preferences", desc: "Set topic, difficulty, and question count" },
                  { step: 2, title: "Take the Quiz", desc: "Answer NEET pattern questions (+4/-1)" },
                  { step: 3, title: "View Results", desc: "Get detailed analysis with rank prediction" },
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

            {/* Recommended Settings */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-xl font-extrabold text-black mb-3 flex items-center gap-2">
                <i className="fa fa-bullseye text-black"></i> Recommended Settings
              </h3>
              <div className="space-y-3">
                {[
                  { level: "Beginners", q: "5-10", diff: "Easy" },
                  { level: "Intermediate", q: "10-15", diff: "Medium" },
                  { level: "Advanced", q: "15-20", diff: "Hard" },
                ].map((rec) => (
                  <div key={rec.level} className="flex items-center justify-between">
                    <span className="text-base font-medium text-gray-700">{rec.level}</span>
                    <span className="text-sm font-bold text-black bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                      {rec.q} Questions • {rec.diff}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* NCERT Chapters */}
            {selectedSubjectObj && selectedSubjectObj.chapters && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-extrabold text-black mb-3 flex items-center gap-2">
                  <i className="fa fa-book text-black"></i> NCERT Chapters
                </h3>
                <p className="text-base text-gray-700 mb-2">{selectedSubjectObj.chapters}</p>
                <p className="text-sm font-medium text-gray-600">Weightage: {selectedSubjectObj.weightage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}