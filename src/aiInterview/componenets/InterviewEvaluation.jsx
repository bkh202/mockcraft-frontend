import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';

export default function InterviewEvaluation() {
  const location = useLocation();
  const navigate = useNavigate();
  const hasCalledAPI = useRef(false);

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const evaluateData = async () => {
      const { questions, answers, jobRole, experienceLevel } = location.state || {};

      if (!questions || !answers || questions.length === 0) {
        setError("Interview data missing! Direct access to this page is not allowed.");
        setLoading(false);
        return;
      }

      if (hasCalledAPI.current) return;
      hasCalledAPI.current = true;

      const qnaList = questions.map((q, index) => ({
        question: typeof q === 'string' ? q : q.question || q.text,
        userAnswer: answers[index] || "User remained silent or skipped the question."
      }));

      try {
        const response = await axiosInstance.post('/api/interview/evaluate', {
          jobRole: jobRole || 'Software Engineer',
          experienceLevel: experienceLevel || 'Mid-level',
          qnaList
        });

        if (response.data.success) setResult(response.data.data);
        else setError(response.data.message || 'Failed to evaluate.');
      } catch (err) {
        setError(err.response?.data?.message || 'Network error or AI Timeout. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    evaluateData();
  }, [location.state]);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200">
            <i className="fa fa-spinner fa-spin text-3xl text-black"></i>
          </div>
          <h2 className="text-2xl font-black text-black mb-2">AI is Evaluating...</h2>
          <p className="text-gray-600 text-base">Please wait while our AI evaluates your performance. This usually takes 10–20 seconds.</p>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 max-w-md w-full text-center shadow-sm">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200">
            <i className="fa fa-exclamation-circle text-3xl text-black"></i>
          </div>
          <h2 className="text-2xl font-black text-black mb-2">Evaluation Failed</h2>
          <p className="text-gray-600 mb-6 text-base">{error}</p>
          <button onClick={() => navigate('/dashboard')}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 text-lg border border-gray-300">
            <i className="fa fa-home"></i> Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const { overallScore, overallFeedback, detailedFeedback } = result;
  const isPass = overallScore >= 70;
  const isAverage = overallScore >= 40 && overallScore < 70;

  const scoreBg = isPass ? 'bg-green-50 border-green-200' : isAverage ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200';
  const scoreColor = isPass ? 'text-green-700' : isAverage ? 'text-amber-700' : 'text-red-700';
  const scoreIcon = isPass ? 'fa-award' : isAverage ? 'fa-exclamation-triangle' : 'fa-times-circle';

  return (
    <div className="min-h-screen bg-white p-6 lg:p-10">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Overall Score */}
        <div className={`bg-white rounded-2xl p-8 border shadow-sm ${scoreBg} flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-black mb-2 flex items-center justify-center md:justify-start gap-3">
              <i className={`fa ${scoreIcon} text-2xl`}></i> Interview Report Card
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">{overallFeedback}</p>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl border border-gray-200 shadow-sm min-w-[140px]">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Overall Score</p>
            <div className={`text-6xl font-black ${scoreColor}`}>
              {overallScore}<span className="text-xl text-gray-400 font-bold">/100</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button onClick={() => navigate('/dashboard')}
            className="flex-1 bg-white hover:bg-gray-50 text-black border border-gray-300 font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 shadow-sm text-lg">
            <i className="fa fa-home"></i> Dashboard
          </button>
          <button onClick={() => navigate('/setup')}
            className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 shadow-sm text-lg border border-gray-300">
            <i className="fa fa-redo"></i> Retake Interview
          </button>
        </div>

        {/* Detailed Breakdown */}
        <div>
          <h2 className="text-2xl font-extrabold text-black mb-5 pb-4 border-b border-gray-200">Detailed Breakdown</h2>
          <div className="space-y-5">
            {detailedFeedback.map((item, index) => {
              const high = item.score >= 8;
              const mid = item.score >= 5;
              const qScoreBg = high ? 'bg-green-50 text-green-700 border-green-200' : mid ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-red-50 text-red-700 border-red-200';

              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
                    <h3 className="text-lg font-bold text-black flex-1">
                      <span className="text-gray-400 mr-2">Q{index + 1}.</span>
                      {item.question}
                    </h3>
                    <span className={`px-4 py-1.5 rounded-xl text-sm font-black border ${qScoreBg} whitespace-nowrap`}>
                      Score: {item.score}/10
                    </span>
                  </div>

                  <div className="space-y-3 text-base">
                    {/* User Answer */}
                    <div className="pl-4 border-l-2 border-gray-200">
                      <span className="text-gray-500 block mb-1 font-bold uppercase tracking-wider text-xs">What you said:</span>
                      <p className="text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-200">{item.userAnswer}</p>
                    </div>

                    {/* AI Feedback */}
                    <div className="pl-4 border-l-2 border-red-300">
                      <span className="text-red-600 block mb-1 font-bold uppercase tracking-wider text-xs flex items-center gap-1">
                        <i className="fa fa-exclamation-triangle text-xs"></i> Feedback:
                      </span>
                      <p className="text-red-700 leading-relaxed bg-red-50 p-3 rounded-lg border border-red-200">{item.feedback}</p>
                    </div>

                    {/* Expected Answer */}
                    <div className="pl-4 border-l-2 border-green-300">
                      <span className="text-green-700 block mb-1 font-bold uppercase tracking-wider text-xs flex items-center gap-1">
                        <i className="fa fa-check-circle text-xs"></i> Ideal Answer:
                      </span>
                      <p className="text-green-800 leading-relaxed bg-green-50 p-3 rounded-lg border border-green-200">{item.expectedAnswer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}