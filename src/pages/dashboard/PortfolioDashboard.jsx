import { useEffect, useState } from "react";
import axios from "./../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Eye,
  Edit3,
  Trash2,
  Calendar,
  Link as LinkIcon,
  FolderOpen,
  FileText,
  ExternalLink,
  Briefcase,
  LayoutDashboard,
  Clock,
  Globe, // Naye icons Live/Unlive ke liye
  EyeOff
} from "lucide-react";

function PortfolioDashboard() {
  const [portfolios, setPortfolios] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [portfolioRes, resumeRes] = await Promise.all([
        axios.get("/portfolio/my"),
        axios.get("/resume/all-resumes")
      ]);
      setPortfolios(portfolioRes.data);

      // ✅ Deduplicate by fileName — sirf latest ek dikhega
      const allResumes = resumeRes.data;
      const unique = allResumes.filter((resume, index, self) =>
        index === self.findIndex(r => r.fileName === resume.fileName)
      );
      setResumes(unique);
    } catch (err) {
      console.error("Failed to fetch data", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePortfolio = async (id) => {
    if (!window.confirm("Are you sure you want to delete this portfolio? This action cannot be undone.")) return;
    try {
      await axios.delete(`/portfolio/${id}`);
      setPortfolios(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleDeleteResume = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resume?")) return;
    try {
      await axios.delete(`/resume/${id}`);
      setResumes(prev => prev.filter(r => r.id !== id));
    } catch (err) {
      console.error("Resume delete failed", err);
    }
  };

  // 🚀 NAYA FUNCTION: Live/Draft toggle karne ke liye
  const handleTogglePublish = async (portfolio) => {
    // Backend SpringBoot default "isPublished" ko json me "published" kar deta hai
    const isCurrentlyLive = portfolio.isPublished === true || portfolio.published === true;

    try {
      // Backend api call (Tere existing endpoint pe)
      await axios.put(`/portfolio/publish/${portfolio.id}`);

      // Local state update karega taaki UI bina refresh huye change ho jaye
      setPortfolios(prev => prev.map(p => {
        if (p.id === portfolio.id) {
          return { ...p, published: !isCurrentlyLive, isPublished: !isCurrentlyLive };
        }
        return p;
      }));
    } catch (err) {
      console.error("Toggle publish failed", err);
      alert("Failed to change visibility status.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Premium Dashboard Header Background */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <LayoutDashboard className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Dashboard
              </h1>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Manage your digital identity, portfolios, and resumes.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/create")}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-gray-200"
          >
            <Plus className="h-5 w-5" />
            Create Portfolio
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {loading ? (
          <div className="flex flex-col justify-center items-center py-32">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-indigo-100 rounded-full"></div>
              <div className="w-16 h-16 border-4 border-indigo-600 rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
            </div>
            <span className="mt-4 text-gray-500 font-medium">Fetching your workspace...</span>
          </div>
        ) : (
          <>
            {/* Overview Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-semibold text-sm tracking-wide uppercase">Total Portfolios</h3>
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900">{portfolios.length}</div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-semibold text-sm tracking-wide uppercase">Resumes Uploaded</h3>
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                    <FileText className="h-5 w-5" />
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900">{resumes.length}</div>
              </div>

              <div className="bg-linear-to-br from-indigo-600 to-blue-700 rounded-2xl p-6 shadow-md text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h3 className="text-indigo-100 font-semibold text-sm tracking-wide uppercase">System Status</h3>
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-xl font-bold relative z-10 mt-2">
                  All Systems<br />Operational
                </div>
              </div>
            </div>

            {/* PORTFOLIOS SECTION */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-indigo-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Portfolios</h2>
                </div>
              </div>

              {portfolios.length === 0 ? (
                <div className="bg-white rounded-3xl border border-dashed border-gray-300 p-16 text-center flex flex-col items-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-5">
                    <FolderOpen className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No portfolios yet</h3>
                  <p className="text-gray-500 max-w-sm mb-8">Design your first professional portfolio in minutes. Upload a resume and let the magic happen.</p>
                  <button
                    onClick={() => navigate("/create")}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
                  >
                    <Plus className="h-5 w-5" /> Create New Portfolio
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolios.map((p) => {
                    // Java Spring JSON Check: normally it's 'published' instead of 'isPublished'
                    const isLive = p.isPublished === true || p.published === true;

                    return (
                      <div
                        key={p.id}
                        className="group bg-white rounded-3xl border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col overflow-hidden"
                      >
                        {/* Abstract Premium Thumbnail */}
                        <div className="h-32 w-full bg-linear-to-r from-gray-100 to-gray-50 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
                          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
                          <span className="relative z-10 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-gray-600 tracking-wider shadow-sm">
                            {p.templateConfig?.layout?.toUpperCase() || "STANDARD"} THEME
                          </span>
                        </div>

                        <div className="p-6 grow flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                              {p.title}
                            </h3>

                            {/* 🚀 DYNAMIC BADGE */}
                            {isLive ? (
                              <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded-md tracking-wider border border-green-200">Live</span>
                            ) : (
                              <span className="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase rounded-md tracking-wider border border-amber-200">Draft</span>
                            )}
                          </div>

                          {/* 🚀 DYNAMIC PUBLIC LINK */}
                          {isLive ? (
                            <a
                              href={`/p/${p.slug}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-500 hover:text-indigo-700 transition-colors mb-6 w-fit bg-indigo-50/50 px-2.5 py-1 rounded-md"
                            >
                              <LinkIcon className="h-3.5 w-3.5" />
                              /{p.slug}
                            </a>
                          ) : (
                            <div className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 mb-6 w-fit bg-gray-50 px-2.5 py-1 rounded-md cursor-not-allowed">
                              <EyeOff className="h-3.5 w-3.5" />
                              Not published yet
                            </div>
                          )}

                          <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(p.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>

                            <div className="flex items-center gap-2">
                              {/* 🚀 SMART TOGGLE BUTTON (LIVE / UNLIVE) */}
                              <button
                                onClick={() => handleTogglePublish(p)}
                                className={`p-2 rounded-lg transition-colors tooltip-trigger ${isLive ? 'text-green-600 bg-green-50 hover:bg-green-100' : 'text-gray-400 hover:text-indigo-600 hover:bg-indigo-50'}`}
                                title={isLive ? "Unpublish (Make Draft)" : "Go Live"}
                              >
                                {isLive ? <Globe className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>

                              {/* View Live / Preview link icon */}
                              {isLive ? (
                                <a
                                  href={`/p/${p.slug}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors tooltip-trigger block"
                                  title="View Live"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              ) : (
                                <button
                                  onClick={() => window.open(`/preview/${p.id}`, '_blank')}
                                  className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors tooltip-trigger"
                                  title="Preview Design"
                                >
                                  <Eye className="h-4 w-4" />
                                </button>
                              )}

                              <button
                                onClick={() => navigate(`/edit/${p.id}`)}
                                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors tooltip-trigger"
                                title="Edit Portfolio"
                              >
                                <Edit3 className="h-4 w-4" />
                              </button>

                              <button
                                onClick={() => handleDeletePortfolio(p.id)}
                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors tooltip-trigger"
                                title="Delete"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </section>

            {/* RESUMES SECTION */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">Uploaded Resumes</h2>
                </div>
              </div>

              {resumes.length === 0 ? (
                <div className="bg-white rounded-3xl border border-dashed border-gray-300 p-12 text-center">
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">No resumes found</h3>
                  <p className="text-sm text-gray-500">Files uploaded during portfolio creation will appear here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {resumes.map((r) => (
                    <div
                      key={r.id}
                      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-200 p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4 overflow-hidden pr-2">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                          <FileText className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="overflow-hidden">
                          <a
                            href={`http://localhost:8081/${r.filePath}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-sm text-gray-900 hover:text-emerald-600 transition-colors truncate block"
                            title={r.fileName}
                          >
                            {r.fileName}
                          </a>
                          <p className="text-xs text-gray-500 mt-0.5 font-medium">
                            {new Date(r.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteResume(r.id)}
                        className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all shrink-0"
                        title="Delete file"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default PortfolioDashboard;