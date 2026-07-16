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
      color: "bg-gray-100",
      icon: "fa-landmark",
      subtopics: ["Ancient", "Medieval", "Modern", "World History", "Indian History", "Freedom Struggle"],
      tip: "Focus on timelines and important events"
    },
    {
      name: "Geography",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-globe",
      subtopics: ["Physical", "Indian", "World", "Climate", "Resources", "Economic Geography"],
      tip: "Use maps for better retention"
    },
    {
      name: "Polity",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-scale-balanced",
      subtopics: ["Constitution", "Parliament", "Judiciary", "Executive", "Local Government", "Fundamental Rights"],
      tip: "Understand the structure of government"
    },
    {
      name: "Economy",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-coins",
      subtopics: ["Basic Concepts", "Indian Economy", "Budget", "Banking", "Finance", "Economic Terms"],
      tip: "Follow current economic news"
    },
    {
      name: "Science",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-flask",
      subtopics: ["Physics", "Chemistry", "Biology", "Technology", "Space", "Discoveries"],
      tip: "Connect with daily life examples"
    },
    {
      name: "Current Affairs",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-newspaper",
      subtopics: ["National", "International", "Sports", "Awards", "Summits", "Important Days"],
      tip: "Read news daily"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 1 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 4 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 1 }
  ],
  formIcon: "fa-book",
  formDescription: "Let our AI generate personalized general knowledge questions based on your preferences",
  prevLink: "/aptitude/di",
  prevLabel: "DI",
  nextLink: "/aptitude/computer",
  nextLabel: "Computer Aptitude",
  category: "aptitude",
};

export default function GeneralKnowledge() {
  const currentAffairsCategories = [
    { name: "National News", icon: "fa-flag" },
    { name: "International", icon: "fa-globe" },
    { name: "Sports", icon: "fa-futbol" },
    { name: "Business", icon: "fa-briefcase" },
    { name: "Science & Tech", icon: "fa-microscope" },
  ];

  return (
    <AptitudeBranchPage config={config}>
      {/* Daily Current Affairs Banner */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200">
            <i className="fa fa-newspaper text-black"></i>
          </div>
          <div>
            <h4 className="font-bold text-black mb-1">Daily Current Affairs</h4>
            <p className="text-base text-gray-600">
              Updated daily with latest national & international news. Practice today's quiz!
            </p>
          </div>
        </div>
      </div>

      {/* Current Affairs Categories */}
      <div className="mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-newspaper text-black"></i> Current Affairs Categories
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {currentAffairsCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:shadow-md hover:border-black transition-all"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 mx-auto border border-gray-200">
                <i className={`${category.icon} text-2xl text-black`}></i>
              </div>
              <h4 className="font-bold text-black mb-1">{category.name}</h4>
              <p className="text-sm text-gray-600">AI questions</p>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Updates */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-calendar-alt text-black"></i> Monthly Updates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <h4 className="font-bold text-black mb-2">This Month's Awards</h4>
            <p className="text-sm text-gray-600">National & international awards announced this month</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-200 text-black rounded-full border border-gray-300">
              15+ items
            </span>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <h4 className="font-bold text-black mb-2">Government Schemes</h4>
            <p className="text-sm text-gray-600">Latest government initiatives and policies</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-200 text-black rounded-full border border-gray-300">
              10+ items
            </span>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <h4 className="font-bold text-black mb-2">International Events</h4>
            <p className="text-sm text-gray-600">Global summits, treaties, and agreements</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-200 text-black rounded-full border border-gray-300">
              8+ items
            </span>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-black rounded-2xl p-6 mb-8 text-white border border-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-extrabold mb-2 flex items-center gap-2">
              <i className="fa fa-robot text-white"></i> Try AI-Powered GK Quiz
            </h3>
            <p className="text-gray-300">
              Get detailed results with AI explanations after completing general knowledge quizzes
            </p>
          </div>
        </div>
      </div>
    </AptitudeBranchPage>
  );
}