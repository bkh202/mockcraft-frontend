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
      "Data Structures":    ["Arrays", "Linked Lists", "Trees", "Graphs", "Sorting", "Stacks", "Queues"],
      "Algorithms":         ["Dynamic Programming", "Greedy", "Backtracking", "Searching", "Divide & Conquer"],
      "Operating Systems":  ["Processes", "Memory Management", "File Systems", "Scheduling", "Deadlock"],
      "DBMS":               ["SQL", "Normalization", "Transactions", "Indexing", "ER Model"],
      "Computer Networks":  ["TCP/IP", "Routing", "Security", "Wireless", "HTTP", "DNS"],
      "System Design":      ["Load Balancing", "Caching", "Microservices", "Databases", "API Design"],
      "JavaScript":         ["Closures", "Promises", "Event Loop", "ES6+", "DOM"],
      "React":              ["Hooks", "State Management", "Context", "Redux", "Performance"],
      "Python":             ["OOP", "Decorators", "Generators", "Libraries", "Django"],
      "Java":               ["OOP", "Collections", "Multithreading", "Spring", "JVM"],
      "General": ["Engineering Drawing", "Engineering Mathematics (M1)", "Engineering Mathematics (M2)", "Engineering Mathematics (M3)", "Basic Electrical Engineering", "Basic Electronics", "Engineering Physics", "Engineering Chemistry", "Environmental Science", "Communication Skills", "Professional Ethics", "Project Management"],
    },
    get topics() { return Object.values(this.subjects).flat(); },
    companies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Flipkart", "Zoho"],
  },
  EE: {
    label: "Electrical Engineering (EE)",
    subjects: {
      "Circuit Theory":      ["KVL/KCL", "Thevenin", "Norton", "AC Circuits", "Resonance"],
      "Power Systems":       ["Generation", "Transmission", "Distribution", "Faults", "Protection"],
      "Electrical Machines": ["DC Motors", "Transformers", "Induction Motor", "Synchronous Machine"],
      "Control Systems":     ["Transfer Function", "Bode Plot", "Root Locus", "PID", "Stability"],
      "Power Electronics":   ["Rectifiers", "Inverters", "Choppers", "MOSFET", "IGBT"],
      "Signals & Systems":   ["Fourier", "Laplace", "Z-Transform", "Sampling", "Convolution"],
      "Renewable Energy":    ["Solar", "Wind", "Hydro", "Energy Storage", "Grid Integration"],
      "Smart Grids":         ["AMI", "SCADA", "Demand Response", "EV Integration"],
      "General": ["Engineering Drawing", "Engineering Mathematics (M1)", "Engineering Mathematics (M2)", "Engineering Mathematics (M3)", "Basic Electrical Engineering", "Basic Electronics", "Engineering Physics", "Engineering Chemistry", "Environmental Science", "Communication Skills", "Professional Ethics", "Project Management"],
    },
    get topics() { return Object.values(this.subjects).flat(); },
    companies: ["NTPC", "BHEL", "Power Grid", "Siemens", "ABB", "L&T", "TATA Power", "Adani Power"],
  },
  ECE: {
    label: "Electronics & Communication (ECE)",
    subjects: {
      "Analog Electronics":     ["Amplifiers", "Op-Amps", "Oscillators", "Filters", "Diodes"],
      "Digital Electronics":    ["Logic Gates", "Flip Flops", "Counters", "ADC/DAC", "Multiplexers"],
      "Communication Systems":  ["AM/FM", "Digital Modulation", "Noise", "Antennas", "Satellite"],
      "VLSI Design":            ["CMOS", "Logic Synthesis", "Timing", "Layout", "DFT"],
      "Microprocessors":        ["8085", "8086", "ARM", "Interfacing", "Interrupts"],
      "Embedded Systems":       ["RTOS", "GPIO", "UART", "SPI", "I2C"],
      "Signals & Systems":      ["Fourier", "Laplace", "Z-Transform", "Sampling", "Filters"],
      "IoT":                    ["Sensors", "Protocols", "Cloud", "Edge Computing", "Security"],
      "Antenna Theory":         ["Radiation", "Arrays", "Propagation", "Microstrip", "Gain"],
      "General": ["Engineering Drawing", "Engineering Mathematics (M1)", "Engineering Mathematics (M2)", "Engineering Mathematics (M3)", "Basic Electrical Engineering", "Basic Electronics", "Engineering Physics", "Engineering Chemistry", "Environmental Science", "Communication Skills", "Professional Ethics", "Project Management"],
    },
    get topics() { return Object.values(this.subjects).flat(); },
    companies: ["Intel", "NVIDIA", "Qualcomm", "ISRO", "DRDO", "BEL", "Samsung", "Texas Instruments"],
  },
  MECH: {
    label: "Mechanical Engineering",
    subjects: {
      "Thermodynamics":         ["Laws", "Cycles", "Heat Engines", "Refrigeration", "Properties"],
      "Fluid Mechanics":        ["Bernoulli", "Flow Types", "Pumps", "Turbines", "Drag"],
      "Strength of Materials":  ["Stress/Strain", "Bending", "Torsion", "Columns", "Fatigue"],
      "Manufacturing":          ["Casting", "Welding", "Machining", "Forming", "Metrology"],
      "Theory of Machines":     ["Mechanisms", "Gears", "Cams", "Governors", "Vibrations"],
      "Heat Transfer":          ["Conduction", "Convection", "Radiation", "Heat Exchangers"],
      "CAD/CAM":                ["Modeling", "CNC", "FEA", "Simulation", "GD&T"],
      "Robotics":               ["Kinematics", "Actuators", "Sensors", "Control", "Path Planning"],
      "Industrial Engineering": ["Operations Research", "Quality", "Ergonomics", "Lean", "Six Sigma"],
     "General": ["Engineering Drawing", "Engineering Mathematics (M1)", "Engineering Mathematics (M2)", "Engineering Mathematics (M3)", "Basic Electrical Engineering", "Basic Electronics", "Engineering Physics", "Engineering Chemistry", "Environmental Science", "Communication Skills", "Professional Ethics", "Project Management"],
    },
    get topics() { return Object.values(this.subjects).flat(); },
    companies: ["TATA Motors", "Mahindra", "L&T", "JSW", "Bosch", "Cummins", "Maruti Suzuki", "BHEL"],
  },
  CIVIL: {
    label: "Civil Engineering",
    subjects: {
      "Structural Analysis":       ["Beams", "Frames", "Trusses", "Deflection", "Stiffness"],
      "Geotechnical Engineering":  ["Soil Mechanics", "Foundations", "Slope Stability", "Earth Pressure"],
      "Fluid Mechanics":           ["Flow", "Pipes", "Open Channels", "Pumps", "Hydraulic Machines"],
      "Environmental Engineering": ["Water Treatment", "Waste Management", "Air Pollution", "EIA"],
      "Construction Materials":    ["Concrete", "Steel", "Timber", "Bricks", "Composites"],
      "Transportation":            ["Highway Design", "Traffic Flow", "Pavement", "Intersections"],
      "Surveying":                 ["Levelling", "Theodolite", "GPS", "Remote Sensing", "GIS"],
      "BIM":                       ["Revit", "AutoCAD", "Navisworks", "Cost Estimation", "4D BIM"],
      "General": ["Engineering Drawing", "Engineering Mathematics (M1)", "Engineering Mathematics (M2)", "Engineering Mathematics (M3)", "Basic Electrical Engineering", "Basic Electronics", "Engineering Physics", "Engineering Chemistry", "Environmental Science", "Communication Skills", "Professional Ethics", "Project Management"],
    },
    get topics() { return Object.values(this.subjects).flat(); },
    companies: ["L&T Construction", "AFCONS", "Shapoorji Pallonji", "NBCC", "IRCON", "DLF", "Gammon India"],
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-gray-50 min-h-screen space-y-8">

      <RangeSelector range={range} setRange={setRange} />

      {/* Branch Selector */}
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

      {/* Subject Selector */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <p className="text-sm font-semibold text-gray-600 mb-3">Select Subject:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleSubjectChange("")}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
              selectedSubject === ""
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
            }`}
          >
            All Subjects
          </button>
          {Object.keys(currentBranch.subjects).map((subject) => (
            <button
              key={subject}
              onClick={() => handleSubjectChange(subject)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
                selectedSubject === subject
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
        {selectedSubject && (
          <p className="text-xs text-gray-400 mt-2">
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
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-gray-800">Topic Trend</p>
            <p className="text-xs text-gray-400">
              {selectedSubject ? selectedSubject : currentBranch.label} topics
            </p>
          </div>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="block w-full sm:w-64 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition text-sm"
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