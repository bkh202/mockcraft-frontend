export default function CertificatesSection({ certificates, updateField, addItem, removeItem }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-black flex items-center gap-2">
          <i className="fa fa-award text-black"></i>
          Certifications & Courses
        </h3>
        <button
          onClick={() => addItem("certificates", { name: "", issuer: "", date: "", link: "" })}
          className="flex items-center gap-1 text-base bg-gray-100 text-black px-3 py-1.5 rounded-lg hover:bg-gray-200 transition border border-gray-200"
        >
          <i className="fa fa-plus"></i>
          Add Certificate
        </button>
      </div>

      {certificates.map((cert, idx) => (
        <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-medium text-black">Certificate #{idx + 1}</h4>
            <button onClick={() => removeItem("certificates", idx)} className="text-gray-400 hover:text-red-600 transition">
              <i className="fa fa-trash"></i>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">Certificate Name</label>
              <input
                value={cert.name}
                onChange={(e) => updateField("certificates", idx, "name", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="e.g. AWS Certified Solutions Architect"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Issuer (Organization)</label>
              <input
                value={cert.issuer}
                onChange={(e) => updateField("certificates", idx, "issuer", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="e.g. Coursera, Amazon"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Date / Year</label>
              <input
                value={cert.date}
                onChange={(e) => updateField("certificates", idx, "date", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="e.g. July 2024"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">Credential URL (Optional)</label>
              <input
                type="url"
                value={cert.link || ""}
                onChange={(e) => updateField("certificates", idx, "link", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                placeholder="https://..."
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}