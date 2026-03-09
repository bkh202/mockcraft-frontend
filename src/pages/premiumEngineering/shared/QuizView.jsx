// shared/QuizView.jsx
// Shared quiz view — used by Engineering, Government, Technology pages

export default function QuizView({
  quizData,
  currentQuestionIndex,
  selectedOption,
  isLoadingNextQuestion,
  userAnswers,
  elapsedTime = null,   // optional — shown only when provided
  onOptionSelect,
  onNext,
  onSkip,
  onBack,
}) {
  const currentQuestion = quizData.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizData.totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Top progress bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-1 bg-linear-to-r from-blue-500 to-indigo-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Back button */}
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to leave? Your progress will be lost.")) {
              onBack();
            }
          }}
          className="group mb-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Subjects
        </button>

        {/* Quiz header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{quizData.topic}</h1>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {quizData.subtopic}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  quizData.difficulty === "Easy"   ? "bg-green-100 text-green-800"  :
                  quizData.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
                                                     "bg-red-100 text-red-800"
                }`}>
                  {quizData.difficulty}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Question {currentQuestionIndex + 1} of {quizData.totalQuestions}
                </span>
                {elapsedTime !== null && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {Math.floor(elapsedTime / 60)}:{(elapsedTime % 60).toString().padStart(2, "0")}
                  </span>
                )}
              </div>
            </div>
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl shadow-md self-start">
              <div className="text-sm font-medium">⚡ AI-Powered</div>
              <div className="text-xs opacity-90">Real‑time generated</div>
            </div>
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 mb-6 relative min-h-100">
          {isLoadingNextQuestion ? (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-600 font-medium">Loading next question...</p>
            </div>
          ) : currentQuestion ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                    Q{currentQuestionIndex + 1}
                  </div>
                  <span className="text-sm text-gray-500">2 min suggested</span>
                </div>
                <div className="text-sm text-gray-500">
                  {currentQuestionIndex + 1} / {quizData.totalQuestions}
                </div>
              </div>

              <div className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
                {currentQuestion.question}
              </div>

              <div className="space-y-3 mb-8">
                {currentQuestion.options?.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={() => !isLoadingNextQuestion && onOptionSelect(idx)}
                    className={`group p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedOption === idx
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold transition-colors ${
                        selectedOption === idx
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <div className="text-gray-800">{option}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-10 text-gray-500">No questions available.</div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <button
            onClick={onSkip}
            disabled={isLoadingNextQuestion}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
              isLoadingNextQuestion
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 shadow-sm"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Skip
          </button>
          <button
            onClick={onNext}
            disabled={isLoadingNextQuestion}
            className={`w-full sm:w-auto px-8 py-3 rounded-xl font-medium transition-all ${
              isLoadingNextQuestion
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl"
            }`}
          >
            {currentQuestionIndex === quizData.questions.length - 1
              ? "Complete Quiz →"
              : "Next Question →"}
          </button>
        </div>

        {/* AI Insight panel */}
        <div className="mt-8 bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
              <span className="text-2xl">🤖</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI‑Generated Insights</h3>
              <p className="text-gray-600 mb-3">
                This quiz adapts to your performance. Each question is dynamically created to match your selected topic and difficulty.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-900">Progress</p>
                  <p className="text-sm text-gray-600">{currentQuestionIndex + 1}/{quizData.totalQuestions}</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-900">Answered</p>
                  <p className="text-sm text-gray-600">{userAnswers.filter((a) => a !== null).length}</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-900">Skipped</p>
                  <p className="text-sm text-gray-600">{userAnswers.filter((a) => a === null).length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}