import api from "../api/axiosInstance";

/* SUMMARY */
export const getSummary = (range) =>
  api.get(`/premium/analytics/summary?range=${range}`);

/* KPI */
export const getKpiComparison = (range) =>
  api.get(`/api/dashboard/kpi-comparison?range=${range}`);

export const getPerformanceBadge = (range) =>
  api.get(`/api/dashboard/performance-badge?range=${range}`);

/* DIFFICULTY */
export const getDifficulty = (range) =>
  api.get(`/api/dashboard/difficulty?range=${range}`);

/* COMPANY */
export const getCompanyTrend = (company, range) =>
  api.get(`/api/dashboard/company-trend?company=${company}&range=${range}`);

/* TOPICS */
export const getWeakTopics = (range) =>
  api.get(`/api/dashboard/weak-topics?range=${range}`);

export const getStrongTopics = (range) =>
  api.get(`/api/dashboard/strong-topics?range=${range}`);

export const getTopicTrend = (topic, range) =>
  api.get(
    `/api/dashboard/topic-trend?topic=${encodeURIComponent(topic)}&range=${range}`
  );

/* OVERALL */
export const getOverallTrend = (range) =>
  api.get(`/api/dashboard/overall-trend?range=${range}`);

export const getInsightSummary = (range) =>
  api.get(`/api/dashboard/insight-summary?range=${range}`);

