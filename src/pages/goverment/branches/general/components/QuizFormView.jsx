
import QuizConfigForm from "../../../../../Componenets/forms/QuizConfigForm";
import { SUBJECTS } from "../GeneralAawarenessPage";
import BackButton from "./BackButtom";

export default function QuizFormView({
  selectedSubject,
  selectedSubtopic,
  setSelectedSubtopic,
  isGeneratingQuiz,
  onStart,
  onBack
}) {
  const subjectObj = SUBJECTS.find((s) => s.name === selectedSubject);

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50">
      <BackButton label="Back to Topics" onClick={onBack} />

      <div className="max-w-4xl mx-auto">
        {/* Header Banner */}
        <div className="bg-linear-to-r from-amber-600 to-orange-600 rounded-2xl p-6 text-white mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Configure AI Quiz for {selectedSubject}
          </h1>
          <p className="text-amber-100">
            Let our AI generate personalized GK questions based on your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              {isGeneratingQuiz ? (
                <GeneratingLoader />
              ) : (
                <>
                  {subjectObj && (
                    <TopicSelector
                      topics={subjectObj.topics}
                      selectedSubtopic={selectedSubtopic}
                      onSelect={setSelectedSubtopic}
                    />
                  )}
                  <QuizConfigForm
                    context={{
                      category: "government",
                      branch: "general-awareness",
                      subject: selectedSubject,
                      subtopic: selectedSubtopic
                    }}
                    onStart={onStart}
                  />
                </>
              )}
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            <HowItWorksCard />
            <RecommendedSettingsCard />
            {subjectObj && <ExamWeightageCard weightage={subjectObj.examWeightage} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function GeneratingLoader() {
  return (
    <div className="text-center py-12">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-green-600 border-t-transparent mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">AI is Generating Your Quiz</h3>
      <p className="text-gray-600">Creating personalized GK questions based on your configuration...</p>
    </div>
  );
}

function TopicSelector({ topics, selectedSubtopic, onSelect }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Select Specific Topic (Optional)
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <TopicOption label="All Topics" description="Comprehensive practice" selected={selectedSubtopic === ""} onClick={() => onSelect("")} />
        {topics.map((topic, idx) => (
          <TopicOption key={idx} label={topic} description="Focused practice" selected={selectedSubtopic === topic} onClick={() => onSelect(topic)} />
        ))}
      </div>
    </div>
  );
}

function TopicOption({ label, description, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl border cursor-pointer transition-all ${
        selected ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <div className="font-medium text-gray-900">{label}</div>
      <div className="text-sm text-gray-600 mt-1">{description}</div>
    </div>
  );
}

function HowItWorksCard() {
  const steps = [
    { title: "Configure Preferences", desc: "Set topic, difficulty, and questions" },
    { title: "Take the Quiz", desc: "Answer government exam pattern questions" },
    { title: "View Results", desc: "Get detailed analysis with cutoff prediction" }
  ];
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-amber-600">🌍</span> How AI GK Quiz Works
      </h3>
      <ul className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">
              {i + 1}
            </div>
            <div>
              <p className="font-medium text-gray-900">{step.title}</p>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecommendedSettingsCard() {
  const settings = [
    { level: "Beginners", recommendation: "10-15 Questions • Easy" },
    { level: "Intermediate", recommendation: "15-20 Questions • Medium" },
    { level: "Advanced", recommendation: "20-25 Questions • Hard" }
  ];
  return (
    <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
      <h3 className="text-lg font-semibold text-amber-900 mb-3">🎯 Recommended Settings</h3>
      <div className="space-y-3">
        {settings.map(({ level, recommendation }) => (
          <div key={level} className="flex items-center justify-between">
            <span className="text-sm text-amber-800">{level}</span>
            <span className="text-sm font-medium text-amber-900">{recommendation}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExamWeightageCard({ weightage }) {
  const labels = { banking: "Banking", ssc: "SSC", upsc: "UPSC" };
  return (
    <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
      <h3 className="text-lg font-semibold text-orange-900 mb-3">📊 Exam Weightage</h3>
      <div className="space-y-2">
        {Object.entries(weightage).map(([exam, value]) => (
          <div key={exam} className="flex items-center justify-between">
            <span className="text-sm text-orange-800">{labels[exam]}</span>
            <span className="text-sm font-medium text-orange-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}