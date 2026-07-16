export default function ExperienceSection({ experience, updateField, addItem, removeItem }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-black flex items-center gap-2">
          <i className="fa fa-graduation-cap text-black"></i>
          Experience
        </h3>
        <button
          onClick={() => addItem("experience", { role: "", company: "", duration: "", description: "" })}
          className="flex items-center gap-1 text-base bg-gray-100 text-black px-3 py-1.5 rounded-lg hover:bg-gray-200 transition border border-gray-200"
        >
          <i className="fa fa-plus"></i>
          Add Experience
        </button>
      </div>

      {experience.map((exp, idx) => (
        <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-medium text-black">Experience #{idx + 1}</h4>
            <button onClick={() => removeItem("experience", idx)} className="text-gray-400 hover:text-red-600 transition">
              <i className="fa fa-trash"></i>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Role</label>
              <input
                value={exp.role}
                onChange={(e) => updateField("experience", idx, "role", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="e.g., Frontend Developer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Company</label>
              <input
                value={exp.company}
                onChange={(e) => updateField("experience", idx, "company", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Duration</label>
              <input
                value={exp.duration}
                onChange={(e) => updateField("experience", idx, "duration", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="e.g., 2021 - 2023"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
              <textarea
                value={exp.description}
                onChange={(e) => updateField("experience", idx, "description", e.target.value)}
                rows={2}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="Describe your responsibilities..."
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}