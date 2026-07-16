import BackButton from "./BackButtom";

export default function QuizView({
  quizData,
  currentQuestionIndex,
  selectedOption,
  isLoadingNextQuestion,
  userAnswers,
  onOptionSelect,
  onNext,
  onSkip,
  onBack
}) {
  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1;

  const handleBack = () => {
    if (window.confirm("Are you sure you want to leave? Your progress will be lost.")) {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      <BackButton label="Back to Topics" onClick={handleBack} suffix="AI General Awareness Quiz" />

      <div className="max-w-4xl mx-auto">
        <QuizHeader quizData={quizData} currentQuestionIndex={currentQuestionIndex} />

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6 relative min-h-100">
          {isLoadingNextQuestion ? (
            <LoadingOverlay />
          ) : currentQuestion ? (
            <QuestionCard
              question={currentQuestion}
              questionIndex={currentQuestionIndex}
              quizData={quizData}
              selectedOption={selectedOption}
              isLoadingNextQuestion={isLoadingNextQuestion}
              onOptionSelect={onOptionSelect}
            />
          ) : (
            <div className="text-center py-10 text-gray-500 text-lg">No questions available.</div>
          )}
        </div>

        <QuizNavButtons
          isLastQuestion={isLastQuestion}
          isLoadingNextQuestion={isLoadingNextQuestion}
          onSkip={onSkip}
          onNext={onNext}
        />

        <QuizProgressCard
          quizData={quizData}
          currentQuestionIndex={currentQuestionIndex}
          userAnswers={userAnswers}
        />
      </div>
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────
function QuizHeader({ quizData, currentQuestionIndex }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-2">
            {quizData.topic} Practice
          </h1>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full border border-gray-200">{quizData.subtopic}</span>
            <span className={`px-3 py-1 rounded-full border ${
              quizData.difficulty === "Easy"   ? "bg-gray-100 text-gray-700 border-gray-200" :
              quizData.difficulty === "Medium" ? "bg-gray-200 text-gray-800 border-gray-300" :
              "bg-gray-300 text-black border-gray-400"
            }`}>
              {quizData.difficulty}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full border border-gray-200">
              Question {currentQuestionIndex + 1} of {quizData.totalQuestions}
            </span>
          </div>
        </div>
        <div className="text-lg font-bold text-black bg-gray-100 px-4 py-2 rounded-xl border border-gray-200">
          <i className="fa fa-robot mr-2"></i> AI-Powered
        </div>
      </div>
    </div>
  );
}

// ─── Loading Overlay ─────────────────────────────────────────────────
function LoadingOverlay() {
  return (
    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl">
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-gray-600 text-lg">Loading next question...</p>
    </div>
  );
}

// ─── Question Card ──────────────────────────────────────────────────
function QuestionCard({ question, questionIndex, quizData, selectedOption, isLoadingNextQuestion, onOptionSelect }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gray-100 text-black border border-gray-200 flex items-center justify-center font-bold">
            Q{questionIndex + 1}
          </div>
          <span className="text-sm text-gray-500">{quizData.timePerQuestion} suggested</span>
        </div>
        <div className="text-sm text-gray-500">{questionIndex + 1} / {quizData.totalQuestions}</div>
      </div>

      <div className="text-xl font-bold text-black mb-8 leading-relaxed">{question.question}</div>

      <div className="space-y-3 mb-8">
        {question.options?.map((option, idx) => (
          <div
            key={idx}
            onClick={() => !isLoadingNextQuestion && onOptionSelect(idx)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              selectedOption === idx ? "border-black bg-gray-100 shadow-sm" : "border-gray-200 hover:border-black hover:bg-gray-50"
            } ${isLoadingNextQuestion ? "cursor-default" : ""}`}
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold ${
                selectedOption === idx ? "bg-black text-white" : "bg-gray-100 text-gray-600"
              }`}>
                {String.fromCharCode(65 + idx)}
              </div>
              <div className="text-base text-gray-800">{option}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Navigation Buttons ─────────────────────────────────────────────
function QuizNavButtons({ isLastQuestion, isLoadingNextQuestion, onSkip, onNext }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
      <button
        onClick={onSkip}
        disabled={isLoadingNextQuestion}
        className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-base ${
          isLoadingNextQuestion ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-gray-100 text-black hover:bg-gray-200 border border-gray-300"
        }`}
      >
        <i className="fa fa-forward"></i> Skip Question
      </button>

      <button
        onClick={onNext}
        disabled={isLoadingNextQuestion}
        className={`w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-base ${
          isLoadingNextQuestion ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 border border-gray-300 shadow-sm"
        }`}
      >
        {isLastQuestion ? "Complete Quiz & See Results →" : "Next Question →"}
      </button>
    </div>
  );
}

// ─── Progress Card ──────────────────────────────────────────────────
function QuizProgressCard({ quizData, currentQuestionIndex, userAnswers }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mt-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center border border-gray-300">
          <i className="fa fa-globe text-xl text-white"></i>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-extrabold text-black mb-2">AI-Generated GK Quiz</h3>
          <p className="text-base text-gray-600 mb-3">This quiz follows standard government exam patterns.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <ProgressStat label="Progress" value={`${currentQuestionIndex + 1}/${quizData.totalQuestions}`} />
            <ProgressStat label="Answered" value={`${userAnswers.filter((a) => a !== null).length} questions`} />
            <ProgressStat label="Skipped" value={`${userAnswers.filter((a) => a === null).length} questions`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressStat({ label, value }) {
  return (
    <div className="bg-white rounded-lg p-3 border border-gray-200">
      <p className="text-sm font-bold text-black">{label}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  );
}