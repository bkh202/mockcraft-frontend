// CSEDashboard.jsx
import { Link } from "react-router-dom";

export default function CSEDashboard() {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Computer Science & Engineering
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose your learning path and master the skills that matter most.
                    </p>
                </div>

                {/* Two Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* CS Core Card */}
                    <div className="group bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-400 transition-all duration-300">
                        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                            <span className="text-4xl">💻</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            Core Computer Science
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Master fundamental subjects: Data Structures, Algorithms, Operating Systems,
                            Database Management, Computer Networks, and more. Build a strong foundation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Data Structures", "Algorithms", "OS", "DBMS", "Networks"].map((topic) => (
                                <span key={topic} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                                    {topic}
                                </span>
                            ))}
                        </div>
                        <Link
                            to="/premium/engineering/csdash/cscore"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            Explore Core
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>

                    {/* Technology Specializations Card */}
                    <div className="group bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl hover:scale-[1.02] hover:border-purple-400 transition-all duration-300">
                        <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                            <span className="text-4xl">🚀</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                            Technology Specializations
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Dive into modern tech domains: Web Development, AI/ML, Cyber Security,
                            Data Science, Cloud Computing, and Mobile Development. Stay industry‑ready.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Web Dev", "AI/ML", "Cyber Sec", "Data Sci", "Cloud", "Mobile"].map((topic) => (
                                <span key={topic} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                                    {topic}
                                </span>
                            ))}
                        </div>
                        <Link
                            to="/premium/engineering/csdash/cstechnology"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            Explore Tech
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Optional Footer / Back Link */}
                <div className="text-center mt-12">
                    <Link
                        to="/engineering"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Engineering
                    </Link>
                </div>
            </div>
        </div>
    );
}