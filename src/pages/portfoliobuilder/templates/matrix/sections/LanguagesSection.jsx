function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="mx-card p-6 rounded-sm">
      <div className="mx-dim text-xs mb-3">// languages</div>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang, i) => (
          <span key={i} className="mx-tag flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-mono cursor-default">
            <span className="text-green-500">🗣</span> {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;