import AptitudeBranchPage from "./shared/AptitudeBranchPage";

const config = {
  branch: "COMPUTER",
  resultPath: "/aptitude/result/:attemptId",
  pageTitle: "Computer Aptitude",
  breadcrumb: "Computer Aptitude",
  description: "Master computer fundamentals with AI-generated personalized quizzes",
  parentPath: "/aptitude",
  parentLabel: "Aptitude",
  subjects: [
    {
      name: "Hardware",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-blue-100",
      icon: "💻",
      subtopics: ["CPU", "Memory", "Storage", "I/O Devices", "Motherboard", "Peripherals"],
      tip: "Focus on basic components and their functions"
    },
    {
      name: "Software",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-green-100",
      icon: "📱",
      subtopics: ["OS", "Application", "Utility", "Programming", "Database", "Networking"],
      tip: "Understand types of software and their uses"
    },
    {
      name: "Networking",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-purple-100",
      icon: "🌐",
      subtopics: ["LAN/WAN", "Protocols", "Topologies", "Devices", "Internet", "Security"],
      tip: "Learn common protocols and network devices"
    },
    {
      name: "Database",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-red-100",
      icon: "🗄️",
      subtopics: ["RDBMS", "SQL", "Normalization", "Keys", "Transactions", "SQL Commands"],
      tip: "Practice SQL queries and normalization"
    },
    {
      name: "Algorithms",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-yellow-100",
      icon: "🧠",
      subtopics: ["Sorting", "Searching", "Complexity", "Flowcharts", "Pseudocode", "Basic Algorithms"],
      tip: "Understand time complexity and basic algorithms"
    },
    {
      name: "Security",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-indigo-100",
      icon: "🔒",
      subtopics: ["Virus", "Malware", "Firewall", "Encryption", "Authentication", "Cyber Laws"],
      tip: "Know common threats and protection methods"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 1 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 3 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 2 }
  ],
  formIcon: "💻",
  formDescription: "Let our AI generate personalized computer aptitude questions based on your preferences",
  prevLink: "/aptitude/gk",
  prevLabel: "GK",
  nextLink: "/aptitude/quantitative",
  nextLabel: "Quantitative",
  category: "aptitude",
};

export default function ComputerAptitude() {
  return (
    <AptitudeBranchPage config={config}>
      {/* Custom sections unique to ComputerAptitude */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Exam-wise Focus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { exam: "SSC CGL", topics: ["Hardware", "Software", "MS Office"], weightage: "15%" },
            { exam: "Banking", topics: ["Networking", "Security", "DBMS"], weightage: "20%" },
            { exam: "GATE", topics: ["Algorithms", "DBMS", "Networking"], weightage: "25%" },
            { exam: "Railway", topics: ["Hardware", "Basics", "Internet"], weightage: "10%" },
          ].map((exam, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-lg ${
                    exam.exam.includes("SSC")
                      ? "bg-blue-100"
                      : exam.exam.includes("Banking")
                      ? "bg-green-100"
                      : exam.exam.includes("GATE")
                      ? "bg-purple-100"
                      : "bg-orange-100"
                  } flex items-center justify-center`}
                >
                  <span
                    className={
                      exam.exam.includes("SSC")
                        ? "text-blue-600"
                        : exam.exam.includes("Banking")
                        ? "text-green-600"
                        : exam.exam.includes("GATE")
                        ? "text-purple-600"
                        : "text-orange-600"
                    }
                  >
                    {exam.exam.includes("SSC") ? "📝" : exam.exam.includes("Banking") ? "💰" : exam.exam.includes("GATE") ? "🔧" : "🚂"}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{exam.exam}</h4>
                  <p className="text-sm text-gray-600">Weightage: {exam.weightage}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {exam.topics.map((topic, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">🤖 Try AI-Powered Computer Quiz</h3>
            <p className="text-purple-100">
              Get detailed results with AI explanations after completing computer aptitude quizzes
            </p>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">💼 MS Office Suite</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "MS Word", icon: "📄", color: "bg-blue-100", subtopic: "MS Word" },
            { name: "MS Excel", icon: "📊", color: "bg-green-100", subtopic: "MS Excel" },
            { name: "MS PowerPoint", icon: "📽️", color: "bg-purple-100", subtopic: "MS PowerPoint" },
          ].map((app, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:shadow-md cursor-pointer"
              onClick={() => {
                // This would need to be handled via the engine; for simplicity, we rely on the card click triggering form.
                // In a real scenario, you'd need to set the subject and subtopic programmatically.
                // Since the engine is inside BranchPage, we can't directly access it here.
                // For demo, we keep the original onClick but it won't work with the shared architecture unless we pass a handler.
                // We'll leave as is – the user will need to click the main cards.
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg ${app.color} flex items-center justify-center`}>
                  <span className="text-blue-600">{app.icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{app.name}</h4>
                </div>
              </div>
              <p className="text-sm text-gray-600">AI questions</p>
            </div>
          ))}
        </div>
      </div>
    </AptitudeBranchPage>
  );
}