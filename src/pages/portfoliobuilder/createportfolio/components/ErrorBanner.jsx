import { AlertCircle } from "lucide-react";

export default function ErrorBanner({ errorMessage, onDismiss }) {
  if (!errorMessage) return null;

  return (
    <div className="mb-4 flex items-center gap-3 bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-xl shadow-lg animate-fade-in-down">
      <AlertCircle className="h-5 w-5 shrink-0" />
      <span className="text-sm font-medium">{errorMessage}</span>
      <button onClick={onDismiss} className="ml-auto text-red-600 hover:text-red-800">
        <span className="sr-only">Dismiss</span>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}