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
      color: "bg-gray-100",
      icon: "fa-flask",
      topics: ["Hydrocarbons", "Haloalkanes", "Alcohols", "Aldehydes", "Carboxylic Acids", "Amines", "Polymers", "Biomolecules"],
      weightage: "30-35%",
      chapters: "Class 11: Ch 12-13, Class 12: Ch 10-14, 15"
    },
    {
      name: "Inorganic Chemistry",
      questions: "150+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-vial",
      topics: ["Periodic Table", "Chemical Bonding", "s-Block", "p-Block", "d-Block", "f-Block", "Coordination Compounds", "Metallurgy"],
      weightage: "25-30%",
      chapters: "Class 11: Ch 3, 10-11, Class 12: Ch 7-9"
    },
    {
      name: "Physical Chemistry",
      questions: "140+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-balance-scale",
      topics: ["Mole Concept", "States of Matter", "Thermodynamics", "Equilibrium", "Redox", "Chemical Kinetics", "Electrochemistry", "Surface Chemistry"],
      weightage: "25-30%",
      chapters: "Class 11: Ch 1, 5-6, 12, Class 12: Ch 2-6"
    },
    {
      name: "Biomolecules",
      questions: "80+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-dna",
      topics: ["Carbohydrates", "Proteins", "Enzymes", "Vitamins", "Nucleic Acids", "Hormones", "Metabolism", "Chemistry in Life"],
      weightage: "8-10%",
      chapters: "Class 12: Ch 14"
    },
    {
      name: "Environmental Chemistry",
      questions: "60+",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-leaf",
      topics: ["Pollution", "Green Chemistry", "Ozone Depletion", "Acid Rain", "Greenhouse Effect", "Water Treatment", "Waste Management"],
      weightage: "5-7%",
      chapters: "Class 11: Ch 14"
    },
    {
      name: "Chemistry in Everyday Life",
      questions: "50+",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-pills",
      topics: ["Drugs", "Medicines", "Food Additives", "Cleaning Agents", "Cosmetics", "Soaps", "Detergents", "Fertilizers"],
      weightage: "3-5%",
      chapters: "Class 12: Ch 16"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 2 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 2 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 2 }
  ],
  formIcon: "fa-flask",
  formDescription: "Let our AI generate personalized NEET Chemistry questions based on your preferences",
  category: "neet",
};

export default function ChemistryPage() {
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
              <i className="fa fa-bullseye text-white"></i> NEET Chemistry Strategy
            </h3>
            <p className="text-gray-300 mb-3">
              • NCERT is Primary Source • Memorize Reactions • Understand Mechanisms • Practice Numericals
            </p>
            <div className="flex flex-wrap gap-3">
              {["Organic (35%)", "Inorganic (30%)", "Physical (30%)", "Others (5%)"].map((tag, i) => (
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
            Start Chemistry Quiz
          </button>
        </div>
      </div>

      {/* ─── Important Reactions ─── */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-flask text-black"></i> Important Chemical Reactions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { formula: "R-OH + SOCl₂ → R-Cl + SO₂ + HCl", desc: "Alcohol to Alkyl Chloride" },
            { formula: "R-COOH + R'-OH → R-COOR' + H₂O", desc: "Esterification Reaction" },
            { formula: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂", desc: "Fermentation of Glucose" },
            { formula: "CH₃COCH₃ + I₂ + NaOH → CH₃COONa + CHI₃", desc: "Iodoform Test" },
            { formula: "2KClO₃ → 2KCl + 3O₂", desc: "Thermal Decomposition" },
            { formula: "NH₃ + HCl → NH₄Cl", desc: "Formation of Ammonium Salt" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="font-mono text-sm text-black">{item.formula}</div>
              <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/neet/chemistry/reactions" className="text-base font-bold text-black hover:text-gray-700 transition-colors">
            View Complete Reaction Sheet <i className="fa fa-arrow-right ml-1"></i>
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
                <p className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">Full Chemistry Mock Test</p>
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
                <p className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">Organic Chemistry Name Reactions</p>
                <p className="text-base text-gray-600">50+ important name reactions with mechanisms</p>
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