import React, { useEffect, useState } from "react";
import { getFocusedQuiz } from "../../../../services/quizService";
import axios from "../../../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import StudyPlan from "./StudyPlan"; // adjust path if needed

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
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading focused quiz...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md text-center">
          <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-red-800 mb-2">Error</h3>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!quizData || !quizData.questions?.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md text-center">
          <svg className="w-12 h-12 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-yellow-800 mb-2">No Questions</h3>
          <p className="text-yellow-700">No questions available for this quiz.</p>
        </div>
      </div>
    );
  }

  const currentQ = quizData.questions[currentIndex];
  const company = quizData.company || "GENERAL";
  const accuracy = quizData.accuracy;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">
              {quizData.topic} • {quizData.difficulty}
            </h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {company && (
              <div className="flex items-center space-x-3">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="text-lg font-semibold text-gray-900">{company}</p>
                </div>
              </div>
            )}
            {accuracy !== undefined && (
              <div className="flex items-center space-x-3">
                <div className="shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Accuracy</p>
                  <p className="text-lg font-semibold text-gray-900">{accuracy}%</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Question {currentIndex + 1} of {quizData.questions.length}
              </span>
              <span className="text-sm text-gray-500">
                {Object.keys(answers).length} answered
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {currentQ.question}
            </h3>
            <div className="space-y-3">
              {currentQ.options.map((opt, i) => (
                <label
                  key={i}
                  className={`block p-4 border rounded-lg cursor-pointer transition ${
                    answers[currentQ.id] === opt
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name={`q-${currentQ.id}`}
                      value={opt}
                      checked={answers[currentQ.id] === opt}
                      onChange={() => handleOptionSelect(currentQ.id, opt)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-800">{opt}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-4 mb-6">
          <button
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            disabled={currentIndex === 0}
            className={`px-5 py-2 rounded-lg font-medium flex items-center space-x-2 transition ${
              currentIndex === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous</span>
          </button>
          <span className="text-gray-700 font-medium">
            {currentIndex + 1} / {quizData.questions.length}
          </span>
          <button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            disabled={currentIndex === quizData.questions.length - 1}
            className={`px-5 py-2 rounded-lg font-medium flex items-center space-x-2 transition ${
              currentIndex === quizData.questions.length - 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <span>Next</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Submit Button (only on last question) */}
        {currentIndex === quizData.questions.length - 1 && (
          <div className="flex justify-center mb-6">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition shadow-md flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Submit Quiz</span>
            </button>
          </div>
        )}

        {/* AI Advisor Section */}
        {quizData.aiAdvisor && (
          <div className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-xl shadow-md p-6 border border-purple-100 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI Advisor
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizData.aiAdvisor.weaknessAnalysis && (
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm font-medium text-gray-500 mb-1">Weakness Analysis</p>
                  <p className="text-gray-900">{quizData.aiAdvisor.weaknessAnalysis}</p>
                </div>
              )}
              {quizData.aiAdvisor.keyConcepts && (
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm font-medium text-gray-500 mb-1">Key Concepts</p>
                  <p className="text-gray-900">{quizData.aiAdvisor.keyConcepts}</p>
                </div>
              )}
              {quizData.aiAdvisor.commonMistakes && (
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm font-medium text-gray-500 mb-1">Common Mistakes</p>
                  <p className="text-gray-900">{quizData.aiAdvisor.commonMistakes}</p>
                </div>
              )}
              {quizData.aiAdvisor.studyStrategy && (
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm font-medium text-gray-500 mb-1">Study Strategy</p>
                  <p className="text-gray-900">{quizData.aiAdvisor.studyStrategy}</p>
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