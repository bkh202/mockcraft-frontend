// shared/EngineeringBranchPage.jsx
import { useQuizEngine } from "./useQuizEngine";
import EngineeringCardsView from "./EngineeringCardsView";
import EngineeringFormView from "./EngineeringFormView";
import QuizView from "./QuizView";

export default function EngineeringBranchPage({ config }) {
  const {
    category, branch, resultPath,
  } = config;

  const engine = useQuizEngine(category, branch, resultPath);

  if (engine.view === "quiz" && engine.quizData) {
    return (
      <QuizView
        quizData={engine.quizData}
        currentQuestionIndex={engine.currentQuestionIndex}
        selectedOption={engine.selectedOption}
        isLoadingNextQuestion={engine.isLoadingNextQuestion}
        userAnswers={engine.userAnswers}
        elapsedTime={engine.elapsedTime}
        onOptionSelect={engine.handleOptionSelect}
        onNext={engine.handleNextQuestion}
        onSkip={engine.handleSkipQuestion}
        onBack={engine.resetToCards}
      />
    );
  }

  if (engine.view === "form") {
    return (
      <EngineeringFormView
        config={config}
        selectedSubject={engine.selectedSubject}
        selectedSubtopic={engine.selectedSubtopic}
        selectedCompany={engine.selectedCompany}
        isGeneratingQuiz={engine.isGeneratingQuiz}
        onSubtopicChange={engine.setSelectedSubtopic}
        onCompanyChange={engine.setSelectedCompany}
        onStart={engine.handleStartQuiz}
        onBack={() => { engine.resetToCards(); }}
      />
    );
  }

  return (
    <EngineeringCardsView
      config={config}
      onSelectSubject={engine.handleSelectSubject}
    />
  );
}