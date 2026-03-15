import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Calendar, Loader2, AlertCircle, Trash2, Sparkles, Bot } from 'lucide-react';
import axiosInstance from '../../api/axiosInstance';

export default function ScanHistory() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processingId, setProcessingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axiosInstance.get('/resume/all-resumes');
      const allResumes = response.data.data || response.data;

      // ✅ Deduplicate by fileName — sirf latest ek dikhega
      const unique = allResumes.filter((resume, index, self) =>
        index === self.findIndex(r => r.fileName === resume.fileName)
      );
      setResumes(unique);
    } catch (err) {
      setError("Failed to load history. " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e, resumeId) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to permanently delete this resume?")) return;
    try {
      await axiosInstance.delete(`/resume/${resumeId}`);
      setResumes(resumes.filter(resume => resume.id !== resumeId));
    } catch (err) {
      alert("Failed to delete. " + (err.response?.data?.message || err.message));
    }
  };

  const handleAction = async (e, resumeId, actionType) => {
    e.stopPropagation();
    try {
      setProcessingId(resumeId);
      const response = await axiosInstance.post(`/resume/parse/${resumeId}`);
      const parsedData = response.data.data || response.data;
      if (actionType === 'analyze') {
        navigate('/resume-analyzer', { state: { resumeData: parsedData } });
      } else if (actionType === 'interview') {
        navigate('/ai-mock-interview', { state: { resumeData: parsedData } });
      }
    } catch (err) {
      console.error(err);
      alert("Failed to fetch parsed data for this resume.");
    } finally {
      setProcessingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-teal-600">
        <Loader2 className="w-8 h-8 animate-spin mb-3" />
        <p className="font-bold text-sm">Loading your scan history...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-5 font-sans">

      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">Scan History</h1>
          <p className="text-slate-500 font-medium text-xs sm:text-sm">Select a resume to run an Analysis or start an Interview.</p>
        </div>
        <button
          onClick={() => navigate('/resume-analyzer')}
          className="w-full sm:w-auto px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-all shadow-md text-sm shrink-0"
        >
          + Upload New Resume
        </button>
      </div>

      {/* ── ERROR ── */}
      {error && (
        <div className="p-3 bg-rose-50 text-rose-600 rounded-xl flex items-center gap-2 font-bold text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" /> {error}
        </div>
      )}

      {/* ── EMPTY STATE ── */}
      {resumes.length === 0 && !error ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-700 mb-1">No history found</h3>
          <p className="text-slate-500 text-sm">You haven't scanned any resumes yet.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 hover:border-teal-400 transition-all shadow-sm hover:shadow-md gap-3"
            >
              {/* ── FILE INFO ── */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 truncate">
                    {resume.originalFileName || resume.fileName || `Resume #${resume.id}`}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mt-0.5">
                    <Calendar className="w-3 h-3 shrink-0" />
                    {new Date(resume.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'short', day: 'numeric'
                    })}
                  </div>
                </div>
              </div>

              {/* ── ACTION BUTTONS ── */}
              <div className="flex items-center gap-2 shrink-0">

                {/* Analyze */}
                <button
                  onClick={(e) => handleAction(e, resume.id, 'analyze')}
                  disabled={processingId === resume.id}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white rounded-lg transition-colors font-bold text-xs disabled:opacity-50"
                >
                  {processingId === resume.id
                    ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    : <Sparkles className="w-3.5 h-3.5" />}
                  Analyze
                </button>

                {/* Interview */}
                <button
                  onClick={(e) => handleAction(e, resume.id, 'interview')}
                  disabled={processingId === resume.id}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white rounded-lg transition-colors font-bold text-xs disabled:opacity-50"
                >
                  {processingId === resume.id
                    ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    : <Bot className="w-3.5 h-3.5" />}
                  Interview
                </button>

                {/* Delete */}
                <button
                  onClick={(e) => handleDelete(e, resume.id)}
                  disabled={processingId === resume.id}
                  className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500 hover:bg-rose-600 hover:text-white transition-colors disabled:opacity-50 shrink-0"
                  title="Delete"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}