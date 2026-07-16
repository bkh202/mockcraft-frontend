export default function TabBar({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            flex items-center gap-2 px-4 py-2 font-bold text-base rounded-t-lg transition
            ${activeTab === tab.id
              ? "bg-gray-100 text-black border-b-2 border-black"
              : "text-gray-600 hover:text-black hover:bg-gray-50"
            }
          `}
        >
          <i className={`fa ${tab.icon} text-base`}></i>
          {tab.label}
        </button>
      ))}
    </div>
  );
}