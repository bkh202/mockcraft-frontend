import { Link } from "react-router-dom";
import { useAptitudeQuizEngine } from "./useAptitudeQuizEngine";
import AptitudeCardsView from "./AptitudeCardsView";
import AptitudeFormView from "./AptitudeFormView";
import QuizView from "./../../premiumEngineering/shared/QuizView"; // reused, already updated

export default function AptitudeBranchPage({ config, children }) {
  const { branch, resultPath, parentPath, parentLabel, prevLink, prevLabel, nextLink, nextLabel } = config;
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
    <div className="min-h-screen bg-white text-black">
      <AptitudeCardsView config={config} onSelectSubject={engine.handleSelectSubject} />
      {children}

      {/* Navigation Links */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 mt-8">
        <Link
          to={parentPath}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-black transition-all shadow-sm text-base font-bold"
        >
          <i className="fa fa-arrow-left text-sm"></i>
          Back to {parentLabel}
        </Link>

        <div className="flex flex-wrap items-center gap-4">
          {prevLink && prevLabel && (
            <Link
              to={prevLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-black transition-all shadow-sm text-base font-bold"
            >
              <i className="fa fa-arrow-left text-sm"></i>
              Previous: {prevLabel}
            </Link>
          )}
          {nextLink && nextLabel && (
            <Link
              to={nextLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-black transition-all shadow-sm text-base font-bold"
            >
              Next: {nextLabel}
              <i className="fa fa-arrow-right text-sm"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}