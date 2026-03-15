import NEETBranchPage from "../shared/NEETBranchPage";

const config = {
  branch: "BIOLOGY",
  resultPath: "/neet/result/:attemptId",
  pageTitle: "Biology for NEET UG",
  breadcrumb: "Biology",
  description: "Master Biology concepts with AI-generated personalized quizzes (NEET Pattern: +4/-1)",
  parentPath: "/neet",
  parentLabel: "NEET Subjects",
  subjects: [
    {
      name: "Zoology",
      questions: "250+",
      difficulty: "Hard",
      color: "bg-red-100",
      icon: "🐾",
      topics: ["Animal Kingdom", "Structural Organization", "Digestion", "Respiration", "Circulation", "Excretion", "Neural Control", "Reproduction"],
      weightage: "45-50%",
      chapters: "Class 11: Ch 4-5, 7, 17-21, Class 12: Ch 1, 3-4, 8-13"
    },
    {
      name: "Botany",
      questions: "230+",
      difficulty: "Hard",
      color: "bg-emerald-100",
      icon: "🌿",
      topics: ["Plant Kingdom", "Morphology", "Anatomy", "Photosynthesis", "Respiration", "Plant Growth", "Reproduction", "Biotechnology"],
      weightage: "45-50%",
      chapters: "Class 11: Ch 3-6, 13-15, Class 12: Ch 2, 5-7, 9-12"
    },
    {
      name: "Human Physiology",
      questions: "180+",
      difficulty: "Medium",
      color: "bg-pink-100",
      icon: "❤️",
      topics: ["Digestive System", "Respiratory System", "Circulatory System", "Excretory System", "Nervous System", "Endocrine System", "Locomotion", "Reproduction"],
      weightage: "35-40%",
      chapters: "Class 11: Ch 16-21"
    },
    {
      name: "Genetics & Evolution",
      questions: "150+",
      difficulty: "Hard",
      color: "bg-purple-100",
      icon: "🧬",
      topics: ["Mendelian Genetics", "Molecular Basis", "Evolution", "Human Evolution", "DNA Replication", "Transcription", "Translation", "Genetic Disorders"],
      weightage: "25-30%",
      chapters: "Class 12: Ch 5-7"
    },
    {
      name: "Ecology",
      questions: "120+",
      difficulty: "Medium",
      color: "bg-green-100",
      icon: "🌍",
      topics: ["Organisms & Populations", "Ecosystem", "Biodiversity", "Conservation", "Environmental Issues", "Pollution", "Climate Change", "Wildlife"],
      weightage: "15-20%",
      chapters: "Class 12: Ch 13-16"
    },
    {
      name: "Cell Biology",
      questions: "100+",
      difficulty: "Medium",
      color: "bg-blue-100",
      icon: "🔬",
      topics: ["Cell Structure", "Biomolecules", "Cell Cycle", "Cell Division", "Enzymes", "Metabolism", "Transport", "Cell Signaling"],
      weightage: "15-20%",
      chapters: "Class 11: Ch 8-11"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 0 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 3 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 3 }
  ],
  formIcon: "🧬",
  formDescription: "Let our AI generate personalized NEET Biology questions based on your preferences",
  category: "neet",
};

export default function BiologyPage() {
  return (
    <NEETBranchPage config={config}>
      {/* NEET Biology Quick Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <div className="text-sm font-medium text-red-800">Total Questions</div>
          <div className="text-2xl font-bold text-red-600">90</div>
          <div className="text-xs text-red-600">in NEET Paper</div>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <div className="text-sm font-medium text-green-800">Total Marks</div>
          <div className="text-2xl font-bold text-green-600">360</div>
          <div className="text-xs text-green-600">(90 × 4)</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
          <div className="text-sm font-medium text-purple-800">Time Allotted</div>
          <div className="text-2xl font-bold text-purple-600">60 min</div>
          <div className="text-xs text-purple-600">(~0.7 min/Q)</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <div className="text-sm font-medium text-blue-800">Target Score</div>
          <div className="text-2xl font-bold text-blue-600">300+</div>
          <div className="text-xs text-blue-600">for 650+ rank</div>
        </div>
      </div>

      {/* NEET Biology Special Features */}
      <div className="bg-linear-to-r from-red-600 to-pink-600 rounded-xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">🎯 NEET Biology Strategy</h3>
            <p className="text-red-100 mb-3">
              • NCERT is Primary Source • Focus on Diagrams • Memorize Terminology • Practice Assertion-Reason
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Zoology (45%)</span>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Botany (45%)</span>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Human Physio (40%)</span>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Genetics (30%)</span>
            </div>
          </div>
          <button
            onClick={() => {
              // This button is decorative; actual quiz start must be via subject cards.
            }}
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Start Biology Quiz
          </button>
        </div>
      </div>

      {/* Important Diagrams Preview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">🔬 Important Biological Diagrams</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Human Heart", desc: "Chambers, valves, blood flow" },
            { title: "Nephron Structure", desc: "Bowman's capsule, tubules" },
            { title: "DNA Double Helix", desc: "Nucleotides, base pairing" },
            { title: "Neuron Structure", desc: "Dendrites, axon, synapse" },
            { title: "Flower Structure", desc: "Stamen, pistil, pollination" },
            { title: "Mitochondria", desc: "Cristae, matrix, ATP synthesis" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-red-50 rounded-lg">
              <div className="text-sm font-medium text-red-800">{item.title}</div>
              <div className="text-xs text-red-600 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/neet/biology/diagrams" className="text-sm text-red-600 hover:text-red-800">
            View Complete Diagram Sheet →
          </a>
        </div>
      </div>

      {/* Quick Practice Options */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Practice Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="bg-white border border-gray-300 rounded-lg p-4 hover:border-red-400 hover:shadow-sm transition-colors cursor-pointer"
            onClick={() => {
              // These would need to set subject/subtopic; we keep them decorative.
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Full Biology Mock Test</p>
                <p className="text-sm text-gray-600">90 questions, 60 minutes (NEET Pattern)</p>
              </div>
              <span className="text-red-600">Start →</span>
            </div>
          </div>
          <div
            className="bg-white border border-gray-300 rounded-lg p-4 hover:border-red-400 hover:shadow-sm transition-colors cursor-pointer"
            onClick={() => {}}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Assertion-Reason Questions</p>
                <p className="text-sm text-gray-600">100+ A-R type questions with explanations</p>
              </div>
              <span className="text-red-600">Start →</span>
            </div>
          </div>
        </div>
      </div>
    </NEETBranchPage>
  );
}