import NEETBranchPage from "../shared/NEETBranchPage";

const config = {
  branch: "PHYSICS",
  resultPath: "/neet/result/:attemptId",
  pageTitle: "Physics for NEET UG",
  breadcrumb: "Physics",
  description: "Master Physics concepts with AI-generated personalized quizzes (NEET Pattern: +4/-1)",
  parentPath: "/neet",
  parentLabel: "NEET Subjects",
  subjects: [
    {
      name: "Mechanics",
      questions: "150+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-cog",
      topics: ["Kinematics", "Laws of Motion", "Work Energy Power", "Rotation", "Gravitation", "Oscillations", "Waves"],
      weightage: "25-30%",
      chapters: "Class 11: Ch 3-7, Class 12: Ch 14-15"
    },
    {
      name: "Optics",
      questions: "120+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-binoculars",
      topics: ["Ray Optics", "Wave Optics", "Optical Instruments", "Reflection", "Refraction", "Dispersion", "Interference"],
      weightage: "8-10%",
      chapters: "Class 12: Ch 9-10"
    },
    {
      name: "Modern Physics",
      questions: "110+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-atom",
      topics: ["Dual Nature", "Atoms", "Nuclei", "Semiconductors", "Communication", "Photoelectric Effect", "Radioactivity"],
      weightage: "15-20%",
      chapters: "Class 12: Ch 11-14"
    },
    {
      name: "Electrostatics & Magnetism",
      questions: "130+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-magnet",
      topics: ["Electric Charges", "Capacitance", "Current Electricity", "Magnetism", "EMI", "AC", "EM Waves"],
      weightage: "20-25%",
      chapters: "Class 12: Ch 1-8"
    },
    {
      name: "Thermodynamics",
      questions: "80+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-fire",
      topics: ["Laws of TD", "Heat Transfer", "Kinetic Theory", "Thermal Properties", "Carnot Engine", "Entropy"],
      weightage: "8-10%",
      chapters: "Class 11: Ch 11-13"
    },
    {
      name: "Properties of Matter",
      questions: "70+",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-gem",
      topics: ["Elasticity", "Viscosity", "Surface Tension", "Fluid Mechanics", "Bernoulli's Principle", "Streamline Flow"],
      weightage: "5-7%",
      chapters: "Class 11: Ch 9-10"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 1 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 3 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 2 }
  ],
  formIcon: "fa-atom",
  formDescription: "Let our AI generate personalized NEET Physics questions based on your preferences",
  category: "neet",
};

export default function PhysicsPage() {
  return (
    <NEETBranchPage config={config}>
      {/* ─── Quick Stats ─── */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Questions", value: "45", sub: "in NEET Paper", icon: "fa-question-circle" },
          { label: "Total Marks", value: "180", sub: "(45 × 4)", icon: "fa-star" },
          { label: "Time Allotted", value: "60 min", sub: "(~1.3 min/Q)", icon: "fa-clock" },
          { label: "Target Score", value: "150+", sub: "for 650+ rank", icon: "fa-bullseye" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                <i className={`fa ${stat.icon} text-xl text-black`}></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Strategy Banner ─── */}
      <div className="bg-black rounded-xl p-6 mb-8 text-white border border-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-extrabold mb-2 flex items-center gap-2">
              <i className="fa fa-bullseye text-white"></i> NEET Physics Strategy
            </h3>
            <p className="text-gray-300 mb-3">
              • NCERT is Primary Source • Practice Numericals Daily • Focus on Formulas • Master Diagrams
            </p>
            <div className="flex flex-wrap gap-3">
              {["Mechanics (30%)", "Optics (10%)", "Modern Physics (20%)", "Electromagnetism (25%)"].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => {}}
            className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors border border-gray-300"
          >
            Start Physics Quiz
          </button>
        </div>
      </div>

      {/* ─── Important Formulas ─── */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-ruler text-black"></i> Important Physics Formulas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { formula: "F = ma", desc: "Newton's 2nd Law" },
            { formula: "E = mc²", desc: "Mass-Energy Equivalence" },
            { formula: "F = G(m₁m₂)/r²", desc: "Universal Gravitation" },
            { formula: "V = IR", desc: "Ohm's Law" },
            { formula: "P = 1/f", desc: "Lens Power" },
            { formula: "λ = h/p", desc: "De Broglie Wavelength" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="font-mono text-sm text-black">{item.formula}</div>
              <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/neet/physics/formulas" className="text-base font-bold text-black hover:text-gray-700 transition-colors">
            View Complete Formula Sheet <i className="fa fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>

      {/* ─── Quick Practice ─── */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-extrabold text-black mb-4">Quick Practice Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-black hover:shadow-md transition-all cursor-pointer group"
            onClick={() => {}}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">Full Physics Mock Test</p>
                <p className="text-base text-gray-600">45 questions, 60 minutes (NEET Pattern)</p>
              </div>
              <span className="text-black group-hover:translate-x-1 transition-transform">
                <i className="fa fa-arrow-right text-lg"></i>
              </span>
            </div>
          </div>
          <div
            className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-black hover:shadow-md transition-all cursor-pointer group"
            onClick={() => {}}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">Previous Year Questions</p>
                <p className="text-base text-gray-600">10 years PYQs with solutions</p>
              </div>
              <span className="text-black group-hover:translate-x-1 transition-transform">
                <i className="fa fa-arrow-right text-lg"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </NEETBranchPage>
  );
}