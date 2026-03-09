import { Save, Loader2, CheckCircle } from "lucide-react";

export default function PortfolioHeader({ saving, saveSuccess, onSave }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
            Edit Portfolio
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Update your portfolio details and save to push changes live.
          </p>
        </div>
        <button
          onClick={onSave}
          disabled={saving}
          className={`
            flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium shadow-lg
            transition-all transform hover:-translate-y-0.5
            ${saving
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-linear-to-r from-green-600 to-emerald-600 text-white hover:shadow-xl"
            }
          `}
        >
          {saving ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Save className="h-5 w-5" />
          )}
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {saveSuccess && (
        <div className="mb-6 flex items-center gap-2 bg-green-100 text-green-800 p-4 rounded-xl border border-green-200 animate-fade-in-down">
          <CheckCircle className="h-5 w-5" />
          <span>Changes saved successfully! Your portfolio is updated.</span>
        </div>
      )}
    </>
  );
}