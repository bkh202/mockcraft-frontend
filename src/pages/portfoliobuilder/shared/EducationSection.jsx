import { BookOpen, Plus, Trash2 } from "lucide-react";

export default function EducationSection({ education, updateField, addItem, removeItem }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          Education
        </h3>
        <button
          onClick={() => addItem("education", { degree: "", college: "", year: "", score: "" })}
          className="flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-200 transition"
        >
          <Plus className="h-4 w-4" />
          Add Education
        </button>
      </div>

      {education.map((edu, idx) => (
        <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-medium text-gray-800">Education #{idx + 1}</h4>
            <button onClick={() => removeItem("education", idx)} className="text-gray-400 hover:text-red-500 transition">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Degree</label>
              <input
                value={edu.degree}
                onChange={(e) => updateField("education", idx, "degree", e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., B.Sc. Computer Science"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">College/University</label>
              <input
                value={edu.college}
                onChange={(e) => updateField("education", idx, "college", e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="College name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Year</label>
              <input
                value={edu.year}
                onChange={(e) => updateField("education", idx, "year", e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 2022"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Score/GPA</label>
              <input
                value={edu.score}
                onChange={(e) => updateField("education", idx, "score", e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 3.8 GPA"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}