import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "CSE",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Computer Science Engineering",
  breadcrumb: "Computer Science",
  description: "Master core CS subjects with AI‑generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  subjects: [
    {
      name: "Data Structures",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-blue-100",
      icon: "📊",
      topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Sorting"]
    },
    {
      name: "Operating Systems",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-green-100",
      icon: "🖥️",
      topics: ["Processes", "Memory", "File Systems", "Scheduling"]
    },
    {
      name: "Database Management",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-purple-100",
      icon: "🗄️",
      topics: ["SQL", "Normalization", "Transactions", "Indexing"]
    },
    {
      name: "Computer Networks",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-red-100",
      icon: "🌐",
      topics: ["TCP/IP", "Routing", "Security", "Wireless"]
    },
    {
      name: "Algorithms",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-yellow-100",
      icon: "🧠",
      topics: ["Dynamic Programming", "Greedy", "Backtracking", "Searching"]
    },
    {
      name: "OOPS & Programming",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-indigo-100",
      icon: "💻",
      topics: ["C++", "Java", "Python", "Design Patterns"]
    }
  ],
  companies: [
    "GENERAL", "AMAZON", "GOOGLE", "MICROSOFT", "FLIPKART",
    "RAZORPAY", "TCS", "INFOSYS", "ACCENTURE", "GOLDMAN SACHS"
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI‑Based questions from all subjects", subject: "Mixed CS Topics" },
    { title: "Time‑bound Test", description: "60 minutes, 50 questions", subject: "Algorithms" }
  ],
  adaptiveSubject: "Data Structures",
  quizLabel: "Try AI‑Powered CSE Quiz",
  formIcon: "💻",
  formDescription: "Let our AI generate personalized computer science questions based on your preferences"
};

export default function CSEPremiumPage() {
  return <EngineeringBranchPage config={config} />;
}