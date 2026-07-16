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
      color: "bg-gray-100",
      icon: "fa-paw",
      topics: ["Animal Kingdom", "Structural Organization", "Digestion", "Respiration", "Circulation", "Excretion", "Neural Control", "Reproduction"],
      weightage: "45-50%",
      chapters: "Class 11: Ch 4-5, 7, 17-21, Class 12: Ch 1, 3-4, 8-13"
    },
    {
      name: "Botany",
      questions: "230+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-leaf",
      topics: ["Plant Kingdom", "Morphology", "Anatomy", "Photosynthesis", "Respiration", "Plant Growth", "Reproduction", "Biotechnology"],
      weightage: "45-50%",
      chapters: "Class 11: Ch 3-6, 13-15, Class 12: Ch 2, 5-7, 9-12"
    },
    {
      name: "Human Physiology",
      questions: "180+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-heart",
      topics: ["Digestive System", "Respiratory System", "Circulatory System", "Excretory System", "Nervous System", "Endocrine System", "Locomotion", "Reproduction"],
      weightage: "35-40%",
      chapters: "Class 11: Ch 16-21"
    },
    {
      name: "Genetics & Evolution",
      questions: "150+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-dna",
      topics: ["Mendelian Genetics", "Molecular Basis", "Evolution", "Human Evolution", "DNA Replication", "Transcription", "Translation", "Genetic Disorders"],
      weightage: "25-30%",
      chapters: "Class 12: Ch 5-7"
    },
    {
      name: "Ecology",
      questions: "120+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-globe",
      topics: ["Organisms & Populations", "Ecosystem", "Biodiversity", "Conservation", "Environmental Issues", "Pollution", "Climate Change", "Wildlife"],
      weightage: "15-20%",
      chapters: "Class 12: Ch 13-16"
    },
    {
      name: "Cell Biology",
      questions: "100+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-microscope",
      topics: ["Cell Structure", "Biomolecules", "Cell Cycle", "Cell Division", "Enzymes", "Metabolism", "Transport", "Cell Signaling"],
      weightage: "15-20%",
      chapters: "Class 11: Ch 8-11"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 0 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 3 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 3 }
  ],
  formIcon: "fa-dna",
  formDescription: "Let our AI generate personalized NEET Biology questions based on your preferences",
  category: "neet",
};

export default function BiologyPage() {
  return (
    <NEETBranchPage config={config}>
      {/* ─── Quick Stats ─── */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Questions", value: "90", sub: "in NEET Paper", icon: "fa-question-circle" },
          { label: "Total Marks", value: "360", sub: "(90 × 4)", icon: "fa-star" },
          { label: "Time Allotted", value: "60 min", sub: "(~0.7 min/Q)", icon: "fa-clock" },
          { label: "Target Score", value: "300+", sub: "for 650+ rank", icon: "fa-bullseye" },
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
              <i className="fa fa-bullseye text-white"></i> NEET Biology Strategy
            </h3>
            <p className="text-gray-300 mb-3">
              • NCERT is Primary Source • Focus on Diagrams • Memorize Terminology • Practice Assertion-Reason
            </p>
            <div className="flex flex-wrap gap-3">
              {["Zoology (45%)", "Botany (45%)", "Human Physio (40%)", "Genetics (30%)"].map((tag, i) => (
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
            Start Biology Quiz
          </button>
        </div>
      </div>

      {/* ─── Important Diagrams ─── */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-image text-black"></i> Important Biological Diagrams
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Human Heart", desc: "Chambers, valves, blood flow" },
            { title: "Nephron Structure", desc: "Bowman's capsule, tubules" },
            { title: "DNA Double Helix", desc: "Nucleotides, base pairing" },
            { title: "Neuron Structure", desc: "Dendrites, axon, synapse" },
            { title: "Flower Structure", desc: "Stamen, pistil, pollination" },
            { title: "Mitochondria", desc: "Cristae, matrix, ATP synthesis" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-base font-bold text-black">{item.title}</div>
              <div className="text-sm text-gray-600 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/neet/biology/diagrams" className="text-base font-bold text-black hover:text-gray-700 transition-colors">
            View Complete Diagram Sheet <i className="fa fa-arrow-right ml-1"></i>
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
                <p className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">Full Biology Mock Test</p>
                <p className="text-base text-gray-600">90 questions, 60 minutes (NEET Pattern)</p>
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
                <p className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">Assertion-Reason Questions</p>
                <p className="text-base text-gray-600">100+ A-R type questions with explanations</p>
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