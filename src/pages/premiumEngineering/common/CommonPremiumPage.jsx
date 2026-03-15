// CommonSubjectsPage.jsx
import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "ENGINEERING",
  branch: "COMMON",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Common Engineering Subjects",
  breadcrumb: "Common Subjects",
  description: "Practice common subjects with AI‑generated personalized quizzes",
  parentPath: "/engineering",
  parentLabel: "Engineering",
  subjects: [
    {
      name: "Engineering Mathematics",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-blue-100",
      icon: "🧮",
      topics: ["Calculus", "Linear Algebra", "Probability", "Differential Equations", "Numerical Methods"]
    },
    {
      name: "Engineering Physics",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-green-100",
      icon: "⚛️",
      topics: ["Mechanics", "Optics", "Thermodynamics", "Modern Physics", "Semiconductors"]
    },
    {
      name: "Engineering Chemistry",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-purple-100",
      icon: "🧪",
      topics: ["Organic", "Inorganic", "Physical", "Materials", "Corrosion"]
    },
    {
      name: "English & Communication",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-red-100",
      icon: "📝",
      topics: ["Grammar", "Vocabulary", "Comprehension", "Technical Writing", "Presentation"]
    },
    {
      name: "General Aptitude",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-yellow-100",
      icon: "🧠",
      topics: ["Quantitative", "Logical", "Verbal", "Data Interpretation", "Reasoning"]
    },
    {
      name: "Engineering Drawing",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-indigo-100",
      icon: "📐",
      topics: ["Projections", "Sections", "Isometric", "CAD Basics", "Dimensioning"]
    }
  ],
  companies: ["GENERAL", "UNIVERSITY"],
  quickPractice: [
    { title: "Mixed Topic Quiz", description: "AI‑Based questions from all subjects", subject: "Mixed Common Subjects" },
    { title: "Time‑bound Test", description: "60 minutes, 50 questions", subject: "Engineering Mathematics" }
  ],
  adaptiveSubject: "Engineering Mathematics",
  quizLabel: "Try AI‑Powered Common Subjects Quiz",
  formIcon: "🧮",
  formDescription: "Let our AI generate personalized common engineering questions based on your preferences"
};

export default function CommonPremiumPage() {
  return <EngineeringBranchPage config={config} />;
}