import { useNavigate } from "react-router-dom";

export default function NeetHome() {
  const navigate = useNavigate();

  const subjects = [
    {
      title: "Physics",
      desc: "Mechanics, Optics, Modern Physics",
      path: "/medical/neet/physics",
      icon: "⚛",
      color: "from-blue-500 to-cyan-500",
      topics: ["Electrodynamics", "Thermodynamics", "Waves", "Optics"],
      questions: "AI-Based"
    },
    {
      title: "Chemistry",
      desc: "Physical, Organic & Inorganic",
      path: "/medical/neet/chemistry",
      icon: "🧪",
      color: "from-purple-500 to-pink-500",
      topics: ["Biomolecules", "Chemical Bonding", "Thermodynamics"],
      questions: "AI-Based"
    },
    {
      title: "Biology",
      desc: "Botany & Zoology",
      path: "/medical/neet/biology",
      icon: "🧬",
      color: "from-green-500 to-emerald-500",
      topics: ["Genetics", "Ecology", "Human Physiology", "Plant Anatomy"],
      questions: "AI-Based"
    },
  ];

  const stats = [
    { label: "Total Questions", value: "AI-Based" },
    { label: "Mock Tests", value: "42" },
    { label: "Study Hours", value: "240+" },
    { label: "Success Rate", value: "94%" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header with Stats */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-linear-to-r from-green-600 to-emerald-600 p-3 rounded-2xl">
            <span className="text-2xl text-white">📚</span>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              NEET 2025 Preparation
            </h1>
            <p className="text-gray-600 mt-1">
              Comprehensive study material with AI-Based practice questions
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Progress Overview */}
      

        {/* Subject Cards */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Subjects</h2>
            <span className="text-sm text-gray-500">Click to explore modules</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                onClick={() => navigate(subject.path)}
                className="group bg-white rounded-2xl p-6 cursor-pointer border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-linear-to-r ${subject.color} p-3 rounded-xl text-white`}>
                    <span className="text-2xl">{subject.icon}</span>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {subject.questions} questions
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {subject.title}
                </h3>
                <p className="text-gray-600 mb-4">{subject.desc}</p>
                
                <div className="space-y-2 mb-6">
                  {subject.topics.map((topic, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                  <span>Start Practice</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      

        {/* Bottom Banner */}
        <div className="mt-8 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to ace NEET 2025?</h3>
              <p className="text-blue-100">Configure now your AI-Based questions</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Quick Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}