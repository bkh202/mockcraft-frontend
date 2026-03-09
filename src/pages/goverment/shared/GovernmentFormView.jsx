import QuizConfigForm from "../../../Componenets/forms/QuizConfigForm";
import BackButton from "../branches/general/components/BackButtom";



const ACCENT = {
  green: { banner: "from-green-600 to-emerald-600", spinner: "border-green-600", selected: "border-green-500 bg-green-50", step: "bg-green-100 text-green-600" },
  blue:  { banner: "from-blue-600 to-indigo-600",   spinner: "border-blue-600",  selected: "border-blue-500 bg-blue-50",   step: "bg-blue-100 text-blue-600"   },
  cyan:  { banner: "from-blue-600 to-cyan-600",      spinner: "border-green-600", selected: "border-green-500 bg-green-50", step: "bg-blue-100 text-blue-600"   },
};

export default function GovernmentFormView({ config, engine }) {
  const {
    selectedSubject, selectedSubtopic, setSelectedSubtopic,
    isGeneratingQuiz, handleStartQuiz, resetToCards
  } = engine;

  const subjectObj = config.subjects.find((s) => s.name === selectedSubject);
  const ac = ACCENT[config.accentColor] || ACCENT.blue;

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50">
      <BackButton
        label="Back to Topics"
        onClick={resetToCards}
        suffix={`Configure AI ${config.breadcrumb} Quiz`}
      />

      <div className="max-w-4xl mx-auto">
        <div className={`bg-linear-to-r ${ac.banner} rounded-2xl p-6 text-white mb-6`}>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Configure AI Quiz for {selectedSubject}
          </h1>
          <p className="opacity-80">
            Let our AI generate personalized questions based on your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              {isGeneratingQuiz ? (
                <GeneratingLoader spinnerClass={ac.spinner} />
              ) : (
                <>
                  {subjectObj && (
                    <TopicSelector
                      topics={subjectObj.topics}
                      selectedSubtopic={selectedSubtopic}
                      onSelect={setSelectedSubtopic}
                      selectedClass={ac.selected}
                    />
                  )}
                  <QuizConfigForm
                    context={{
                      category: config.category.toLowerCase(),
                      branch: config.branch.toLowerCase(),
                      subject: selectedSubject,
                      subtopic: selectedSubtopic
                    }}
                    onStart={handleStartQuiz}
                  />
                </>
              )}
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            <HowItWorksCard icon={config.formIcon} label={config.breadcrumb} stepClass={ac.step} />
            <RecommendedSettingsCard />
            {subjectObj?.examWeightage && (
              <ExamWeightageCard weightage={subjectObj.examWeightage} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function GeneratingLoader({ spinnerClass }) {
  return (
    <div className="text-center py-12">
      <div className={`inline-block animate-spin rounded-full h-16 w-16 border-4 ${spinnerClass} border-t-transparent mb-4`} />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">AI is Generating Your Quiz</h3>
      <p className="text-gray-600">Creating personalized questions based on your configuration...</p>
    </div>
  );
}

function TopicSelector({ topics, selectedSubtopic, onSelect, selectedClass }) {
  if (!topics?.length) return null;
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Select Specific Topic (Optional)
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <TopicOption label="All Topics" description="Comprehensive practice" selected={selectedSubtopic === ""} onClick={() => onSelect("")} selectedClass={selectedClass} />
        {topics.map((topic, idx) => (
          <TopicOption key={idx} label={topic} description="Focused practice" selected={selectedSubtopic === topic} onClick={() => onSelect(topic)} selectedClass={selectedClass} />
        ))}
      </div>
    </div>
  );
}

function TopicOption({ label, description, selected, onClick, selectedClass }) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl border cursor-pointer transition-all ${selected ? selectedClass : "border-gray-200 hover:border-gray-300"}`}
    >
      <div className="font-medium text-gray-900">{label}</div>
      <div className="text-sm text-gray-600 mt-1">{description}</div>
    </div>
  );
}

function HowItWorksCard({ icon, label, stepClass }) {
  const steps = [
    { title: "Configure Preferences", desc: "Set topic, difficulty, and questions" },
    { title: "Take the Quiz", desc: "Answer government exam pattern questions" },
    { title: "View Results", desc: "Get detailed analysis with cutoff prediction" }
  ];
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span>{icon}</span> How AI {label} Quiz Works
      </h3>
      <ul className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full ${stepClass} flex items-center justify-center text-sm`}>{i + 1}</div>
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
  return (
    <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
      <h3 className="text-lg font-semibold text-blue-900 mb-3">🎯 Recommended Settings</h3>
      <div className="space-y-3">
        {[
          { level: "Beginners", rec: "5-10 Questions • Easy" },
          { level: "Intermediate", rec: "10-15 Questions • Medium" },
          { level: "Advanced", rec: "15-20 Questions • Hard" }
        ].map(({ level, rec }) => (
          <div key={level} className="flex items-center justify-between">
            <span className="text-sm text-blue-800">{level}</span>
            <span className="text-sm font-medium text-blue-900">{rec}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExamWeightageCard({ weightage }) {
  const labels = { banking: "Banking", ssc: "SSC", upsc: "UPSC" };
  return (
    <div className="bg-linear-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
      <h3 className="text-lg font-semibold text-cyan-900 mb-3">📊 Exam Weightage</h3>
      <div className="space-y-2">
        {Object.entries(weightage).map(([exam, value]) => (
          <div key={exam} className="flex items-center justify-between">
            <span className="text-sm text-cyan-800">{labels[exam]}</span>
            <span className="text-sm font-medium text-cyan-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}