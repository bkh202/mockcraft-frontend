export default function TabBar({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 border-b">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-2 font-medium text-sm rounded-t-lg transition
              ${activeTab === tab.id
                ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }
            `}
          >
            <Icon className="h-4 w-4" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}