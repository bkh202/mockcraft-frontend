import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader2, AlertCircle, RefreshCcw, Home, Award, XCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';
import axiosInstance from '../../api/axiosInstance'; // Updated to use standard axios

export default function InterviewEvaluation() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Use ref to prevent strict-mode double API calls in dev
  const hasCalledAPI = useRef(false);

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const evaluateData = async () => {
      // 1. Check if data came from the interview room
      const { questions, answers, jobRole, experienceLevel } = location.state || {};

      if (!questions || !answers || questions.length === 0) {
        setError("Interview data missing! Direct access to this page is not allowed.");
        setLoading(false);
        return;
      }

      if (hasCalledAPI.current) return;
      hasCalledAPI.current = true;

      // 2. Prepare the payload
      const qnaList = questions.map((q, index) => ({
        question: typeof q === 'string' ? q : q.question || q.text,
        userAnswer: answers[index] || "User remained silent or skipped the question."
      }));

      try {
        // 3. Hit the backend (using explicit localhost URL to avoid instance issues)
        const response = await axiosInstance.post('/api/interview/evaluate', {
          jobRole: jobRole || 'Software Engineer',
          experienceLevel: experienceLevel || 'Mid-level',
          qnaList: qnaList
        });

        if (response.data.success) {
          setResult(response.data.data);
        } else {
          setError(response.data.message || 'Failed to evaluate.');
        }
      } catch (err) {
        console.error("Evaluation API Error:", err);
        setError(err.response?.data?.message || 'Network error or AI Timeout. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    evaluateData();
  }, [location.state]);

  // UI 1: Loading State (The AI is thinking)
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-slate-200 p-6">
        <Loader2 className="w-16 h-16 text-cyan-500 animate-spin mb-6" />
        <h2 className="text-2xl font-bold text-white mb-2">AI is Grinding Your Answers...</h2>
        <p className="text-slate-400 text-center max-w-md">
          Please wait while our brutal AI technical interviewer evaluates your performance. This usually takes 10-20 seconds.
        </p>
      </div>
    );
  }

  // UI 2: Error State (If someone bypassed or API failed)
  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-slate-200 p-6">
        <div className="bg-slate-800 p-8 rounded-2xl border border-rose-500/30 max-w-md w-full text-center shadow-2xl">
          <AlertCircle className="w-16 h-16 text-rose-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Evaluation Failed</h2>
          <p className="text-slate-400 mb-8">{error}</p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg transition flex justify-center items-center gap-2"
          >
            <Home className="w-5 h-5" /> Go Back Home
          </button>
        </div>
      </div>
    );
  }

  // UI 3: The Brutal Dashboard
  const { overallScore, overallFeedback, detailedFeedback } = result;

  // Dynamic styling based on score
  const isPass = overallScore >= 70;
  const isAverage = overallScore >= 40 && overallScore < 70;
  
  const scoreColor = isPass ? 'text-emerald-500' : isAverage ? 'text-amber-500' : 'text-rose-500';
  const scoreBg = isPass ? 'bg-emerald-500/10 border-emerald-500/30' : isAverage ? 'bg-amber-500/10 border-amber-500/30' : 'bg-rose-500/10 border-rose-500/30';

  return (
    <div className="min-h-screen bg-slate-900 p-6 lg:p-12 text-slate-200">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Top Section: Overall Score */}
        <div className={`p-8 rounded-2xl border ${scoreBg} shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-black text-white mb-2 flex items-center justify-center md:justify-start gap-3">
              {isPass ? <Award className="text-emerald-500" /> : isAverage ? <AlertTriangle className="text-amber-500" /> : <XCircle className="text-rose-500" />}
              Interview Report Card
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">{overallFeedback}</p>
          </div>
          <div className="text-center bg-slate-900 p-6 rounded-2xl border border-slate-700 shadow-inner">
            <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Overall Score</p>
            <div className={`text-6xl font-black ${scoreColor}`}>
              {overallScore}<span className="text-2xl text-slate-500 font-bold">/100</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
            <button 
              onClick={() => navigate('/')}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold py-4 rounded-xl transition flex justify-center items-center gap-2"
            >
              <Home className="w-5 h-5" /> Dashboard
            </button>
            <button 
              onClick={() => navigate('/setup')} // Change to your setup route
              className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition flex justify-center items-center gap-2 shadow-lg shadow-cyan-600/20"
            >
              <RefreshCcw className="w-5 h-5" /> Retake Interview
            </button>
        </div>

        {/* Detailed Breakdown */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Detailed Breakdown</h2>
          <div className="space-y-6">
            {detailedFeedback.map((item, index) => {
              const qScoreColor = item.score >= 8 ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' 
                                : item.score >= 5 ? 'text-amber-400 bg-amber-400/10 border-amber-400/20' 
                                : 'text-rose-400 bg-rose-400/10 border-rose-400/20';

              return (
                <div key={index} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 flex-1">
                      <span className="text-slate-500 mr-2">Q{index + 1}.</span> 
                      {item.question}
                    </h3>
                    <span className={`px-4 py-1.5 rounded-lg text-sm font-black border ${qScoreColor} whitespace-nowrap`}>
                      Score: {item.score}/10
                    </span>
                  </div>
                  
                  <div className="space-y-4 text-sm mt-5">
                    {/* User Answer */}
                    <div className="relative">
                      <div className="absolute -left-3 top-0 bottom-0 w-1 bg-slate-600 rounded-full"></div>
                      <span className="text-slate-400 block mb-1 font-bold uppercase tracking-wider text-xs">What you said:</span>
                      <p className="text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-lg">{item.userAnswer}</p>
                    </div>

                    {/* AI Feedback */}
                    <div className="relative">
                      <div className="absolute -left-3 top-0 bottom-0 w-1 bg-rose-500 rounded-full"></div>
                      <span className="text-rose-400 block mb-1 font-bold uppercase tracking-wider text-xs flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Brutal Truth (Feedback):
                      </span>
                      <p className="text-rose-100 leading-relaxed bg-rose-500/10 p-4 rounded-lg border border-rose-500/20">{item.feedback}</p>
                    </div>

                    {/* Expected Answer */}
                    <div className="relative">
                      <div className="absolute -left-3 top-0 bottom-0 w-1 bg-emerald-500 rounded-full"></div>
                      <span className="text-emerald-400 block mb-1 font-bold uppercase tracking-wider text-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> How you should have answered:
                      </span>
                      <p className="text-emerald-100 leading-relaxed bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">{item.expectedAnswer}</p>
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