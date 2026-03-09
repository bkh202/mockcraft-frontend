import { Link, Plus, Trash2 } from "lucide-react";

export default function LinksSection({ links, setLinks }) {
  const addCustomLink = () => {
    const platformName = window.prompt("Enter Platform Name (e.g., Twitter, LeetCode, Kaggle):");
    if (platformName && platformName.trim()) {
      const key = platformName.trim().toLowerCase();
      setLinks({ ...links, [key]: "" });
    }
  };

  const removeLink = (platform) => {
    const newLinks = { ...links };
    delete newLinks[platform];
    setLinks(newLinks);
  };

  return (
    <div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Link className="h-5 w-5 text-blue-600" />
          Social & Profile Links
        </h3>
        <button
          onClick={addCustomLink}
          className="flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-200 transition"
        >
          <Plus className="h-4 w-4" />
          Add Custom Link
        </button>
      </div>

      <div className="space-y-4">
        {Object.keys(links).length === 0 ? (
          <p className="text-sm text-gray-500 italic">No links added yet. Click 'Add Custom Link' above.</p>
        ) : (
          Object.entries(links).map(([platform, url]) => (
            <div key={platform} className="flex items-end gap-3">
              <div className="grow">
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {platform} URL
                </label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setLinks({ ...links, [platform]: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder={`https://${platform}.com/your-profile`}
                />
              </div>
              <button
                onClick={() => removeLink(platform)}
                className="p-3 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 border border-gray-200 rounded-lg transition-colors mb-px"
                title={`Remove ${platform} link`}
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}