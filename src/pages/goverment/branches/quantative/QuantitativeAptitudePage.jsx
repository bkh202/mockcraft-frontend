

// QuantitativeAptitudePage.jsx

import GovernmentBranchPage from "../../shared/GovernmentBranchPage";

const config = {
  category: "GOVERNMENT", branch: "QUANTITAVE",
  pageTitle: "Quantitative Aptitude", breadcrumb: "Quantitative Aptitude",
  description: "Master maths concepts with AI-generated personalized quizzes for government exams",
  parentPath: "/government", parentLabel: "Government Exams",
  resultPath: "/government/result/:attemptId", quizLabel: "AI Quantitative Aptitude Quiz",
  formIcon: "🧮", accentColor: "blue", cardAccent: "blue",
  headerStats: [
    { value: "🤖 AI", label: "Powered Quizzes", color: "text-blue-600" },
    { value: "800+", label: "Questions", color: "text-green-600" },
    { value: "35%", label: "Banking Weightage", color: "text-purple-600" }
  ],
  subjects: [
    {
      name: "Number System", questions: "150+", difficulty: "Medium", color: "bg-blue-100", icon: "🔢",
      topics: ["Divisibility", "Remainders", "HCF/LCM", "Decimals", "Fractions", "Surds", "Indices"],
      examWeightage: { banking: "15-20%", ssc: "10-15%", upsc: "5-10%" }
    },
    {
      name: "Percentage", questions: "120+", difficulty: "Easy", color: "bg-green-100", icon: "📊",
      topics: ["Basic Percentage", "Percentage Change", "Successive Percentage", "Population", "Profit/Loss", "Discount"],
      examWeightage: { banking: "10-15%", ssc: "15-20%", upsc: "5-10%" }
    },
    {
      name: "Ratio and Proportion", questions: "110+", difficulty: "Medium", color: "bg-purple-100", icon: "⚖️",
      topics: ["Simple Ratio", "Compound Ratio", "Proportion", "Partnership", "Mixture", "Alligation"],
      examWeightage: { banking: "10-15%", ssc: "10-15%", upsc: "5-10%" }
    },
    {
      name: "Algebra", questions: "130+", difficulty: "Hard", color: "bg-red-100", icon: "📐",
      topics: ["Linear Equations", "Quadratic Equations", "Inequalities", "Sequence/Series", "Progressions", "Functions"],
      examWeightage: { banking: "15-20%", ssc: "10-15%", upsc: "10-15%" }
    },
    {
      name: "Geometry", questions: "140+", difficulty: "Hard", color: "bg-yellow-100", icon: "🔺",
      topics: ["Triangles", "Circles", "Quadrilaterals", "Mensuration", "Coordinate", "Trigonometry"],
      examWeightage: { banking: "10-15%", ssc: "15-20%", upsc: "10-15%" }
    },
    {
      name: "Data Interpretation", questions: "160+", difficulty: "Hard", color: "bg-indigo-100", icon: "📈",
      topics: ["Tables", "Bar Graphs", "Pie Charts", "Line Graphs", "Caselets", "Data Sufficiency"],
      examWeightage: { banking: "20-25%", ssc: "15-20%", upsc: "10-15%" }
    }
  ],
  quickPractice: [
    { title: "Full Section Mock Test", description: "35 questions, 20 minutes (Banking Pattern)", subject: "Mixed Topics" },
    { title: "Data Interpretation Sets", description: "5 DI sets with 20 questions each", subject: "Data Interpretation" }
  ],
  tipsTitle: "📐 Important Quantitative Formulas",
  tipsLink: "/government/quantitative/formulas",
  tips: [
    { color: "blue", title: "Speed = Distance/Time", tip: "Time & Distance" },
    { color: "green", title: "SI = P×R×T/100", tip: "Simple Interest" },
    { color: "purple", title: "Area = πr²", tip: "Circle Area" }
  ]
};

export default function QuantitativeAptitudePage() {
  return <GovernmentBranchPage config={config} />;
}