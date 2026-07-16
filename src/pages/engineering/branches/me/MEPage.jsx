import EngineeringBranchPage from "../../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "ME",
  pageTitle: "Mechanical Engineering",
  breadcrumb: "Mechanical",
  description: "Master core ME subjects with AI-generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  resultPath: "/engineering/result/:attemptId",
  quizLabel: "AI Mechanical Quiz",
  formIcon: "fa-cogs",
  adaptiveSubject: "Thermodynamics",
  subjects: [
    {
      name: "Thermodynamics",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-fire",
      topics: ["Laws of TD", "Heat Transfer", "Entropy", "Refrigeration", "Power Cycles"]
    },
    {
      name: "Fluid Mechanics",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-tint",
      topics: ["Bernoulli's", "Flow Measurement", "Pumps", "Turbines", "Viscosity"]
    },
    {
      name: "Machine Design",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-cogs",
      topics: ["Gears", "Bearings", "Shafts", "Fasteners", "Springs"]
    },
    {
      name: "Heat Transfer",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-thermometer-half",
      topics: ["Conduction", "Convection", "Radiation", "Heat Exchangers", "Insulation"]
    },
    {
      name: "Engineering Mechanics",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-balance-scale",
      topics: ["Statics", "Dynamics", "Moments", "Friction", "Trusses"]
    },
    {
      name: "CAD/CAM",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-laptop",
      topics: ["AutoCAD", "SolidWorks", "CNC", "3D Modeling", "Simulation"]
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 2 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 3 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 1 }
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI-Based questions from all subjects", subject: "Mixed Mechanical Topics" },
    { title: "Time-bound Test", description: "60 minutes, 50 questions", subject: "Thermodynamics" }
  ]
};

export default function MEPage() {
  return <EngineeringBranchPage config={config} />;
}