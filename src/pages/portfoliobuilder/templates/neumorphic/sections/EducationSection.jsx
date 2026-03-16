function EducationSection({ data }) {
  return (
    <div className="space-y-5 nm-reveal" style={{ animationDelay: '0.3s' }}>

      {/* Education */}
      <section id="education" className="nm-card p-7">
        <div className="nm-section-head">
          <div className="nm-accent-bar h-7 bg-blue-500" />
          <h3 className="text-lg font-bold text-slate-900">Education</h3>
        </div>
        <div className="h-0.5 w-12 rounded-full mb-6"
          style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)' }} />

        <div className="space-y-0">
          {data.education?.map((ed, i) => (
            <div key={i} className="nm-timeline-item group flex gap-4 pb-6 last:pb-0">
              <div className="flex flex-col items-center pt-1">
                <div className="nm-timeline-dot" />
                {i < data.education.length - 1 && (
                  <div className="w-px flex-1 mt-1.5 bg-slate-100" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm leading-snug mb-1">{ed.degree}</h4>
                <p className="text-xs text-slate-500 mb-2">{ed.college}</p>
                <div className="flex gap-2">
                  <span className="nm-mono text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-full">
                    {ed.year}
                  </span>
                  {ed.score && (
                    <span className="nm-mono text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                      {ed.score}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      {data.certificates?.length > 0 && (
        <section id="certificates" className="nm-card p-7">
          <div className="nm-section-head">
            <div className="nm-accent-bar h-7 bg-amber-500" />
            <h3 className="text-lg font-bold text-slate-900">Certifications</h3>
          </div>
          <div className="h-0.5 w-12 rounded-full mb-6"
            style={{ background: 'linear-gradient(90deg, #f59e0b, #f97316)' }} />

          <div className="space-y-4">
            {data.certificates.map((cert, i) => (
              <div key={i} className="group flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-sm">
                  🏆
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-900 text-sm leading-snug group-hover:text-amber-600 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 nm-mono">
                    {cert.issuer}{cert.date ? ` · ${cert.date}` : ''}
                  </p>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noreferrer"
                      className="text-xs text-indigo-500 font-medium flex items-center gap-1 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity w-fit">
                      View credential ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default EducationSection;