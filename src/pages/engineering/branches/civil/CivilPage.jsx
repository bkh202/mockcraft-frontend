// CivilPage.jsx
import EngineeringBranchPage from "../../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING", branch: "CIVIL",
  pageTitle: "Civil Engineering",
  breadcrumb: "Civil", description: "Master core Civil subjects with AI-generated personalized quizzes",
  parentPath: "/engineering", parentLabel: "Engineering",
  resultPath: "/engineering/result/:attemptId", quizLabel: "AI Civil Quiz", formIcon: "🏗️",
  adaptiveSubject: "Structural Analysis",
  subjects: [
    { name: "Structural Analysis", questions: "AI-Based", difficulty: "Hard", color: "bg-blue-100", icon: "🏗️", topics: ["Beams", "Frames", "Trusses", "Deflection", "Stiffness"] },
    { name: "Geotechnical Engineering", questions: "AI-Based", difficulty: "Medium", color: "bg-green-100", icon: "⛰️", topics: ["Soil Mechanics", "Foundations", "Slope Stability", "Earth Pressure", "Bearing Capacity"] },
    { name: "Transportation Engineering", questions: "AI-Based", difficulty: "Medium", color: "bg-purple-100", icon: "🚦", topics: ["Highway Design", "Traffic Flow", "Pavement", "Intersections", "Transport Planning"] },
    { name: "Environmental Engineering", questions: "AI-Based", difficulty: "Easy", color: "bg-red-100", icon: "🌿", topics: ["Water Treatment", "Waste Management", "Air Pollution", "EIA", "Sustainability"] },
    { name: "Surveying", questions: "AI-Based", difficulty: "Easy", color: "bg-yellow-100", icon: "📏", topics: ["Levelling", "Theodolite", "GPS", "Remote Sensing", "GIS"] },
    { name: "Construction Management", questions: "AI-Based", difficulty: "Medium", color: "bg-indigo-100", icon: "📊", topics: ["CPM", "PERT", "Contracts", "Cost Estimation", "Quality Control"] }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 2 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 3 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 1 }
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI-Based questions from all subjects", subject: "Mixed Civil Topics" },
    { title: "Time-bound Test", description: "60 minutes, 50 questions", subject: "Structural Analysis" }
  ]
};

export default function CivilPage() {
  return <EngineeringBranchPage config={config} />;
}