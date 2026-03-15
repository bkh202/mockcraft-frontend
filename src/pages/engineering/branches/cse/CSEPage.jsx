// CSEPage.jsx
import EngineeringBranchPage from "../../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING", branch: "CSE",
  pageTitle: "Computer Science Engineering",
  breadcrumb: "Computer Science", description: "Master core CS subjects with AI-generated personalized quizzes",
  parentPath: "/engineering", parentLabel: "Engineering",
  resultPath: "/engineering/result/:attemptId", quizLabel: "AI CSE Quiz", formIcon: "💻",
  adaptiveSubject: "Data Structures",
  subjects: [
    { name: "Data Structures", questions: "AI-Based", difficulty: "Medium", color: "bg-blue-100", icon: "📊", topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Sorting"] },
    { name: "Operating Systems", questions: "AI-Based", difficulty: "Medium", color: "bg-green-100", icon: "🖥️", topics: ["Processes", "Memory", "File Systems", "Scheduling"] },
    { name: "Database Management", questions: "AI-Based", difficulty: "Easy", color: "bg-purple-100", icon: "🗄️", topics: ["SQL", "Normalization", "Transactions", "Indexing"] },
    { name: "Computer Networks", questions: "AI-Based", difficulty: "Hard", color: "bg-red-100", icon: "🌐", topics: ["TCP/IP", "Routing", "Security", "Wireless"] },
    { name: "Algorithms", questions: "AI-Based", difficulty: "Hard", color: "bg-yellow-100", icon: "🧠", topics: ["Dynamic Programming", "Greedy", "Backtracking", "Searching"] },
    { name: "OOPS & Programming", questions: "AI-Based", difficulty: "Easy", color: "bg-indigo-100", icon: "💻", topics: ["C++", "Java", "Python", "Design Patterns"] }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 2 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 2 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 2 }
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI-Based questions from all subjects", subject: "Mixed CS Topics" },
    { title: "Time-bound Test", description: "60 minutes, 50 questions", subject: "Algorithms" }
  ]
};

export default function CSEPage() {
  return <EngineeringBranchPage config={config} />;
}