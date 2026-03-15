// EnglishPage.jsx
import GovernmentBranchPage from "../../shared/GovernmentBranchPage";

const config = {
  category: "GOVERNMENT", branch: "ENGLISH",
  pageTitle: "English Language", breadcrumb: "English Language",
  description: "Master English concepts with AI-generated personalized quizzes for government exams",
  parentPath: "/government", parentLabel: "Government Exams",
  resultPath: "/government/result/:attemptId", quizLabel: "AI English Quiz",
  formIcon: "📚", accentColor: "cyan", cardAccent: "blue",
  headerStats: [
    { value: "🤖 AI", label: "Powered Quizzes", color: "text-blue-600" },
    { value: "1200+", label: "Questions", color: "text-green-600" },
    { value: "30%", label: "Banking Weightage", color: "text-purple-600" }
  ],
  subjects: [
    {
      name: "Reading Comprehension", questions: "250+", difficulty: "Medium", color: "bg-blue-100", icon: "📖",
      topics: ["Short Passages", "Long Passages", "Cloze Test", "Para Completion", "Theme Detection", "Inference"],
      examWeightage: { banking: "30-40%", ssc: "25-30%", upsc: "20-25%" }
    },
    {
      name: "Grammar", questions: "200+", difficulty: "Medium", color: "bg-green-100", icon: "✍️",
      topics: ["Tenses", "Subject-Verb Agreement", "Articles", "Prepositions", "Conjunctions", "Voice & Narration"],
      examWeightage: { banking: "20-25%", ssc: "25-30%", upsc: "15-20%" }
    },
    {
      name: "Vocabulary", questions: "300+", difficulty: "Medium", color: "bg-purple-100", icon: "📚",
      topics: ["Synonyms", "Antonyms", "One Word Substitution", "Idioms & Phrases", "Word Usage", "Spelling"],
      examWeightage: { banking: "20-25%", ssc: "20-25%", upsc: "25-30%" }
    },
    {
      name: "Error Detection", questions: "150+", difficulty: "Hard", color: "bg-red-100", icon: "🔍",
      topics: ["Spot the Error", "Sentence Correction", "Phrase Replacement", "Sentence Improvement", "Common Errors"],
      examWeightage: { banking: "15-20%", ssc: "15-20%", upsc: "10-15%" }
    },
    {
      name: "Para Jumbles", questions: "120+", difficulty: "Hard", color: "bg-yellow-100", icon: "🔄",
      topics: ["Sentence Rearrangement", "Paragraph Formation", "Logical Sequence", "Coherent Paragraph", "Jumbled Sentences"],
      examWeightage: { banking: "10-15%", ssc: "10-15%", upsc: "10-15%" }
    },
    {
      name: "Fill in the Blanks", questions: "180+", difficulty: "Easy", color: "bg-indigo-100", icon: "📝",
      topics: ["Single Blank", "Double Blank", "Multiple Blanks", "Preposition Based", "Phrasal Verbs", "Contextual"],
      examWeightage: { banking: "10-15%", ssc: "10-15%", upsc: "10-15%" }
    }
  ],
  quickPractice: [
    { title: "Full Section Mock Test", description: "30 questions, 20 minutes (Banking Pattern)", subject: "Mixed Topics" },
    { title: "RC Passages", description: "5 passages with 5 questions each", subject: "Reading Comprehension" }
  ],
  tipsTitle: "💡 English Tips & Tricks",
  tipsLink: "/government/english/tips",
  tips: [
    { color: "blue", title: "Read Daily", tip: "Read newspaper editorials for RC practice" },
    { color: "green", title: "Grammar Rules", tip: "Memorize common error patterns" },
    { color: "purple", title: "Vocabulary Building", tip: "Learn 10 new words daily with context" }
  ]
};

export default function EnglishPage() {
  return <GovernmentBranchPage config={config} />;
}