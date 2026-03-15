import AptitudeBranchPage from "./shared/AptitudeBranchPage";

const config = {
  branch: "GENERAL_KNOWLEDGE",
  resultPath: "/aptitude/result/:attemptId",
  pageTitle: "General Knowledge",
  breadcrumb: "General Knowledge",
  description: "Comprehensive GK with AI-generated personalized quizzes",
  parentPath: "/aptitude",
  parentLabel: "Aptitude",
  subjects: [
    {
      name: "History",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-blue-100",
      icon: "🏛️",
      subtopics: ["Ancient", "Medieval", "Modern", "World History", "Indian History", "Freedom Struggle"],
      tip: "Focus on timelines and important events"
    },
    {
      name: "Geography",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-green-100",
      icon: "🌍",
      subtopics: ["Physical", "Indian", "World", "Climate", "Resources", "Economic Geography"],
      tip: "Use maps for better retention"
    },
    {
      name: "Polity",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-purple-100",
      icon: "⚖️",
      subtopics: ["Constitution", "Parliament", "Judiciary", "Executive", "Local Government", "Fundamental Rights"],
      tip: "Understand the structure of government"
    },
    {
      name: "Economy",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-red-100",
      icon: "💰",
      subtopics: ["Basic Concepts", "Indian Economy", "Budget", "Banking", "Finance", "Economic Terms"],
      tip: "Follow current economic news"
    },
    {
      name: "Science",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-yellow-100",
      icon: "🔬",
      subtopics: ["Physics", "Chemistry", "Biology", "Technology", "Space", "Discoveries"],
      tip: "Connect with daily life examples"
    },
    {
      name: "Current Affairs",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-indigo-100",
      icon: "📰",
      subtopics: ["National", "International", "Sports", "Awards", "Summits", "Important Days"],
      tip: "Read news daily"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 1 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 4 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 1 }
  ],
  formIcon: "📚",
  formDescription: "Let our AI generate personalized general knowledge questions based on your preferences",
  prevLink: "/aptitude/di",
  prevLabel: "DI",
  nextLink: "/aptitude/computer",
  nextLabel: "Computer Aptitude",
  category: "aptitude",
};

export default function GeneralKnowledge() {
  const currentAffairsCategories = [
    { name: "National News", color: "bg-red-100", icon: "🇮🇳" },
    { name: "International", color: "bg-blue-100", icon: "🌐" },
    { name: "Sports", color: "bg-green-100", icon: "⚽" },
    { name: "Business", color: "bg-yellow-100", icon: "💼" },
    { name: "Science & Tech", color: "bg-purple-100", icon: "🔬" },
  ];

  return (
    <AptitudeBranchPage config={config}>
      <div className="mt-6 bg-linear-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
            <span className="text-yellow-600">📰</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Daily Current Affairs</h4>
            <p className="text-sm text-gray-600">
              Updated daily with latest national & international news. Practice today's quiz!
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📰 Current Affairs Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {currentAffairsCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:shadow-md"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                <span className="text-lg">{category.icon}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{category.name}</h4>
              <p className="text-sm text-gray-600">AI questions</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Monthly Updates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">This Month's Awards</h4>
            <p className="text-sm text-gray-600">National & international awards announced this month</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">15+ items</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Government Schemes</h4>
            <p className="text-sm text-gray-600">Latest government initiatives and policies</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded">10+ items</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">International Events</h4>
            <p className="text-sm text-gray-600">Global summits, treaties, and agreements</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded">8+ items</span>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">🤖 Try AI-Powered GK Quiz</h3>
            <p className="text-purple-100">
              Get detailed results with AI explanations after completing general knowledge quizzes
            </p>
          </div>
        </div>
      </div>
    </AptitudeBranchPage>
  );
}