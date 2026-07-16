import QuizConfigForm from "../../../Componenets/forms/QuizConfigForm";
import BackButton from "../branches/general/components/BackButtom";

export default function GovernmentFormView({ config, engine }) {
  const {
    selectedSubject,
    selectedSubtopic,
    setSelectedSubtopic,
    isGeneratingQuiz,
    handleStartQuiz,
    resetToCards,
  } = engine;

  const subjectObj = config.subjects.find((s) => s.name === selectedSubject);

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      <BackButton
        label="Back to Topics"
        onClick={resetToCards}
        suffix={`Configure AI ${config.breadcrumb} Quiz`}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header – black background, white text */}
        <div className="bg-black rounded-2xl shadow-sm border border-gray-800 p-6 text-white mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
            Configure AI Quiz for {selectedSubject}
          </h1>
          <p className="text-gray-300 text-lg">
            Let our AI generate personalized questions based on your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
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
                      category: config.category.toLowerCase(),
                      branch: config.branch.toLowerCase(),
                      subject: selectedSubject,
                      subtopic: selectedSubtopic,
                    }}
                    onStart={handleStartQuiz}
                  />
                </>
              )}
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            <HowItWorksCard icon={config.formIcon} label={config.breadcrumb} />
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

// ─── Generating Loader ──────────────────────────────────────────────
function GeneratingLoader() {
  return (
    <div className="text-center py-12">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-black border-t-transparent mb-4" />
      <h3 className="text-2xl font-extrabold text-black mb-2">AI is Generating Your Quiz</h3>
      <p className="text-lg text-gray-600">Creating personalized questions based on your configuration...</p>
    </div>
  );
}

// ─── Topic Selector ─────────────────────────────────────────────────
function TopicSelector({ topics, selectedSubtopic, onSelect }) {
  if (!topics?.length) return null;
  return (
    <div className="mb-6">
      <label className="block text-lg font-bold text-black mb-3">
        Select Specific Topic (Optional)
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <TopicOption
          label="All Topics"
          description="Comprehensive practice"
          selected={selectedSubtopic === ""}
          onClick={() => onSelect("")}
        />
        {topics.map((topic, idx) => (
          <TopicOption
            key={idx}
            label={topic}
            description="Focused practice"
            selected={selectedSubtopic === topic}
            onClick={() => onSelect(topic)}
          />
        ))}
      </div>
    </div>
  );
}

function TopicOption({ label, description, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
        selected
          ? "border-black bg-gray-100 shadow-sm"
          : "border-gray-200 hover:border-black hover:bg-gray-50"
      }`}
    >
      <div className="font-bold text-black">{label}</div>
      <div className="text-sm text-gray-600 mt-1">{description}</div>
    </div>
  );
}

// ─── How It Works ──────────────────────────────────────────────────
function HowItWorksCard({ icon, label }) {
  const steps = [
    { title: "Configure Preferences", desc: "Set topic, difficulty, and questions" },
    { title: "Take the Quiz", desc: "Answer government exam pattern questions" },
    { title: "View Results", desc: "Get detailed analysis with cutoff prediction" },
  ];
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2">
        <i className={`fa ${icon} text-2xl text-black`}></i> How AI {label} Quiz Works
      </h3>
      <ul className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-bold text-black">
              {i + 1}
            </div>
            <div>
              <p className="font-bold text-black">{step.title}</p>
              <p className="text-base text-gray-600">{step.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Recommended Settings ──────────────────────────────────────────
function RecommendedSettingsCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-xl font-extrabold text-black mb-3 flex items-center gap-2">
        <i className="fa fa-bullseye text-black"></i> Recommended Settings
      </h3>
      <div className="space-y-3">
        {[
          { level: "Beginners", rec: "5-10 Questions • Easy" },
          { level: "Intermediate", rec: "10-15 Questions • Medium" },
          { level: "Advanced", rec: "15-20 Questions • Hard" },
        ].map(({ level, rec }) => (
          <div key={level} className="flex items-center justify-between">
            <span className="text-base font-medium text-gray-700">{level}</span>
            <span className="text-sm font-bold text-black bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
              {rec}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Exam Weightage ──────────────────────────────────────────────────
function ExamWeightageCard({ weightage }) {
  const labels = { banking: "Banking", ssc: "SSC", upsc: "UPSC" };
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-xl font-extrabold text-black mb-3 flex items-center gap-2">
        <i className="fa fa-chart-pie text-black"></i> Exam Weightage
      </h3>
      <div className="space-y-2">
        {Object.entries(weightage).map(([exam, value]) => (
          <div key={exam} className="flex items-center justify-between">
            <span className="text-base font-medium text-gray-700">{labels[exam] || exam}</span>
            <span className="text-base font-bold text-black">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}