import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "TECHNOLOGY",
  branch: "ELECTRONICS_TECH",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Electronics Technology Specializations",
  breadcrumb: "Technology Specializations",
  description: "Master modern electronics tech domains with AI‑generated personalized quizzes",
  parentPath: "/ece",
  parentLabel: "Electronics Engineering",
  subjects: [
    {
      name: "Embedded Systems",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-blue-100",
      icon: "⚙️",
      topics: ["Microcontrollers", "RTOS", "ARM Cortex", "Firmware", "Embedded C", "Peripherals"]
    },
    {
      name: "Internet of Things (IoT)",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-green-100",
      icon: "📶",
      topics: ["IoT Protocols", "Sensors", "Cloud Integration", "Edge Computing", "MQTT", "LoRaWAN"]
    },
    {
      name: "VLSI & Chip Design",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-purple-100",
      icon: "🔬",
      topics: ["Digital VLSI", "Analog VLSI", "Verilog/VHDL", "FPGA", "ASIC", "Physical Design"]
    },
    {
      name: "Modern Communication Technologies",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-yellow-100",
      icon: "📡",
      topics: ["5G/NR", "LTE", "MIMO", "OFDM", "Software Defined Radio", "Satellite Communication"]
    },
    {
      name: "Robotics & Automation",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-red-100",
      icon: "🤖",
      topics: ["Robot Kinematics", "Sensors & Actuators", "ROS", "Control Algorithms", "Autonomous Systems"]
    },
    {
      name: "Consumer Electronics",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-indigo-100",
      icon: "📺",
      topics: ["Audio Systems", "Display Technologies", "Wearables", "Home Automation", "Power Management"]
    }
  ],
  companies: [
    "GENERAL", "INTEL", "NVIDIA", "QUALCOMM", "TEXAS INSTRUMENTS",
    "SAMSUNG", "BROADCOM", "ARM", "SIEMENS", "BOSCH"
  ],
  quickPractice: [
    { title: "Embedded Systems Challenge", description: "Microcontrollers, RTOS, and firmware", subject: "Embedded Systems" },
    { title: "IoT & Connectivity", description: "Protocols, sensors, and cloud integration", subject: "Internet of Things (IoT)" }
  ],
  adaptiveSubject: "Embedded Systems",
  quizLabel: "Try AI‑Powered Electronics Technology Quiz",
  formIcon: "📱",
  formDescription: "Let our AI generate personalized electronics technology questions based on your preferences"
};

export default function ECETechnologyPage() {
  return <EngineeringBranchPage config={config} />;
}