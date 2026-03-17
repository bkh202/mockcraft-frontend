function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="bg-white dark:bg-[#131b2f] p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-rose-100 dark:hover:border-rose-900/50 transition-all">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
        Languages
      </h3>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang, i) => (
          <span key={i} className="flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-xl text-sm font-bold text-rose-600 dark:text-rose-400">
            💬 {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;