// ResumeAnalyzerPage.jsx
import React, { useState } from 'react';
import { UploadCloud, Loader2 } from 'lucide-react';
import axiosInstance from '../../api/axiosInstance';
import AnalyzerDashboard from '../../pages/dashboard/AnalyzerDashboard';
import { useLocation } from 'react-router-dom';

export default function ResumeAnalyzerPage() {
    const location = useLocation();
    const [parsedResumeData, setParsedResumeData] = useState(location.state?.resumeData || null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (file.type !== 'application/pdf') {
            setUploadError("Please upload a valid PDF file.");
            return;
        }

        setIsUploading(true);
        setUploadError(null);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const uploadRes = await axiosInstance.post('/resume/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            const resumeId = uploadRes.data.resumeId || uploadRes.data.data?.id;
            if (!resumeId) throw new Error("Upload successful, but no Resume ID returned from server.");

            const parseRes = await axiosInstance.post(`/resume/parse/${resumeId}`);
            const parsedData = parseRes.data.data || parseRes.data;

            try {
                let skillsString = "General Tech Skills";
                if (parsedData.skills) {
                    skillsString = Array.isArray(parsedData.skills)
                        ? parsedData.skills.join(', ')
                        : parsedData.skills;
                }
                const experienceStr = parsedData.totalExperience || parsedData.experience || 'Fresher';
                localStorage.setItem('parsedResumeData', JSON.stringify({ skills: skillsString, experience: experienceStr }));
            } catch (storageErr) {
                console.error("LocalStorage save failed:", storageErr);
            }

            setParsedResumeData(parsedData);

        } catch (err) {
            setUploadError(err.response?.data?.message || err.message || "Failed to upload and parse resume.");
        } finally {
            setIsUploading(false);
        }
    };

    if (parsedResumeData) {
        return (
            <div className="min-h-screen bg-gray-50 py-6 transition-colors">
                <AnalyzerDashboard resumeData={parsedResumeData} />
                <div className="max-w-6xl mx-auto px-6 mt-6 flex justify-end">
                    <button
                        onClick={() => {
                            setParsedResumeData(null);
                            localStorage.removeItem('parsedResumeData');
                        }}
                        className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-rose-500 transition-colors bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm"
                    >
                        <span>←</span> Upload a different resume
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="max-w-xl w-full bg-white rounded-3xl p-10 shadow-sm border border-gray-100 text-center">

                <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <UploadCloud className="w-10 h-10 text-indigo-600" />
                </div>

                <h1 className="text-3xl font-black text-slate-900 mb-4">
                    Upload Resume to Analyze
                </h1>

                <p className="text-slate-500 mb-8 font-medium">
                    Upload your latest PDF resume. Our AI will parse it and grade it against your target Job Description.
                </p>

                <div className="relative group">
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        disabled={isUploading}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed z-10"
                    />
                    <div className={`border-2 border-dashed rounded-2xl p-8 transition-all duration-200 ${
                        isUploading
                            ? 'border-slate-200 bg-slate-50'
                            : 'border-indigo-200 bg-indigo-50 hover:bg-indigo-100 hover:border-indigo-400'
                    }`}>
                        {isUploading ? (
                            <div className="flex flex-col items-center gap-3 text-indigo-600">
                                <Loader2 className="w-8 h-8 animate-spin" />
                                <span className="font-bold">Parsing with AI... Please wait</span>
                            </div>
                        ) : (
                            <div className="text-indigo-700 font-bold flex flex-col items-center gap-2">
                                <span>Click or Drag & Drop your PDF here</span>
                                <span className="text-xs font-medium opacity-70">Max file size: 5MB</span>
                            </div>
                        )}
                    </div>
                </div>

                {uploadError && (
                    <div className="mt-6 text-sm font-bold text-rose-600 bg-rose-50 p-4 rounded-xl border border-rose-100 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {uploadError}
                    </div>
                )}
            </div>
        </div>
    );
}