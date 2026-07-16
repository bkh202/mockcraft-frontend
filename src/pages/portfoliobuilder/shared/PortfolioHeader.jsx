export default function PortfolioHeader({ saving, saveSuccess, onSave }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div>
          <h1 className="text-3xl font-extrabold text-black">
            Edit Portfolio
          </h1>
          <p className="mt-1 text-lg text-gray-600">
            Update your portfolio details and save to push changes live.
          </p>
        </div>
        <button
          onClick={onSave}
          disabled={saving}
          className={`
            flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-lg
            transition-all transform hover:-translate-y-0.5
            ${saving
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 shadow-sm"
            }
          `}
        >
          {saving ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-save"></i>}
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {saveSuccess && (
        <div className="mb-6 flex items-center gap-2 bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 animate-fade-in-down">
          <i className="fa fa-check-circle text-xl"></i>
          <span className="text-base font-medium">Changes saved successfully! Your portfolio is updated.</span>
        </div>
      )}
    </>
  );
}