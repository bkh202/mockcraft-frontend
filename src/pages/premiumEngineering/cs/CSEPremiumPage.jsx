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
      color: "bg-gray-100",
      icon: "fa-chart-bar",
      topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Sorting"]
    },
    {
      name: "Operating Systems",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-desktop",
      topics: ["Processes", "Memory", "File Systems", "Scheduling"]
    },
    {
      name: "Database Management",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-database",
      topics: ["SQL", "Normalization", "Transactions", "Indexing"]
    },
    {
      name: "Computer Networks",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-network-wired",
      topics: ["TCP/IP", "Routing", "Security", "Wireless"]
    },
    {
      name: "Algorithms",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-brain",
      topics: ["Dynamic Programming", "Greedy", "Backtracking", "Searching"]
    },
    {
      name: "OOPS & Programming",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-code",
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
  formIcon: "fa-laptop",
  formDescription: "Let our AI generate personalized computer science questions based on your preferences"
};

export default function CSEPremiumPage() {
  return <EngineeringBranchPage config={config} />;
}