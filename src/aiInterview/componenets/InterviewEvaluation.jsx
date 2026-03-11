// InterviewEvaluation.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader2, AlertCircle, RefreshCcw, Home, Award, XCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';
import axiosInstance from '../../api/axiosInstance';

export default function InterviewEvaluation() {
  const location  = useLocation();
  const navigate  = useNavigate();
  const hasCalledAPI = useRef(false);

  const [loading, setLoading] = useState(true);
  const [result,  setResult]  = useState(null);
  const [error,   setError]   = useState('');

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
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          </div>
          <h2 className="text-xl font-black text-gray-900 mb-2">AI is Evaluating...</h2>
          <p className="text-gray-500 text-sm">Please wait while our AI evaluates your performance. This usually takes 10–20 seconds.</p>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 max-w-md w-full text-center shadow-sm">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-rose-500" />
          </div>
          <h2 className="text-xl font-black text-gray-900 mb-2">Evaluation Failed</h2>
          <p className="text-gray-500 mb-6 text-sm">{error}</p>
          <button onClick={() => navigate('/')}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition flex justify-center items-center gap-2">
            <Home className="w-5 h-5" /> Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const { overallScore, overallFeedback, detailedFeedback } = result;
  const isPass    = overallScore >= 70;
  const isAverage = overallScore >= 40 && overallScore < 70;

  const scoreBg    = isPass ? 'bg-emerald-50 border-emerald-200' : isAverage ? 'bg-amber-50 border-amber-200' : 'bg-rose-50 border-rose-200';
  const scoreColor = isPass ? 'text-emerald-600' : isAverage ? 'text-amber-600' : 'text-rose-600';
  const scoreIcon  = isPass
    ? <Award className="text-emerald-500 w-6 h-6" />
    : isAverage
      ? <AlertTriangle className="text-amber-500 w-6 h-6" />
      : <XCircle className="text-rose-500 w-6 h-6" />;

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-10">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Overall Score */}
        <div className={`bg-white rounded-2xl p-8 border shadow-sm ${scoreBg} flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-black text-gray-900 mb-2 flex items-center justify-center md:justify-start gap-3">
              {scoreIcon} Interview Report Card
            </h1>
            <p className="text-gray-600 leading-relaxed">{overallFeedback}</p>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm min-w-[140px]">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Overall Score</p>
            <div className={`text-6xl font-black ${scoreColor}`}>
              {overallScore}<span className="text-xl text-gray-300 font-bold">/100</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button onClick={() => navigate('/')}
            className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 shadow-sm">
            <Home className="w-5 h-5" /> Dashboard
          </button>
          <button onClick={() => navigate('/setup')}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 shadow-sm">
            <RefreshCcw className="w-5 h-5" /> Retake Interview
          </button>
        </div>

        {/* Detailed Breakdown */}
        <div>
          <h2 className="text-xl font-black text-gray-900 mb-5 pb-4 border-b border-gray-200">Detailed Breakdown</h2>
          <div className="space-y-5">
            {detailedFeedback.map((item, index) => {
              const high = item.score >= 8;
              const mid  = item.score >= 5;
              const qScoreBg    = high ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : mid ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-rose-50 text-rose-700 border-rose-200';

              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
                    <h3 className="text-base font-bold text-indigo-600 flex-1">
                      <span className="text-gray-400 mr-2">Q{index + 1}.</span>
                      {item.question}
                    </h3>
                    <span className={`px-4 py-1.5 rounded-xl text-sm font-black border ${qScoreBg} whitespace-nowrap`}>
                      Score: {item.score}/10
                    </span>
                  </div>

                  <div className="space-y-3 text-sm">
                    {/* User Answer */}
                    <div className="pl-4 border-l-2 border-gray-200">
                      <span className="text-gray-400 block mb-1 font-bold uppercase tracking-wider text-xs">What you said:</span>
                      <p className="text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg">{item.userAnswer}</p>
                    </div>

                    {/* AI Feedback */}
                    <div className="pl-4 border-l-2 border-rose-300">
                      <span className="text-rose-500 block mb-1 font-bold uppercase tracking-wider text-xs flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Feedback:
                      </span>
                      <p className="text-rose-700 leading-relaxed bg-rose-50 p-3 rounded-lg border border-rose-100">{item.feedback}</p>
                    </div>

                    {/* Expected Answer */}
                    <div className="pl-4 border-l-2 border-emerald-300">
                      <span className="text-emerald-600 block mb-1 font-bold uppercase tracking-wider text-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Ideal Answer:
                      </span>
                      <p className="text-emerald-800 leading-relaxed bg-emerald-50 p-3 rounded-lg border border-emerald-100">{item.expectedAnswer}</p>
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