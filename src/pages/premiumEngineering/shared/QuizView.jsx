import { Link } from "react-router-dom";

export default function QuizView({
  quizData,
  currentQuestionIndex,
  selectedOption,
  isLoadingNextQuestion,
  userAnswers,
  elapsedTime = null,
  onOptionSelect,
  onNext,
  onSkip,
  onBack,
}) {
  const currentQuestion = quizData.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizData.totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top progress bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-1 bg-black transition-all duration-300"
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
          className="group mb-4 inline-flex items-center gap-2 text-base text-gray-600 hover:text-black transition-colors font-bold"
        >
          <i className="fa fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> Back to Subjects
        </button>

        {/* Quiz header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-2">{quizData.topic}</h1>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-bold border border-gray-200">
                  {quizData.subtopic}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold border ${
                  quizData.difficulty === "Easy"
                    ? "bg-gray-100 text-gray-700 border-gray-200"
                    : quizData.difficulty === "Medium"
                      ? "bg-gray-200 text-gray-800 border-gray-300"
                      : "bg-gray-300 text-black border-gray-400"
                }`}>
                  {quizData.difficulty}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-bold border border-gray-200">
                  Question {currentQuestionIndex + 1} of {quizData.totalQuestions}
                </span>
                {elapsedTime !== null && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-bold border border-gray-200 flex items-center gap-1">
                    <i className="fa fa-clock text-xs"></i>
                    {Math.floor(elapsedTime / 60)}:{(elapsedTime % 60).toString().padStart(2, "0")}
                  </span>
                )}
              </div>
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-xl shadow-sm border border-gray-300 self-start">
              <div className="text-sm font-bold"><i className="fa fa-robot mr-1"></i> AI-Powered</div>
              <div className="text-xs text-gray-300">Real‑time generated</div>
            </div>
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-6 relative min-h-100">
          {isLoadingNextQuestion ? (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl">
              <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-600 font-bold text-lg">Loading next question...</p>
            </div>
          ) : currentQuestion ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-extrabold shadow-sm border border-gray-300">
                    Q{currentQuestionIndex + 1}
                  </div>
                  <span className="text-sm text-gray-500">2 min suggested</span>
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {currentQuestionIndex + 1} / {quizData.totalQuestions}
                </div>
              </div>

              <div className="text-xl font-bold text-black mb-8 leading-relaxed">
                {currentQuestion.question}
              </div>

              <div className="space-y-3 mb-8">
                {currentQuestion.options?.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={() => !isLoadingNextQuestion && onOptionSelect(idx)}
                    className={`group p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedOption === idx
                        ? "border-black bg-gray-100 shadow-sm"
                        : "border-gray-200 hover:border-black hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold transition-colors ${
                        selectedOption === idx
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <div className="text-base text-gray-800">{option}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-10 text-gray-500 text-lg">No questions available.</div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <button
            onClick={onSkip}
            disabled={isLoadingNextQuestion}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-base ${
              isLoadingNextQuestion
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white border-2 border-gray-300 text-black hover:bg-gray-100 hover:border-black shadow-sm"
            }`}
          >
            <i className="fa fa-forward"></i> Skip
          </button>
          <button
            onClick={onNext}
            disabled={isLoadingNextQuestion}
            className={`w-full sm:w-auto px-8 py-3 rounded-xl font-bold transition-all text-base ${
              isLoadingNextQuestion
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800 shadow-sm border border-gray-300"
            }`}
          >
            {currentQuestionIndex === quizData.questions.length - 1 ? (
              <>Complete Quiz <i className="fa fa-arrow-right ml-2"></i></>
            ) : (
              <>Next Question <i className="fa fa-arrow-right ml-2"></i></>
            )}
          </button>
        </div>

        {/* AI Insight panel */}
        <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-sm border border-gray-300">
              <i className="fa fa-robot text-2xl text-white"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-extrabold text-black mb-2">AI‑Generated Insights</h3>
              <p className="text-base text-gray-600 mb-3">
                This quiz adapts to your performance. Each question is dynamically created to match your selected topic and difficulty.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="text-sm font-bold text-black">Progress</p>
                  <p className="text-sm text-gray-600">{currentQuestionIndex + 1}/{quizData.totalQuestions}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="text-sm font-bold text-black">Answered</p>
                  <p className="text-sm text-gray-600">{userAnswers.filter((a) => a !== null).length}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="text-sm font-bold text-black">Skipped</p>
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