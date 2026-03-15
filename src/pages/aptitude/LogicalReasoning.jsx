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
      color: "bg-blue-100",
      icon: "🧩",
      subtopics: ["Linear Arrangement", "Circular Arrangement", "Distribution", "Scheduling", "Blood Relations", "Direction Sense"],
      timePerQuestion: "2-3 mins",
      tip: "Draw diagrams for arrangement problems"
    },
    {
      name: "Syllogisms",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-green-100",
      icon: "🔀",
      subtopics: ["Two Statements", "Three Statements", "Either-Or", "Complementary", "Possibility Cases", "Conclusions"],
      timePerQuestion: "30-45 secs",
      tip: "Use Venn diagrams"
    },
    {
      name: "Coding-Decoding",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-purple-100",
      icon: "🔐",
      subtopics: ["Letter Coding", "Number Coding", "Symbol Coding", "Mixed Coding", "Substitution", "Pattern Coding"],
      timePerQuestion: "1-2 mins",
      tip: "Identify the pattern first"
    },
    {
      name: "Series & Patterns",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-red-100",
      icon: "📈",
      subtopics: ["Number Series", "Letter Series", "Alphanumeric", "Missing Terms", "Wrong Terms", "Pattern Identification"],
      timePerQuestion: "1 min",
      tip: "Check for arithmetic/geometric progression"
    },
    {
      name: "Logical Deduction",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-yellow-100",
      icon: "💭",
      subtopics: ["Statements & Arguments", "Statements & Assumptions", "Course of Action", "Cause & Effect", "Inferences", "Conclusions"],
      timePerQuestion: "2-3 mins",
      tip: "Read the statement carefully"
    },
    {
      name: "Analytical Reasoning",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-indigo-100",
      icon: "🔍",
      subtopics: ["Verbal Reasoning", "Non-Verbal", "Seating Arrangement", "Ranking", "Comparison", "Data Sufficiency"],
      timePerQuestion: "3-4 mins",
      tip: "Break down complex problems"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 1 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 2 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 3 }
  ],
  formIcon: "🧠",
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
      <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
            <span className="text-blue-600">💡</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Pro Tip</h4>
            <p className="text-sm text-gray-600">
              Practice puzzles daily to improve speed. Start with easy ones and gradually increase difficulty.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">🤖 Try AI-Powered Logical Quiz</h3>
            <p className="text-purple-100">
              Get detailed results with AI explanations after completing logical reasoning quizzes
            </p>
          </div>
        </div>
      </div>
    </AptitudeBranchPage>
  );
}