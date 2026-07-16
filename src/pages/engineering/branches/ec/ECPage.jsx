import EngineeringBranchPage from "../../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "CIVIL",
  pageTitle: "Civil Engineering",
  breadcrumb: "Civil",
  description: "Master core Civil subjects with AI-generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  resultPath: "/engineering/result/:attemptId",
  quizLabel: "AI Civil Quiz",
  formIcon: "fa-archway",
  adaptiveSubject: "Structural Analysis",
  subjects: [
    {
      name: "Structural Analysis",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-archway",
      topics: ["Beams", "Frames", "Trusses", "Deflection", "Stiffness"]
    },
    {
      name: "Geotechnical Engineering",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-mountain",
      topics: ["Soil Mechanics", "Foundations", "Slope Stability", "Earth Pressure", "Bearing Capacity"]
    },
    {
      name: "Transportation Engineering",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-road",
      topics: ["Highway Design", "Traffic Flow", "Pavement", "Intersections", "Transport Planning"]
    },
    {
      name: "Environmental Engineering",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-leaf",
      topics: ["Water Treatment", "Waste Management", "Air Pollution", "EIA", "Sustainability"]
    },
    {
      name: "Surveying",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-ruler",
      topics: ["Levelling", "Theodolite", "GPS", "Remote Sensing", "GIS"]
    },
    {
      name: "Construction Management",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-chart-bar",
      topics: ["CPM", "PERT", "Contracts", "Cost Estimation", "Quality Control"]
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 2 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 3 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 1 }
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI-Based questions from all subjects", subject: "Mixed Civil Topics" },
    { title: "Time-bound Test", description: "60 minutes, 50 questions", subject: "Structural Analysis" }
  ]
};

export default function CivilPage() {
  return <EngineeringBranchPage config={config} />;
}