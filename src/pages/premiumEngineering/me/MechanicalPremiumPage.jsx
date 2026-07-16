import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "MECHANICAL",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Mechanical Engineering",
  breadcrumb: "Mechanical",
  description: "Master core Mechanical subjects with AI‑generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  subjects: [
    {
      name: "Thermodynamics",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-fire",
      topics: ["Laws of Thermodynamics", "Entropy", "Cycles", "Properties of Steam", "Gas Power Cycles"]
    },
    {
      name: "Fluid Mechanics",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-tint",
      topics: ["Fluid Properties", "Fluid Statics", "Fluid Dynamics", "Pipe Flow", "Turbomachinery"]
    },
    {
      name: "Strength of Materials",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-cogs",
      topics: ["Stress & Strain", "Bending Moment", "Torsion", "Deflection", "Columns"]
    },
    {
      name: "Theory of Machines",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-wrench",
      topics: ["Kinematics", "Dynamics", "Gears", "Cams", "Vibrations"]
    },
    {
      name: "Machine Design",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-tools",
      topics: ["Design for Static Loading", "Fatigue", "Shafts", "Springs", "Bearings"]
    },
    {
      name: "Manufacturing Processes",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-industry",
      topics: ["Casting", "Forming", "Machining", "Welding", "Additive Manufacturing"]
    }
  ],
  companies: [
    "GENERAL", "TATA MOTORS", "MAHINDRA", "MARUTI SUZUKI", "ASHOK LEYLAND",
    "L&T", "JSW", "SAIL", "BHEL", "THERMAX"
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI‑Based questions from all subjects", subject: "Mixed Mechanical Topics" },
    { title: "Time‑bound Test", description: "60 minutes, 50 questions", subject: "Thermodynamics" }
  ],
  adaptiveSubject: "Thermodynamics",
  quizLabel: "Try AI‑Powered Mechanical Quiz",
  formIcon: "fa-cogs",
  formDescription: "Let our AI generate personalized mechanical engineering questions based on your preferences"
};

export default function MechanicalPremiumPage() {
  return <EngineeringBranchPage config={config} />;
}