import GovernmentBranchPage from "../../shared/GovernmentBranchPage";

const config = {
  category: "GOVERNMENT",
  branch: "QUANTITAVE",
  pageTitle: "Quantitative Aptitude",
  breadcrumb: "Quantitative Aptitude",
  description: "Master maths concepts with AI-generated personalized quizzes for government exams",
  parentPath: "/government",
  parentLabel: "Government Exams",
  resultPath: "/government/result/:attemptId",
  quizLabel: "AI Quantitative Aptitude Quiz",
  formIcon: "fa-calculator",
  accentColor: "gray",
  cardAccent: "gray",
  headerStats: [
    { value: "AI", label: "Powered Quizzes", color: "text-gray-700" },
    { value: "800+", label: "Questions", color: "text-gray-700" },
    { value: "35%", label: "Banking Weightage", color: "text-gray-700" }
  ],
  subjects: [
    {
      name: "Number System",
      questions: "150+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-hashtag",
      topics: ["Divisibility", "Remainders", "HCF/LCM", "Decimals", "Fractions", "Surds", "Indices"],
      examWeightage: { banking: "15-20%", ssc: "10-15%", upsc: "5-10%" }
    },
    {
      name: "Percentage",
      questions: "120+",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-percentage",
      topics: ["Basic Percentage", "Percentage Change", "Successive Percentage", "Population", "Profit/Loss", "Discount"],
      examWeightage: { banking: "10-15%", ssc: "15-20%", upsc: "5-10%" }
    },
    {
      name: "Ratio and Proportion",
      questions: "110+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-scale-balanced",
      topics: ["Simple Ratio", "Compound Ratio", "Proportion", "Partnership", "Mixture", "Alligation"],
      examWeightage: { banking: "10-15%", ssc: "10-15%", upsc: "5-10%" }
    },
    {
      name: "Algebra",
      questions: "130+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-square-root-variable",
      topics: ["Linear Equations", "Quadratic Equations", "Inequalities", "Sequence/Series", "Progressions", "Functions"],
      examWeightage: { banking: "15-20%", ssc: "10-15%", upsc: "10-15%" }
    },
    {
      name: "Geometry",
      questions: "140+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-shapes",
      topics: ["Triangles", "Circles", "Quadrilaterals", "Mensuration", "Coordinate", "Trigonometry"],
      examWeightage: { banking: "10-15%", ssc: "15-20%", upsc: "10-15%" }
    },
    {
      name: "Data Interpretation",
      questions: "160+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-chart-simple",
      topics: ["Tables", "Bar Graphs", "Pie Charts", "Line Graphs", "Caselets", "Data Sufficiency"],
      examWeightage: { banking: "20-25%", ssc: "15-20%", upsc: "10-15%" }
    }
  ],
  quickPractice: [
    { title: "Full Section Mock Test", description: "35 questions, 20 minutes (Banking Pattern)", subject: "Mixed Topics" },
    { title: "Data Interpretation Sets", description: "5 DI sets with 20 questions each", subject: "Data Interpretation" }
  ],
  tipsTitle: "Important Quantitative Formulas",
  tipsLink: "/government/quantitative/formulas",
  tips: [
    { color: "gray", title: "Speed = Distance/Time", tip: "Time & Distance" },
    { color: "gray", title: "SI = P×R×T/100", tip: "Simple Interest" },
    { color: "gray", title: "Area = πr²", tip: "Circle Area" }
  ]
};

export default function QuantitativeAptitudePage() {
  return <GovernmentBranchPage config={config} />;
}