import React, { useState } from "react";
import SummaryCards from "../history/components/premium/SummaryCards";
import DifficultyChart from "../history/components/premium/DifficultyChart";
import CompanyTrendChart from "../history/components/premium/CompanyTrendChart";
import WeakStrongSection from "../history/components/premium/WeakStrongSection";
import OverallTrendChart from "../history/components/premium/OverallTrendChart";
import TrendChart from "../history/components/premium/TrendChart";
import RangeSelector from "../history/components/premium/RangeSelector";
import KpiComparisonCards from "../history/components/premium/KpiComparisonCards";
import PerformanceBadgeCard from "../history/components/premium/PerformanceBadgeCard";
import InsightsPanel from "../history/components/premium/InsightsPanel";
import InsightsSummary from "../history/components/premium/InsightsSummary";


const PremiumDashboard = () => {
  const [range, setRange] = useState("7d");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const topics = ["JavaScript", "React", "Python", "Data Structures", "Algorithm","General","Arrays"];
  const companies = ["tcs", "Infosys", "Wipro", "HCL", "Tech Mahindra","google","General","Microshoft"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-gray-50 min-h-screen space-y-8">
      <RangeSelector range={range} setRange={setRange} />

      <SummaryCards range={range} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DifficultyChart range={range} />
        <CompanyTrendChart company={selectedCompany} range={range} />
      </div>

      <WeakStrongSection range={range} />

      <OverallTrendChart range={range} />

      {/* Topic Trend Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <label className="text-sm font-medium text-gray-700">Select Topic:</label>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="block w-full sm:w-64 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
          >
            <option value="">-- Choose topic --</option>
            {topics.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <TrendChart topic={selectedTopic} range={range} />
      </div>

      {/* Company Trend Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <label className="text-sm font-medium text-gray-700">Select Company:</label>
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="block w-full sm:w-64 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
          >
            <option value="">-- Choose company --</option>
            {companies.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        {/* Note: CompanyTrendChart is already placed above; if you want a separate chart here, adjust accordingly.
            In the original layout, CompanyTrendChart was placed in the first grid. We'll keep that and maybe add a second? 
            But to avoid duplication, we'll just keep the select here and rely on the already rendered chart. 
            Alternatively, we can move the chart here. I'll follow original structure: chart is above, select here might be redundant.
            To fix, we could move the select next to the chart. But for simplicity, I'll keep original placement and just enhance styling.
        */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <KpiComparisonCards range={range} />
        <PerformanceBadgeCard range={range} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InsightsPanel range={range} />
        <InsightsSummary range={range}/>
      </div>
      
      
    </div>
  );
};

export default PremiumDashboard;