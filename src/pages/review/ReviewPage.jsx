import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axiosInstance"; 
import { 
    CheckCircle2, 
    XCircle, 
    MinusCircle, 
    ListFilter, 
    Lightbulb, 
    Target,
    Loader2,
    AlertTriangle,
    BookOpen
} from "lucide-react";

export default function ReviewPage() {
    const [filter, setFilter] = useState("ALL");
    const { attemptId } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`/quiz/result/${attemptId}`)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [attemptId]);

    // 🛑 THE PARSER FIX: Extract Map string into 3 objects
    const parseExplanation = (text) => {
        if (!text) return null;
        
        // If it's not the weird HashMap format, return as generic text
        if (!text.startsWith('{') || !text.endsWith('}')) {
            return { generic: text };
        }

        const clean = text.substring(1, text.length - 1); // Remove { and }
        
        // Regex to extract specific keys, stopping before the next key
        const extract = (key) => {
            const regex = new RegExp(`${key}=(.*?)(?=(, Concept=|, Why wrong=|, Tip=|$))`, 's');
            const match = clean.match(regex);
            return match ? match[1].trim() : null;
        };

        return {
            concept: extract('Concept'),
            whyWrong: extract('Why wrong'),
            tip: extract('Tip')
        };
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                <p className="text-slate-600 font-medium animate-pulse">Fetching your review details...</p>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center max-w-md w-full">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="w-8 h-8 text-rose-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Failed to load review</h2>
                    <p className="text-slate-500">We couldn't fetch your attempt data. Please try again later.</p>
                </div>
            </div>
        );
    }

    const filteredResults = data.results.filter(q => {
        switch (filter) {
            case "CORRECT":
                return q.correct === true;
            case "WRONG":
                return q.correct === false && q.selectedOption !== null;
            case "SKIPPED":
                return q.selectedOption === null;
            default:
                return true;
        }
    });

    const correctCount = data.results.filter(q => q.correct).length;
    const totalQuestions = data.results.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const scoreColor = percentage >= 80 ? 'text-emerald-500' : percentage >= 50 ? 'text-amber-500' : 'text-rose-500';

    const filterOptions = [
        { id: "ALL", label: "All Questions", icon: <ListFilter className="w-4 h-4" /> },
        { id: "CORRECT", label: "Correct", icon: <CheckCircle2 className="w-4 h-4" /> },
        { id: "WRONG", label: "Incorrect", icon: <XCircle className="w-4 h-4" /> },
        { id: "SKIPPED", label: "Skipped", icon: <MinusCircle className="w-4 h-4" /> }
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                                <Target className="w-4 h-4" /> Assessment Review
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">
                                Attempt #{data.attemptId}
                            </h1>
                            <p className="text-slate-500 font-medium">Detailed breakdown of your performance</p>
                        </div>
                        
                        <div className="flex items-center gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                            <div className="text-center">
                                <div className={`text-5xl font-black tracking-tighter ${scoreColor}`}>
                                    {percentage}%
                                </div>
                            </div>
                            <div className="w-px h-12 bg-slate-200"></div>
                            <div>
                                <div className="text-sm font-bold text-slate-700">Accuracy</div>
                                <div className="text-sm font-medium text-slate-500 mt-1">
                                    <span className="text-emerald-600 font-bold">{correctCount}</span> / {totalQuestions} Correct
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
                    {filterOptions.map(option => (
                        <button
                            key={option.id}
                            onClick={() => setFilter(option.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                filter === option.id
                                    ? "bg-slate-900 text-white shadow-md"
                                    : "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                        >
                            {option.icon}
                            {option.label}
                        </button>
                    ))}
                </div>

                <div className="space-y-6">
                    {filteredResults.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 border-dashed">
                            <p className="text-slate-500 font-medium text-lg">No questions found for this filter.</p>
                        </div>
                    ) : (
                        filteredResults.map((q, index) => {
                            const isCorrect = q.correct;
                            const isSkipped = q.selectedOption === null;
                            const showExplanation = !q.correct && q.selectedOption !== null;
                            const parsedExp = parseExplanation(q.explanation);

                            const cardBorder = isCorrect ? 'border-emerald-200' : isSkipped ? 'border-slate-200' : 'border-rose-200';
                            const headerBg = isCorrect ? 'bg-emerald-50/50' : isSkipped ? 'bg-slate-50' : 'bg-rose-50/50';
                            const badgeBg = isCorrect ? 'bg-emerald-100 text-emerald-700' : isSkipped ? 'bg-slate-100 text-slate-700' : 'bg-rose-100 text-rose-700';
                            const icon = isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : isSkipped ? <MinusCircle className="w-5 h-5 text-slate-500" /> : <XCircle className="w-5 h-5 text-rose-600" />;

                            return (
                                <div key={index} className={`bg-white rounded-2xl shadow-sm border ${cardBorder} overflow-hidden transition-all hover:shadow-md`}>
                                    
                                    <div className={`${headerBg} p-5 md:p-6 border-b ${cardBorder}`}>
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex gap-4">
                                                <div className="shrink-0 mt-1">
                                                    {icon}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Question {index + 1}</span>
                                                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${badgeBg}`}>
                                                            {isSkipped ? "Skipped" : isCorrect ? "Correct" : "Incorrect"}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-slate-800 leading-relaxed">
                                                        {q.question}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5 md:p-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className={`p-4 rounded-xl border ${isCorrect ? 'bg-emerald-50/30 border-emerald-100' : isSkipped ? 'bg-slate-50/50 border-slate-200' : 'bg-rose-50/30 border-rose-100'}`}>
                                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Answer</p>
                                                <p className={`font-semibold ${isCorrect ? 'text-emerald-900' : isSkipped ? 'text-slate-500 italic' : 'text-rose-900'}`}>
                                                    {q.selectedOption ?? "Not Answered"}
                                                </p>
                                            </div>

                                            {(!isCorrect || isSkipped) && (
                                                <div className="p-4 rounded-xl border bg-blue-50/30 border-blue-100">
                                                    <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">Correct Answer</p>
                                                    <p className="font-semibold text-blue-900">
                                                        {q.correctOption}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* 🔥 THE FIXED MULTI-PART EXPLANATION */}
                                        {showExplanation && parsedExp && (
                                            <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
                                                
                                                {/* Concept Box */}
                                                {parsedExp.concept && (
                                                    <div className="flex gap-3 items-start bg-blue-50/50 border border-blue-100 p-4 rounded-xl">
                                                        <BookOpen className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Core Concept</h4>
                                                            <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                                                {parsedExp.concept}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Why Wrong Box */}
                                                {(parsedExp.whyWrong || parsedExp.generic) && (
                                                    <div className="flex gap-3 items-start bg-rose-50/50 border border-rose-100 p-4 rounded-xl">
                                                        <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">Why your answer is incorrect</h4>
                                                            <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                                                {parsedExp.whyWrong || parsedExp.generic || "Detailed explanation not available."}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Tip Box */}
                                                {parsedExp.tip && (
                                                    <div className="flex gap-3 items-start bg-amber-50/50 border border-amber-100 p-4 rounded-xl">
                                                        <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Pro Tip</h4>
                                                            <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                                                {parsedExp.tip}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                <div className="mt-8 bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl font-bold mb-1">Review Complete</h3>
                            <p className="text-slate-400 text-sm font-medium">You've analyzed all {totalQuestions} questions.</p>
                        </div>
                        <div className="flex items-center gap-8 bg-slate-800 px-6 py-4 rounded-2xl">
                            <div className="text-center">
                                <div className="text-2xl font-black text-emerald-400">{correctCount}</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Correct</div>
                            </div>
                            <div className="w-px h-8 bg-slate-700"></div>
                            <div className="text-center">
                                <div className="text-2xl font-black text-rose-400">{totalQuestions - correctCount}</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Wrong</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}