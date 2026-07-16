import React, { useEffect, useState } from "react";
import { getFocusedQuiz } from "../../../../services/quizService";
import axios from "../../../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import StudyPlan from "./StudyPlan";

const FocusedQuizPage = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizStartTime, setQuizStartTime] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const res = await getFocusedQuiz();
      setQuizData(res.data);
      setQuizStartTime(Date.now());
    } catch (err) {
      console.error(err);
      setError("Failed to load quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmit = async () => {
    const formattedAnswers = quizData.questions.map((q) => ({
      questionId: q.id,
      selectedOption: answers[q.id] || null,
    }));

    const companyValue = quizData.company || "GENERAL";

    try {
      const res = await axios.post("/quiz/submit", {
        category: "ENGINEERING",
        branch: "GENERAL",
        subject: quizData.topic,
        unit: quizData.topic || "General",
        subtopic: null,
        difficulty: quizData.difficulty,
        mode: "practice",
        timeTaken: Math.floor((Date.now() - quizStartTime) / 1000),
        company: companyValue,
        answers: formattedAnswers,
      });

      navigate(`/engineering/result/${res.data.attemptId}`);
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent mx-auto"></div>
          <p className="mt-4 text-lg font-bold text-gray-600">Loading focused quiz...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md text-center">
          <i className="fa fa-exclamation-circle text-4xl text-red-600 mx-auto mb-4"></i>
          <h3 className="text-xl font-bold text-red-800 mb-2">Error</h3>
          <p className="text-red-600 text-base">{error}</p>
        </div>
      </div>
    );
  }

  if (!quizData || !quizData.questions?.length) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md text-center">
          <i className="fa fa-exclamation-triangle text-4xl text-yellow-600 mx-auto mb-4"></i>
          <h3 className="text-xl font-bold text-yellow-800 mb-2">No Questions</h3>
          <p className="text-yellow-700 text-base">No questions available for this quiz.</p>
        </div>
      </div>
    );
  }

  const currentQ = quizData.questions[currentIndex];
  const company = quizData.company || "GENERAL";
  const accuracy = quizData.accuracy;

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Card – now black */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="bg-black px-6 py-4 border-b border-gray-800">
            <h2 className="text-2xl font-extrabold text-white">
              {quizData.topic} • {quizData.difficulty}
            </h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {company && (
              <div className="flex items-center space-x-3">
                <div className="shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                  <i className="fa fa-building text-xl text-black"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Company</p>
                  <p className="text-lg font-bold text-black">{company}</p>
                </div>
              </div>
            )}
            {accuracy !== undefined && (
              <div className="flex items-center space-x-3">
                <div className="shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                  <i className="fa fa-bullseye text-xl text-black"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Accuracy</p>
                  <p className="text-lg font-bold text-black">{accuracy}%</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-gray-100 text-black text-sm font-bold px-3 py-1 rounded-full border border-gray-200">
                Question {currentIndex + 1} of {quizData.questions.length}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {Object.keys(answers).length} answered
              </span>
            </div>
            <h3 className="text-xl font-bold text-black mb-6">
              {currentQ.question}
            </h3>
            <div className="space-y-3">
              {currentQ.options.map((opt, i) => (
                <label
                  key={i}
                  className={`block p-4 border rounded-lg cursor-pointer transition ${
                    answers[currentQ.id] === opt
                      ? "border-black bg-gray-100"
                      : "border-gray-200 hover:border-black hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name={`q-${currentQ.id}`}
                      value={opt}
                      checked={answers[currentQ.id] === opt}
                      onChange={() => handleOptionSelect(currentQ.id, opt)}
                      className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                    />
                    <span className="ml-3 text-base text-black">{opt}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <button
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            disabled={currentIndex === 0}
            className={`px-5 py-2 rounded-lg font-bold flex items-center space-x-2 transition ${
              currentIndex === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800 border border-gray-300"
            }`}
          >
            <i className="fa fa-arrow-left text-sm"></i>
            <span>Previous</span>
          </button>
          <span className="text-base font-bold text-black">
            {currentIndex + 1} / {quizData.questions.length}
          </span>
          <button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            disabled={currentIndex === quizData.questions.length - 1}
            className={`px-5 py-2 rounded-lg font-bold flex items-center space-x-2 transition ${
              currentIndex === quizData.questions.length - 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800 border border-gray-300"
            }`}
          >
            <span>Next</span>
            <i className="fa fa-arrow-right text-sm"></i>
          </button>
        </div>

        {/* Submit Button (only on last question) */}
        {currentIndex === quizData.questions.length - 1 && (
          <div className="flex justify-center mb-6">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition shadow-sm border border-gray-300 flex items-center space-x-2"
            >
              <i className="fa fa-check-circle"></i>
              <span>Submit Quiz</span>
            </button>
          </div>
        )}

        {/* AI Advisor Section – now grayscale */}
        {quizData.aiAdvisor && (
          <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-extrabold text-black mb-4 flex items-center">
              <i className="fa fa-robot text-2xl text-black mr-2"></i>
              AI Advisor
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizData.aiAdvisor.weaknessAnalysis && (
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p className="text-sm font-bold text-gray-500 mb-1">Weakness Analysis</p>
                  <p className="text-base text-black">{quizData.aiAdvisor.weaknessAnalysis}</p>
                </div>
              )}
              {quizData.aiAdvisor.keyConcepts && (
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p className="text-sm font-bold text-gray-500 mb-1">Key Concepts</p>
                  <p className="text-base text-black">{quizData.aiAdvisor.keyConcepts}</p>
                </div>
              )}
              {quizData.aiAdvisor.commonMistakes && (
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p className="text-sm font-bold text-gray-500 mb-1">Common Mistakes</p>
                  <p className="text-base text-black">{quizData.aiAdvisor.commonMistakes}</p>
                </div>
              )}
              {quizData.aiAdvisor.studyStrategy && (
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p className="text-sm font-bold text-gray-500 mb-1">Study Strategy</p>
                  <p className="text-base text-black">{quizData.aiAdvisor.studyStrategy}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Study Plan Component */}
        <div className="mt-6">
          <StudyPlan />
        </div>
      </div>
    </div>
  );
};

export default FocusedQuizPage;