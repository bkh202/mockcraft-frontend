import React, { useState } from 'react';
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
            <div className="min-h-screen bg-white py-6">
                <AnalyzerDashboard resumeData={parsedResumeData} />
                <div className="max-w-6xl mx-auto px-6 mt-6 flex justify-end">
                    <button
                        onClick={() => {
                            setParsedResumeData(null);
                            localStorage.removeItem('parsedResumeData');
                        }}
                        className="flex items-center gap-2 text-base font-bold text-gray-600 hover:text-black transition-colors bg-white px-5 py-2.5 rounded-xl border border-gray-200 shadow-sm hover:border-gray-400"
                    >
                        <i className="fa fa-arrow-left"></i> Upload a different resume
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6">
            <div className="max-w-xl w-full bg-white rounded-3xl p-10 shadow-sm border border-gray-200 text-center">

                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-200">
                    <i className="fa fa-cloud-upload-alt text-4xl text-black"></i>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
                    Upload Resume to Analyze
                </h1>

                <p className="text-lg text-gray-600 mb-8 font-medium">
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
                            ? 'border-gray-300 bg-gray-50'
                            : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-black'
                    }`}>
                        {isUploading ? (
                            <div className="flex flex-col items-center gap-3 text-black">
                                <i className="fa fa-spinner fa-spin text-3xl"></i>
                                <span className="font-bold text-lg">Parsing with AI... Please wait</span>
                            </div>
                        ) : (
                            <div className="text-black font-bold flex flex-col items-center gap-2 text-lg">
                                <span>Click or Drag & Drop your PDF here</span>
                                <span className="text-sm font-medium text-gray-400">Max file size: 5MB</span>
                            </div>
                        )}
                    </div>
                </div>

                {uploadError && (
                    <div className="mt-6 text-base font-bold text-red-600 bg-red-50 p-4 rounded-xl border border-red-200 flex items-center justify-center gap-2">
                        <i className="fa fa-exclamation-circle text-lg"></i>
                        {uploadError}
                    </div>
                )}
            </div>
        </div>
    );
}