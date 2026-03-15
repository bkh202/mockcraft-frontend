// EEPage.jsx
import EngineeringBranchPage from "../../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING", branch: "EE",
  pageTitle: "Electrical Engineering",
  breadcrumb: "Electrical", description: "Master core EE subjects with AI-generated personalized quizzes",
  parentPath: "/engineering", parentLabel: "Engineering",
  resultPath: "/engineering/result/:attemptId", quizLabel: "AI Electrical Quiz", formIcon: "⚡",
  adaptiveSubject: "Power Systems",
  subjects: [
    { name: "Power Systems", questions: "AI-Based", difficulty: "Medium", color: "bg-blue-100", icon: "⚡", topics: ["Generation", "Transmission", "Distribution", "Protection", "Stability"] },
    { name: "Electrical Machines", questions: "AI-Based", difficulty: "Hard", color: "bg-green-100", icon: "🔌", topics: ["Transformers", "DC Machines", "Induction Motors", "Synchronous", "Starters"] },
    { name: "Control Systems", questions: "AI-Based", difficulty: "Medium", color: "bg-purple-100", icon: "🎛️", topics: ["Transfer Functions", "Stability", "Controllers", "State Space", "Root Locus"] },
    { name: "Power Electronics", questions: "AI-Based", difficulty: "Hard", color: "bg-red-100", icon: "🔋", topics: ["Converters", "Inverters", "Choppers", "Thyristors", "Drives"] },
    { name: "EMF Theory", questions: "AI-Based", difficulty: "Hard", color: "bg-yellow-100", icon: "🧲", topics: ["Coulomb's Law", "Gauss's Law", "Maxwell's Equations", "Wave Propagation", "Antennas"] },
    { name: "Measurements", questions: "AI-Based", difficulty: "Easy", color: "bg-indigo-100", icon: "📐", topics: ["Instruments", "Bridges", "Transducers", "Error Analysis", "Calibration"] }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 1 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 2 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 3 }
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI-Based questions from all subjects", subject: "Mixed Electrical Topics" },
    { title: "Time-bound Test", description: "60 minutes, 50 questions", subject: "Power Systems" }
  ]
};

export default function EEPage() {
  return <EngineeringBranchPage config={config} />;
}