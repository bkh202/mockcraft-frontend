function EducationSection({ education }) {
  if (!education?.length) return null;

  return (
    <div>
      <h3 className="text-3xl font-bold text-black mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-black rounded-full"></span>
        Education
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h4 className="text-xl font-bold text-black">{e.degree}</h4>
            <p className="text-black font-medium mt-1">{e.college}</p>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <i className="fa fa-calendar text-xs"></i>
                {e.year}
              </span>
              <span className="flex items-center gap-1">
                <i className="fa fa-check-circle text-xs"></i>
                {e.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;