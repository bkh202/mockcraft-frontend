import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "TECHNOLOGY",
  branch: "CIVIL_TECH",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Civil Technology Specializations",
  breadcrumb: "Technology Specializations",
  description: "Master modern civil tech domains with AI‑generated personalized quizzes",
  parentPath: "/civil",
  parentLabel: "Civil Engineering",
  subjects: [
    {
      name: "Building Information Modeling (BIM)",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-cube",
      topics: ["Revit", "Navisworks", "Clash Detection", "4D/5D BIM", "IFC Standards"]
    },
    {
      name: "Smart Cities & Infrastructure",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-city",
      topics: ["IoT in Infrastructure", "Smart Grids", "Intelligent Transport", "Urban Analytics", "Digital Twins"]
    },
    {
      name: "Sustainable Construction",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-recycle",
      topics: ["Green Building (LEED)", "Sustainable Materials", "Energy Efficiency", "Waste Reduction", "Life Cycle Assessment"]
    },
    {
      name: "Geospatial Technologies",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-globe",
      topics: ["GIS", "Remote Sensing", "GPS/GNSS", "LiDAR", "Spatial Analysis"]
    },
    {
      name: "Construction Automation & Robotics",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-robot",
      topics: ["Robotics in Construction", "Drones", "3D Printing", "Automated Equipment", "Construction AI"]
    },
    {
      name: "Advanced Construction Materials",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-flask",
      topics: ["High‑Performance Concrete", "Smart Materials", "Nanomaterials", "Composites", "Self‑healing Materials"]
    }
  ],
  companies: [
    "GENERAL", "L&T TECHNOLOGY", "TATA PROJECTS", "AUTODESK", "BENTLEY SYSTEMS",
    "TRIMBLE", "AECOM", "JACOBS", "HDR", "WSP"
  ],
  quickPractice: [
    { title: "BIM & Digital Construction", description: "Revit, Navisworks, and clash detection", subject: "Building Information Modeling (BIM)" },
    { title: "Smart Infrastructure Essentials", description: "IoT, digital twins, and urban analytics", subject: "Smart Cities & Infrastructure" }
  ],
  adaptiveSubject: "Building Information Modeling (BIM)",
  quizLabel: "Try AI‑Powered Civil Technology Quiz",
  formIcon: "fa-cube",
  formDescription: "Let our AI generate personalized civil technology questions based on your preferences"
};

export default function CivilTechnologyPage() {
  return <EngineeringBranchPage config={config} />;
}