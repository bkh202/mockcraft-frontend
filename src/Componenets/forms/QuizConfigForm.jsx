import { useState } from "react";

export default function QuizConfigForm({ context, onStart }) {
  const {
    category,   // aptitude | government | engineering | medical
    exam,       // SSC | Railway | NEET | null
    subject,    // quantitative | physics | dsa etc
    topic,      // selected topic
    subtopic,   // selected subtopic (optional)
  } = context;

  /* DEFAULTS BASED ON CONTEXT (only practice mode) */
  const defaults = getDefaults(category);

  const [config, setConfig] = useState({
    numberOfQuestions: defaults.questions,
    difficulty: defaults.difficulty,
    mode: "practice", // fixed to practice
    questionTypes: ["MCQ"], // Can add "True/False", "Fill in blanks", etc.
    subtopic: subtopic || "", // Use passed subtopic or empty
  });

  // Available question counts for practice mode
  const questionCounts = [3,5,7,10];

  const handleChange = (field, value) => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({
      ...config,
      category,
      exam: exam || "Practice",
      subject,
      topic,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header with Context */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">
          Configure Your Quiz
        </h2>
        <div className="flex flex-wrap gap-2">
          {topic && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {topic}
            </span>
          )}
          {subtopic && (
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              {subtopic}
            </span>
          )}
          <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
            {subject?.charAt(0).toUpperCase() + subject?.slice(1)}
          </span>
        </div>
      </div>

      {/* Number of Questions */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Number of Questions
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {questionCounts.map(count => (
            <button
              key={count}
              type="button"
              onClick={() => handleChange('numberOfQuestions', count)}
              className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                config.numberOfQuestions === count
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50'
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Difficulty Level
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { value: 'easy', label: 'Easy', color: 'bg-green-100 text-green-800 border-green-200' },
            { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
            { value: 'hard', label: 'Hard', color: 'bg-red-100 text-red-800 border-red-200' },
            { value: 'mixed', label: 'Mixed', color: 'bg-purple-100 text-purple-800 border-purple-200' }
          ].map(diff => (
            <button
              key={diff.value}
              type="button"
              onClick={() => handleChange('difficulty', diff.value)}
              className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                config.difficulty === diff.value
                  ? `${diff.color} border-2`
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>
      </div>

      {/* Question Types (Optional) */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Question Types
        </label>
        <div className="flex flex-wrap gap-2">
          {['MCQ', 'True/False', 'Fill in Blanks', 'Short Answer'].map(type => (
            <button
              key={type}
              type="button"
              onClick={() => {
                const currentTypes = [...config.questionTypes];
                if (currentTypes.includes(type)) {
                  handleChange('questionTypes', currentTypes.filter(t => t !== type));
                } else {
                  handleChange('questionTypes', [...currentTypes, type]);
                }
              }}
              className={`px-4 py-2 rounded-full border text-sm ${
                config.questionTypes.includes(type)
                  ? 'bg-blue-100 text-blue-700 border-blue-300'
                  : 'bg-gray-100 text-gray-700 border-gray-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 border-t">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Start Practice
          </button>
          <button
            type="button"
            onClick={() => onStart({
              ...config,
              category,
              exam: exam || "Practice",
              subject,
              topic,
              isQuickStart: true,
            })}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Quick Start
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center mt-3">
          Your quiz will be generated by AI based on these settings
        </p>
      </div>
    </form>
  );
}

/* ---------- Helpers ---------- */

function getDefaults(category) {
  const defaults = {
    aptitude: {
      questions: 10,
      difficulty: "mixed",
    },
    government: {
      questions: 10,
      difficulty: "medium",
    },
    medical: {
      questions: 10,
      difficulty: "medium",
    },
    engineering: {
      questions: 10,
      difficulty: "mixed",
    }
  };

  return defaults[category] || defaults.aptitude;
}