export default function ProjectsSection({ projects, updateField, addItem, removeItem }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-black flex items-center gap-2">
          <i className="fa fa-briefcase text-black"></i>
          Projects
        </h3>
        <button
          onClick={() => addItem("projects", { title: "", description: "", duration: "", techStack: [], link: "" })}
          className="flex items-center gap-1 text-base bg-gray-100 text-black px-3 py-1.5 rounded-lg hover:bg-gray-200 transition border border-gray-200"
        >
          <i className="fa fa-plus"></i>
          Add Project
        </button>
      </div>

      {projects.map((project, idx) => (
        <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-medium text-black">Project #{idx + 1}</h4>
            <button onClick={() => removeItem("projects", idx)} className="text-gray-400 hover:text-red-600 transition">
              <i className="fa fa-trash"></i>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
              <input
                value={project.title}
                onChange={(e) => updateField("projects", idx, "title", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="Project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Duration</label>
              <input
                value={project.duration}
                onChange={(e) => updateField("projects", idx, "duration", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="e.g., Jan 2023 - Present"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
              <textarea
                value={project.description}
                onChange={(e) => updateField("projects", idx, "description", e.target.value)}
                rows={2}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="Describe the project..."
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">Tech Stack (comma separated)</label>
              <input
                value={project.techStack?.join(", ")}
                onChange={(e) => {
                  const techArray = e.target.value.split(",").map(t => t.trim()).filter(t => t);
                  updateField("projects", idx, "techStack", techArray);
                }}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="React, Node.js, MongoDB"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">Project Link (URL)</label>
              <input
                type="url"
                value={project.link || ""}
                onChange={(e) => updateField("projects", idx, "link", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="https://github.com/..."
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}