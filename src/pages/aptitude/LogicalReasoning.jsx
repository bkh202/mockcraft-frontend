import AptitudeBranchPage from "./shared/AptitudeBranchPage";

const config = {
  branch: "LOGICAL_REASONING",
  resultPath: "/aptitude/result/:attemptId",
  pageTitle: "Logical Reasoning",
  breadcrumb: "Logical Reasoning",
  description: "Develop analytical thinking with AI-generated personalized quizzes",
  parentPath: "/aptitude",
  parentLabel: "Aptitude",
  subjects: [
    {
      name: "Puzzles",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-puzzle-piece",
      subtopics: ["Linear Arrangement", "Circular Arrangement", "Distribution", "Scheduling", "Blood Relations", "Direction Sense"],
      timePerQuestion: "2-3 mins",
      tip: "Draw diagrams for arrangement problems"
    },
    {
      name: "Syllogisms",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-random",
      subtopics: ["Two Statements", "Three Statements", "Either-Or", "Complementary", "Possibility Cases", "Conclusions"],
      timePerQuestion: "30-45 secs",
      tip: "Use Venn diagrams"
    },
    {
      name: "Coding-Decoding",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-lock",
      subtopics: ["Letter Coding", "Number Coding", "Symbol Coding", "Mixed Coding", "Substitution", "Pattern Coding"],
      timePerQuestion: "1-2 mins",
      tip: "Identify the pattern first"
    },
    {
      name: "Series & Patterns",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-chart-line",
      subtopics: ["Number Series", "Letter Series", "Alphanumeric", "Missing Terms", "Wrong Terms", "Pattern Identification"],
      timePerQuestion: "1 min",
      tip: "Check for arithmetic/geometric progression"
    },
    {
      name: "Logical Deduction",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-brain",
      subtopics: ["Statements & Arguments", "Statements & Assumptions", "Course of Action", "Cause & Effect", "Inferences", "Conclusions"],
      timePerQuestion: "2-3 mins",
      tip: "Read the statement carefully"
    },
    {
      name: "Analytical Reasoning",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-search",
      subtopics: ["Verbal Reasoning", "Non-Verbal", "Seating Arrangement", "Ranking", "Comparison", "Data Sufficiency"],
      timePerQuestion: "3-4 mins",
      tip: "Break down complex problems"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 1 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 2 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 3 }
  ],
  formIcon: "fa-brain",
  formDescription: "Let our AI generate personalized logical reasoning questions based on your preferences",
  prevLink: "/aptitude/quantitative",
  prevLabel: "Quantitative",
  nextLink: "/aptitude/verbal",
  nextLabel: "Verbal",
  category: "aptitude",
};

export default function LogicalReasoning() {
  return (
    <AptitudeBranchPage config={config}>
      {/* Pro Tip */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200">
            <i className="fa fa-lightbulb text-black"></i>
          </div>
          <div>
            <h4 className="font-bold text-black mb-1">Pro Tip</h4>
            <p className="text-base text-gray-600">
              Practice puzzles daily to improve speed. Start with easy ones and gradually increase difficulty.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-black rounded-2xl p-6 mb-8 text-white border border-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-extrabold mb-2 flex items-center gap-2">
              <i className="fa fa-robot text-white"></i> Try AI-Powered Logical Quiz
            </h3>
            <p className="text-gray-300">
              Get detailed results with AI explanations after completing logical reasoning quizzes
            </p>
          </div>
        </div>
      </div>
    </AptitudeBranchPage>
  );
}