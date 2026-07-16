import { useEffect, useState } from "react";
import axios from "./../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

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

  const handleTogglePublish = async (portfolio) => {
    const isCurrentlyLive = portfolio.isPublished === true || portfolio.published === true;
    try {
      await axios.put(`/portfolio/publish/${portfolio.id}`);
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
    <div className="min-h-screen bg-white pb-20">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
              <i className="fa fa-tachometer-alt text-2xl text-black"></i>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-black tracking-tight">
                Dashboard
              </h1>
              <p className="mt-1 text-base font-medium text-gray-600">
                Manage your digital identity, portfolios, and resumes.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/create")}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white font-bold rounded-xl hover:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 text-lg border border-gray-300"
          >
            <i className="fa fa-plus"></i>
            Create Portfolio
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {loading ? (
          <div className="flex flex-col justify-center items-center py-32">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
              <div className="w-16 h-16 border-4 border-black rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
            </div>
            <span className="mt-4 text-gray-600 font-semibold text-lg">Fetching your workspace...</span>
          </div>
        ) : (
          <>
            {/* Overview Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600 font-semibold text-sm tracking-wide uppercase">Total Portfolios</h3>
                  <div className="p-2 bg-gray-100 text-black rounded-lg border border-gray-200">
                    <i className="fa fa-briefcase text-xl"></i>
                  </div>
                </div>
                <div className="text-4xl font-black text-black">{portfolios.length}</div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600 font-semibold text-sm tracking-wide uppercase">Resumes Uploaded</h3>
                  <div className="p-2 bg-gray-100 text-black rounded-lg border border-gray-200">
                    <i className="fa fa-file-alt text-xl"></i>
                  </div>
                </div>
                <div className="text-4xl font-black text-black">{resumes.length}</div>
              </div>

              <div className="bg-black rounded-2xl p-6 shadow-md text-white border border-gray-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-gray-800 rounded-full blur-2xl opacity-50"></div>
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h3 className="text-gray-400 font-semibold text-sm tracking-wide uppercase">System Status</h3>
                  <div className="p-2 bg-gray-800 rounded-lg border border-gray-700">
                    <i className="fa fa-clock text-xl text-white"></i>
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
                  <div className="w-2 h-8 bg-black rounded-full"></div>
                  <h2 className="text-2xl font-bold text-black">Your Portfolios</h2>
                </div>
              </div>

              {portfolios.length === 0 ? (
                <div className="bg-white rounded-3xl border border-dashed border-gray-300 p-16 text-center flex flex-col items-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-5 border border-gray-200">
                    <i className="fa fa-folder-open text-3xl text-gray-500"></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">No portfolios yet</h3>
                  <p className="text-gray-600 max-w-sm mb-8 text-lg">Design your first professional portfolio in minutes. Upload a resume and let the magic happen.</p>
                  <button
                    onClick={() => navigate("/create")}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition shadow-sm text-lg border border-gray-300"
                  >
                    <i className="fa fa-plus"></i> Create New Portfolio
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolios.map((p) => {
                    const isLive = p.isPublished === true || p.published === true;

                    return (
                      <div
                        key={p.id}
                        className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
                      >
                        {/* Abstract Thumbnail */}
                        <div className="h-32 w-full bg-gray-100 relative overflow-hidden flex items-center justify-center border-b border-gray-200">
                          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-black/5 rounded-full blur-xl"></div>
                          <span className="relative z-10 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-gray-700 tracking-wider shadow-sm border border-gray-200">
                            {p.templateConfig?.layout?.toUpperCase() || "STANDARD"} THEME
                          </span>
                        </div>

                        <div className="p-6 grow flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-black line-clamp-1 group-hover:text-gray-800 transition-colors">
                              {p.title}
                            </h3>

                            {isLive ? (
                              <span className="px-2 py-1 bg-gray-100 text-black text-[10px] font-bold uppercase rounded-md tracking-wider border border-gray-300">Live</span>
                            ) : (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-md tracking-wider border border-gray-300">Draft</span>
                            )}
                          </div>

                          {isLive ? (
                            <a
                              href={`/p/${p.slug}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-gray-700 transition-colors mb-6 w-fit bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200"
                            >
                              <i className="fa fa-link text-xs"></i>
                              /{p.slug}
                            </a>
                          ) : (
                            <div className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 mb-6 w-fit bg-gray-50 px-2.5 py-1 rounded-md cursor-not-allowed border border-gray-200">
                              <i className="fa fa-eye-slash text-xs"></i>
                              Not published yet
                            </div>
                          )}

                          <div className="mt-auto pt-5 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                              <i className="fa fa-calendar text-xs"></i>
                              {new Date(p.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>

                            <div className="flex items-center gap-2">
                              {/* Toggle Live/Draft */}
                              <button
                                onClick={() => handleTogglePublish(p)}
                                className={`p-2 rounded-lg transition-colors ${isLive ? 'text-black bg-gray-100 hover:bg-gray-200' : 'text-gray-400 hover:text-black hover:bg-gray-100'} border border-gray-200`}
                                title={isLive ? "Unpublish (Make Draft)" : "Go Live"}
                              >
                                <i className={`fa ${isLive ? 'fa-globe' : 'fa-eye'}`}></i>
                              </button>

                              {/* View Live / Preview */}
                              {isLive ? (
                                <a
                                  href={`/p/${p.slug}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                                  title="View Live"
                                >
                                  <i className="fa fa-external-link-alt"></i>
                                </a>
                              ) : (
                                <button
                                  onClick={() => window.open(`/preview/${p.id}`, '_blank')}
                                  className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                                  title="Preview Design"
                                >
                                  <i className="fa fa-eye"></i>
                                </button>
                              )}

                              <button
                                onClick={() => navigate(`/edit/${p.id}`)}
                                className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                                title="Edit Portfolio"
                              >
                                <i className="fa fa-edit"></i>
                              </button>

                              <button
                                onClick={() => handleDeletePortfolio(p.id)}
                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-gray-200"
                                title="Delete"
                              >
                                <i className="fa fa-trash"></i>
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
                  <div className="w-2 h-8 bg-black rounded-full"></div>
                  <h2 className="text-2xl font-bold text-black">Uploaded Resumes</h2>
                </div>
              </div>

              {resumes.length === 0 ? (
                <div className="bg-white rounded-3xl border border-dashed border-gray-300 p-12 text-center">
                  <i className="fa fa-file-alt text-4xl text-gray-300 mx-auto mb-3"></i>
                  <h3 className="text-lg font-bold text-black mb-1">No resumes found</h3>
                  <p className="text-base text-gray-600">Files uploaded during portfolio creation will appear here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {resumes.map((r) => (
                    <div
                      key={r.id}
                      className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4 overflow-hidden pr-2">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors border border-gray-200">
                          <i className="fa fa-file-alt text-xl text-black"></i>
                        </div>
                        <div className="overflow-hidden">
                          <a
                            href={`http://localhost:8081/${r.filePath}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-base text-black hover:text-gray-700 transition-colors truncate block"
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
                        className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all shrink-0 border border-gray-200"
                        title="Delete file"
                      >
                        <i className="fa fa-trash"></i>
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