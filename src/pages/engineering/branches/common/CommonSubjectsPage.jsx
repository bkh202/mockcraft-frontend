import EngineeringBranchPage from "../../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "COMMON",
  pageTitle: "Common Engineering Subjects",
  breadcrumb: "Common Subjects",
  description: "Practice common subjects with AI-generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  resultPath: "/engineering/result/:attemptId",
  quizLabel: "AI Common Subjects Quiz",
  formIcon: "fa-calculator",
  adaptiveSubject: "Engineering Mathematics",
  subjects: [
    {
      name: "Engineering Mathematics",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-calculator",
      topics: ["Calculus", "Linear Algebra", "Probability", "Differential Equations", "Numerical Methods"]
    },
    {
      name: "Engineering Physics",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-atom",
      topics: ["Mechanics", "Optics", "Thermodynamics", "Modern Physics", "Semiconductors"]
    },
    {
      name: "Engineering Chemistry",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-flask",
      topics: ["Organic", "Inorganic", "Physical", "Materials", "Corrosion"]
    },
    {
      name: "English & Communication",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-pencil-alt",
      topics: ["Grammar", "Vocabulary", "Comprehension", "Technical Writing", "Presentation"]
    },
    {
      name: "General Aptitude",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-brain",
      topics: ["Quantitative", "Logical", "Verbal", "Data Interpretation", "Reasoning"]
    },
    {
      name: "Engineering Drawing",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-drafting-compass",
      topics: ["Projections", "Sections", "Isometric", "CAD Basics", "Dimensioning"]
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 3 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 3 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 0 }
  ],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI-Based questions from all subjects", subject: "Mixed Common Subjects" },
    { title: "Time-bound Test", description: "60 minutes, 50 questions", subject: "Engineering Mathematics" }
  ]
};

export default function CommonSubjectsPage() {
  return <EngineeringBranchPage config={config} />;
}