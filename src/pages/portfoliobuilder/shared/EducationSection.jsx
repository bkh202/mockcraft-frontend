export default function EducationSection({ education, updateField, addItem, removeItem }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-black flex items-center gap-2">
          <i className="fa fa-book text-black"></i>
          Education
        </h3>
        <button
          onClick={() => addItem("education", { degree: "", college: "", year: "", score: "" })}
          className="flex items-center gap-1 text-base bg-gray-100 text-black px-3 py-1.5 rounded-lg hover:bg-gray-200 transition border border-gray-200"
        >
          <i className="fa fa-plus"></i>
          Add Education
        </button>
      </div>

      {education.map((edu, idx) => (
        <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-medium text-black">Education #{idx + 1}</h4>
            <button onClick={() => removeItem("education", idx)} className="text-gray-400 hover:text-red-600 transition">
              <i className="fa fa-trash"></i>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Degree</label>
              <input
                value={edu.degree}
                onChange={(e) => updateField("education", idx, "degree", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="e.g., B.Sc. Computer Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">College/University</label>
              <input
                value={edu.college}
                onChange={(e) => updateField("education", idx, "college", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="College name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Year</label>
              <input
                value={edu.year}
                onChange={(e) => updateField("education", idx, "year", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="e.g., 2022"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Score/GPA</label>
              <input
                value={edu.score}
                onChange={(e) => updateField("education", idx, "score", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="e.g., 3.8 GPA"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}