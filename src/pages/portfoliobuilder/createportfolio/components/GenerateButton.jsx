import { Sparkles, Loader2 } from "lucide-react";

export default function GenerateButton({ loading, isParsing, onClick }) {
  return (
    <div className="mt-8 flex justify-end">
      <button
        onClick={onClick}
        disabled={loading || isParsing}
        className={`
          flex items-center gap-2 py-3 px-8 rounded-xl font-semibold text-lg transition-all transform
          ${loading || isParsing
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          }
        `}
      >
        {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : <Sparkles className="h-6 w-6" />}
        Generate Portfolio
      </button>
    </div>
  );
}