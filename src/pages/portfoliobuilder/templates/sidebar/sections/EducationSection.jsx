function EducationSection({ data }) {
  return (
    <section id="education">
      <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-10 flex items-center gap-4">
        <span className="w-8 h-px bg-teal-600 dark:bg-teal-400"></span> Credentials
      </h2>
      <div className="grid lg:grid-cols-2 gap-12">

        {/* Education Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Education</h3>
          {data.education?.map((e, i) => (
            <div key={i} className="bg-slate-100 dark:bg-[#131b2f] p-6 rounded-2xl border-l-4 border-teal-500">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">{e.degree}</h4>
              <p className="text-teal-600 dark:text-teal-400 font-medium my-1">{e.college || e.institution}</p>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-500">
                <span>{e.year || e.duration}</span>
                <span>{e.score}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        {data.certificates?.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Certifications</h3>
            {data.certificates.map((cert, i) => (
              <div key={i} className="bg-slate-100 dark:bg-[#131b2f] p-6 rounded-2xl border-l-4 border-rose-400 flex items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-xl shadow-sm shrink-0">
                  🏅
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{cert.name || cert.title || cert}</h4>
                  {cert.issuer && <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{cert.issuer}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default EducationSection;