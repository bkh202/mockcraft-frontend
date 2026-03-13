function EducationSection({ data }) {
  return (
    <section id="education" className="mb-14 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <span className="text-2xl">🎓</span> Education
          </h2>
          <div className="space-y-6">
            {data.education?.map((ed, i) => (
              <div key={i} className="relative pl-5 border-l-2 border-gray-200 hover:border-gray-400 transition-colors group">
                <div className="absolute -left-1.75 top-1.5 w-3 h-3 rounded-full bg-gray-300 group-hover:bg-gray-800 ring-4 ring-white"></div>
                <h3 className="text-md font-bold text-gray-900 leading-tight mb-1">{ed.degree}</h3>
                <div className="text-gray-500 text-sm mb-2">{ed.college}</div>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{ed.year}</span>
                  {ed.score && <span className="bg-gray-100 px-3 py-1 rounded-full">{ed.score}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        {data.certificates && data.certificates.length > 0 && (
          <div id="certificates">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <span className="text-2xl">🏆</span> Certifications
            </h2>
            <div className="space-y-3">
              {data.certificates.map((cert, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all bg-white">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{cert.name}</h3>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors p-1 -mt-1 -mr-1" title="View Credential">
                        ↗
                      </a>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{cert.issuer}</div>
                  {cert.date && <div className="text-xs text-gray-400 font-medium bg-gray-50 inline-block px-3 py-1 rounded-full">{cert.date}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default EducationSection;