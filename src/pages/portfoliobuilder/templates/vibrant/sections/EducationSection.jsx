function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <div className="vb-reveal" style={{ animationDelay: '0.3s' }}>
      <div className="vb-label mb-1 pl-1">Background</div>
      <h2 className="text-xl font-bold text-gray-900 mb-6 pl-1">🎓 Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.education.map((ed, i) => (
          <div key={i} className="vb-card p-6 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #fce7f3, #f3e8ff)',
                  border: '1px solid rgba(236,72,153,0.12)',
                  boxShadow: '0 4px 12px rgba(139,92,246,0.1)'
                }}>
                🎓
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-purple-700 transition-colors">
                  {ed.degree}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{ed.college}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg">
                    {ed.year}
                  </span>
                  {ed.score && (
                    <span className="text-xs font-bold bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-1 rounded-lg">
                      {ed.score}
                    </span>
                  )}
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