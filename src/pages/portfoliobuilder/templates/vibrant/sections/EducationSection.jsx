function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <div className="space-y-6 pt-4">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <span className="text-3xl">🎓</span> Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.education.map((ed, i) => (
          <div key={i} className="vibrant-card p-6 hover:border-purple-300 transition-colors h-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-pink-100 to-purple-100 flex items-center justify-center text-purple-600 shrink-0 shadow-sm border border-white">
                🎓
              </div>
              <div>
                <h3 className="font-bold text-gray-900 leading-tight mb-1">{ed.degree}</h3>
                <p className="text-sm font-medium text-gray-500 mb-3">{ed.college}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-gray-100 px-2.5 py-1 rounded-md text-gray-600 shadow-inner">{ed.year}</span>
                  {ed.score && <span className="text-xs font-bold bg-purple-100 px-2.5 py-1 rounded-md text-purple-700 border border-purple-200">{ed.score}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;