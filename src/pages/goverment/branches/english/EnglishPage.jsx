import GovernmentBranchPage from "../../shared/GovernmentBranchPage";

const config = {
  category: "GOVERNMENT",
  branch: "ENGLISH",
  pageTitle: "English Language",
  breadcrumb: "English Language",
  description: "Master English concepts with AI-generated personalized quizzes for government exams",
  parentPath: "/government",
  parentLabel: "Government Exams",
  resultPath: "/government/result/:attemptId",
  quizLabel: "AI English Quiz",
  formIcon: "fa-book",
  accentColor: "gray",
  cardAccent: "gray",
  headerStats: [
    { value: "AI", label: "Powered Quizzes", color: "text-gray-700" },
    { value: "1200+", label: "Questions", color: "text-gray-700" },
    { value: "30%", label: "Banking Weightage", color: "text-gray-700" }
  ],
  subjects: [
    {
      name: "Reading Comprehension",
      questions: "250+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-book-open",
      topics: ["Short Passages", "Long Passages", "Cloze Test", "Para Completion", "Theme Detection", "Inference"],
      examWeightage: { banking: "30-40%", ssc: "25-30%", upsc: "20-25%" }
    },
    {
      name: "Grammar",
      questions: "200+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-pen-fancy",
      topics: ["Tenses", "Subject-Verb Agreement", "Articles", "Prepositions", "Conjunctions", "Voice & Narration"],
      examWeightage: { banking: "20-25%", ssc: "25-30%", upsc: "15-20%" }
    },
    {
      name: "Vocabulary",
      questions: "300+",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-book",
      topics: ["Synonyms", "Antonyms", "One Word Substitution", "Idioms & Phrases", "Word Usage", "Spelling"],
      examWeightage: { banking: "20-25%", ssc: "20-25%", upsc: "25-30%" }
    },
    {
      name: "Error Detection",
      questions: "150+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-magnifying-glass",
      topics: ["Spot the Error", "Sentence Correction", "Phrase Replacement", "Sentence Improvement", "Common Errors"],
      examWeightage: { banking: "15-20%", ssc: "15-20%", upsc: "10-15%" }
    },
    {
      name: "Para Jumbles",
      questions: "120+",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-arrows-rotate",
      topics: ["Sentence Rearrangement", "Paragraph Formation", "Logical Sequence", "Coherent Paragraph", "Jumbled Sentences"],
      examWeightage: { banking: "10-15%", ssc: "10-15%", upsc: "10-15%" }
    },
    {
      name: "Fill in the Blanks",
      questions: "180+",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-pencil",
      topics: ["Single Blank", "Double Blank", "Multiple Blanks", "Preposition Based", "Phrasal Verbs", "Contextual"],
      examWeightage: { banking: "10-15%", ssc: "10-15%", upsc: "10-15%" }
    }
  ],
  quickPractice: [
    { title: "Full Section Mock Test", description: "30 questions, 20 minutes (Banking Pattern)", subject: "Mixed Topics" },
    { title: "RC Passages", description: "5 passages with 5 questions each", subject: "Reading Comprehension" }
  ],
  tipsTitle: "English Tips & Tricks",
  tipsLink: "/government/english/tips",
  tips: [
    { color: "gray", title: "Read Daily", tip: "Read newspaper editorials for RC practice" },
    { color: "gray", title: "Grammar Rules", tip: "Memorize common error patterns" },
    { color: "gray", title: "Vocabulary Building", tip: "Learn 10 new words daily with context" }
  ]
};

export default function EnglishPage() {
  return <GovernmentBranchPage config={config} />;
}