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

const BRANCH_DATA = {
  CSE: {
    label: "Computer Science (CSE)",
    subjects: {
      "Data Structures":    ["Arrays", "Linked Lists", "Trees", "Graphs", "Sorting", "Stacks", "Queues","General"],
      "Algorithms":         ["Dynamic Programming", "Greedy", "Backtracking", "Searching", "Divide & Conquer","General"],
      "Operating Systems":  ["Processes", "Memory Management", "File Systems", "Scheduling", "Deadlock","General"],
      "DBMS":               ["SQL", "Normalization", "Transactions", "Indexing", "ER Model","General"],
      "Computer Networks":  ["TCP/IP", "Routing", "Security", "Wireless", "HTTP", "DNS","General"],
      "System Design":      ["Load Balancing", "Caching", "Microservices", "Databases", "API Design","General"],
      "JavaScript":         ["Closures", "Promises", "Event Loop", "ES6+", "DOM","General"],
      "React":              ["Hooks", "State Management", "Context", "Redux", "Performance","General"],
      "Python":             ["OOP", "Decorators", "Generators", "Libraries", "Django","General"],
      "Java":               ["OOP", "Collections", "Multithreading", "Spring", "JVM","General"],
      "General": ["Engineering Drawing", "Engineering Mathematics (M1)", "Engineering Mathematics (M2)", "Engineering Mathematics (M3)", "Basic Electrical Engineering", "Basic Electronics", "Engineering Physics", "Engineering Chemistry", "Environmental Science", "Communication Skills", "Professional Ethics", "Project Management","General"],
    },
    get topics() { return Object.values(this.subjects).flat(); },
    companies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Flipkart", "Zoho","General"],
  },
  EE: {
    label: "Electrical Engineering (EE)",
    subjects: {
      "Circuit Theory":      ["KVL/KCL", "Thevenin", "Norton", "AC Circuits", "Resonance","General"],
      "Power Systems":       ["Generation", "Transmission", "Distribution", "Faults", "Protection","General"],
      "Electrical Machines": ["DC Motors", "Transformers", "Induction Motor", "Synchronous Machine","General"],
      "Control Systems":     ["Transfer Function", "Bode Plot", "Root Locus", "PID", "Stability","General"],
      "Power Electronics":   ["Rectifiers", "Inverters", "Choppers", "MOSFET", "IGBT","General"],
      "Signals & Systems":   ["Fourier", "Laplace", "Z-Transform", "Sampling", "Convolution","General"],
      "Renewable Energy":    ["Solar", "Wind", "Hydro", "Energy Storage", "Grid Integration","General"],
      "Smart Grids":         ["AMI", "SCADA", "Demand Response", "EV Integration","General"],
      "General": ["Engineering Drawing", "Engineering Mathematics (M1)", "Engineering Mathematics (M2)", "Engineering Mathematics (M3)", "Basic Electrical Engineering", "Basic Electronics", "Engineering Physics", "Engineering Chemistry", "Environmental Science", "Communication Skills", "Professional Ethics", "Project Management","General"],
    },
    get topics() { return Object.values(this.subjects).flat(); },
    companies: ["NTPC", "BHEL", "Power Grid", "Siemens", "ABB", "L&T", "TATA Power", "Adani Power","General"],
  },
  ECE: {
    label: "Electronics & Communication (ECE)",
    subjects: {
      "Analog Electronics":     ["Amplifiers", "Op-Amps", "Oscillators", "Filters", "Diodes","General"],
      "Digital Electronics":    ["Logic Gates", "Flip Flops", "Counters", "ADC/DAC", "Multiplexers","General"],
      "Communication Systems":  ["AM/FM", "Digital Modulation", "Noise", "Antennas", "Satellite","General"],
      "VLSI Design":            ["CMOS", "Logic Synthesis", "Timing", "Layout", "DFT","General"],
      "Microprocessors":        ["8085", "8086", "ARM", "Interfacing", "Interrupts","General"],
      "Embedded Systems":       ["RTOS", "GPIO", "UART", "SPI", "I2C","General"],
      "Signals & Systems":      ["Fourier", "Laplace", "Z-Transform", "Sampling", "Filters","General"],
      "IoT":                    ["Sensors", "Protocols", "Cloud", "Edge Computing", "Security","General"],
      "Antenna Theory":         ["Radiation", "Arrays", "Propagation", "Microstrip", "Gain","General"],
      "General": ["Engineering Drawing", "Engineering Mathematics (M1)", "Engineering Mathematics (M2)", "Engineering Mathematics (M3)", "Basic Electrical Engineering", "Basic Electronics", "Engineering Physics", "Engineering Chemistry", "Environmental Science", "Communication Skills", "Professional Ethics", "Project Management","General"],
    },
    get topics() { return Object.values(this.subjects).flat(); },
    companies: ["Intel", "NVIDIA", "Qualcomm", "ISRO", "DRDO", "BEL", "Samsung", "Texas Instruments","General"],
  },
  MECH: {
    label: "Mechanical Engineering",
    subjects: {
      "Thermodynamics":         ["Laws", "Cycles", "Heat Engines", "Refrigeration", "Properties","General"],
      "Fluid Mechanics":        ["Bernoulli", "Flow Types", "Pumps", "Turbines", "Drag","General"],
      "Strength of Materials":  ["Stress/Strain", "Bending", "Torsion", "Columns", "Fatigue","General"],
      "Manufacturing":          ["Casting", "Welding", "Machining", "Forming", "Metrology","General"],
      "Theory of Machines":     ["Mechanisms", "Gears", "Cams", "Governors", "Vibrations","General"],
      "Heat Transfer":          ["Conduction", "Convection", "Radiation", "Heat Exchangers","General"],
      "CAD/CAM":                ["Modeling", "CNC", "FEA", "Simulation", "GD&T","General"],
      "Robotics":               ["Kinematics", "Actuators", "Sensors", "Control", "Path Planning","General"],
      "Industrial Engineering": ["Operations Research", "Quality", "Ergonomics", "Lean", "Six Sigma","General"],
     "General": ["Engineering Drawing", "Engineering Mathematics (M1)", "Engineering Mathematics (M2)", "Engineering Mathematics (M3)", "Basic Electrical Engineering", "Basic Electronics", "Engineering Physics", "Engineering Chemistry", "Environmental Science", "Communication Skills", "Professional Ethics", "Project Management","General"],
    },
    get topics() { return Object.values(this.subjects).flat(); },
    companies: ["TATA Motors", "Mahindra", "L&T", "JSW", "Bosch", "Cummins", "Maruti Suzuki", "BHEL","General"],
  },
  CIVIL: {
    label: "Civil Engineering",
    subjects: {
      "Structural Analysis":       ["Beams", "Frames", "Trusses", "Deflection", "Stiffness","General"],
      "Geotechnical Engineering":  ["Soil Mechanics", "Foundations", "Slope Stability", "Earth Pressure","General"],
      "Fluid Mechanics":           ["Flow", "Pipes", "Open Channels", "Pumps", "Hydraulic Machines","General"],
      "Environmental Engineering": ["Water Treatment", "Waste Management", "Air Pollution", "EIA","General"],
      "Construction Materials":    ["Concrete", "Steel", "Timber", "Bricks", "Composites","General"],
      "Transportation":            ["Highway Design", "Traffic Flow", "Pavement", "Intersections","General"],
      "Surveying":                 ["Levelling", "Theodolite", "GPS", "Remote Sensing", "GIS","General"],
      "BIM":                       ["Revit", "AutoCAD", "Navisworks", "Cost Estimation", "4D BIM","General"],
      "General": ["Engineering Drawing", "Engineering Mathematics (M1)", "Engineering Mathematics (M2)", "Engineering Mathematics (M3)", "Basic Electrical Engineering", "Basic Electronics", "Engineering Physics", "Engineering Chemistry", "Environmental Science", "Communication Skills", "Professional Ethics", "Project Management","General"],
    },
    get topics() { return Object.values(this.subjects).flat(); },
    companies: ["L&T Construction", "AFCONS", "Shapoorji Pallonji", "NBCC", "IRCON", "DLF", "Gammon India","General"],
  },
};

const BRANCHES = Object.keys(BRANCH_DATA);

const PremiumDashboard = () => {
  const [range, setRange] = useState("7d");
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const currentBranch = BRANCH_DATA[selectedBranch];

  const availableTopics = selectedSubject
    ? (currentBranch.subjects?.[selectedSubject] || [])
    : (currentBranch.topics || []);

  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
    setSelectedSubject("");
    setSelectedTopic("");
    setSelectedCompany("");
  };

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setSelectedTopic("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-white min-h-screen space-y-8">

      <RangeSelector range={range} setRange={setRange} />

      {/* Branch Selector */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
        <p className="text-base font-bold text-black mb-3">Select Branch:</p>
        <div className="flex flex-wrap gap-2">
          {BRANCHES.map((branch) => (
            <button
              key={branch}
              onClick={() => handleBranchChange(branch)}
              className={`px-4 py-2 rounded-lg text-base font-bold transition-all border ${
                selectedBranch === branch
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:text-black"
              }`}
            >
              {branch}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">{currentBranch.label}</p>
      </div>

      {/* Subject Selector */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
        <p className="text-base font-bold text-black mb-3">Select Subject:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleSubjectChange("")}
            className={`px-4 py-2 rounded-lg text-base font-bold transition-all border ${
              selectedSubject === ""
                ? "bg-black text-white border-black shadow-sm"
                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:text-black"
            }`}
          >
            All Subjects
          </button>
          {Object.keys(currentBranch.subjects).map((subject) => (
            <button
              key={subject}
              onClick={() => handleSubjectChange(subject)}
              className={`px-4 py-2 rounded-lg text-base font-bold transition-all border ${
                selectedSubject === subject
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:text-black"
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
        {selectedSubject && (
          <p className="text-sm text-gray-500 mt-2">
            {currentBranch.subjects[selectedSubject].length} topics available
          </p>
        )}
      </div>

      <SummaryCards range={range} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DifficultyChart range={range} />
        <CompanyTrendChart company={selectedCompany} range={range} />
      </div>

      <WeakStrongSection range={range} />
      <OverallTrendChart range={range} />

      {/* Topic Trend */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-base font-bold text-black">Topic Trend</p>
            <p className="text-sm text-gray-500">
              {selectedSubject ? selectedSubject : currentBranch.label} topics
            </p>
          </div>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="block w-full sm:w-64 px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition text-base text-black"
          >
            <option value="">-- Choose topic --</option>
            {availableTopics.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <TrendChart topic={selectedTopic} range={range} />
      </div>

      {/* Company Trend */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-base font-bold text-black">Company Trend</p>
            <p className="text-sm text-gray-500">{currentBranch.label} companies</p>
          </div>
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="block w-full sm:w-64 px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition text-base text-black"
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