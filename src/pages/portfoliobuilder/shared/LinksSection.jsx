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
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-black flex items-center gap-2">
          <i className="fa fa-link text-black"></i>
          Social & Profile Links
        </h3>
        <button
          onClick={addCustomLink}
          className="flex items-center gap-1 text-base bg-gray-100 text-black px-3 py-1.5 rounded-lg hover:bg-gray-200 transition border border-gray-200"
        >
          <i className="fa fa-plus"></i>
          Add Custom Link
        </button>
      </div>

      <div className="space-y-4">
        {Object.keys(links).length === 0 ? (
          <p className="text-base text-gray-500 italic">No links added yet. Click 'Add Custom Link' above.</p>
        ) : (
          Object.entries(links).map(([platform, url]) => (
            <div key={platform} className="flex items-end gap-3">
              <div className="grow">
                <label className="block text-sm font-medium text-gray-600 mb-1 capitalize">
                  {platform} URL
                </label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setLinks({ ...links, [platform]: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-base"
                  placeholder={`https://${platform}.com/your-profile`}
                />
              </div>
              <button
                onClick={() => removeLink(platform)}
                className="p-3 text-gray-400 hover:text-red-600 bg-gray-50 hover:bg-red-50 border border-gray-300 rounded-lg transition-colors mb-px"
                title={`Remove ${platform} link`}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}