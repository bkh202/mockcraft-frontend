import { useState } from "react";

export default function QuizConfigForm({ context, onStart }) {
  const {
    category,   // aptitude | government | engineering | medical
    exam,       // SSC | Railway | NEET | null
    subject,    // quantitative | physics | dsa etc
    topic,      // selected topic
    subtopic,   // selected subtopic (optional)
  } = context;

  /* DEFAULTS BASED ON CONTEXT */
  const defaults = getDefaults(category);

  const [config, setConfig] = useState({
    numberOfQuestions: defaults.questions,
    difficulty: defaults.difficulty,
    mode: defaults.mode,
    timeLimit: defaults.timeLimit,
    negativeMarking: defaults.negative,
    questionTypes: ["MCQ"], // Can add "True/False", "Fill in blanks", etc.
    subtopic: subtopic || "", // Use passed subtopic or empty
  });

  // Available question counts based on mode
  const questionCounts = {
    practice: [5, 7, 12, 15],
    revision: [5, 7, 12, 15],
    mock: [5, 7, 12, 15]
  };

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

  // Get available question counts based on selected mode
  const availableQuestionCounts = questionCounts[config.mode] || questionCounts.practice;

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
          {availableQuestionCounts.map(count => (
            <button
              key={count}
              type="button"
              onClick={() => handleChange('numberOfQuestions', count)}
              className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${config.numberOfQuestions === count
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
              className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${config.difficulty === diff.value
                  ? `${diff.color} border-2`
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
            >
              {diff.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mode Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Practice Mode
        </label>
        <div className="space-y-3">
          {[
            {
              value: 'practice',
              label: 'Practice',
              description: 'Learn at your own pace with explanations',
              icon: '📚'
            },
            {
              value: 'revision',
              label: 'Revision',
              description: 'Quick review of learned concepts',
              icon: '🔁'
            },
            {
              value: 'mock',
              label: 'Mock Test',
              description: 'Simulate exam conditions',
              icon: '📝'
            }
          ].map(modeItem => (
            <div
              key={modeItem.value}
              onClick={() => handleChange('mode', modeItem.value)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${config.mode === modeItem.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-xl">{modeItem.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{modeItem.label}</div>
                  <div className="text-sm text-gray-600">{modeItem.description}</div>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${config.mode === modeItem.value
                    ? 'bg-blue-500 border-blue-500'
                    : 'border-gray-400'
                  }`}>
                  {config.mode === modeItem.value && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Time Settings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Time Limit</div>
              <div className="text-sm text-gray-600">Enable timer for practice</div>
            </div>
            <Toggle
              checked={config.timeLimit}
              onChange={(checked) => handleChange('timeLimit', checked)}
            />
          </div>

          {config.timeLimit && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time per question (seconds)
              </label>
              <div className="flex gap-2">
                {[60, 90, 120, 180].map(seconds => (
                  <button
                    key={seconds}
                    type="button"
                    onClick={() => handleChange('timePerQuestion', seconds)}
                    className={`px-3 py-2 rounded-lg border text-sm ${config.timePerQuestion === seconds
                        ? 'bg-blue-100 text-blue-700 border-blue-300'
                        : 'bg-gray-100 text-gray-700 border-gray-300'
                      }`}
                  >
                    {seconds}s
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Additional Settings */}
        <div className="space-y-4">
          {(category === "government" || category === "medical") && (
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Negative Marking</div>
                <div className="text-sm text-gray-600">Enable for exam simulation</div>
              </div>
              <Toggle
                checked={config.negativeMarking}
                onChange={(checked) => handleChange('negativeMarking', checked)}
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Show Hints</div>
              <div className="text-sm text-gray-600">Display helpful hints</div>
            </div>
            <Toggle
              checked={config.showHints !== false}
              onChange={(checked) => handleChange('showHints', checked)}
            />
          </div>
        </div>
      </div>

      {/* Question Types (Optional) */}
      {config.mode !== 'mock' && (
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
                className={`px-4 py-2 rounded-full border text-sm ${config.questionTypes.includes(type)
                    ? 'bg-blue-100 text-blue-700 border-blue-300'
                    : 'bg-gray-100 text-gray-700 border-gray-300'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="pt-6 border-t">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            {config.mode === 'mock' ? 'Start Mock Test' : 'Start Practice'}
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
      mode: "practice",
      timeLimit: false,
      negative: false,
      showHints: true,
    },
    government: {
      questions: 20,
      difficulty: "medium",
      mode: "mock",
      timeLimit: true,
      negative: true,
      showHints: false,
      timePerQuestion: 60,
    },
    medical: {
      questions: 20,
      difficulty: "medium",
      mode: "mock",
      timeLimit: true,
      negative: true,
      showHints: false,
      timePerQuestion: 90,
    },
    engineering: {
      questions: 15,
      difficulty: "mixed",
      mode: "practice",
      timeLimit: false,
      negative: false,
      showHints: true,
    }
  };

  return defaults[category] || defaults.aptitude;
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? 'bg-blue-600' : 'bg-gray-300'
        }`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'
        }`} />
    </button>
  );
}