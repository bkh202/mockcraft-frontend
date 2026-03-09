import { Link } from "react-router-dom";
import { SUBJECTS } from "../GeneralAawarenessPage";

export default function TopicCardsView({ onSelectSubject }) {
  return (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link to="/government" className="hover:text-green-600">Government Exams</Link>
          <span>→</span>
          <span className="text-gray-900 font-medium">General Awareness</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">General Awareness</h1>
            <p className="text-gray-600 mt-2">
              Master GK and Current Affairs with AI-generated personalized quizzes for government exams
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-600">🤖 AI</p>
              <p className="text-sm text-gray-600">Powered Quizzes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">1650+</p>
              <p className="text-sm text-gray-600">Questions</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">40%</p>
              <p className="text-sm text-gray-600">Banking Weightage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {SUBJECTS.map((subject, index) => (
          <SubjectCard key={index} subject={subject} onClick={() => onSelectSubject(subject.name)} />
        ))}
      </div>

      {/* Quick Practice */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Practice Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <QuickPracticeCard
            title="Monthly Current Affairs"
            description="50 questions from last month"
            onClick={() => onSelectSubject("Current Affairs")}
          />
          <QuickPracticeCard
            title="Full GK Mock Test"
            description="50 questions, 30 minutes (Banking Pattern)"
            onClick={() => onSelectSubject("Mixed Topics")}
          />
        </div>
      </div>

      {/* GK Tips */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 GK Preparation Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TipCard color="amber" title="Daily Newspaper" tip="Read The Hindu/Indian Express daily" />
          <TipCard color="red" title="Current Affairs" tip="Focus on last 6 months for banking exams" />
          <TipCard color="blue" title="Static GK" tip="Make notes on important dates and events" />
        </div>
        <div className="text-center mt-4">
          <Link to="/government/gk/tips" className="text-sm text-amber-600 hover:text-amber-800">
            View Complete Tips Sheet →
          </Link>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <Link
          to="/government"
          className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Government Exams
        </Link>
      </div>
    </div>
  );
}

function SubjectCard({ subject, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-amber-300 transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${subject.color} flex items-center justify-center`}>
          <span className="text-2xl">{subject.icon}</span>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${
          subject.difficulty === "Easy" ? "bg-green-100 text-green-800" :
          subject.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
          "bg-red-100 text-red-800"
        }`}>
          {subject.difficulty}
        </span>
      </div>

      <div className="mb-2">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600">{subject.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded">
            {subject.examWeightage.banking}
          </span>
          <span className="text-sm text-gray-600">{subject.questions} questions</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">{subject.topics.slice(0, 4).join(", ")}...</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {subject.topics.slice(0, 3).map((topic, idx) => (
          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">{topic}</span>
        ))}
        {subject.topics.length > 3 && (
          <span className="text-xs text-gray-500">+{subject.topics.length - 3} more</span>
        )}
      </div>

      <div className="pt-4 border-t border-gray-100">
        <span className="text-sm font-medium text-amber-600">Start AI Quiz →</span>
      </div>
    </div>
  );
}

function QuickPracticeCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-300 rounded-lg p-4 hover:border-amber-400 hover:shadow-sm transition-colors cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <span className="text-amber-600">Start →</span>
      </div>
    </div>
  );
}

function TipCard({ color, title, tip }) {
  return (
    <div className={`p-4 bg-${color}-50 rounded-lg`}>
      <div className={`text-sm font-medium text-${color}-800`}>{title}</div>
      <div className={`text-xs text-${color}-600 mt-1`}>{tip}</div>
    </div>
  );
}