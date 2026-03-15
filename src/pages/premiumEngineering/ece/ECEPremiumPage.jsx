import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "ELECTRONICS",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Electronics Engineering",
  breadcrumb: "Electronics",
  description: "Master core EC subjects with AI‑generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  subjects: [
    {
      name: "Digital Electronics",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-blue-100",
      icon: "🔢",
      topics: ["Logic Gates", "Flip-Flops", "Counters", "Boolean Algebra", "K-Maps"]
    },
    {
      name: "Analog Circuits",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-green-100",
      icon: "📈",
      topics: ["Diodes", "Transistors", "Amplifiers", "Oscillators", "Filters"]
    },
    {
      name: "Signals & Systems",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-purple-100",
      icon: "📡",
      topics: ["Fourier Transform", "Laplace Transform", "Z-Transform", "LTI Systems"]
    },
    {
      name: "VLSI Design",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-red-100",
      icon: "🔬",
      topics: ["CMOS", "Layout Design", "Testing", "Verilog", "VHDL"]
    },
    {
      name: "Communication Systems",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-yellow-100",
      icon: "📶",
      topics: ["Modulation", "Demodulation", "Noise", "Antennas", "Wireless"]
    },
    {
      name: "Control Systems",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-indigo-100",
      icon: "🎛️",
      topics: ["Stability", "Controllers", "State Space", "Root Locus", "PID"]
    }
  ],
  companies: [
    "GENERAL", "INTEL", "NVIDIA", "QUALCOMM", "TEXAS INSTRUMENTS",
    "SAMSUNG", "BROADCOM", "ISRO", "DRDO", "BEL"
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI‑Based questions from all subjects", subject: "Mixed Electronics Topics" },
    { title: "Time‑bound Test", description: "60 minutes, 50 questions", subject: "Digital Electronics" }
  ],
  adaptiveSubject: "Digital Electronics",
  quizLabel: "Try AI‑Powered Electronics Quiz",
  formIcon: "🔌",
  formDescription: "Let our AI generate personalized electronics engineering questions based on your preferences"
};

export default function ECEPremuimPage() {
  return <EngineeringBranchPage config={config} />;
}