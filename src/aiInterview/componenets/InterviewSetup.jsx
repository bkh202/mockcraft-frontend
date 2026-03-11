// InterviewSetup.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VoiceInterviewRoom from './VoiceInterviewRoom';
import { Loader2, FileText, PenLine, Settings2, CheckCircle2, AlertCircle } from 'lucide-react';
import axiosInstance from '../../api/axiosInstance';

export default function InterviewSetup() {
  const location = useLocation();
  const [storedResume, setStoredResume]   = useState(null);
  const [useResumeMode, setUseResumeMode] = useState(false);

  useEffect(() => {
    try {
      const incomingData = location.state?.resumeData;
      if (incomingData) { setStoredResume(incomingData); setUseResumeMode(true); return; }
      const raw  = localStorage.getItem('parsedResumeData');
      const data = raw ? JSON.parse(raw) : null;
      setStoredResume(data);
      setUseResumeMode(!!data);
    } catch (err) {
      console.warn('[InterviewSetup] Could not parse stored resume:', err);
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

  const update = (field) => (e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const startInterview = async (e) => {
    e.preventDefault();
    setError('');
    const count = parseInt(formData.questionCount, 10);
    if (isNaN(count) || count < 1 || count > 10) { setError('Question count must be between 1 and 10.'); return; }
    if (!useResumeMode && !formData.resumeSkills.trim()) { setError('Please enter your core skills.'); return; }

    setLoading(true);

    let combinedExperience = "";
    if (useResumeMode && storedResume) {
      if (storedResume.experience?.length > 0) combinedExperience += "WORK EXPERIENCE:\n" + JSON.stringify(storedResume.experience) + "\n\n";
      if (storedResume.projects?.length > 0)   combinedExperience += "PROJECTS:\n" + JSON.stringify(storedResume.projects) + "\n";
    }

    const resumeData = useResumeMode && storedResume
      ? { skills: Array.isArray(storedResume.skills) ? storedResume.skills.join(', ') : (storedResume.skills || 'General Tech'), experience: combinedExperience.trim() || 'Not specified' }
      : { skills: formData.resumeSkills, experience: 'Not specified' };

    try {
      const { data: result } = await axiosInstance.post('/api/interview/generate', {
        companyName: formData.companyName, jobRole: formData.jobRole,
        experienceLevel: formData.experienceLevel, difficulty: formData.difficulty,
        questionCount: count, resumeData,
      }, { headers: { 'Content-Type': 'application/json' } });

      if (result?.success && Array.isArray(result.data) && result.data.length > 0) setQuestions(result.data);
      else setError(result?.message || 'Server returned no questions. Please try again.');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (questions.length > 0) {
    return <VoiceInterviewRoom questions={questions} jobRole={formData.jobRole} company={formData.companyName} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Settings2 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-black text-gray-900">Configure Interview</h2>
            <p className="text-xs text-gray-500">Set up your AI mock interview session</p>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-start gap-2 bg-rose-50 text-rose-600 p-3 rounded-xl mb-5 text-sm font-semibold border border-rose-100">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" /> {error}
          </div>
        )}

        {/* Mode Toggle */}
        <div className="flex gap-3 mb-6">
          <button type="button" onClick={() => setUseResumeMode(true)} disabled={!storedResume}
            title={!storedResume ? 'No resume found. Upload one first.' : ''}
            className={`flex-1 py-3 rounded-xl font-bold border text-sm transition ${
              useResumeMode ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-indigo-200 hover:text-indigo-600'
            } disabled:opacity-40 disabled:cursor-not-allowed`}>
            <FileText className="inline w-4 h-4 mr-1.5 -mt-0.5" /> Use Parsed Resume
          </button>
          <button type="button" onClick={() => setUseResumeMode(false)}
            className={`flex-1 py-3 rounded-xl font-bold border text-sm transition ${
              !useResumeMode ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-indigo-200 hover:text-indigo-600'
            }`}>
            <PenLine className="inline w-4 h-4 mr-1.5 -mt-0.5" /> Manual Entry
          </button>
        </div>

        <form onSubmit={startInterview} className="space-y-5">

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Target Company</label>
              <input type="text" value={formData.companyName} onChange={update('companyName')} required placeholder="e.g. Google"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100 outline-none transition" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Job Role</label>
              <input type="text" value={formData.jobRole} onChange={update('jobRole')} required placeholder="e.g. Backend Engineer"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100 outline-none transition" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Experience Level</label>
            <select value={formData.experienceLevel} onChange={update('experienceLevel')}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm focus:border-indigo-500 outline-none transition">
              <option value="Fresher">Fresher (0–1 yrs)</option>
              <option value="Junior">Junior (1–3 yrs)</option>
              <option value="Mid-level">Mid-level (3–5 yrs)</option>
              <option value="Senior">Senior (5+ yrs)</option>
            </select>
          </div>

          {useResumeMode ? (
            <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
              <div className="text-emerald-700">
                <span>Using skills and experience from your selected resume.</span>
                {storedResume?.name && <span className="block text-emerald-600 text-xs mt-1 font-bold">Candidate: {storedResume.name}</span>}
                {storedResume?.skills && (
                  <span className="block text-emerald-600/80 text-xs mt-1 line-clamp-2">
                    Skills: {Array.isArray(storedResume.skills) ? storedResume.skills.join(', ') : storedResume.skills}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                Core Skills <span className="normal-case font-normal text-gray-400">(comma separated)</span>
              </label>
              <textarea value={formData.resumeSkills} onChange={update('resumeSkills')} required rows={2}
                placeholder="React, Node.js, PostgreSQL, System Design..."
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100 outline-none transition resize-none" />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Difficulty</label>
              <select value={formData.difficulty} onChange={update('difficulty')}
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm focus:border-indigo-500 outline-none transition">
                <option value="Easy">Easy — Basics</option>
                <option value="Medium">Medium — Practical</option>
                <option value="Hard">Hard — In-depth</option>
                <option value="Expert">Expert — System Design</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Questions</label>
              <input type="number" min="1" max="10" value={formData.questionCount} onChange={update('questionCount')} required
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm focus:border-indigo-500 outline-none transition" />
              <p className="text-xs text-gray-400 mt-1">Max 10 questions.</p>
            </div>
          </div>

          <button type="submit" disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition flex justify-center items-center gap-2 disabled:opacity-50 shadow-sm">
            {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Generating Questions...</> : 'Generate Interview Session →'}
          </button>

        </form>
      </div>
    </div>
  );
}