import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "ELECTRICAL",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Electrical Engineering",
  breadcrumb: "Electrical",
  description: "Master core EE subjects with AI‑generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  subjects: [
    {
      name: "Power Systems",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-blue-100",
      icon: "⚡",
      topics: ["Generation", "Transmission", "Distribution", "Protection", "Stability"]
    },
    {
      name: "Electrical Machines",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-green-100",
      icon: "🔌",
      topics: ["Transformers", "DC Machines", "Induction Motors", "Synchronous", "Starters"]
    },
    {
      name: "Control Systems",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-purple-100",
      icon: "🎛️",
      topics: ["Transfer Functions", "Stability", "Controllers", "State Space", "Root Locus"]
    },
    {
      name: "Power Electronics",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-red-100",
      icon: "🔋",
      topics: ["Converters", "Inverters", "Choppers", "Thyristors", "Drives"]
    },
    {
      name: "EMF Theory",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-yellow-100",
      icon: "🧲",
      topics: ["Coulomb's Law", "Gauss's Law", "Maxwell's Equations", "Wave Propagation", "Antennas"]
    },
    {
      name: "Measurements",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-indigo-100",
      icon: "📐",
      topics: ["Instruments", "Bridges", "Transducers", "Error Analysis", "Calibration"]
    }
  ],
  companies: [
    "GENERAL", "NTPC", "BHEL", "POWER GRID", "SIEMENS",
    "ABB", "L&T", "TATA POWER", "SCHNEIDER ELECTRIC", "ISRO"
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI‑Based questions from all subjects", subject: "Mixed Electrical Topics" },
    { title: "Time‑bound Test", description: "60 minutes, 50 questions", subject: "Power Systems" }
  ],
  adaptiveSubject: "Power Systems",
  quizLabel: "Try AI‑Powered Electrical Quiz",
  formIcon: "⚡",
  formDescription: "Let our AI generate personalized electrical engineering questions based on your preferences"
};

export default function EEPremiumPage() {
  return <EngineeringBranchPage config={config} />;
}