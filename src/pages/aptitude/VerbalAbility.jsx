import AptitudeBranchPage from "./shared/AptitudeBranchPage";

const config = {
  branch: "VERBAL",
  resultPath: "/aptitude/result/:attemptId",
  pageTitle: "Verbal Ability",
  breadcrumb: "Verbal Ability",
  description: "Master English language skills with AI-generated personalized quizzes",
  parentPath: "/aptitude",
  parentLabel: "Aptitude",
  subjects: [
    {
      name: "Grammar",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-blue-100",
      icon: "📝",
      subtopics: ["Tenses", "Subject-Verb Agreement", "Articles", "Prepositions", "Conjunctions", "Modals"],
      tip: "Focus on common error patterns"
    },
    {
      name: "Vocabulary",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-green-100",
      icon: "📚",
      subtopics: ["Synonyms", "Antonyms", "One-word Substitution", "Idioms & Phrases", "Word Usage", "Spellings"],
      tip: "Learn 10 new words daily"
    },
    {
      name: "Reading Comprehension",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-purple-100",
      icon: "📖",
      subtopics: ["Passage Analysis", "Inference", "Main Idea", "Tone & Style", "Contextual Meaning", "Critical Reasoning"],
      tip: "Read actively, not passively"
    },
    {
      name: "Error Spotting",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-red-100",
      icon: "🔍",
      subtopics: ["Sentence Correction", "Error Detection", "Improvement", "Common Errors", "Sentence Completion", "Fill in the Blanks"],
      tip: "Look for subject-verb agreement first"
    },
    {
      name: "Para Jumbles",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-yellow-100",
      icon: "🔀",
      subtopics: ["Sentence Rearrangement", "Paragraph Formation", "Logical Sequence", "Coherence", "Connectives", "Transition Words"],
      tip: "Find linking words and logical flow"
    },
    {
      name: "Cloze Test",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-indigo-100",
      icon: "📄",
      subtopics: ["Passage Completion", "Contextual Vocabulary", "Grammar in Context", "Cohesion", "Logical Fillers", "Appropriate Words"],
      tip: "Read the entire passage first"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-green-100 text-green-800", subjects: 2 },
    { level: "Medium", color: "bg-yellow-100 text-yellow-800", subjects: 3 },
    { level: "Hard", color: "bg-red-100 text-red-800", subjects: 1 }
  ],
  formIcon: "📝",
  formDescription: "Let our AI generate personalized verbal ability questions based on your preferences",
  prevLink: "/aptitude/logical",
  prevLabel: "Logical",
  nextLink: "/aptitude/di",
  nextLabel: "DI",
  category: "aptitude",
};

export default function VerbalAbility() {
  const readingTips = [
    "Read newspaper editorials daily",
    "Practice skimming and scanning",
    "Build vocabulary through context",
    "Time your reading comprehension",
    "Review grammar rules weekly"
  ];

  return (
    <AptitudeBranchPage config={config}>
      <div className="mt-6 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
            <span className="text-blue-600">📰</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Daily Reading Practice</h4>
            <p className="text-sm text-gray-600">
              Read at least 2 newspaper articles daily to improve comprehension speed.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📖 Reading Improvement Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {readingTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <span className="text-blue-600">{index + 1}</span>
              </div>
              <p className="text-sm text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">🤖 Try AI-Powered Verbal Quiz</h3>
            <p className="text-purple-100">
              Get detailed results with AI explanations after completing verbal ability quizzes
            </p>
          </div>
        </div>
      </div>
    </AptitudeBranchPage>
  );
}