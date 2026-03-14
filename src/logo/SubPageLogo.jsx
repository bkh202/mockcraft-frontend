// components/SubPageLogo.jsx
import MockCraftLogo from "./MockCraftLogo";

export default function SubPageLogo({ title, subtitle }) {
  return (
    <div className="flex items-center gap-3">
      <MockCraftLogo size="sm" />
      <div className="hidden md:block border-l border-gray-200 pl-3">
        <h1 className="text-lg font-bold text-gray-900">{title}</h1>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{subtitle}</p>
      </div>
    </div>
  );
}