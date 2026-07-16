import { Link } from "react-router-dom";

export default function CSEDashboard() {
    return (
        <div className="min-h-screen bg-white text-black">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                        Computer Science & Engineering
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose your learning path and master the skills that matter most.
                    </p>
                </div>

                {/* Two Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* CS Core Card */}
                    <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md hover:border-black transition-all duration-300">
                        <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-6 border border-gray-200 group-hover:scale-110 transition-transform">
                            <i className="fa fa-laptop text-4xl text-black"></i>
                        </div>
                        <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                            Core Computer Science
                        </h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Master fundamental subjects: Data Structures, Algorithms, Operating Systems,
                            Database Management, Computer Networks, and more. Build a strong foundation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Data Structures", "Algorithms", "OS", "DBMS", "Networks"].map((topic) => (
                                <span key={topic} className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                                    {topic}
                                </span>
                            ))}
                        </div>
                        <Link
                            to="/premium/engineering/csdash/cscore"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm border border-gray-300"
                        >
                            Explore Core
                            <i className="fa fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                        </Link>
                    </div>

                    {/* Technology Specializations Card */}
                    <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md hover:border-black transition-all duration-300">
                        <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-6 border border-gray-200 group-hover:scale-110 transition-transform">
                            <i className="fa fa-rocket text-4xl text-black"></i>
                        </div>
                        <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                            Technology Specializations
                        </h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Dive into modern tech domains: Web Development, AI/ML, Cyber Security,
                            Data Science, Cloud Computing, and Mobile Development. Stay industry‑ready.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Web Dev", "AI/ML", "Cyber Sec", "Data Sci", "Cloud", "Mobile"].map((topic) => (
                                <span key={topic} className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                                    {topic}
                                </span>
                            ))}
                        </div>
                        <Link
                            to="/premium/engineering/csdash/cstechnology"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm border border-gray-300"
                        >
                            Explore Tech
                            <i className="fa fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                        </Link>
                    </div>
                </div>

                {/* Optional Footer / Back Link */}
                <div className="text-center mt-12">
                    <Link
                        to="/engineering"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium text-lg"
                    >
                        <i className="fa fa-arrow-left text-sm"></i> Back to Engineering
                    </Link>
                </div>
            </div>
        </div>
    );
}