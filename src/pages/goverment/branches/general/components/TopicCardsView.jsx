import { Link } from "react-router-dom";
import { SUBJECTS } from "../GeneralAawarenessPage";

export default function TopicCardsView({ onSelectSubject }) {
  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-base text-gray-600 mb-6">
        <Link to="/government" className="hover:text-black transition-colors font-medium">
          Government Exams
        </Link>
        <span className="text-gray-400">/</span>
        <span className="font-bold text-black">General Awareness</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">General Awareness</h1>
          <p className="text-xl text-gray-600 mt-2">
            Master GK and Current Affairs with AI-generated personalized quizzes for government exams
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-black">AI</p>
            <p className="text-sm text-gray-500">Powered Quizzes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-black">1650+</p>
            <p className="text-sm text-gray-500">Questions</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-black">40%</p>
            <p className="text-sm text-gray-500">Banking Weightage</p>
          </div>
        </div>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {SUBJECTS.map((subject, index) => (
          <SubjectCard key={index} subject={subject} onClick={() => onSelectSubject(subject.name)} />
        ))}
      </div>

      {/* Quick Practice */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4">Quick Practice Options</h3>
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
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-lightbulb text-black"></i> GK Preparation Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TipCard title="Daily Newspaper" tip="Read The Hindu/Indian Express daily" />
          <TipCard title="Current Affairs" tip="Focus on last 6 months for banking exams" />
          <TipCard title="Static GK" tip="Make notes on important dates and events" />
        </div>
        <div className="text-center mt-4">
          <Link to="/government/gk/tips" className="text-base font-bold text-black hover:text-gray-700 transition-colors">
            View Complete Tips Sheet <i className="fa fa-arrow-right ml-1"></i>
          </Link>
        </div>
      </div>

      {/* Back to Government Exams */}
      <Link
        to="/government"
        className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-black transition-all shadow-sm text-base font-bold"
      >
        <i className="fa fa-arrow-left text-sm"></i> Back to Government Exams
      </Link>
    </div>
  );
}

// ─── Subject Card ────────────────────────────────────────────────────
function SubjectCard({ subject, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:border-black transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform">
          <i className={`fa ${subject.icon} text-3xl text-black`}></i>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full border ${
          subject.difficulty === "Easy"   ? "bg-gray-100 text-gray-700 border-gray-200" :
          subject.difficulty === "Medium" ? "bg-gray-200 text-gray-800 border-gray-300" :
          "bg-gray-300 text-black border-gray-400"
        }`}>
          {subject.difficulty}
        </span>
      </div>

      <div className="mb-2">
        <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">{subject.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
            {subject.examWeightage.banking}
          </span>
          <span className="text-sm text-gray-600">{subject.questions} questions</span>
        </div>
      </div>

      <p className="text-base text-gray-600 mb-4">{subject.topics.slice(0, 4).join(", ")}...</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {subject.topics.slice(0, 3).map((topic, idx) => (
          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">{topic}</span>
        ))}
        {subject.topics.length > 3 && (
          <span className="text-xs text-gray-500">+{subject.topics.length - 3} more</span>
        )}
      </div>

      <div className="pt-4 border-t border-gray-200">
        <span className="text-base font-bold text-black group-hover:translate-x-1 transition-transform">
          Start AI Quiz <i className="fa fa-arrow-right text-xs ml-1"></i>
        </span>
      </div>
    </div>
  );
}

// ─── Quick Practice Card ────────────────────────────────────────────
function QuickPracticeCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-black hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">{title}</p>
          <p className="text-base text-gray-600">{description}</p>
        </div>
        <span className="text-black group-hover:translate-x-1 transition-transform">
          <i className="fa fa-arrow-right text-lg"></i>
        </span>
      </div>
    </div>
  );
}

// ─── Tip Card ────────────────────────────────────────────────────────
function TipCard({ title, tip }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
      <div className="text-base font-bold text-black">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{tip}</div>
    </div>
  );
}