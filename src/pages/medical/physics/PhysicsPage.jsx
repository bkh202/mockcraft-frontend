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
      color: "bg-blue-100",
      icon: "⚙️",
      topics: ["Kinematics", "Laws of Motion", "Work Energy Power", "Rotation", "Gravitation", "Oscillations", "Waves"],
      weightage: "25-30%",
      chapters: "Class 11: Ch 3-7, Class 12: Ch 14-15"
    },
    {
      name: "Optics",
      questions: "120+",
      difficulty: "Medium",
      color: "bg-indigo-100",
      icon: "🔭",
      topics: ["Ray Optics", "Wave Optics", "Optical Instruments", "Reflection", "Refraction", "Dispersion", "Interference"],
      weightage: "8-10%",
      chapters: "Class 12: Ch 9-10"
    },
    {
      name: "Modern Physics",
      questions: "110+",
      difficulty: "Medium",
      color: "bg-purple-100",
      icon: "⚛️",
      topics: ["Dual Nature", "Atoms", "Nuclei", "Semiconductors", "Communication", "Photoelectric Effect", "Radioactivity"],
      weightage: "15-20%",
      chapters: "Class 12: Ch 11-14"
    },
    {
      name: "Electrostatics & Magnetism",
      questions: "130+",
      difficulty: "Hard",
      color: "bg-red-100",
      icon: "🧲",
      topics: ["Electric Charges", "Capacitance", "Current Electricity", "Magnetism", "EMI", "AC", "EM Waves"],
      weightage: "20-25%",
      chapters: "Class 12: Ch 1-8"
    },
    {
      name: "Thermodynamics",
      questions: "80+",
      difficulty: "Medium",
      color: "bg-orange-100",
      icon: "🔥",
      topics: ["Laws of TD", "Heat Transfer", "Kinetic Theory", "Thermal Properties", "Carnot Engine", "Entropy"],
      weightage: "8-10%",
      chapters: "Class 11: Ch 11-13"
    },
    {
      name: "Properties of Matter",
      questions: "70+",
      difficulty: "Easy",
      color: "bg-green-100",
      icon: "💎",
      topics: ["Elasticity", "Viscosity", "Surface Tension", "Fluid Mechanics", "Bernoulli's Principle", "Streamline Flow"],
      weightage: "5-7%",
      chapters: "Class 11: Ch 9-10"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 1 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 3 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 2 }
  ],
  formIcon: "⚛️",
  formDescription: "Let our AI generate personalized NEET Physics questions based on your preferences",
  category: "neet",
};

export default function PhysicsPage() {
  return (
    <NEETBranchPage config={config}>
      {/* NEET Physics Quick Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <div className="text-sm font-medium text-blue-800">Total Questions</div>
          <div className="text-2xl font-bold text-blue-600">45</div>
          <div className="text-xs text-blue-600">in NEET Paper</div>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <div className="text-sm font-medium text-green-800">Total Marks</div>
          <div className="text-2xl font-bold text-green-600">180</div>
          <div className="text-xs text-green-600">(45 × 4)</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
          <div className="text-sm font-medium text-purple-800">Time Allotted</div>
          <div className="text-2xl font-bold text-purple-600">60 min</div>
          <div className="text-xs text-purple-600">(~1.3 min/Q)</div>
        </div>
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <div className="text-sm font-medium text-red-800">Target Score</div>
          <div className="text-2xl font-bold text-red-600">150+</div>
          <div className="text-xs text-red-600">for 650+ rank</div>
        </div>
      </div>

      {/* NEET Physics Special Features */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">🎯 NEET Physics Strategy</h3>
            <p className="text-blue-100 mb-3">
              • NCERT is Primary Source • Practice Numericals Daily • Focus on Formulas • Master Diagrams
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Mechanics (30%)</span>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Optics (10%)</span>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Modern Physics (20%)</span>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Electromagnetism (25%)</span>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Start Physics Quiz
          </button>
        </div>
      </div>

      {/* Formula Sheet Preview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📐 Important Physics Formulas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { formula: "F = ma", desc: "Newton's 2nd Law" },
            { formula: "E = mc²", desc: "Mass-Energy Equivalence" },
            { formula: "F = G(m₁m₂)/r²", desc: "Universal Gravitation" },
            { formula: "V = IR", desc: "Ohm's Law" },
            { formula: "P = 1/f", desc: "Lens Power" },
            { formula: "λ = h/p", desc: "De Broglie Wavelength" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-blue-50 rounded-lg">
              <div className="font-mono text-sm text-blue-800">{item.formula}</div>
              <div className="text-xs text-blue-600 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/neet/physics/formulas" className="text-sm text-blue-600 hover:text-blue-800">
            View Complete Formula Sheet →
          </a>
        </div>
      </div>

      {/* Quick Practice Options */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Practice Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Full Physics Mock Test</p>
                <p className="text-sm text-gray-600">45 questions, 60 minutes (NEET Pattern)</p>
              </div>
              <span className="text-blue-600">Start →</span>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Previous Year Questions</p>
                <p className="text-sm text-gray-600">10 years PYQs with solutions</p>
              </div>
              <span className="text-blue-600">Start →</span>
            </div>
          </div>
        </div>
      </div>
    </NEETBranchPage>
  );
}