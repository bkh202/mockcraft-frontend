export default function SkillsSection({ skills, setSkills, addItem, removeItem }) {
  const handleSkillChange = (index, newValue) => {
    const updated = [...skills];
    updated[index] = newValue;
    setSkills(updated);
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-black flex items-center gap-2">
          <i className="fa fa-code text-black"></i>
          Skills
        </h3>
        <button
          onClick={() => addItem("skills", "")}
          className="flex items-center gap-1 text-base bg-gray-100 text-black px-3 py-1.5 rounded-lg hover:bg-gray-200 transition border border-gray-200"
        >
          <i className="fa fa-plus"></i>
          Add Skill
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-2 bg-white border border-gray-300 rounded-full pl-4 pr-2 py-1 shadow-sm">
            <input
              value={skill}
              onChange={(e) => handleSkillChange(i, e.target.value)}
              className="border-none focus:ring-0 p-0 text-base w-24 md:w-auto text-black"
              placeholder="e.g., React"
            />
            <button onClick={() => removeItem("skills", i)} className="text-gray-400 hover:text-red-600 transition">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}