export default function ErrorBanner({ errorMessage, onDismiss }) {
  if (!errorMessage) return null;

  return (
    <div className="mb-4 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl shadow-sm animate-fade-in-down">
      <i className="fa fa-exclamation-circle text-xl shrink-0"></i>
      <span className="text-base font-medium">{errorMessage}</span>
      <button onClick={onDismiss} className="ml-auto text-red-500 hover:text-red-700">
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
}