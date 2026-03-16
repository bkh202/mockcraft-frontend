import React from 'react';

const BRANCH_DATA = {
  CSE: {
    label: "Computer Science (CSE)",
    subjects: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "System Design", "JavaScript", "React", "Python", "Java", "OOPS & Programming", "General"],
  },
  EE: {
    label: "Electrical Engineering (EE)",
    subjects: ["Circuit Theory", "Power Systems", "Electrical Machines", "Control Systems", "Power Electronics", "Signals & Systems", "General"],
  },
  ECE: {
    label: "Electronics & Communication (ECE)",
    subjects: ["Analog Electronics", "Digital Electronics", "Communication Systems", "VLSI Design", "Microprocessors", "Embedded Systems", "General"],
  },
  MECH: {
    label: "Mechanical Engineering",
    subjects: ["Thermodynamics", "Fluid Mechanics", "Strength of Materials", "Manufacturing", "Theory of Machines", "Heat Transfer", "General"],
  },
  CIVIL: {
    label: "Civil Engineering",
    subjects: ["Structural Analysis", "Geotechnical Engineering", "Fluid Mechanics", "Environmental Engineering", "Construction Materials", "Surveying", "General"],
  },
  GOVERNMENT: {
    label: "Government Exams",
    subjects: ["General Knowledge", "Current Affairs", "Reasoning", "Quantitative Aptitude", "English", "History", "Geography", "Polity", "Economics", "Science & Tech"],
  },
  APTITUDE: {
    label: "Aptitude",
    subjects: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Data Interpretation", "Puzzles", "Number System", "Percentage", "Time & Work", "Probability"],
  },
  MEDICAL: {
    label: "Medical / NEET",
    subjects: ["Physics", "Chemistry", "Biology", "Botany", "Zoology", "Human Physiology", "Genetics", "Ecology", "Organic Chemistry", "Inorganic Chemistry"],
  },
};

const ENGINEERING_BRANCHES = ["CSE", "EE", "ECE", "MECH", "CIVIL"];

const PracticeHistory = ({
  questions,
  questionPage,
  questionTotalPages,
  filters,
  onFilterChange,
  onApplyFilters,
  onPageChange,
  onClearFilters,
}) => {
  const [selectedBranch, setSelectedBranch] = React.useState("CSE");

  const isEngineering =
    filters.category === "ENGINEERING" || filters.category === "";

  // ✅ Category change — branch + subject reset
  const handleCategoryChange = (value) => {
    onFilterChange("category", value);
    onFilterChange("subject", "");

    if (value === "ENGINEERING" || value === "") {
      setSelectedBranch("CSE");
    }
  };

  // ✅ Branch change — subject reset
  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
    onFilterChange("subject", "");
  };

  // ✅ Current subjects based on category
  const getCurrentSubjects = () => {
    if (filters.category === "GOVERNMENT") return BRANCH_DATA.GOVERNMENT.subjects;
    if (filters.category === "APTITUDE")   return BRANCH_DATA.APTITUDE.subjects;
    if (filters.category === "MEDICAL")    return BRANCH_DATA.MEDICAL.subjects;
    return BRANCH_DATA[selectedBranch]?.subjects || [];
  };

  // ✅ Deduplicate questions by id
  const uniqueQuestions = questions.filter((q, index, self) =>
    index === self.findIndex((x) => x.id === q.id)
  );

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 sm:mb-0">
          Practice History
        </h2>
        <span className="text-sm text-gray-500">
          Page {questionPage + 1} of {questionTotalPages}
        </span>
      </div>

      {/* Branch Selector — only for Engineering */}
      {isEngineering && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs font-semibold text-gray-600 mb-2">Select Branch:</p>
          <div className="flex flex-wrap gap-2">
            {ENGINEERING_BRANCHES.map((branch) => (
              <button
                key={branch}
                onClick={() => handleBranchChange(branch)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  selectedBranch === branch
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {branch}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {BRANCH_DATA[selectedBranch].label}
          </p>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Filter Questions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

          {/* Category */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="GOVERNMENT">Government</option>
              <option value="ENGINEERING">Engineering</option>
              <option value="MEDICAL">Medical / NEET</option>
              <option value="APTITUDE">Aptitude</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Subject
            </label>
            <select
              value={filters.subject}
              onChange={(e) => onFilterChange("subject", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Subjects</option>
              {getCurrentSubjects().map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Difficulty
            </label>
            <select
              value={filters.difficulty}
              onChange={(e) => onFilterChange("difficulty", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>

          {/* Apply */}
          <div className="flex items-end">
            <button
              onClick={onApplyFilters}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 text-sm"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Question List */}
      <div className="space-y-4">
        {uniqueQuestions.length > 0 ? (
          uniqueQuestions.map((q, i) => (
            <div
              key={q.id || i}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">{q.question}</p>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        q.correct
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {q.correct ? "✓ Correct" : "✗ Incorrect"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Your Answer</p>
                  <p className={`font-medium ${q.correct ? "text-green-600" : "text-red-600"}`}>
                    {q.selectedOption}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Correct Answer</p>
                  <p className="font-medium text-gray-900">{q.correctOption}</p>
                </div>
              </div>

              {q.explanation && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">Explanation</p>
                  <p className="text-sm text-gray-700">{q.explanation}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 mx-auto text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="mt-4 text-gray-500">No practice questions found</p>
            {(filters.category || filters.subject || filters.difficulty) && (
              <button
                onClick={onClearFilters}
                className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Pagination */}
      {uniqueQuestions.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onPageChange(questionPage - 1)}
              disabled={questionPage === 0}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Page</span>
              <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                <span className="font-medium text-gray-900">{questionPage + 1}</span>
                <span className="mx-1 text-gray-400">/</span>
                <span className="text-gray-600">{questionTotalPages}</span>
              </div>
            </div>

            <button
              onClick={() => onPageChange(questionPage + 1)}
              disabled={questionPage + 1 === questionTotalPages}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {questionTotalPages > 1 && (
            <div className="mt-4 flex justify-center">
              <div className="flex space-x-1">
                {Array.from({ length: Math.min(5, questionTotalPages) }, (_, i) => {
                  let pageNum;
                  if (questionTotalPages <= 5) pageNum = i;
                  else if (questionPage < 2) pageNum = i;
                  else if (questionPage > questionTotalPages - 3) pageNum = questionTotalPages - 5 + i;
                  else pageNum = questionPage - 2 + i;

                  return (
                    <button
                      key={i}
                      onClick={() => onPageChange(pageNum)}
                      className={`w-8 h-8 rounded-md text-sm font-medium transition-colors ${
                        questionPage === pageNum
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {pageNum + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PracticeHistory;