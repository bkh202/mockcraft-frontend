import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VoiceInterviewRoom from './VoiceInterviewRoom'; // Tera existing component
import { Loader2, FileText, PenLine, Settings2, CheckCircle2, AlertCircle } from 'lucide-react';
import axiosInstance from '../../api/axiosInstance';

export default function InterviewSetup() {
  // 🚀 THE FIX: Location hook to catch data from ScanHistory
  const location = useLocation();

  const [storedResume,  setStoredResume]  = useState(null);
  const [useResumeMode, setUseResumeMode] = useState(false);

  useEffect(() => {
    try {
      // 🛑 PRIORITY 1: Check incoming data from navigation (History Page)
      const incomingData = location.state?.resumeData;

      if (incomingData) {
        console.log('[InterviewSetup] ✅ Loaded specific resume from History:', incomingData.name || 'Unknown');
        setStoredResume(incomingData);
        setUseResumeMode(true);
        return; // Stop here, don't read local storage
      }

      // 🛑 PRIORITY 2: Fallback to Local Storage if accessed directly
      console.log('[InterviewSetup] ⚠️ No route data, falling back to local storage');
      const raw  = localStorage.getItem('parsedResumeData');
      const data = raw ? JSON.parse(raw) : null;
      setStoredResume(data);
      setUseResumeMode(!!data);

    } catch (err) {
      console.warn('[InterviewSetup] ❌ Could not parse stored resume:', err);
    }
  }, [location.state]);

  const [formData, setFormData] = useState({
    companyName:     'MockCraft Corp',
    jobRole:         'Full Stack Developer',
    experienceLevel: 'Fresher',
    resumeSkills:    '',
    difficulty:      'Medium',
    questionCount:   5,
  });

  const [questions, setQuestions] = useState([]);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState('');

  // Clean field updater
  const update = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const startInterview = async (e) => {
    e.preventDefault();
    setError('');

    const count = parseInt(formData.questionCount, 10);
    if (isNaN(count) || count < 1 || count > 10) {
      setError('Question count must be between 1 and 10.');
      return;
    }
    if (!useResumeMode && !formData.resumeSkills.trim()) {
      setError('Please enter your core skills.');
      return;
    }

    setLoading(true);

    // 🛑 THE REAL FIX: Combine Experience and Projects properly!
    let combinedExperience = "";

    if (useResumeMode && storedResume) {
      // Experience array ko stringify kar
      if (storedResume.experience && storedResume.experience.length > 0) {
        combinedExperience += "WORK EXPERIENCE:\n" + JSON.stringify(storedResume.experience) + "\n\n";
      }
      // Projects array ko bhi stringify kar
      if (storedResume.projects && storedResume.projects.length > 0) {
        combinedExperience += "PROJECTS:\n" + JSON.stringify(storedResume.projects) + "\n";
      }
    }

    // Payload ready kar
    const resumeData = useResumeMode && storedResume
      ? { 
          // Skills ko properly comma-separated string bana
          skills: Array.isArray(storedResume.skills) ? storedResume.skills.join(', ') : (storedResume.skills || 'General Tech'), 
          // Combine kiya hua data bhej
          experience: combinedExperience.trim() || 'Not specified' 
        }
      : { 
          skills: formData.resumeSkills,
          experience: 'Not specified'
        };

    try {
      const { data: result } = await axiosInstance.post(
        '/api/interview/generate', 
        {
          companyName:     formData.companyName,
          jobRole:         formData.jobRole,
          experienceLevel: formData.experienceLevel,
          difficulty:      formData.difficulty,
          questionCount:   count,
          resumeData, // 👈 Ab isme projects bhi jayenge!
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // ... baaki ka tera aage ka code (if success, setQuestions...)

      if (result?.success && Array.isArray(result.data) && result.data.length > 0) {
        setQuestions(result.data);
      } else {
        setError(result?.message || 'Server returned no questions. Please try again.');
      }
    } catch (err) {
      console.error('[InterviewSetup] API error:', err);
      setError(err.response?.data?.message || err.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Hand off to interview room once questions are ready
  if (questions.length > 0) {
    return (
      <VoiceInterviewRoom
        questions={questions}
        jobRole={formData.jobRole}
        company={formData.companyName}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 text-slate-200">
      <div className="max-w-xl w-full bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">

        {/* Header */}
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Settings2 className="text-cyan-400" />
          Configure Interview
        </h2>

        {/* Error Banner */}
        {error && (
          <div className="flex items-start gap-2 bg-rose-500/10 text-rose-400 p-3 rounded-lg mb-5 text-sm font-semibold border border-rose-500/20">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            {error}
          </div>
        )}

        {/* Mode Toggle */}
        <div className="flex gap-3 mb-6">
          <button
            type="button"
            onClick={() => setUseResumeMode(true)}
            disabled={!storedResume}
            title={!storedResume ? 'No resume found. Upload one first.' : ''}
            className={`flex-1 py-3 rounded-lg font-bold border text-sm transition
              ${useResumeMode
                ? 'bg-cyan-600/20 border-cyan-500 text-cyan-400'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-700'}
              disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            <FileText className="inline w-4 h-4 mr-1.5 -mt-0.5" />
            Use Parsed Resume
          </button>
          <button
            type="button"
            onClick={() => setUseResumeMode(false)}
            className={`flex-1 py-3 rounded-lg font-bold border text-sm transition
              ${!useResumeMode
                ? 'bg-cyan-600/20 border-cyan-500 text-cyan-400'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
          >
            <PenLine className="inline w-4 h-4 mr-1.5 -mt-0.5" />
            Manual Entry
          </button>
        </div>

        <form onSubmit={startInterview} className="space-y-5">

          {/* Company + Role */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">
                Target Company
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={update('companyName')}
                required
                placeholder="e.g. Google"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">
                Job Role
              </label>
              <input
                type="text"
                value={formData.jobRole}
                onChange={update('jobRole')}
                required
                placeholder="e.g. Backend Engineer"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition"
              />
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">
              Experience Level
            </label>
            <select
              value={formData.experienceLevel}
              onChange={update('experienceLevel')}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-white text-sm focus:border-cyan-500 outline-none transition"
            >
              <option value="Fresher">Fresher (0–1 yrs)</option>
              <option value="Junior">Junior (1–3 yrs)</option>
              <option value="Mid-level">Mid-level (3–5 yrs)</option>
              <option value="Senior">Senior (5+ yrs)</option>
            </select>
          </div>

          {/* Skills Area */}
          {useResumeMode ? (
            <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-lg text-emerald-400 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <span>Using skills and experience from your selected resume.</span>
                {storedResume?.name && (
                  <span className="block text-emerald-500/90 text-xs mt-1 font-bold">
                    Candidate: {storedResume.name}
                  </span>
                )}
                {storedResume?.skills && (
                  <span className="block text-emerald-500/70 text-xs mt-1 font-normal line-clamp-2">
                    Skills detected: {Array.isArray(storedResume.skills) ? storedResume.skills.join(', ') : storedResume.skills}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">
                Core Skills{' '}
                <span className="normal-case font-normal text-slate-500">(comma separated)</span>
              </label>
              <textarea
                value={formData.resumeSkills}
                onChange={update('resumeSkills')}
                required
                rows={2}
                placeholder="React, Node.js, PostgreSQL, System Design..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition resize-none"
              />
            </div>
          )}

          {/* Difficulty + Count */}
          <div className="grid grid-cols-2 gap-4 bg-slate-900 p-4 rounded-lg border border-slate-700">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">
                Difficulty
              </label>
              <select
                value={formData.difficulty}
                onChange={update('difficulty')}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2.5 text-white text-sm focus:border-cyan-500 outline-none transition"
              >
                <option value="Easy">Easy — Basics</option>
                <option value="Medium">Medium — Practical</option>
                <option value="Hard">Hard — In-depth</option>
                <option value="Expert">Expert — System Design</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">
                Questions
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={formData.questionCount}
                onChange={update('questionCount')}
                required
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2.5 text-white text-sm focus:border-cyan-500 outline-none transition"
              />
              <p className="text-xs text-slate-500 mt-1">Max 10 questions.</p>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white font-bold py-4 rounded-lg transition flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? <><Loader2 className="w-5 h-5 animate-spin" /> Generating Questions...</>
              : 'Generate Interview Session →'}
          </button>

        </form>
      </div>
    </div>
  );
}