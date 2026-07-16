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
      color: "bg-gray-100",
      icon: "fa-pencil",
      subtopics: ["Tenses", "Subject-Verb Agreement", "Articles", "Prepositions", "Conjunctions", "Modals"],
      tip: "Focus on common error patterns"
    },
    {
      name: "Vocabulary",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-book",
      subtopics: ["Synonyms", "Antonyms", "One-word Substitution", "Idioms & Phrases", "Word Usage", "Spellings"],
      tip: "Learn 10 new words daily"
    },
    {
      name: "Reading Comprehension",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-book-open",
      subtopics: ["Passage Analysis", "Inference", "Main Idea", "Tone & Style", "Contextual Meaning", "Critical Reasoning"],
      tip: "Read actively, not passively"
    },
    {
      name: "Error Spotting",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-search",
      subtopics: ["Sentence Correction", "Error Detection", "Improvement", "Common Errors", "Sentence Completion", "Fill in the Blanks"],
      tip: "Look for subject-verb agreement first"
    },
    {
      name: "Para Jumbles",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-arrows-rotate",
      subtopics: ["Sentence Rearrangement", "Paragraph Formation", "Logical Sequence", "Coherence", "Connectives", "Transition Words"],
      tip: "Find linking words and logical flow"
    },
    {
      name: "Cloze Test",
      questions: "AI-Based",
      difficulty: "Easy",
      color: "bg-gray-100",
      icon: "fa-file-alt",
      subtopics: ["Passage Completion", "Contextual Vocabulary", "Grammar in Context", "Cohesion", "Logical Fillers", "Appropriate Words"],
      tip: "Read the entire passage first"
    }
  ],
  difficultyLevels: [
    { level: "Easy", color: "bg-gray-100 text-gray-700", subjects: 2 },
    { level: "Medium", color: "bg-gray-200 text-gray-800", subjects: 3 },
    { level: "Hard", color: "bg-gray-300 text-black", subjects: 1 }
  ],
  formIcon: "fa-pencil",
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
      {/* Daily Reading Practice */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200">
            <i className="fa fa-newspaper text-black"></i>
          </div>
          <div>
            <h4 className="font-bold text-black mb-1">Daily Reading Practice</h4>
            <p className="text-base text-gray-600">
              Read at least 2 newspaper articles daily to improve comprehension speed.
            </p>
          </div>
        </div>
      </div>

      {/* Reading Improvement Tips */}
      <div className="mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-book-open text-black"></i> Reading Improvement Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {readingTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md hover:border-black transition-all">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3 border border-gray-200">
                <span className="font-bold text-black">{index + 1}</span>
              </div>
              <p className="text-sm font-medium text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-black rounded-2xl p-6 mb-8 text-white border border-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-extrabold mb-2 flex items-center gap-2">
              <i className="fa fa-robot text-white"></i> Try AI-Powered Verbal Quiz
            </h3>
            <p className="text-gray-300">
              Get detailed results with AI explanations after completing verbal ability quizzes
            </p>
          </div>
        </div>
      </div>
    </AptitudeBranchPage>
  );
}