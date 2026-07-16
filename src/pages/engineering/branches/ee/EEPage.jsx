import EngineeringBranchPage from "../../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "EE",
  pageTitle: "Electrical Engineering",
  breadcrumb: "Electrical",
  description: "Master core EE subjects with AI-generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  resultPath: "/engineering/result/:attemptId",
  quizLabel: "AI Electrical Quiz",
  formIcon: "fa-bolt",
  adaptiveSubject: "Power Systems",
  subjects: [
    {
      name: "Power Systems",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-bolt",
      topics: ["Generation", "Transmission", "Distribution", "Protection", "Stability"]
    },
    {
      name: "Electrical Machines",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-plug",
      topics: ["Transformers", "DC Machines", "Induction Motors", "Synchronous", "Starters"]
    },
    {
      name: "Control Systems",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-sliders-h",
      topics: ["Transfer Functions", "Stability", "Controllers", "State Space", "Root Locus"]
    },
    {
      name: "Power Electronics",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-battery-three-quarters",
      topics: ["Converters", "Inverters", "Choppers", "Thyristors", "Drives"]
    },
    {
      name: "EMF Theory",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-magnet",
      topics: ["Coulomb's Law", "Gauss's Law", "Maxwell's Equations", "Wave Propagation", "Antennas"]
    },
    {
      name: "Measurements",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-ruler",
      topics: ["Instruments", "Bridges", "Transducers", "Error Analysis", "Calibration"]
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 1 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 2 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 3 }
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI-Based questions from all subjects", subject: "Mixed Electrical Topics" },
    { title: "Time-bound Test", description: "60 minutes, 50 questions", subject: "Power Systems" }
  ]
};

export default function EEPage() {
  return <EngineeringBranchPage config={config} />;
}