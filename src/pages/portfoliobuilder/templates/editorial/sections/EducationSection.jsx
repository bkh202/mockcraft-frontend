function EducationSection({ data }) {
  return (
    <section id="education" className="mb-16 ed-reveal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Education */}
        <div>
          <p className="ed-section-label">Background</p>
          <h2 className="ed-serif text-3xl text-[#111] mb-8">Education</h2>
          <div className="space-y-6">
            {data.education?.map((ed, i) => (
              <div key={i} className="ed-timeline-item group flex gap-5">
                <div className="flex flex-col items-center pt-1">
                  <div className="ed-timeline-dot" />
                  {i < data.education.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-stone-200" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <h3 className="font-semibold text-[#111] text-base leading-snug mb-1">{ed.degree}</h3>
                  <p className="text-stone-500 text-sm mb-2.5">{ed.college}</p>
                  <div className="flex gap-2">
                    <span className="ed-mono text-xs text-stone-400 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-full">
                      {ed.year}
                    </span>
                    {ed.score && (
                      <span className="ed-mono text-xs text-stone-400 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-full">
                        {ed.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {data.certificates?.length > 0 && (
          <div id="certificates">
            <p className="ed-section-label">Credentials</p>
            <h2 className="ed-serif text-3xl text-[#111] mb-8">Certifications</h2>
            <div className="space-y-3">
              {data.certificates.map((cert, i) => (
                <div key={i} className="ed-card p-5 group">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-semibold text-[#111] text-sm leading-snug">{cert.name}</h3>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noreferrer"
                        className="text-stone-400 hover:text-stone-700 transition-colors shrink-0 text-sm">↗</a>
                    )}
                  </div>
                  <p className="text-stone-400 text-xs mb-3 ed-mono">{cert.issuer}</p>
                  {cert.date && (
                    <span className="ed-mono text-xs text-stone-400 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-full inline-block">
                      {cert.date}
                    </span>
                  )}
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