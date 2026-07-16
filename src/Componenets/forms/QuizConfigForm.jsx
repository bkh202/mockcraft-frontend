import { useState } from "react";

export default function QuizConfigForm({ context, onStart }) {
  const {
    category,   // aptitude | government | engineering | medical
    exam,       // SSC | Railway | NEET | null
    subject,    // quantitative | physics | dsa etc
    topic,      // selected topic
    subtopic,   // selected subtopic (optional)
  } = context;

  const defaults = getDefaults(category);

  const [config, setConfig] = useState({
    numberOfQuestions: defaults.questions,
    difficulty: defaults.difficulty,
    mode: "practice",
    questionTypes: ["MCQ"],
    subtopic: subtopic || "",
  });

  const questionCounts = [3, 5, 7, 10];

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

  const difficulties = [
    { value: 'easy',   label: 'Easy',   color: 'bg-gray-100 text-black border-gray-200' },
    { value: 'medium', label: 'Medium', color: 'bg-gray-200 text-black border-gray-300' },
    { value: 'hard',   label: 'Hard',   color: 'bg-gray-300 text-black border-gray-400' },
    { value: 'mixed',  label: 'Mixed',  color: 'bg-gray-100 text-black border-gray-200' },
  ];

  const questionTypeOptions = ['MCQ', 'True/False', 'Fill in Blanks', 'Short Answer'];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      
      {/* Header with Context */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-extrabold text-black mb-2">
          Configure Your Quiz
        </h2>
        <div className="flex flex-wrap gap-2">
          {topic && (
            <span className="px-3 py-1 bg-gray-100 text-black text-sm font-semibold rounded-full border border-gray-200">
              {topic}
            </span>
          )}
          {subtopic && (
            <span className="px-3 py-1 bg-gray-100 text-black text-sm font-semibold rounded-full border border-gray-200">
              {subtopic}
            </span>
          )}
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full border border-gray-200">
            {subject?.charAt(0).toUpperCase() + subject?.slice(1)}
          </span>
        </div>
      </div>

      {/* Number of Questions */}
      <div>
        <label className="block text-base font-bold text-black mb-2">
          Number of Questions
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {questionCounts.map(count => (
            <button
              key={count}
              type="button"
              onClick={() => handleChange('numberOfQuestions', count)}
              className={`py-3 rounded-lg border text-base font-bold transition-all ${
                config.numberOfQuestions === count
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-white text-black border-gray-300 hover:border-black hover:bg-gray-50'
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty Level */}
      <div>
        <label className="block text-base font-bold text-black mb-2">
          Difficulty Level
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {difficulties.map(diff => (
            <button
              key={diff.value}
              type="button"
              onClick={() => handleChange('difficulty', diff.value)}
              className={`py-3 rounded-lg border text-base font-bold transition-all ${
                config.difficulty === diff.value
                  ? `${diff.color} border-2 border-black shadow-sm`
                  : 'bg-white text-black border-gray-300 hover:border-black hover:bg-gray-50'
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>
      </div>

      {/* Question Types */}
      <div>
        <label className="block text-base font-bold text-black mb-2">
          Question Types
        </label>
        <div className="flex flex-wrap gap-2">
          {questionTypeOptions.map(type => (
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
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                config.questionTypes.includes(type)
                  ? 'bg-black text-white border-black'
                  : 'bg-gray-100 text-black border-gray-300 hover:border-black'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-black hover:bg-gray-800 text-white py-3.5 rounded-xl font-bold text-lg transition-all shadow-sm border border-gray-300 flex items-center justify-center gap-2"
          >
            <i className="fa fa-play"></i> Start Practice
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
            className="px-6 py-3.5 border-2 border-black text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa fa-bolt"></i> Quick Start
          </button>
        </div>
        <p className="text-sm text-gray-500 text-center mt-3">
          <i className="fa fa-info-circle mr-1"></i> Your quiz will be generated by AI based on these settings
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