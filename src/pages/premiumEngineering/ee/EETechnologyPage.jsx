import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "TECHNOLOGY",
  branch: "ELECTRICAL_TECH",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Electrical Technology Specializations",
  breadcrumb: "Technology Specializations",
  description: "Master modern electrical tech domains with AI‑generated personalized quizzes",
  parentPath: "/ee",
  parentLabel: "Electrical Engineering",
  subjects: [
    {
      name: "Smart Grids",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-bolt",
      topics: ["AMI", "SCADA", "Demand Response", "Microgrids", "Grid Automation"]
    },
    {
      name: "Renewable Energy Systems",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-sun",
      topics: ["Solar PV", "Wind Energy", "Energy Storage", "Grid Integration", "Power Conditioning"]
    },
    {
      name: "Electric Vehicles",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-car",
      topics: ["Battery Technology", "Charging Infrastructure", "Motor Drives", "EV Power Electronics", "BMS"]
    },
    {
      name: "Power Electronics & Drives",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-battery-three-quarters",
      topics: ["Converters", "Inverters", "Motor Control", "Soft Switching", "EMI/EMC"]
    },
    {
      name: "High Voltage Engineering",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-bolt",
      topics: ["Insulation", "Breakdown", "Testing", "Transients", "Lightning Protection"]
    },
    {
      name: "Industrial Automation",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-industry",
      topics: ["PLC", "SCADA", "DCS", "HMI", "Industrial Networks"]
    }
  ],
  companies: [
    "GENERAL", "NTPC", "BHEL", "POWER GRID", "SIEMENS",
    "ABB", "L&T", "TATA POWER", "SCHNEIDER ELECTRIC", "TESLA"
  ],
  quickPractice: [
    { title: "Renewable Energy Systems", description: "Solar, wind, and storage", subject: "Renewable Energy Systems" },
    { title: "Electric Vehicle Technology", description: "Batteries, charging, and drives", subject: "Electric Vehicles" }
  ],
  adaptiveSubject: "Smart Grids",
  quizLabel: "Try AI‑Powered Electrical Technology Quiz",
  formIcon: "fa-bolt",
  formDescription: "Let our AI generate personalized electrical technology questions based on your preferences"
};

export default function EETechnologyPage() {
  return <EngineeringBranchPage config={config} />;
}