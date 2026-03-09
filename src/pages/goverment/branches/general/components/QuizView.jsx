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
    <div className="p-4 md:p-6 min-h-screen bg-gray-50">
      <BackButton label="Back to Topics" onClick={handleBack} suffix="AI General Awareness Quiz" />

      <div className="max-w-4xl mx-auto">
        <QuizHeader quizData={quizData} currentQuestionIndex={currentQuestionIndex} />

        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 relative min-h-100">
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
            <div className="text-center py-10 text-gray-500">No questions available.</div>
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

function QuizHeader({ quizData, currentQuestionIndex }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {quizData.topic} Practice
          </h1>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">{quizData.subtopic}</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">{quizData.difficulty}</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
              Question {currentQuestionIndex + 1} of {quizData.totalQuestions}
            </span>
          </div>
        </div>
        <div className="text-lg font-bold text-green-600">⚡ AI-Powered</div>
      </div>
    </div>
  );
}

function LoadingOverlay() {
  return (
    <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center rounded-2xl">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-gray-600">Loading next question...</p>
    </div>
  );
}

function QuestionCard({ question, questionIndex, quizData, selectedOption, isLoadingNextQuestion, onOptionSelect }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            Q{questionIndex + 1}
          </div>
          <span className="text-sm text-gray-500">{quizData.timePerQuestion} suggested</span>
        </div>
        <div className="text-sm text-gray-500">{questionIndex + 1} / {quizData.totalQuestions}</div>
      </div>

      <div className="text-lg font-medium text-gray-900 mb-8">{question.question}</div>

      <div className="space-y-3 mb-8">
        {question.options?.map((option, idx) => (
          <div
            key={idx}
            onClick={() => !isLoadingNextQuestion && onOptionSelect(idx)}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedOption === idx ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
            } ${isLoadingNextQuestion ? "cursor-default" : "hover:bg-gray-50"}`}
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                selectedOption === idx ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
              }`}>
                {String.fromCharCode(65 + idx)}
              </div>
              <div className="text-gray-800">{option}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuizNavButtons({ isLastQuestion, isLoadingNextQuestion, onSkip, onNext }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
      <button
        onClick={onSkip}
        disabled={isLoadingNextQuestion}
        className={`w-full sm:w-auto px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
          isLoadingNextQuestion ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        Skip Question
      </button>

      <button
        onClick={onNext}
        disabled={isLoadingNextQuestion}
        className={`w-full sm:w-auto px-8 py-3 rounded-lg font-medium ${
          isLoadingNextQuestion ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
        }`}
      >
        {isLastQuestion ? "Complete Quiz & See Results" : "Next Question →"}
      </button>
    </div>
  );
}

function QuizProgressCard({ quizData, currentQuestionIndex, userAnswers }) {
  return (
    <div className="bg-linear-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 mt-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center">
          <span className="text-xl text-white">🌍</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Generated GK Quiz</h3>
          <p className="text-gray-600 mb-3">This quiz follows standard government exam patterns.</p>
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
    <div className="bg-white/70 rounded-lg p-3">
      <p className="text-sm font-medium text-gray-900">{label}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  );
}