import { Link } from "react-router-dom";
import { useNEETQuizEngine } from "./useNEETQuizEngine";
import NEETCardsView from "./NEETCardsView";
import NEETFormView from "./NEETFormView";
import QuizView from "../../premiumEngineering/shared/QuizView"; // already updated

export default function NEETBranchPage({ config, children }) {
  const { branch, resultPath, parentPath, parentLabel } = config;
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
    <div className="min-h-screen bg-white text-black">
      <NEETCardsView config={config} onSelectSubject={engine.handleSelectSubject} />
      {children}

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200 mt-8">
        <Link
          to={parentPath}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-black transition-all shadow-sm text-base font-bold"
        >
          <i className="fa fa-arrow-left text-sm"></i>
          Back to {parentLabel}
        </Link>
      </div>
    </div>
  );
}