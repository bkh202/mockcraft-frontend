import { useNavigate } from "react-router-dom";

export default function NeetHome() {
  const navigate = useNavigate();

  const subjects = [
    {
      title: "Physics",
      desc: "Mechanics, Optics, Modern Physics",
      path: "/medical/neet/physics",
      icon: "fa-atom",
      topics: ["Electrodynamics", "Thermodynamics", "Waves", "Optics"],
      questions: "AI-Based"
    },
    {
      title: "Chemistry",
      desc: "Physical, Organic & Inorganic",
      path: "/medical/neet/chemistry",
      icon: "fa-flask",
      topics: ["Biomolecules", "Chemical Bonding", "Thermodynamics"],
      questions: "AI-Based"
    },
    {
      title: "Biology",
      desc: "Botany & Zoology",
      path: "/medical/neet/biology",
      icon: "fa-dna",
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
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      {/* ── HEADER ── */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gray-100 p-3 rounded-2xl border border-gray-200">
            <i className="fa fa-book-open text-2xl text-black"></i>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-black">
              NEET 2025 Preparation
            </h1>
            <p className="text-gray-600 text-lg mt-1">
              Comprehensive study material with AI-Based practice questions
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-black">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SUBJECT CARDS ── */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-extrabold text-black">Subjects</h2>
          <span className="text-sm text-gray-500">Click to explore modules</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              onClick={() => navigate(subject.path)}
              className="group bg-white rounded-2xl p-6 cursor-pointer border border-gray-200 hover:border-black hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gray-100 p-3 rounded-xl border border-gray-200 text-black">
                  {/* ✅ FIX: added "fa" before the icon class */}
                  <i className={`fa ${subject.icon} text-2xl`}></i>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                  {subject.questions} questions
                </span>
              </div>

              <h3 className="text-xl font-bold text-black mb-2">
                {subject.title}
              </h3>
              <p className="text-gray-600 mb-4">{subject.desc}</p>

              <div className="space-y-2 mb-6">
                {subject.topics.map((topic, i) => (
                  <div key={i} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-black mr-2"></div>
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center font-bold text-black group-hover:text-gray-700">
                <span>Start Practice</span>
                <i className="fa fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BANNER ── */}
      <div className="mt-8 bg-black rounded-2xl p-6 text-white border border-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-extrabold mb-2 flex items-center gap-2">
              <i className="fa fa-robot text-white"></i> Ready to ace NEET 2025?
            </h3>
            <p className="text-gray-300">Configure now your AI-Based questions</p>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors border border-gray-300">
            Quick Start
          </button>
        </div>
      </div>
    </div>
  );
}