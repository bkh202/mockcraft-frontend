import { Edit3 } from "lucide-react";

export default function SummarySection({ data, setData }) {
  return (
    <div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Edit3 className="h-5 w-5 text-blue-600" />
        Professional Summary
      </h3>
      <textarea
        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        rows={6}
        value={data.summary || ""}
        onChange={(e) => setData(prev => ({ ...prev, summary: e.target.value }))}
        placeholder="Write a compelling summary about yourself..."
      />
    </div>
  );
}