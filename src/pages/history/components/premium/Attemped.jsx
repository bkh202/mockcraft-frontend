// UserPremiumHistory.jsx
import React, { useEffect, useState } from "react";
import api from "../../../../api/axiosInstance";
import StatsCards from "../free/StatsCards";
import PracticeHistory from "./PracticeHistory";

const Attemped = () => {
    const [topics, setTopics] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionPage, setQuestionPage] = useState(0);
    const [questionTotalPages, setQuestionTotalPages] = useState(0);
    const [filters, setFilters] = useState({
        category: "",
        subject: "",
        difficulty: ""
    });

    useEffect(() => {
        loadTopics();
        loadQuestions(0);
    }, []);

    const loadTopics = async () => {
        const res = await api.get("/user/history/topics");
        setTopics(res.data);
    };

    const loadQuestions = async (page) => {
        const params = {
            page,
            size: 5
        };
        
        if (filters.category) params.category = filters.category;
        if (filters.subject) params.subject = filters.subject;
        if (filters.difficulty) params.difficulty = filters.difficulty;

        const res = await api.get("/user/history/questions", { params });
        setQuestions(res.data.content);
        setQuestionTotalPages(res.data.totalPages);
        setQuestionPage(res.data.number);
    };

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleApplyFilters = () => {
        loadQuestions(0);
    };

    const handleClearFilters = () => {
        setFilters({ category: "", subject: "", difficulty: "" });
        loadQuestions(0);
    };

    // Approximate total questions for StatsCards (based on pages)
    const totalQuestions = questionTotalPages * 5;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">Practice History</h1>
                    <p className="text-gray-600 mt-2">Review your attempted questions and track your progress</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                <StatsCards topics={topics} totalQuestions={totalQuestions} />
                
                {/* Practice History with filtering and pagination */}
                <PracticeHistory
                    questions={questions}
                    questionPage={questionPage}
                    questionTotalPages={questionTotalPages}
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onApplyFilters={handleApplyFilters}
                    onPageChange={loadQuestions}
                    onClearFilters={handleClearFilters}
                />
            </div>
        </div>
    );
};

export default Attemped;