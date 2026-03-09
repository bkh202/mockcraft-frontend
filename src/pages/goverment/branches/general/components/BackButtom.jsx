export default function BackButton({ label, onClick, suffix }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      <button onClick={onClick} className="hover:text-green-600 flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {label}
      </button>
      {suffix && (
        <>
          <span>→</span>
          <span className="font-medium text-gray-900">{suffix}</span>
        </>
      )}
    </div>
  );
}