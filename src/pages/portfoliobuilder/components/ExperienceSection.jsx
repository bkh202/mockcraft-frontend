function ExperienceSection({ experience }) {
  if (!experience?.length) return null;

  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full"></span>
        Work Experience
      </h3>
      <div className="space-y-6">
        {experience.map((e, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{e?.role}</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                {e?.duration}
              </span>
            </div>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{e?.company}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{e?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;