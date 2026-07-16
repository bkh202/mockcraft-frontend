function ExperienceSection({ experience }) {
  if (!experience?.length) return null;

  return (
    <div>
      <h3 className="text-3xl font-bold text-black mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-black rounded-full"></span>
        Work Experience
      </h3>
      <div className="space-y-6">
        {experience.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h4 className="text-xl font-bold text-black">{e?.role}</h4>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                {e?.duration}
              </span>
            </div>
            <p className="text-black font-medium mb-3">{e?.company}</p>
            <p className="text-gray-700 leading-relaxed">{e?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;