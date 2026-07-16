import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "CIVIL",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Civil Engineering",
  breadcrumb: "Civil",
  description: "Master core Civil subjects with AI‑generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  subjects: [
    {
      name: "Structural Analysis",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100", // optional: you can keep or change to grayscale
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
  companies: [
    "GENERAL", "L&T", "DLF", "SHAPOORJI PALLONJI", "TATA PROJECTS",
    "GAMMON INDIA", "AFCONS", "NBCC", "IRCON", "CPWD"
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI‑Based questions from all subjects", subject: "Mixed Civil Topics" },
    { title: "Time‑bound Test", description: "60 minutes, 50 questions", subject: "Structural Analysis" }
  ],
  adaptiveSubject: "Structural Analysis",
  quizLabel: "Try AI‑Powered Civil Quiz",
  formIcon: "fa-archway",
  formDescription: "Let our AI generate personalized civil engineering questions based on your preferences"
};

export default function CivilPremiumPage() {
  return <EngineeringBranchPage config={config} />;
}