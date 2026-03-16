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

// ── Branch-wise data map ──────────────────────────────────────
const BRANCH_DATA = {
  CSE: {
    label: "Computer Science (CSE)",
    topics: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "System Design", "JavaScript", "React", "Python", "Java", "Arrays", "Trees", "Graphs","General"],
    companies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Flipkart", "Zoho"],
  },
  EE: {
    label: "Electrical Engineering (EE)",
    topics: ["Circuit Theory", "Power Systems", "Electrical Machines", "Control Systems", "Power Electronics", "Signals & Systems", "Renewable Energy", "Smart Grids"],
    companies: ["NTPC", "BHEL", "Power Grid", "Siemens", "ABB", "L&T", "TATA Power", "Adani Power"],
  },
  ECE: {
    label: "Electronics & Communication (ECE)",
    topics: ["Analog Electronics", "Digital Electronics", "Communication Systems", "VLSI Design", "Microprocessors", "Embedded Systems", "Signals & Systems", "IoT", "Antenna Theory"],
    companies: ["Intel", "NVIDIA", "Qualcomm", "ISRO", "DRDO", "BEL", "Samsung", "Texas Instruments"],
  },
  MECH: {
    label: "Mechanical Engineering",
    topics: ["Thermodynamics", "Fluid Mechanics", "Strength of Materials", "Manufacturing", "Theory of Machines", "Heat Transfer", "CAD/CAM", "Robotics", "Industrial Engineering"],
    companies: ["TATA Motors", "Mahindra", "L&T", "JSW", "Bosch", "Cummins", "Maruti Suzuki", "BHEL"],
  },
  CIVIL: {
    label: "Civil Engineering",
    topics: ["Structural Analysis", "Geotechnical Engineering", "Fluid Mechanics", "Environmental Engineering", "Construction Materials", "Transportation", "Surveying", "BIM"],
    companies: ["L&T Construction", "AFCONS", "Shapoorji Pallonji", "NBCC", "IRCON", "DLF", "Gammon India"],
  },
};

const BRANCHES = Object.keys(BRANCH_DATA);

const PremiumDashboard = () => {
  const [range, setRange] = useState("7d");
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const currentBranch = BRANCH_DATA[selectedBranch];

  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
    setSelectedTopic("");
    setSelectedCompany("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-gray-50 min-h-screen space-y-8">

      <RangeSelector range={range} setRange={setRange} />

      {/* ── Branch Selector ── */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <p className="text-sm font-semibold text-gray-600 mb-3">Select Branch:</p>
        <div className="flex flex-wrap gap-2">
          {BRANCHES.map((branch) => (
            <button
              key={branch}
              onClick={() => handleBranchChange(branch)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
                selectedBranch === branch
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {branch}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">{currentBranch.label}</p>
      </div>

      <SummaryCards range={range} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DifficultyChart range={range} />
        <CompanyTrendChart company={selectedCompany} range={range} />
      </div>

      <WeakStrongSection range={range} />
      <OverallTrendChart range={range} />

      {/* ── Topic Trend ── */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-gray-800">Topic Trend</p>
            <p className="text-xs text-gray-400">{currentBranch.label} topics</p>
          </div>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="block w-full sm:w-64 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition text-sm"
          >
            <option value="">-- Choose topic --</option>
            {currentBranch.topics.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <TrendChart topic={selectedTopic} range={range} />
      </div>

      {/* ── Company Trend ── */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-gray-800">Company Trend</p>
            <p className="text-xs text-gray-400">{currentBranch.label} companies</p>
          </div>
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="block w-full sm:w-64 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition text-sm"
          >
            <option value="">-- Choose company --</option>
            {currentBranch.companies.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <CompanyTrendChart company={selectedCompany} range={range} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <KpiComparisonCards range={range} />
        <PerformanceBadgeCard range={range} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InsightsPanel range={range} />
        <InsightsSummary range={range} />
      </div>

    </div>
  );
};

export default PremiumDashboard;