import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axiosInstance";

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

    // Parse explanation string
    const parseExplanation = (text) => {
        if (!text) return null;
        if (!text.startsWith('{') || !text.endsWith('}')) {
            return { generic: text };
        }
        const clean = text.substring(1, text.length - 1);
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
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                <i className="fa fa-spinner fa-spin text-4xl text-black mb-4"></i>
                <p className="text-gray-600 font-medium text-lg">Fetching your review details...</p>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white p-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center max-w-md w-full">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200">
                        <i className="fa fa-exclamation-triangle text-3xl text-gray-600"></i>
                    </div>
                    <h2 className="text-2xl font-bold text-black mb-2">Failed to load review</h2>
                    <p className="text-gray-600">We couldn't fetch your attempt data. Please try again later.</p>
                </div>
            </div>
        );
    }

    const filteredResults = data.results.filter(q => {
        switch (filter) {
            case "CORRECT": return q.correct === true;
            case "WRONG": return q.correct === false && q.selectedOption !== null;
            case "SKIPPED": return q.selectedOption === null;
            default: return true;
        }
    });

    const correctCount = data.results.filter(q => q.correct).length;
    const totalQuestions = data.results.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const scoreColor = percentage >= 80 ? 'text-black' : percentage >= 50 ? 'text-gray-700' : 'text-gray-500';

    const filterOptions = [
        { id: "ALL", label: "All Questions", icon: "fa-filter" },
        { id: "CORRECT", label: "Correct", icon: "fa-check-circle" },
        { id: "WRONG", label: "Incorrect", icon: "fa-times-circle" },
        { id: "SKIPPED", label: "Skipped", icon: "fa-minus-circle" }
    ];

    return (
        <div className="min-h-screen bg-white p-4 md:p-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

                {/* Header Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-8 overflow-hidden relative">
                    <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-black text-xs font-bold uppercase tracking-wider mb-4 border border-gray-200">
                                <i className="fa fa-bullseye text-sm"></i> Assessment Review
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black text-black mb-2 tracking-tight">
                                Attempt #{data.attemptId}
                            </h1>
                            <p className="text-gray-500 font-medium">Detailed breakdown of your performance</p>
                        </div>
                        
                        <div className="flex items-center gap-6 bg-gray-50 p-5 rounded-2xl border border-gray-200">
                            <div className="text-center">
                                <div className={`text-5xl font-black tracking-tighter ${scoreColor}`}>
                                    {percentage}%
                                </div>
                            </div>
                            <div className="w-px h-12 bg-gray-300"></div>
                            <div>
                                <div className="text-sm font-bold text-gray-700">Accuracy</div>
                                <div className="text-sm font-medium text-gray-500 mt-1">
                                    <span className="font-bold text-black">{correctCount}</span> / {totalQuestions} Correct
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl shadow-sm border border-gray-200">
                    {filterOptions.map(option => (
                        <button
                            key={option.id}
                            onClick={() => setFilter(option.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                filter === option.id
                                    ? "bg-black text-white shadow-md"
                                    : "bg-transparent text-gray-500 hover:bg-gray-100 hover:text-black"
                            }`}
                        >
                            <i className={`fa ${option.icon}`}></i>
                            {option.label}
                        </button>
                    ))}
                </div>

                {/* Question List */}
                <div className="space-y-6">
                    {filteredResults.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-3xl border border-gray-200 border-dashed">
                            <p className="text-gray-500 font-medium text-lg">No questions found for this filter.</p>
                        </div>
                    ) : (
                        filteredResults.map((q, index) => {
                            const isCorrect = q.correct;
                            const isSkipped = q.selectedOption === null;
                            const showExplanation = !q.correct && q.selectedOption !== null;
                            const parsedExp = parseExplanation(q.explanation);

                            // Grayscale card border based on status
                            let cardBorder = 'border-gray-200';
                            let headerBg = 'bg-gray-50';
                            let badgeBg = 'bg-gray-200 text-gray-700';
                            let icon = 'fa-circle';
                            let iconColor = 'text-gray-500';
                            if (isCorrect) {
                                cardBorder = 'border-gray-300';
                                headerBg = 'bg-gray-50';
                                badgeBg = 'bg-gray-200 text-gray-700';
                                icon = 'fa-check-circle';
                                iconColor = 'text-black';
                            } else if (isSkipped) {
                                cardBorder = 'border-gray-200';
                                headerBg = 'bg-gray-50';
                                badgeBg = 'bg-gray-200 text-gray-600';
                                icon = 'fa-minus-circle';
                                iconColor = 'text-gray-400';
                            } else {
                                cardBorder = 'border-gray-300';
                                headerBg = 'bg-gray-50';
                                badgeBg = 'bg-gray-200 text-gray-700';
                                icon = 'fa-times-circle';
                                iconColor = 'text-gray-600';
                            }

                            return (
                                <div key={index} className={`bg-white rounded-2xl shadow-sm border ${cardBorder} overflow-hidden transition-all hover:shadow-md`}>
                                    
                                    <div className={`${headerBg} p-5 md:p-6 border-b ${cardBorder}`}>
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex gap-4">
                                                <div className="shrink-0 mt-1">
                                                    <i className={`fa ${icon} text-xl ${iconColor}`}></i>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Question {index + 1}</span>
                                                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${badgeBg}`}>
                                                            {isSkipped ? "Skipped" : isCorrect ? "Correct" : "Incorrect"}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-black leading-relaxed">
                                                        {q.question}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5 md:p-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className={`p-4 rounded-xl border ${isCorrect ? 'bg-gray-50 border-gray-200' : isSkipped ? 'bg-gray-50 border-gray-200' : 'bg-gray-50 border-gray-200'}`}>
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Answer</p>
                                                <p className={`font-semibold ${isCorrect ? 'text-black' : isSkipped ? 'text-gray-500 italic' : 'text-gray-700'}`}>
                                                    {q.selectedOption ?? "Not Answered"}
                                                </p>
                                            </div>

                                            {(!isCorrect || isSkipped) && (
                                                <div className="p-4 rounded-xl border bg-gray-50 border-gray-200">
                                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Correct Answer</p>
                                                    <p className="font-semibold text-black">
                                                        {q.correctOption}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Explanation */}
                                        {showExplanation && parsedExp && (
                                            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                                                
                                                {parsedExp.concept && (
                                                    <div className="flex gap-3 items-start bg-gray-50 border border-gray-200 p-4 rounded-xl">
                                                        <i className="fa fa-book text-lg text-gray-600 shrink-0 mt-0.5"></i>
                                                        <div>
                                                            <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Core Concept</h4>
                                                            <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                                                {parsedExp.concept}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {(parsedExp.whyWrong || parsedExp.generic) && (
                                                    <div className="flex gap-3 items-start bg-gray-50 border border-gray-200 p-4 rounded-xl">
                                                        <i className="fa fa-exclamation-triangle text-lg text-gray-600 shrink-0 mt-0.5"></i>
                                                        <div>
                                                            <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Why your answer is incorrect</h4>
                                                            <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                                                {parsedExp.whyWrong || parsedExp.generic || "Detailed explanation not available."}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {parsedExp.tip && (
                                                    <div className="flex gap-3 items-start bg-gray-50 border border-gray-200 p-4 rounded-xl">
                                                        <i className="fa fa-lightbulb text-lg text-gray-600 shrink-0 mt-0.5"></i>
                                                        <div>
                                                            <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Pro Tip</h4>
                                                            <p className="text-sm text-gray-700 leading-relaxed font-medium">
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

                {/* Bottom Summary Card */}
                <div className="mt-8 bg-black rounded-3xl p-6 md:p-8 text-white shadow-sm border border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl font-bold mb-1">Review Complete</h3>
                            <p className="text-gray-400 text-sm font-medium">You've analyzed all {totalQuestions} questions.</p>
                        </div>
                        <div className="flex items-center gap-8 bg-gray-900 px-6 py-4 rounded-2xl border border-gray-800">
                            <div className="text-center">
                                <div className="text-2xl font-black text-gray-200">{correctCount}</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Correct</div>
                            </div>
                            <div className="w-px h-8 bg-gray-700"></div>
                            <div className="text-center">
                                <div className="text-2xl font-black text-gray-200">{totalQuestions - correctCount}</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Wrong</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}