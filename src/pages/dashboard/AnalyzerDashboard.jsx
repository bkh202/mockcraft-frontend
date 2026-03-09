import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Zap, Target, FileText, ChevronRight, Loader2 } from 'lucide-react';
import axios from "../../api/axiosInstance";

// Sub-component: Premium Animated Score Ring
const ScoreRing = ({ score, label, size = 'lg' }) => {
    const radius = size === 'lg' ? 40 : 28;
    const stroke = size === 'lg' ? 8 : 6;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    const getColor = (s) => {
        if (s >= 80) return 'text-emerald-500';
        if (s >= 50) return 'text-amber-500';
        return 'text-rose-500';
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50">
            <div className="relative flex items-center justify-center">
                <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
                    <circle
                        className="text-slate-100 dark:text-slate-700"
                        strokeWidth={stroke}
                        stroke="currentColor"
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    <circle
                        className={`${getColor(score)} transition-all duration-1000 ease-out`}
                        strokeWidth={stroke}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset }}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                </svg>
                <span className={`absolute text-${size === 'lg' ? '3xl' : 'xl'} font-black ${getColor(score)}`}>
                    {score}
                </span>
            </div>
            <span className="mt-3 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                {label}
            </span>
        </div>
    );
};

export default function AnalyzerDashboard({ resumeData }) {
    const [jobDescription, setJobDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [analysis, setAnalysis] = useState(null);

    const handleAnalyze = async () => {
        if (!resumeData) {
            setError("Resume data is missing. Please parse a resume first.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('/api/analyzer/score', {
                jobDescription: jobDescription,
                resumeData: resumeData
            });

            const result = response.data;

            if (!result.success) {
                throw new Error(result.message || "Failed to analyze resume.");
            }

            setAnalysis(result.data);

        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "Something went wrong during analysis.";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-10 font-sans text-slate-800 dark:text-slate-200">

            {/* HEADER & INPUT SECTION */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]"></div>

                <div className="relative z-10 max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 italic">Resume Post-Mortem</h1>
                    <p className="text-slate-400 text-lg mb-8">
                        Paste the target Job Description below. Our AI will ruthlessly analyze your resume to find gaps, missing keywords, and weak points.
                    </p>

                    <div className="space-y-4">
                        <textarea
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            placeholder="Paste Target Job Description here (Optional, but highly recommended)..."
                            className="w-full h-32 p-4 bg-slate-900/50 text-slate-200 border border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none placeholder:text-slate-600"
                        />

                        <button
                            onClick={handleAnalyze}
                            disabled={loading}
                            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-500/20"
                        >
                            {loading ? (
                                <> <Loader2 className="w-5 h-5 animate-spin" /> Analyzing (Takes ~10s)... </>
                            ) : (
                                <> <Zap className="w-5 h-5" /> Run Deep Analysis </>
                            )}
                        </button>

                        {error && (
                            <div className="flex items-center gap-2 text-rose-400 mt-2 text-sm font-medium">
                                <AlertCircle className="w-4 h-4" /> {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ANALYSIS RESULTS SECTION */}
            {analysis && (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">

                    {/* 🚀 AI PREDICTION CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* ATS Score */}
                        <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 rounded-3xl p-6 border border-indigo-500/30 shadow-xl relative overflow-hidden backdrop-blur-sm">
                            <h3 className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] mb-1">Base ATS Score</h3>
                            <p className="text-[10px] text-slate-400 mb-4 uppercase font-bold tracking-wider opacity-70">Overall Quality</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl font-black text-white leading-none">{analysis.atsScore || 0}</span>
                                <span className="text-xl font-bold text-indigo-400">/100</span>
                            </div>
                        </div>

                        {/* Selection With JD */}
                        <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/20 rounded-3xl p-6 border border-emerald-500/30 shadow-xl relative overflow-hidden backdrop-blur-sm">
                            <h3 className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-1">With Target JD</h3>
                            <p className="text-[10px] text-slate-400 mb-4 uppercase font-bold tracking-wider opacity-70">Shortlist Probability</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl font-black text-white leading-none">{analysis.selectionProbabilityWithJd || 0}%</span>
                            </div>
                        </div>

                        {/* Selection Without JD */}
                        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/20 rounded-3xl p-6 border border-slate-600/30 shadow-xl relative overflow-hidden backdrop-blur-sm">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">General Market</h3>
                            <p className="text-[10px] text-slate-400 mb-4 uppercase font-bold tracking-wider opacity-70">Blind Application Fit</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl font-black text-white leading-none">{analysis.selectionProbabilityWithoutJd || 0}%</span>
                            </div>
                        </div>
                    </div>

                    {/* SCORES ROW */}
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                            <Target className="w-4 h-4" /> Performance Metrics
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <ScoreRing score={analysis.overallScore} label="Overall Match" size="lg" />
                            <ScoreRing score={analysis.impactScore} label="Impact & Metrics" size="sm" />
                            <ScoreRing score={analysis.completenessScore} label="Completeness" size="sm" />
                            <ScoreRing score={analysis.keywordScore} label="Keyword Alignment" size="sm" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* LEFT COLUMN: Errors & Keywords */}
                        <div className="space-y-10">
                            {analysis.criticalErrors?.length > 0 && (
                                <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-rose-700 dark:text-rose-400 mb-4 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" /> Critical Red Flags
                                    </h3>
                                    <ul className="space-y-3">
                                        {analysis.criticalErrors.map((err, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-rose-800 dark:text-rose-300 text-sm font-medium">
                                                <span className="mt-0.5">•</span> {err}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-indigo-500" /> Keyword Gap Analysis
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">Found in Resume</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {analysis.foundKeywords?.map((kw, i) => (
                                                <span key={i} className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 rounded-lg text-xs font-bold">✓ {kw}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-3">Missing from JD</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {analysis.missingKeywords?.map((kw, i) => (
                                                <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold line-through decoration-rose-500">{kw}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Actionable Improvements */}
                        <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm h-fit">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-teal-500" /> Actionable Improvements
                            </h3>
                            <div className="space-y-6">
                                {analysis.improvements?.map((imp, idx) => (
                                    <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-teal-500 before:rounded-full">
                                        <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1 block">Section: {imp.section}</span>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                            <span className="text-rose-500 font-bold">Issue:</span> {imp.issue}
                                        </p>
                                        <div className="bg-teal-50 dark:bg-teal-900/10 p-3 rounded-lg border border-teal-100 dark:border-teal-900/30 flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                                            <p className="text-sm text-teal-800 dark:text-teal-300 font-medium">{imp.fix}</p>
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