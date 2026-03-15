import NEETBranchPage from "../shared/NEETBranchPage";

const config = {
  branch: "CHEMISTRY",
  resultPath: "/neet/result/:attemptId",
  pageTitle: "Chemistry for NEET UG",
  breadcrumb: "Chemistry",
  description: "Master Chemistry concepts with AI-generated personalized quizzes (NEET Pattern: +4/-1)",
  parentPath: "/neet",
  parentLabel: "NEET Subjects",
  subjects: [
    {
      name: "Organic Chemistry",
      questions: "180+",
      difficulty: "Hard",
      color: "bg-green-100",
      icon: "⚗️",
      topics: ["Hydrocarbons", "Haloalkanes", "Alcohols", "Aldehydes", "Carboxylic Acids", "Amines", "Polymers", "Biomolecules"],
      weightage: "30-35%",
      chapters: "Class 11: Ch 12-13, Class 12: Ch 10-14, 15"
    },
    {
      name: "Inorganic Chemistry",
      questions: "150+",
      difficulty: "Medium",
      color: "bg-blue-100",
      icon: "🧪",
      topics: ["Periodic Table", "Chemical Bonding", "s-Block", "p-Block", "d-Block", "f-Block", "Coordination Compounds", "Metallurgy"],
      weightage: "25-30%",
      chapters: "Class 11: Ch 3, 10-11, Class 12: Ch 7-9"
    },
    {
      name: "Physical Chemistry",
      questions: "140+",
      difficulty: "Hard",
      color: "bg-purple-100",
      icon: "⚖️",
      topics: ["Mole Concept", "States of Matter", "Thermodynamics", "Equilibrium", "Redox", "Chemical Kinetics", "Electrochemistry", "Surface Chemistry"],
      weightage: "25-30%",
      chapters: "Class 11: Ch 1, 5-6, 12, Class 12: Ch 2-6"
    },
    {
      name: "Biomolecules",
      questions: "80+",
      difficulty: "Medium",
      color: "bg-red-100",
      icon: "🧬",
      topics: ["Carbohydrates", "Proteins", "Enzymes", "Vitamins", "Nucleic Acids", "Hormones", "Metabolism", "Chemistry in Life"],
      weightage: "8-10%",
      chapters: "Class 12: Ch 14"
    },
    {
      name: "Environmental Chemistry",
      questions: "60+",
      difficulty: "Easy",
      color: "bg-emerald-100",
      icon: "🌿",
      topics: ["Pollution", "Green Chemistry", "Ozone Depletion", "Acid Rain", "Greenhouse Effect", "Water Treatment", "Waste Management"],
      weightage: "5-7%",
      chapters: "Class 11: Ch 14"
    },
    {
      name: "Chemistry in Everyday Life",
      questions: "50+",
      difficulty: "Easy",
      color: "bg-yellow-100",
      icon: "🏥",
      topics: ["Drugs", "Medicines", "Food Additives", "Cleaning Agents", "Cosmetics", "Soaps", "Detergents", "Fertilizers"],
      weightage: "3-5%",
      chapters: "Class 12: Ch 16"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 2 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 2 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 2 }
  ],
  formIcon: "⚗️",
  formDescription: "Let our AI generate personalized NEET Chemistry questions based on your preferences",
  category: "neet",
};

export default function ChemistryPage() {
  return (
    <NEETBranchPage config={config}>
      {/* NEET Chemistry Quick Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <div className="text-sm font-medium text-green-800">Total Questions</div>
          <div className="text-2xl font-bold text-green-600">45</div>
          <div className="text-xs text-green-600">in NEET Paper</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <div className="text-sm font-medium text-blue-800">Total Marks</div>
          <div className="text-2xl font-bold text-blue-600">180</div>
          <div className="text-xs text-blue-600">(45 × 4)</div>
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

      {/* NEET Chemistry Special Features */}
      <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">🎯 NEET Chemistry Strategy</h3>
            <p className="text-green-100 mb-3">
              • NCERT is Primary Source • Memorize Reactions • Understand Mechanisms • Practice Numericals
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Organic (35%)</span>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Inorganic (30%)</span>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Physical (30%)</span>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Others (5%)</span>
            </div>
          </div>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Start Chemistry Quiz
          </button>
        </div>
      </div>

      {/* Important Reactions Preview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">⚗️ Important Chemical Reactions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { formula: "R-OH + SOCl₂ → R-Cl + SO₂ + HCl", desc: "Alcohol to Alkyl Chloride" },
            { formula: "R-COOH + R'-OH → R-COOR' + H₂O", desc: "Esterification Reaction" },
            { formula: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂", desc: "Fermentation of Glucose" },
            { formula: "CH₃COCH₃ + I₂ + NaOH → CH₃COONa + CHI₃", desc: "Iodoform Test" },
            { formula: "2KClO₃ → 2KCl + 3O₂", desc: "Thermal Decomposition" },
            { formula: "NH₃ + HCl → NH₄Cl", desc: "Formation of Ammonium Salt" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-green-50 rounded-lg">
              <div className="font-mono text-sm text-green-800">{item.formula}</div>
              <div className="text-xs text-green-600 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/neet/chemistry/reactions" className="text-sm text-green-600 hover:text-green-800">
            View Complete Reaction Sheet →
          </a>
        </div>
      </div>

      {/* Quick Practice Options */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Practice Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4 hover:border-green-400 hover:shadow-sm transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Full Chemistry Mock Test</p>
                <p className="text-sm text-gray-600">45 questions, 60 minutes (NEET Pattern)</p>
              </div>
              <span className="text-green-600">Start →</span>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-4 hover:border-green-400 hover:shadow-sm transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Organic Chemistry Name Reactions</p>
                <p className="text-sm text-gray-600">50+ important name reactions with mechanisms</p>
              </div>
              <span className="text-green-600">Start →</span>
            </div>
          </div>
        </div>
      </div>
    </NEETBranchPage>
  );
}