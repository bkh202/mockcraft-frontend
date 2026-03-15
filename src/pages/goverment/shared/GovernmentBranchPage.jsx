import { useGovernmentQuizEngine } from "../branches/general/components/useGovernmentQuizEngine";

import GovernmentFormView from "./GovernmentFormView";
import GovernmentCardsView from "./GovernmentCardsView";
import QuizView from "../branches/general/components/QuizView";

/**
 * GovernmentBranchPage — one generic page for all government branches
 *
 * @param {object} config
 * @param {string} config.category       - "GOVERNMENT"
 * @param {string} config.branch         - "ENGLISH" | "REASONING" | "QUANTITAVE" | "GENERAL_AWARENESS"
 * @param {string} config.pageTitle      - "English Language"
 * @param {string} config.breadcrumb     - "English Language"
 * @param {string} config.description    - subtitle
 * @param {string} config.parentPath     - "/government"
 * @param {string} config.parentLabel    - "Government Exams"
 * @param {string} config.resultPath     - "/government/result"
 * @param {string} config.quizLabel      - "AI English Quiz"
 * @param {string} config.formIcon       - "📚"
 * @param {string} config.accentColor    - "blue" | "green" (for form banner color)
 * @param {Array}  config.subjects        - subjects with examWeightage
 * @param {Array}  config.headerStats     - [{value, label, color}]
 * @param {Array}  config.quickPractice   - [{title, description, subject}]
 * @param {Array}  config.tips            - [{color, title, tip}]
 * @param {string} config.tipsTitle       - "💡 English Tips & Tricks"
 * @param {string} config.tipsLink        - "/government/english/tips"
 */
export default function GovernmentBranchPage({ config }) {
  const engine = useGovernmentQuizEngine(config.category, config.branch, config.resultPath);

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
        backLabel="Back to Topics"
        quizLabel={config.quizLabel}
      />
    );
  }

  if (engine.view === "form") {
    return <GovernmentFormView config={config} engine={engine} />;
  }

  return <GovernmentCardsView config={config} onSelectSubject={engine.handleSelectSubject} />;
}