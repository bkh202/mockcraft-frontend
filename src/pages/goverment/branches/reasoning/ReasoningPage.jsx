import GovernmentBranchPage from "../../shared/GovernmentBranchPage";

const config = {
  category: "GOVERNMENT",
  branch: "REASONING",
  pageTitle: "Logical Reasoning",
  breadcrumb: "Logical Reasoning",
  description: "Master reasoning concepts with AI-generated personalized quizzes for government exams",
  parentPath: "/government",
  parentLabel: "Government Exams",
  resultPath: "/government/result/:attemptId",
  quizLabel: "AI Reasoning Quiz",
  formIcon: "fa-brain",
  accentColor: "gray",
  cardAccent: "gray",
  headerStats: [
    { value: "AI", label: "Powered Quizzes", color: "text-gray-700" },
    { value: "830+", label: "Questions", color: "text-gray-700" },
    { value: "35%", label: "Banking Weightage", color: "text-gray-700" }
  ],
  subjects: [
    {
      name: "Puzzles",
      questions: "200+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-puzzle-piece",
      topics: ["Linear Arrangement", "Circular Arrangement", "Floor Puzzles", "Box Puzzles", "Scheduling", "Comparison"],
      examWeightage: { banking: "25-30%", ssc: "20-25%", upsc: "15-20%" }
    },
    {
      name: "Syllogism",
      questions: "120+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-random",
      topics: ["Basic Syllogism", "Either-Or", "Neither-Nor", "Possibility", "Venn Diagrams", "Logical Deduction"],
      examWeightage: { banking: "10-15%", ssc: "10-15%", upsc: "5-10%" }
    },
    {
      name: "Blood Relations",
      questions: "100+",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-users",
      topics: ["Basic Relations", "Coded Relations", "Family Tree", "Pointing Puzzles", "Mixed Relations"],
      examWeightage: { banking: "5-10%", ssc: "5-10%", upsc: "5-10%" }
    },
    {
      name: "Coding-Decoding",
      questions: "150+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-font",
      topics: ["Letter Coding", "Number Coding", "Symbol Coding", "Mixed Coding", "Pattern Coding", "Matrix Coding"],
      examWeightage: { banking: "10-15%", ssc: "10-15%", upsc: "5-10%" }
    },
    {
      name: "Inequalities",
      questions: "80+",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-not-equal",
      topics: ["Direct Inequalities", "Coded Inequalities", "Combined Inequalities", "Either-Or", "Neither-Nor"],
      examWeightage: { banking: "5-10%", ssc: "5-10%", upsc: "5-10%" }
    },
    {
      name: "Logical Reasoning",
      questions: "180+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-brain",
      topics: ["Course of Action", "Statement-Conclusion", "Strong-Weak Arguments", "Cause-Effect", "Assumptions", "Inferences"],
      examWeightage: { banking: "15-20%", ssc: "15-20%", upsc: "20-25%" }
    }
  ],
  quickPractice: [
    { title: "Full Section Mock Test", description: "35 questions, 20 minutes (Banking Pattern)", subject: "Mixed Topics" },
    { title: "Puzzle Sets", description: "5 complex puzzles with 4-5 questions each", subject: "Puzzles" }
  ],
  tipsTitle: "💡 Reasoning Tips & Tricks",
  tipsLink: "/government/reasoning/tips",
  tips: [
    { color: "gray", title: "Draw Diagrams", tip: "Always draw for seating arrangements" },
    { color: "gray", title: "Syllogism Rules", tip: "Learn A + I = No conclusion" },
    { color: "gray", title: "Time Management", tip: "Skip complex puzzles, solve easy first" }
  ]
};

export default function ReasoningPage() {
  return <GovernmentBranchPage config={config} />;
}