export default function BackButton({ label, onClick, suffix }) {
  return (
    <div className="flex items-center gap-2 text-base text-gray-600 mb-6">
      <button onClick={onClick} className="hover:text-black transition-colors flex items-center gap-1 font-bold">
        <i className="fa fa-arrow-left text-sm"></i>
        {label}
      </button>
      {suffix && (
        <>
          <span className="text-gray-400">/</span>
          <span className="font-bold text-black">{suffix}</span>
        </>
      )}
    </div>
  );
}