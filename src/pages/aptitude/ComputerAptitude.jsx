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
      color: "bg-gray-100",
      icon: "fa-desktop",
      subtopics: ["CPU", "Memory", "Storage", "I/O Devices", "Motherboard", "Peripherals"],
      tip: "Focus on basic components and their functions"
    },
    {
      name: "Software",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-mobile-alt",
      subtopics: ["OS", "Application", "Utility", "Programming", "Database", "Networking"],
      tip: "Understand types of software and their uses"
    },
    {
      name: "Networking",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-network-wired",
      subtopics: ["LAN/WAN", "Protocols", "Topologies", "Devices", "Internet", "Security"],
      tip: "Learn common protocols and network devices"
    },
    {
      name: "Database",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-database",
      subtopics: ["RDBMS", "SQL", "Normalization", "Keys", "Transactions", "SQL Commands"],
      tip: "Practice SQL queries and normalization"
    },
    {
      name: "Algorithms",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-brain",
      subtopics: ["Sorting", "Searching", "Complexity", "Flowcharts", "Pseudocode", "Basic Algorithms"],
      tip: "Understand time complexity and basic algorithms"
    },
    {
      name: "Security",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-shield-alt",
      subtopics: ["Virus", "Malware", "Firewall", "Encryption", "Authentication", "Cyber Laws"],
      tip: "Know common threats and protection methods"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 1 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 3 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 2 }
  ],
  formIcon: "fa-desktop",
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
      {/* ─── Exam-wise Focus ─── */}
      <div className="mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-bullseye text-black"></i> Exam-wise Focus
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { exam: "SSC CGL", topics: ["Hardware", "Software", "MS Office"], weightage: "15%" },
            { exam: "Banking", topics: ["Networking", "Security", "DBMS"], weightage: "20%" },
            { exam: "GATE", topics: ["Algorithms", "DBMS", "Networking"], weightage: "25%" },
            { exam: "Railway", topics: ["Hardware", "Basics", "Internet"], weightage: "10%" },
          ].map((exam, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-md hover:border-black transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                  <i className="fa fa-graduation-cap text-black"></i>
                </div>
                <div>
                  <h4 className="font-bold text-black">{exam.exam}</h4>
                  <p className="text-sm text-gray-600">Weightage: {exam.weightage}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {exam.topics.map((topic, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CTA Banner ─── (now black) */}
      <div className="bg-black rounded-2xl p-6 mb-8 text-white border border-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-extrabold mb-2 flex items-center gap-2">
              <i className="fa fa-robot text-white"></i> Try AI-Powered Computer Quiz
            </h3>
            <p className="text-gray-300">
              Get detailed results with AI explanations after completing computer aptitude quizzes
            </p>
          </div>
        </div>
      </div>

      {/* ─── MS Office Suite ─── */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-file-alt text-black"></i> MS Office Suite
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "MS Word", icon: "fa-file-word", subtopic: "MS Word" },
            { name: "MS Excel", icon: "fa-file-excel", subtopic: "MS Excel" },
            { name: "MS PowerPoint", icon: "fa-file-powerpoint", subtopic: "MS PowerPoint" },
          ].map((app, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-black hover:shadow-sm transition-all cursor-pointer"
              onClick={() => {
                // You would need to trigger the subject selection via the engine if needed.
                // For now, this is a static UI element.
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                  <i className={`${app.icon} text-xl text-black`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-black">{app.name}</h4>
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