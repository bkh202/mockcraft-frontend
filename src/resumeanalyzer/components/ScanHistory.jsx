import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

      // Deduplicate by fileName — keep only the latest one
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
      
      const parsedData = response.data?.parsedData
                    || response.data?.data
                    || response.data;

      console.log("Parse source:", response.data?.source);
      console.log("Parsed data:", parsedData);

      if (!parsedData) {
        alert("No data received from server.");
        return;
      }

      if (actionType === 'analyze') {
        navigate('/resume-analyzer', { state: { resumeData: parsedData } });
      } else if (actionType === 'interview') {
        navigate('/ai-mock-interview', { state: { resumeData: parsedData } });
      }
    } catch (err) {
      console.error("Full error:", err.response?.data || err.message);
      alert("Failed: " + (err.response?.data?.message || err.message));
    } finally {
      setProcessingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-black">
        <i className="fa fa-spinner fa-spin text-3xl mb-3"></i>
        <p className="font-bold text-lg">Loading your scan history...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-5 font-sans">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-black mb-1">Scan History</h1>
          <p className="text-gray-600 font-medium text-sm sm:text-base">Select a resume to run an Analysis or start an Interview.</p>
        </div>
        <button
          onClick={() => navigate('/resume-analyzer')}
          className="w-full sm:w-auto px-5 py-2.5 bg-black hover:bg-gray-800 text-white font-bold rounded-xl transition-all shadow-sm text-base border border-gray-300"
        >
          <i className="fa fa-plus mr-2"></i> Upload New Resume
        </button>
      </div>

      {/* ERROR */}
      {error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 font-bold text-sm border border-red-200">
          <i className="fa fa-exclamation-circle text-base"></i> {error}
        </div>
      )}

      {/* EMPTY STATE */}
      {resumes.length === 0 && !error ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
          <i className="fa fa-file-alt text-5xl text-gray-300 mx-auto mb-3"></i>
          <h3 className="text-xl font-bold text-gray-700 mb-1">No history found</h3>
          <p className="text-gray-500 text-base">You haven't scanned any resumes yet.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 hover:border-black transition-all shadow-sm hover:shadow-md gap-3"
            >
              {/* FILE INFO */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 bg-gray-100 text-black rounded-xl flex items-center justify-center shrink-0 border border-gray-200">
                  <i className="fa fa-file-alt text-lg"></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-black truncate">
                    {resume.originalFileName || resume.fileName || `Resume #${resume.id}`}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-gray-500 mt-0.5">
                    <i className="fa fa-calendar text-xs"></i>
                    {new Date(resume.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'short', day: 'numeric'
                    })}
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center gap-2 shrink-0">

                {/* Analyze */}
                <button
                  onClick={(e) => handleAction(e, resume.id, 'analyze')}
                  disabled={processingId === resume.id}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-black text-black hover:text-white rounded-lg transition-colors font-bold text-sm disabled:opacity-50 border border-gray-200 hover:border-black"
                >
                  {processingId === resume.id
                    ? <i className="fa fa-spinner fa-spin"></i>
                    : <i className="fa fa-magic"></i>}
                  Analyze
                </button>

                {/* Interview */}
                <button
                  onClick={(e) => handleAction(e, resume.id, 'interview')}
                  disabled={processingId === resume.id}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-black text-black hover:text-white rounded-lg transition-colors font-bold text-sm disabled:opacity-50 border border-gray-200 hover:border-black"
                >
                  {processingId === resume.id
                    ? <i className="fa fa-spinner fa-spin"></i>
                    : <i className="fa fa-robot"></i>}
                  Interview
                </button>

                {/* Delete */}
                <button
                  onClick={(e) => handleDelete(e, resume.id)}
                  disabled={processingId === resume.id}
                  className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50 shrink-0 border border-gray-200 hover:border-red-600"
                  title="Delete"
                >
                  <i className="fa fa-trash text-sm"></i>
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}