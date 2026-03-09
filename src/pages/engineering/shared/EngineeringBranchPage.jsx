import { Link } from "react-router-dom";
import { useQuizEngine } from "./useQuizEngine";
import EngineeringCardsView from "./EngineeringCardsView";
import EngineeringFormView from "./EngineeringFormView";
import QuizView from "../../goverment/branches/general/components/QuizView";

/**
 * EngineeringBranchPage — one generic page for all engineering branches
 *
 * @param {object} config
 * @param {string} config.category       - "ENGINEERING"
 * @param {string} config.branch         - "CSE" | "CIVIL" | "ECE" | "EE" | "ME" | "COMMON"
 * @param {string} config.pageTitle      - "Computer Science Engineering"
 * @param {string} config.breadcrumb     - "Computer Science"
 * @param {string} config.description    - subtitle text
 * @param {string} config.parentPath     - "/engineering"
 * @param {string} config.parentLabel    - "Engineering"
 * @param {string} config.resultPath     - "/engineering/result"
 * @param {string} config.quizLabel      - "AI CSE Quiz"
 * @param {string} config.formIcon       - "💻"
 * @param {string} config.adaptiveSubject - first subject for CTA button
 * @param {Array}  config.subjects        - subject array
 * @param {Array}  config.difficultyLevels
 * @param {Array}  config.quickPractice   - [{title, description, subject}]
 */
export default function EngineeringBranchPage({ config }) {
  const engine = useQuizEngine(config.category, config.branch, config.resultPath);

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
        backLabel="Back to Subjects"
        quizLabel={config.quizLabel}
      />
    );
  }

  if (engine.view === "form") {
    return (
      <EngineeringFormView
        config={config}
        engine={engine}
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