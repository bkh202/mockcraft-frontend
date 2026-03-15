import { useState } from "react";

export default function PremiumQuizConfig({ context, onStart }) {
  const {
    category,
    exam,
    subject,
    topic,
    subtopic,
  } = context;

  const defaults = getDefaults(category);

  const [config, setConfig] = useState({
    numberOfQuestions: defaults.questions,
    difficulty: defaults.difficulty,
    mode: defaults.mode,
    subtopic: subtopic || "",
  });

  const handleChange = (field, value) => {
    setConfig(prev => ({ ...prev, [field]: value }));
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

  const questionCounts = [5, 7, 10, 15];

  const difficulties = [
    { value: 'easy',   label: 'Easy',   color: 'bg-green-100 text-green-800 border-green-300' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
    { value: 'hard',   label: 'Hard',   color: 'bg-red-100 text-red-800 border-red-300' },
    { value: 'mixed',  label: 'Mixed',  color: 'bg-purple-100 text-purple-800 border-purple-300' },
  ];

  const modes = [
    { value: 'practice', label: 'Practice',  description: 'Learn at your own pace with explanations', icon: '📚' },
    { value: 'revision', label: 'Revision',  description: 'Quick review of learned concepts',         icon: '🔁' },
    { value: 'mock',     label: 'Mock Test', description: 'Simulate real exam conditions',            icon: '📝' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Header */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Configure Your Quiz</h2>
        <div className="flex flex-wrap gap-2">
          {topic && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
              {topic}
            </span>
          )}
          {subtopic && (
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
              {subtopic}
            </span>
          )}
          {subject && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </span>
          )}
        </div>
      </div>

      {/* Number of Questions */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Number of Questions
        </label>
        <div className="grid grid-cols-5 gap-2">
          {questionCounts.map(count => (
            <button
              key={count}
              type="button"
              onClick={() => handleChange('numberOfQuestions', count)}
              className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                config.numberOfQuestions === count
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
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
          {difficulties.map(diff => (
            <button
              key={diff.value}
              type="button"
              onClick={() => handleChange('difficulty', diff.value)}
              className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                config.difficulty === diff.value
                  ? `${diff.color} border-2 shadow-sm`
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mode */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Practice Mode
        </label>
        <div className="space-y-2">
          {modes.map(modeItem => (
            <div
              key={modeItem.value}
              onClick={() => handleChange('mode', modeItem.value)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                config.mode === modeItem.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{modeItem.icon}</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{modeItem.label}</div>
                  <div className="text-sm text-gray-500">{modeItem.description}</div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  config.mode === modeItem.value
                    ? 'bg-blue-500 border-blue-500'
                    : 'border-gray-300'
                }`}>
                  {config.mode === modeItem.value && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            {config.mode === 'mock' ? '🚀 Start Mock Test' : '▶ Start Practice'}
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
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            ⚡ Quick Start
          </button>
        </div>
        <p className="text-xs text-gray-400 text-center mt-3">
          Quiz will be generated by AI based on your settings
        </p>
      </div>

    </form>
  );
}

/* ---------- Helpers ---------- */

function getDefaults(category) {
  const map = {
    aptitude: {
      questions: 10,
      difficulty: "mixed",
      mode: "practice",
    },
    government: {
      questions: 20,
      difficulty: "medium",
      mode: "mock",
    },
    medical: {
      questions: 20,
      difficulty: "medium",
      mode: "mock",
    },
    engineering: {
      questions: 15,
      difficulty: "mixed",
      mode: "practice",
    },
  };

  return map[category] || map.aptitude;
}