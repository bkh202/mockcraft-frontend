export default function SummarySection({ data, setData }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
        <i className="fa fa-edit text-black"></i>
        Professional Summary
      </h3>
      <textarea
        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black resize-none text-base"
        rows={6}
        value={data.summary || ""}
        onChange={(e) => setData(prev => ({ ...prev, summary: e.target.value }))}
        placeholder="Write a compelling summary about yourself..."
      />
    </div>
  );
}