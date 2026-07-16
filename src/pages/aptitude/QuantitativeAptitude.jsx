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
      color: "bg-gray-100",
      icon: "fa-plus",
      subtopics: ["Percentage", "Profit & Loss", "Ratio", "Time & Work", "Time Speed Distance", "Simple & Compound Interest"],
    },
    {
      name: "Algebra",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-ruler",
      subtopics: ["Equations", "Inequalities", "Quadratic Equations", "Progressions", "Logarithms", "Functions"],
    },
    {
      name: "Geometry",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-ruler-combined",
      subtopics: ["Triangles", "Circles", "Polygons", "Coordinate Geometry", "Mensuration", "Trigonometry"],
    },
    {
      name: "Number System",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-hashtag",
      subtopics: ["Divisibility", "HCF & LCM", "Remainders", "Decimal Fractions", "Surds & Indices", "Number Theory"],
    },
    {
      name: "Modern Math",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-calculator",
      subtopics: ["Set Theory", "Probability", "Permutations", "Combinations", "Statistics", "Linear Programming"],
    },
    {
      name: "Data Sufficiency",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-question",
      subtopics: ["Quant DS", "Comparison DS", "Value DS", "Yes/No DS", "Two Statements", "Both Needed"],
    },
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 2 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 3 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 1 },
  ],
  formIcon: "fa-plus",
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
      {/* CTA Banner – now black */}
      <div className="bg-black rounded-2xl p-6 mb-8 text-white border border-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-extrabold mb-2 flex items-center gap-2">
              <i className="fa fa-robot text-white"></i> Try AI-Powered Adaptive Learning
            </h3>
            <p className="text-gray-300">
              Get detailed results with AI explanations after completing quizzes
            </p>
          </div>
          <button
            // Decorative; actual quiz start is via subject cards
            className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors border border-gray-300"
          >
            Start Adaptive Quiz
          </button>
        </div>
      </div>
    </AptitudeBranchPage>
  );
}