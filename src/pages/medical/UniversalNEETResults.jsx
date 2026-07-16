import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";

export default function UniversalNEETResults() {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/quiz/result/${attemptId}`)
      .then(res => {
        const data = res.data;
        const total = data.totalQuestions;
        const correct = data.correct;
        const wrong = data.wrong;
        const skipped = data.skipped;
        const score = (correct * 2) - (wrong * 0.5);
        const maxScore = total * 2;
        const percentage = Math.round((score / maxScore) * 100);
        const passed = percentage >= 40;

        setResultData({
          totalQuestions: total,
          correctAnswers: correct,
          wrongAnswers: wrong,
          skippedAnswers: skipped,
          score: score.toFixed(2),
          maxScore,
          percentage,
          passed
        });
        setLoading(false);
      })
      .catch(() => navigate("/neet"));
  }, [attemptId, navigate]);

  if (loading || !resultData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 font-bold">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-black mb-2">Quiz Result</h1>
          <div className={`inline-flex items-center px-4 py-2 rounded-full border ${
            resultData.passed
              ? 'bg-green-50 text-green-700 border-green-200'
              : 'bg-red-50 text-red-700 border-red-200'
          }`}>
            <i className={`fa ${resultData.passed ? 'fa-check-circle' : 'fa-times-circle'} text-lg mr-2`}></i>
            <span className="font-bold text-base">{resultData.passed ? 'PASS' : 'FAIL'}</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-base font-medium text-gray-700">Total Questions</span>
            <span className="text-2xl font-bold text-black">{resultData.totalQuestions}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-base font-medium text-gray-700">Correct</span>
            <span className="text-2xl font-bold text-black">{resultData.correctAnswers}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-base font-medium text-gray-700">Skipped</span>
            <span className="text-2xl font-bold text-black">{resultData.skippedAnswers}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-base font-medium text-gray-700">Wrong</span>
            <span className="text-2xl font-bold text-black">{resultData.wrongAnswers}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-base font-medium text-gray-700">Score</span>
            <span className="text-2xl font-bold text-black">{resultData.score} / {resultData.maxScore}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-base font-medium text-gray-700">Percentage</span>
            <span className="text-2xl font-bold text-black">{resultData.percentage}%</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            className="flex-1 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors border border-gray-300 text-center"
            onClick={() => navigate(`/review/${attemptId}`)}
          >
            Review Answers
          </button>
          <Link
            to="/dashboard"
            className="flex-1 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors border border-gray-300 text-center"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}