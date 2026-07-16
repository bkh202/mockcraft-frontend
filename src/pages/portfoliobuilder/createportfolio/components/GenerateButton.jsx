export default function GenerateButton({ loading, isParsing, onClick }) {
  return (
    <div className="mt-8 flex justify-end">
      <button
        onClick={onClick}
        disabled={loading || isParsing}
        className={`
          flex items-center gap-2 py-3 px-8 rounded-xl font-bold text-lg transition-all
          ${loading || isParsing
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800 shadow-sm"
          }
        `}
      >
        {loading ? <i className="fa fa-spinner fa-spin text-xl"></i> : <i className="fa fa-magic text-xl"></i>}
        Generate Portfolio
      </button>
    </div>
  );
}