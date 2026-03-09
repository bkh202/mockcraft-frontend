import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Calendar, Loader2, AlertCircle, Trash2, Sparkles, Bot } from 'lucide-react';
import axiosInstance from '../../api/axiosInstance';

export default function ScanHistory() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Naya state loading buttons ke liye taaki user multiple clicks na kare
  const [processingId, setProcessingId] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axiosInstance.get('/resume/all-resumes');
      setResumes(response.data.data || response.data);
    } catch (err) {
      setError("Failed to load history. " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e, resumeId) => {
    e.stopPropagation(); 
    if (!window.confirm("Are you sure you want to permanently delete this resume and its analysis?")) return;

    try {
      await axiosInstance.delete(`/resume/${resumeId}`); 
      setResumes(resumes.filter(resume => resume.id !== resumeId));
    } catch (err) {
      alert("Failed to delete. " + (err.response?.data?.message || err.message));
    }
  };

  // 🚀 THE FIX: Unified Action Handler
  const handleAction = async (e, resumeId, actionType) => {
    e.stopPropagation();
    
    try {
      setProcessingId(resumeId); // Button pe loader dikhane ke liye
      
      // Data fetch kar
      const response = await axiosInstance.post(`/resume/parse/${resumeId}`); 
      const parsedData = response.data.data || response.data;
      
      // Action ke hisaab se route decide kar
      if (actionType === 'analyze') {
        navigate('/resume-analyzer', { state: { resumeData: parsedData } });
      } else if (actionType === 'interview') {
        // ⚠️ DHYAN DE: Apne AI Interview wale page ka exact route yahan daalna!
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
        <Loader2 className="w-10 h-10 animate-spin mb-4" />
        <p className="font-bold">Loading your scan history...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 font-sans">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Scan History</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Select a previously uploaded resume to run an Analysis or start an Interview.</p>
        </div>
        <button 
          onClick={() => navigate('/resume-analyzer')}
          className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-all shadow-md"
        >
          + Upload New Resume
        </button>
      </div>

      {error && (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/30 text-rose-600 rounded-xl flex items-center gap-3 font-bold">
          <AlertCircle className="w-5 h-5" /> {error}
        </div>
      )}

      {resumes.length === 0 && !error ? (
        <div className="text-center py-20 bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700">
          <FileText className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">No history found</h3>
          <p className="text-slate-500">You haven't scanned any resumes yet.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {resumes.map((resume) => (
            <div 
              key={resume.id} 
              // 🛑 FIX: Card se cursor-pointer aur universal onClick hata diya
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-teal-400 dark:hover:border-teal-500 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {resume.originalFileName || resume.fileName || `Resume #${resume.id}`}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(resume.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'short', day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
              
              {/* 🚀 NAYE ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-3">
                
                {/* Analyze Button */}
                <button 
                  onClick={(e) => handleAction(e, resume.id, 'analyze')}
                  disabled={processingId === resume.id}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white dark:bg-indigo-900/30 dark:text-indigo-400 rounded-lg transition-colors font-bold text-sm disabled:opacity-50"
                >
                  {processingId === resume.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  Analyze
                </button>

                {/* Interview Button */}
                <button 
                  onClick={(e) => handleAction(e, resume.id, 'interview')}
                  disabled={processingId === resume.id}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white dark:bg-teal-900/30 dark:text-teal-400 rounded-lg transition-colors font-bold text-sm disabled:opacity-50"
                >
                  {processingId === resume.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Bot className="w-4 h-4" />}
                  Interview
                </button>

                {/* Delete Button */}
                <button 
                  onClick={(e) => handleDelete(e, resume.id)}
                  disabled={processingId === resume.id}
                  className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-500 hover:bg-rose-600 hover:text-white transition-colors disabled:opacity-50"
                  title="Delete this resume"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}