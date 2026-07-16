import { Link } from "react-router-dom";

export default function CivilDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Civil Engineering
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your learning path and master the skills that matter most in civil engineering.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Civil Core Card */}
          <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md hover:border-gray-300 transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-6 border border-gray-200 group-hover:scale-110 transition-transform">
              <i className="fa fa-archway text-4xl text-black"></i>
            </div>
            <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
              Core Civil Engineering
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Master fundamental subjects: Structural Analysis, Geotechnical Engineering, Transportation, Environmental Engineering, Surveying, and Construction Management. Build a strong foundation.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Structural Analysis", "Geotech", "Transportation", "Environmental", "Surveying", "Construction Mgmt"].map((topic) => (
                <span key={topic} className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                  {topic}
                </span>
              ))}
            </div>
            <Link
              to="/premium/engineering/civildash/civilcore"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm border border-gray-300"
            >
              Explore Core
              <i className="fa fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>

          {/* Civil Technology Specializations Card */}
          <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md hover:border-gray-300 transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-6 border border-gray-200 group-hover:scale-110 transition-transform">
              <i className="fa fa-city text-4xl text-black"></i>
            </div>
            <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
              Technology Specializations
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Dive into modern civil tech domains: BIM, Smart Infrastructure, Sustainable Construction, Geospatial Technologies, Construction Automation, and Advanced Materials. Stay industry‑ready.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["BIM", "Smart Cities", "Sustainable Construction", "GIS", "Automation", "Advanced Materials"].map((topic) => (
                <span key={topic} className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                  {topic}
                </span>
              ))}
            </div>
            <Link
              to="/premium/engineering/civildash/civiltechnology"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm border border-gray-300"
            >
              Explore Tech
              <i className="fa fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-12">
          <Link
            to="/engineering"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium text-lg"
          >
            <i className="fa fa-arrow-left text-sm"></i>
            Back to Engineering
          </Link>
        </div>
      </div>
    </div>
  );
}