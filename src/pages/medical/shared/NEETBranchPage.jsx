import { useNEETQuizEngine } from "./useNEETQuizEngine";
import NEETCardsView from "./NEETCardsView";
import NEETFormView from "./NEETFormView";
import QuizView from "../../premiumEngineering/shared/QuizView"; // reuse existing QuizView

export default function NEETBranchPage({ config, children }) {
  const { branch, resultPath } = config;
  const engine = useNEETQuizEngine(branch, resultPath);

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
      <NEETFormView
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
      <NEETCardsView config={config} onSelectSubject={engine.handleSelectSubject} />
      {children}
      {/* Back link */}
      <div className="mt-8">
        <a
          href={config.parentPath}
          className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to {config.parentLabel}
        </a>
      </div>
    </>
  );
}