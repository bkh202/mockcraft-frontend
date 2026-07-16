import EngineeringBranchPage from "../../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "CSE",
  pageTitle: "Computer Science Engineering",
  breadcrumb: "Computer Science",
  description: "Master core CS subjects with AI-generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  resultPath: "/engineering/result/:attemptId",
  quizLabel: "AI CSE Quiz",
  formIcon: "fa-laptop",
  adaptiveSubject: "Data Structures",
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
      icon: "fa-globe",
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
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 2 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 2 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 2 }
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI-Based questions from all subjects", subject: "Mixed CS Topics" },
    { title: "Time-bound Test", description: "60 minutes, 50 questions", subject: "Algorithms" }
  ]
};

export default function CSEPage() {
  return <EngineeringBranchPage config={config} />;
}