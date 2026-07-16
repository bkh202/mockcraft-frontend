import React, { useState } from 'react';
import axiosInstance from "../../api/axiosInstance";

const ScoreRing = ({ score, label, size = 'lg' }) => {
    const radius = size === 'lg' ? 40 : 28;
    const stroke = size === 'lg' ? 8 : 6;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    // Use black/gray scale
    const getColor = (s) => {
        if (s >= 80) return 'text-black';
        if (s >= 50) return 'text-gray-600';
        return 'text-gray-400';
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="relative flex items-center justify-center">
                <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
                    <circle className="text-gray-100" strokeWidth={stroke} stroke="currentColor" fill="transparent" r={normalizedRadius} cx={radius} cy={radius} />
                    <circle className={`${getColor(score)} transition-all duration-1000 ease-out`} strokeWidth={stroke}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset }} strokeLinecap="round" stroke="currentColor" fill="transparent"
                        r={normalizedRadius} cx={radius} cy={radius} />
                </svg>
                <span className={`absolute text-${size === 'lg' ? '3xl' : 'xl'} font-black ${getColor(score)}`}>{score}</span>
            </div>
            <span className="mt-3 text-sm font-bold text-gray-600 uppercase tracking-wider text-center">{label}</span>
        </div>
    );
};

export default function AnalyzerDashboard({ resumeData }) {
    const [jobDescription, setJobDescription] = useState('');
    const [loading, setLoading]   = useState(false);
    const [error, setError]       = useState(null);
    const [analysis, setAnalysis] = useState(null);

    const handleAnalyze = async () => {
        if (!resumeData) { setError("Resume data is missing. Please parse a resume first."); return; }
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post('/api/analyzer/score', {
                jobDescription,
                resumeData
            });
            const result = response.data;
            if (!result.success) throw new Error(result.message || "Failed to analyze resume.");
            setAnalysis(result.data);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Something went wrong during analysis.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">

            {/* HEADER INPUT SECTION */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                        <i className="fa fa-bolt text-xl text-black"></i>
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-black">Resume Deep Analysis</h1>
                        <p className="text-lg text-gray-600">Paste the target Job Description to get a detailed AI-powered analysis</p>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste Target Job Description here (Optional, but highly recommended)..."
                        className="w-full h-32 p-4 bg-white text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none resize-none placeholder:text-gray-400 text-lg"
                    />
                    <button onClick={handleAnalyze} disabled={loading}
                        className={`flex items-center gap-2 text-white font-bold px-8 py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm text-lg ${loading ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'}`}>
                        {loading
                            ? <><i className="fa fa-spinner fa-spin text-lg"></i> Analyzing (Takes ~10s)...</>
                            : <><i className="fa fa-bolt text-lg"></i> Run Deep Analysis</>}
                    </button>
                    {error && (
                        <div className="flex items-center gap-2 text-red-600 text-base font-medium bg-red-50 p-3 rounded-lg border border-red-200">
                            <i className="fa fa-exclamation-circle text-lg"></i> {error}
                        </div>
                    )}
                </div>
            </div>

            {/* RESULTS */}
            {analysis && (
                <div className="space-y-8">

                    {/* Score Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Base ATS Score</p>
                            <p className="text-sm text-gray-400 mb-4 uppercase font-bold tracking-wider">Overall Quality</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black text-black">{analysis.atsScore || 0}</span>
                                <span className="text-xl font-bold text-gray-400">/100</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">With Target JD</p>
                            <p className="text-sm text-gray-400 mb-4 uppercase font-bold tracking-wider">Shortlist Probability</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black text-black">{analysis.selectionProbabilityWithJd || 0}%</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">General Market</p>
                            <p className="text-sm text-gray-400 mb-4 uppercase font-bold tracking-wider">Blind Application Fit</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black text-black">{analysis.selectionProbabilityWithoutJd || 0}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                            <i className="fa fa-bullseye text-lg text-black"></i> Performance Metrics
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <ScoreRing score={analysis.overallScore}      label="Overall Match"      size="lg" />
                            <ScoreRing score={analysis.impactScore}       label="Impact & Metrics"   size="sm" />
                            <ScoreRing score={analysis.completenessScore} label="Completeness"       size="sm" />
                            <ScoreRing score={analysis.keywordScore}      label="Keyword Alignment"  size="sm" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Left: Errors + Keywords */}
                        <div className="space-y-6">
                            {analysis.criticalErrors?.length > 0 && (
                                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                                        <i className="fa fa-exclamation-circle text-xl"></i> Critical Red Flags
                                    </h3>
                                    <ul className="space-y-2">
                                        {analysis.criticalErrors.map((err, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-red-700 text-base font-medium">
                                                <span className="mt-0.5">•</span> {err}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-bold text-black mb-6 flex items-center gap-2">
                                    <i className="fa fa-file-alt text-xl text-black"></i> Keyword Gap Analysis
                                </h3>
                                <div className="space-y-5">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Found in Resume</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {analysis.foundKeywords?.map((kw, i) => (
                                                <span key={i} className="px-3 py-1 bg-gray-100 text-black border border-gray-300 rounded-lg text-sm font-bold">✓ {kw}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Missing from JD</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {analysis.missingKeywords?.map((kw, i) => (
                                                <span key={i} className="px-3 py-1 bg-gray-50 text-gray-400 border border-gray-200 rounded-lg text-sm font-bold line-through decoration-gray-300">{kw}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Improvements */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-fit">
                            <h3 className="text-lg font-bold text-black mb-6 flex items-center gap-2">
                                <i className="fa fa-check-circle text-xl text-black"></i> Actionable Improvements
                            </h3>
                            <div className="space-y-5">
                                {analysis.improvements?.map((imp, idx) => (
                                    <div key={idx} className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-black before:rounded-full">
                                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1 block">Section: {imp.section}</span>
                                        <p className="text-base font-semibold text-black mb-2">
                                            <span className="text-red-500 font-bold">Issue:</span> {imp.issue}
                                        </p>
                                        <div className="bg-gray-100 p-3 rounded-lg border border-gray-200 flex items-start gap-2">
                                            <i className="fa fa-chevron-right text-base text-black mt-0.5 shrink-0"></i>
                                            <p className="text-base text-black font-medium">{imp.fix}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}