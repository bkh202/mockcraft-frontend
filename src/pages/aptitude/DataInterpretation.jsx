import AptitudeBranchPage from "./shared/AptitudeBranchPage";

const config = {
  branch: "DATA_INTERPRETATION",
  resultPath: "/aptitude/result/:attemptId",
  pageTitle: "Data Interpretation",
  breadcrumb: "Data Interpretation",
  description: "Master data analysis skills with AI-generated personalized quizzes",
  parentPath: "/aptitude",
  parentLabel: "Aptitude",
  subjects: [
    {
      name: "Tables",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-blue-100",
      icon: "📋",
      subtopics: ["Simple Tables", "Complex Tables", "Comparison", "Percentage Calculation", "Ratio Analysis", "Trend Analysis"],
      timePerQuestion: "1-2 mins"
    },
    {
      name: "Bar Graphs",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-green-100",
      icon: "📊",
      subtopics: ["Single Bar", "Multiple Bars", "Stacked Bar", "Horizontal Bar", "Percentage Bar", "Comparative Analysis"],
      timePerQuestion: "1.5-2 mins"
    },
    {
      name: "Line Graphs",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-purple-100",
      icon: "📈",
      subtopics: ["Single Line", "Multiple Lines", "Trend Analysis", "Growth Rate", "Percentage Change", "Interpolation"],
      timePerQuestion: "1-1.5 mins"
    },
    {
      name: "Pie Charts",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-red-100",
      icon: "🥧",
      subtopics: ["Simple Pie", "Multiple Pies", "Degree Conversion", "Percentage Share", "Comparative Share", "Combined Analysis"],
      timePerQuestion: "1-2 mins"
    },
    {
      name: "Caselets",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-yellow-100",
      icon: "📄",
      subtopics: ["Paragraph Data", "Tabular Caselets", "Logical Caselets", "Mixed Data", "Multi-step Problems", "Complex Analysis"],
      timePerQuestion: "3-4 mins"
    },
    {
      name: "Mixed Graphs",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-indigo-100",
      icon: "🔀",
      subtopics: ["Table + Graph", "Multiple Graphs", "Combined DI", "Complex Data", "Advanced Analysis", "CAT Level"],
      timePerQuestion: "2-3 mins"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 2 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 2 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 2 }
  ],
  formIcon: "📊",
  formDescription: "Let our AI generate personalized data interpretation questions based on your preferences",
  prevLink: "/aptitude/verbal",
  prevLabel: "Verbal",
  nextLink: "/aptitude/gk",
  nextLabel: "GK",
  category: "aptitude",
};

export default function DataInterpretation() {
  return (
    <AptitudeBranchPage config={config}>
      <div className="mt-6 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
            <span className="text-green-600">💡</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">DI Strategy</h4>
            <p className="text-sm text-gray-600">
              Always spend 1-2 minutes understanding the data structure before solving questions.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Data Analysis Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            "Always check units and scale",
            "Look for approximate calculations",
            "Identify key trends first",
            "Practice mental calculation",
            "Use elimination for complex options",
          ].map((tip, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                <span className="text-green-600">✓</span>
              </div>
              <p className="text-sm text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">🤖 Try AI-Powered DI Quiz</h3>
            <p className="text-purple-100">
              Get detailed results with AI explanations after completing data interpretation quizzes
            </p>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🧮 Calculator Tips</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Percentage", desc: "x% of y = (x/100) × y" },
            { title: "Ratio", desc: "a:b = a/(a+b)" },
            { title: "Average", desc: "Avg = Sum/n" },
            { title: "Growth Rate", desc: "GR = (New-Old)/Old × 100" },
          ].map((tip, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
              <p className="text-sm text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AptitudeBranchPage>
  );
}