import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "TECHNOLOGY",
  branch: "MECHANICAL_TECH",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Mechanical Technology Specializations",
  breadcrumb: "Technology Specializations",
  description: "Master modern mechanical tech domains with AI‑generated personalized quizzes",
  parentPath: "/me",
  parentLabel: "Mechanical Engineering",
  subjects: [
    {
      name: "CAD/CAM & Automation",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-laptop",
      topics: ["3D Modeling", "Finite Element Analysis", "CNC Programming", "Robotics in Manufacturing", "PLM"]
    },
    {
      name: "Robotics & Mechatronics",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-robot",
      topics: ["Kinematics", "Control Systems", "Sensors & Actuators", "Embedded Systems", "ROS"]
    },
    {
      name: "Automotive Engineering",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-car",
      topics: ["Vehicle Dynamics", "Powertrain", "Engine Design", "EV & Hybrid", "ADAS"]
    },
    {
      name: "Thermal & Energy Systems",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-fire",
      topics: ["Heat Transfer", "HVAC", "Renewable Energy", "CFD", "Power Plants"]
    },
    {
      name: "Additive Manufacturing",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-print",
      topics: ["3D Printing Processes", "Materials", "Design for AM", "Post‑Processing", "Applications"]
    },
    {
      name: "Advanced Materials",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-flask",
      topics: ["Composites", "Nanomaterials", "Smart Materials", "Material Testing", "Failure Analysis"]
    }
  ],
  companies: [
    "GENERAL", "TATA MOTORS", "MAHINDRA", "MARUTI SUZUKI", "ASHOK LEYLAND",
    "L&T", "BHEL", "SIEMENS", "BOSCH", "CUMMINS"
  ],
  quickPractice: [
    { title: "CAD/CAM & Automation", description: "3D modeling, FEA, and CNC programming", subject: "CAD/CAM & Automation" },
    { title: "Automotive Systems", description: "Vehicle dynamics, powertrain, and EV tech", subject: "Automotive Engineering" }
  ],
  adaptiveSubject: "Robotics & Mechatronics",
  quizLabel: "Try AI‑Powered Mechanical Technology Quiz",
  formIcon: "fa-wrench",
  formDescription: "Let our AI generate personalized mechanical technology questions based on your preferences"
};

export default function METechnologyPage() {
  return <EngineeringBranchPage config={config} />;
}