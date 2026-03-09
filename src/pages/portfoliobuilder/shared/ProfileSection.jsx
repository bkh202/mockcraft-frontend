import { User } from "lucide-react";

export default function ProfileSection({ data, setData }) {
  return (
    <div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <User className="h-5 w-5 text-blue-600" />
        Basic Information
      </h3>
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={data.name || ""}
              onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Md Bakhtiyar"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
            <input
              type="text"
              value={data.title || ""}
              onChange={(e) => setData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Full-Stack Java Developer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              value={data.email || ""}
              onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. user@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              value={data.phone || ""}
              onChange={(e) => setData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. +91 9876543210"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              value={data.location || ""}
              onChange={(e) => setData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Mumbai, India"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image (URL)</label>
          <div className="flex gap-4 items-center">
            <input
              type="url"
              value={data.profileImage || ""}
              onChange={(e) => setData(prev => ({ ...prev, profileImage: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/your-photo.jpg"
            />
            <div className="shrink-0 w-14 h-14 rounded-full border-2 border-blue-100 overflow-hidden bg-gray-100 flex items-center justify-center">
              {data.profileImage ? (
                <img src={data.profileImage} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <User className="h-6 w-6 text-gray-400" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}