// UserHistory.jsx
import React, { useEffect, useState } from "react";
import api from "../../../../api/axiosInstance";
import StatsCards from "./StatsCards";
import PerformanceChart from "./PerformanceChart";
import TopicPerformance from "./TopicPerformance";
import QuickStats from "./QuickStats";

const UserFreeHistory = () => {
    const [topics, setTopics] = useState([]);
    const [trend, setTrend] = useState([]);

    useEffect(() => {
        loadTopics();
        loadTrend();
    }, []);

    const loadTopics = async () => {
        const res = await api.get("/user/history/topics");
        setTopics(res.data);
    };

    const loadTrend = async () => {
        const res = await api.get("/user/history/trend");
        setTrend(res.data);
    };

    // Since PracticeHistory is removed, totalQuestions is not available.
    // If StatsCards requires a valid number, you can compute it from topics
    // assuming each topic has a 'count' property, e.g.:
    // const totalQuestions = topics.reduce((sum, t) => sum + (t.count || 0), 0);
    // For now, we pass 0 to avoid breaking.
    const totalQuestions = 0;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">Performance Dashboard</h1>
                    <p className="text-gray-600 mt-2">Track your learning journey and progress</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                <StatsCards topics={topics} totalQuestions={totalQuestions} />
                <PerformanceChart trend={trend} />
                <TopicPerformance topics={topics} />
                <QuickStats topics={topics} trend={trend} />
            </div>
        </div>
    );
};

export default UserFreeHistory;