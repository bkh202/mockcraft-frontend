// MEPage.jsx
import EngineeringBranchPage from "../../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING", branch: "ME",
  pageTitle: "Mechanical Engineering",
  breadcrumb: "Mechanical", description: "Master core ME subjects with AI-generated personalized quizzes",
  parentPath: "/engineering", parentLabel: "Engineering",
  resultPath: "/engineering/result/:attemptId", quizLabel: "AI Mechanical Quiz", formIcon: "⚙️",
  adaptiveSubject: "Thermodynamics",
  subjects: [
    { name: "Thermodynamics", questions: "AI-Based", difficulty: "Medium", color: "bg-blue-100", icon: "🔥", topics: ["Laws of TD", "Heat Transfer", "Entropy", "Refrigeration", "Power Cycles"] },
    { name: "Fluid Mechanics", questions: "AI-Based", difficulty: "Medium", color: "bg-green-100", icon: "💧", topics: ["Bernoulli's", "Flow Measurement", "Pumps", "Turbines", "Viscosity"] },
    { name: "Machine Design", questions: "AI-Based", difficulty: "Hard", color: "bg-purple-100", icon: "⚙️", topics: ["Gears", "Bearings", "Shafts", "Fasteners", "Springs"] },
    { name: "Heat Transfer", questions: "AI-Based", difficulty: "Medium", color: "bg-red-100", icon: "🌡️", topics: ["Conduction", "Convection", "Radiation", "Heat Exchangers", "Insulation"] },
    { name: "Engineering Mechanics", questions: "AI-Based", difficulty: "Easy", color: "bg-yellow-100", icon: "⚖️", topics: ["Statics", "Dynamics", "Moments", "Friction", "Trusses"] },
    { name: "CAD/CAM", questions: "AI-Based", difficulty: "Easy", color: "bg-indigo-100", icon: "🖥️", topics: ["AutoCAD", "SolidWorks", "CNC", "3D Modeling", "Simulation"] }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 2 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 3 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 1 }
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI-Based questions from all subjects", subject: "Mixed Mechanical Topics" },
    { title: "Time-bound Test", description: "60 minutes, 50 questions", subject: "Thermodynamics" }
  ]
};

export default function MEPage() {
  return <EngineeringBranchPage config={config} />;
}