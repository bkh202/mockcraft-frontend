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
    { value: 'easy',   label: 'Easy',   color: 'bg-gray-100 text-black border-gray-300' },
    { value: 'medium', label: 'Medium', color: 'bg-gray-200 text-black border-gray-400' },
    { value: 'hard',   label: 'Hard',   color: 'bg-gray-300 text-black border-gray-500' },
    { value: 'mixed',  label: 'Mixed',  color: 'bg-gray-100 text-black border-gray-300' },
  ];

  const modes = [
    { value: 'practice', label: 'Practice',  description: 'Learn at your own pace with explanations', icon: 'fa-book' },
    { value: 'revision', label: 'Revision',  description: 'Quick review of learned concepts',         icon: 'fa-redo' },
    { value: 'mock',     label: 'Mock Test', description: 'Simulate real exam conditions',            icon: 'fa-pencil-alt' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">

      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-extrabold text-black mb-3">Configure Your Quiz</h2>
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
          {subject && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full border border-gray-200">
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </span>
          )}
        </div>
      </div>

      {/* Number of Questions */}
      <div>
        <label className="block text-base font-bold text-black mb-2">
          Number of Questions
        </label>
        <div className="grid grid-cols-5 gap-2">
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

      {/* Difficulty */}
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

      {/* Mode */}
      <div>
        <label className="block text-base font-bold text-black mb-2">
          Practice Mode
        </label>
        <div className="space-y-2">
          {modes.map(modeItem => (
            <div
              key={modeItem.value}
              onClick={() => handleChange('mode', modeItem.value)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                config.mode === modeItem.value
                  ? 'border-black bg-gray-50'
                  : 'border-gray-200 hover:border-black hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <i className={`fa ${modeItem.icon} text-xl text-black w-6 text-center`}></i>
                <div className="flex-1">
                  <div className="font-bold text-black text-base">{modeItem.label}</div>
                  <div className="text-sm text-gray-600">{modeItem.description}</div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  config.mode === modeItem.value
                    ? 'bg-black border-black'
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
      <div className="pt-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-bold text-lg transition-all shadow-sm border border-gray-300 flex items-center justify-center gap-2"
          >
            {config.mode === 'mock' ? (
              <><i className="fa fa-play"></i> Start Mock Test</>
            ) : (
              <><i className="fa fa-play"></i> Start Practice</>
            )}
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
            className="px-6 py-3 border-2 border-black text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa fa-bolt"></i> Quick Start
          </button>
        </div>
        <p className="text-sm text-gray-500 text-center mt-3">
          <i className="fa fa-info-circle mr-1"></i> Quiz will be generated by AI based on your settings
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