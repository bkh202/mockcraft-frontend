import { Code, Plus, Trash2 } from "lucide-react";

export default function SkillsSection({ skills, setSkills, addItem, removeItem }) {
  const handleSkillChange = (index, newValue) => {
    const updated = [...skills];
    updated[index] = newValue;
    setSkills(updated);
  };

  return (
    <div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Code className="h-5 w-5 text-blue-600" />
          Skills
        </h3>
        <button
          onClick={() => addItem("skills", "")}
          className="flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-200 transition"
        >
          <Plus className="h-4 w-4" />
          Add Skill
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-2 bg-white border rounded-full pl-4 pr-2 py-1 shadow-sm">
            <input
              value={skill}
              onChange={(e) => handleSkillChange(i, e.target.value)}
              className="border-none focus:ring-0 p-0 text-sm w-24 md:w-auto"
              placeholder="e.g., React"
            />
            <button onClick={() => removeItem("skills", i)} className="text-gray-400 hover:text-red-500 transition">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}