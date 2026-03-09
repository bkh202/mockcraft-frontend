import React, { useState } from 'react';
import { UploadCloud, Loader2 } from 'lucide-react';
import axiosInstance from '../../api/axiosInstance';
import AnalyzerDashboard from '../../pages/dashboard/AnalyzerDashboard'; // Path theek rakhna
import { useLocation } from 'react-router-dom';

export default function ResumeAnalyzerPage() {
    const location = useLocation();
    
    // Router se history check karega, nahi toh null lega.
    const [parsedResumeData, setParsedResumeData] = useState(location.state?.resumeData || null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    // STEP 1: Upload File & Get Parsed JSON
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
            // API CALL 1: Upload
            const uploadRes = await axiosInstance.post('/resume/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            const resumeId = uploadRes.data.resumeId || uploadRes.data.data?.id;

            if (!resumeId) {
                throw new Error("Upload successful, but no Resume ID returned from server.");
            }

            // API CALL 2: Parse
            const parseRes = await axiosInstance.post(`/resume/parse/${resumeId}`);
            
            // Extract parsed JSON safely
            const parsedData = parseRes.data.data || parseRes.data;
            
            // 🛑 CRITICAL FIX: Save to LocalStorage for AI Interview Module 🛑
            try {
                // Skills check: Agar array hai toh string banayenge, nahi toh jo hai wohi chipkayenge
                let skillsString = "General Tech Skills";
                if (parsedData.skills) {
                     skillsString = Array.isArray(parsedData.skills) 
                        ? parsedData.skills.join(', ') 
                        : parsedData.skills;
                }
                
                const experienceStr = parsedData.totalExperience || parsedData.experience || 'Fresher';

                localStorage.setItem('parsedResumeData', JSON.stringify({
                    skills: skillsString,
                    experience: experienceStr
                }));
                console.log("🔥 AI Interview ke liye data LocalStorage mein save ho gaya!");
            } catch (storageErr) {
                console.error("LocalStorage save failed:", storageErr);
            }

            // State update hogi toh apne aap Dashboard render hoga
            setParsedResumeData(parsedData);

        } catch (err) {
            setUploadError(err.response?.data?.message || err.message || "Failed to upload and parse resume.");
            console.error("Upload/Parse Error:", err);
        } finally {
            setIsUploading(false);
        }
    };

    // STEP 2: Render Analyzer Dashboard agar data available hai
    if (parsedResumeData) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] py-10 transition-colors">
                <AnalyzerDashboard resumeData={parsedResumeData} />

                {/* Start Over Button */}
                <div className="max-w-6xl mx-auto px-6 mt-6 flex justify-end">
                    <button
                        onClick={() => {
                            setParsedResumeData(null);
                            // 🛑 CRITICAL FIX: Naye resume ke liye purana kachra saaf karo 🛑
                            localStorage.removeItem('parsedResumeData'); 
                        }}
                        className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-rose-500 transition-colors bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
                    >
                        <span>←</span> Upload a different resume
                    </button>
                </div>
            </div>
        );
    }

    // STEP 1 UI: Default Upload Screen
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0b0f19] p-6 transition-colors">
            <div className="max-w-xl w-full bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-xl border border-slate-200 dark:border-slate-700 text-center">
                
                <div className="w-20 h-20 bg-teal-50 dark:bg-teal-900/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                    <UploadCloud className="w-10 h-10 text-teal-500" />
                </div>

                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                    Upload Resume to Analyze
                </h1>
                
                <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">
                    Upload your latest PDF resume. Our AI will parse it and then grade it against your target Job Description.
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
                            ? 'border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50'
                            : 'border-teal-300 bg-teal-50 hover:bg-teal-100 hover:border-teal-400 dark:border-teal-700/50 dark:bg-teal-900/10 dark:hover:bg-teal-900/30'
                    }`}>
                        {isUploading ? (
                            <div className="flex flex-col items-center gap-3 text-teal-600 dark:text-teal-400">
                                <Loader2 className="w-8 h-8 animate-spin" />
                                <span className="font-bold">Parsing with AI... Please wait</span>
                            </div>
                        ) : (
                            <div className="text-teal-700 dark:text-teal-400 font-bold flex flex-col items-center gap-2">
                                <span>Click or Drag & Drop your PDF here</span>
                                <span className="text-xs font-medium opacity-70">Max file size: 5MB</span>
                            </div>
                        )}
                    </div>
                </div>

                {uploadError && (
                    <div className="mt-6 text-sm font-bold text-rose-500 bg-rose-50 dark:bg-rose-950/30 p-4 rounded-xl border border-rose-100 dark:border-rose-900/50 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {uploadError}
                    </div>
                )}
            </div>
        </div>
    );
}