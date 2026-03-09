import { useAptitudeQuizEngine } from "./useAptitudeQuizEngine";
import AptitudeCardsView from "./AptitudeCardsView";
import AptitudeFormView from "./AptitudeFormView";
import QuizView from "./../../premiumEngineering/shared/QuizView";  // reuse existing QuizView (timer optional)

export default function AptitudeBranchPage({ config, children }) {
  const { branch, resultPath } = config;
  const engine = useAptitudeQuizEngine(branch, resultPath);

  if (engine.view === "quiz" && engine.quizData) {
    return (
      <QuizView
        quizData={engine.quizData}
        currentQuestionIndex={engine.currentQuestionIndex}
        selectedOption={engine.selectedOption}
        isLoadingNextQuestion={engine.isLoadingNextQuestion}
        userAnswers={engine.userAnswers}
        onOptionSelect={engine.handleOptionSelect}
        onNext={engine.handleNextQuestion}
        onSkip={engine.handleSkipQuestion}
        onBack={engine.resetToCards}
      />
    );
  }

  if (engine.view === "form") {
    return (
      <AptitudeFormView
        config={config}
        selectedSubject={engine.selectedSubject}
        selectedSubtopic={engine.selectedSubtopic}
        isGeneratingQuiz={engine.isGeneratingQuiz}
        onSubtopicChange={engine.setSelectedSubtopic}
        onStart={engine.handleStartQuiz}
        onBack={engine.resetToCards}
      />
    );
  }

  return (
    <>
      <AptitudeCardsView config={config} onSelectSubject={engine.handleSelectSubject} />
      {children}
      {/* Back link (shared across all pages) */}
      <div className="mt-8 flex items-center justify-between">
        <a
          href={config.parentPath}
          className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to {config.parentLabel}
        </a>

        <div className="flex gap-4">
          {config.prevLink && (
            <a
              href={config.prevLink}
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Previous: {config.prevLabel}
            </a>
          )}
          {config.nextLink && (
            <a
              href={config.nextLink}
              className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Next: {config.nextLabel}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </>
  );
}