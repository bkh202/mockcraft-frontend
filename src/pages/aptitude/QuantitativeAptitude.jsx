// QuantitativeAptitude.jsx
import AptitudeBranchPage from "./shared/AptitudeBranchPage";

const config = {
  branch: "QUANTATIVE",
  resultPath: "/aptitude/result/:attemptId",
  pageTitle: "Quantitative Aptitude",
  breadcrumb: "Quantitative",
  description: "Master mathematical concepts with AI-generated personalized quizzes",
  parentPath: "/aptitude",
  parentLabel: "Aptitude",
  subjects: [
    {
      name: "Arithmetic",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-blue-100",
      icon: "➕",
      subtopics: ["Percentage", "Profit & Loss", "Ratio", "Time & Work", "Time Speed Distance", "Simple & Compound Interest"],
    },
    {
      name: "Algebra",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-green-100",
      icon: "📐",
      subtopics: ["Equations", "Inequalities", "Quadratic Equations", "Progressions", "Logarithms", "Functions"],
    },
    {
      name: "Geometry",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-purple-100",
      icon: "📏",
      subtopics: ["Triangles", "Circles", "Polygons", "Coordinate Geometry", "Mensuration", "Trigonometry"],
    },
    {
      name: "Number System",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-red-100",
      icon: "🔢",
      subtopics: ["Divisibility", "HCF & LCM", "Remainders", "Decimal Fractions", "Surds & Indices", "Number Theory"],
    },
    {
      name: "Modern Math",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-yellow-100",
      icon: "🧮",
      subtopics: ["Set Theory", "Probability", "Permutations", "Combinations", "Statistics", "Linear Programming"],
    },
    {
      name: "Data Sufficiency",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-indigo-100",
      icon: "❓",
      subtopics: ["Quant DS", "Comparison DS", "Value DS", "Yes/No DS", "Two Statements", "Both Needed"],
    },
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 2 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 3 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 1 },
  ],
  formIcon: "➕",
  formDescription: "Let our AI generate personalized quantitative aptitude questions based on your preferences",
  prevLink: "/aptitude",
  prevLabel: "Aptitude",
  nextLink: "/aptitude/logical",
  nextLabel: "Logical Reasoning",
  category: "aptitude",
};

export default function QuantitativeAptitude() {
  return (
    <AptitudeBranchPage config={config}>
      {/* Custom AI Quiz Banner */}
      <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">🤖 Try AI-Powered Adaptive Learning</h3>
            <p className="text-purple-100">
              Get detailed results with AI explanations after completing quizzes
            </p>
          </div>
          <button
            // Note: This button is decorative; actual quiz start must be done via subject cards.
            className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
          >
            Start Adaptive Quiz
          </button>
        </div>
      </div>
    </AptitudeBranchPage>
  );
}