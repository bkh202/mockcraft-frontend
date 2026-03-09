import { Award, Plus, Trash2 } from "lucide-react";

export default function CertificatesSection({ certificates, updateField, addItem, removeItem }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Award className="h-5 w-5 text-blue-600" />
          Certifications & Courses
        </h3>
        <button
          onClick={() => addItem("certificates", { name: "", issuer: "", date: "", link: "" })}
          className="flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-200 transition"
        >
          <Plus className="h-4 w-4" />
          Add Certificate
        </button>
      </div>

      {certificates.map((cert, idx) => (
        <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-medium text-gray-800">Certificate #{idx + 1}</h4>
            <button onClick={() => removeItem("certificates", idx)} className="text-gray-400 hover:text-red-500 transition">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-500 mb-1">Certificate Name</label>
              <input
                value={cert.name}
                onChange={(e) => updateField("certificates", idx, "name", e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. AWS Certified Solutions Architect"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Issuer (Organization)</label>
              <input
                value={cert.issuer}
                onChange={(e) => updateField("certificates", idx, "issuer", e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Coursera, Amazon"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Date / Year</label>
              <input
                value={cert.date}
                onChange={(e) => updateField("certificates", idx, "date", e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. July 2024"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-500 mb-1">Credential URL (Optional)</label>
              <input
                type="url"
                value={cert.link || ""}
                onChange={(e) => updateField("certificates", idx, "link", e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="https://..."
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}