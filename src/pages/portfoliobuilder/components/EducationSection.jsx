function EducationSection({ education }) {
  if (!education?.length) return null;

  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full"></span>
        Education
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow"
          >
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{e.degree}</h4>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">{e.college}</p>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {e.year}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {e.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;