import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CheckCircle, XCircle, Clock, Award } from "lucide-react";
import axiosInstance from "../../api/axiosInstance";

export default function UniversalAptitudeResults() {
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
      .catch(() => navigate("/aptitude"));
  }, [attemptId, navigate]);


 

  if (loading || !resultData) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🎯 Quiz Result</h1>
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${resultData.passed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
            {resultData.passed ? <CheckCircle className="w-5 h-5 mr-2" /> : <XCircle className="w-5 h-5 mr-2" />}
            <span className="font-bold">{resultData.passed ? 'PASS' : 'FAIL'}</span>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Total Questions</span>
            <span className="text-2xl font-bold">{resultData.totalQuestions}</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Correct</span>
            <span className="text-2xl font-bold text-green-600">{resultData.correctAnswers}</span>
          </div>

          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Skipped</span>
            <span className="text-2xl font-bold text-yellow-600">
              {resultData.skippedAnswers}
            </span>
          </div>

          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Wrong</span>
            <span className="text-2xl font-bold text-red-600">{resultData.wrongAnswers}</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Score</span>
            <span className="text-2xl font-bold text-blue-600">{resultData.score}/{resultData.maxScore}</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Percentage</span>
            <span className="text-2xl font-bold">{resultData.percentage}%</span>
          </div>
        
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => navigate(`/review/${attemptId}`)}
          >
            Review Answers
          </button>
          <Link to="/dashboard" className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-center">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}