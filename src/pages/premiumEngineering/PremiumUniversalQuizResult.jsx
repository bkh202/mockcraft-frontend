import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";

function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!target) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return count;
}

function formatTime(seconds) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
}

function getGrade(pct) {
  if (pct >= 90) return { label: "Outstanding", color: "#059669", light: "#ecfdf5", border: "#a7f3d0", emoji: "🏆" };
  if (pct >= 75) return { label: "Excellent",   color: "#4f46e5", light: "#eef2ff", border: "#c7d2fe", emoji: "🌟" };
  if (pct >= 60) return { label: "Good",        color: "#7c3aed", light: "#f5f3ff", border: "#ddd6fe", emoji: "👍" };
  if (pct >= 40) return { label: "Pass",        color: "#d97706", light: "#fffbeb", border: "#fde68a", emoji: "✅" };
  return               { label: "Needs Work",  color: "#dc2626", light: "#fef2f2", border: "#fecaca", emoji: "📚" };
}

export default function UniversalQuizResult() {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ localStorage se meta read karo
    let meta = {};
    try {
      meta = JSON.parse(localStorage.getItem("quizMeta") || "{}");
    } catch (_) {}

    axiosInstance
      .get(`/quiz/result/${attemptId}`)
      .then(res => {
        const d = res.data;
        const total    = d.totalQuestions || 0;
        const correct  = d.correct  || 0;
        const wrong    = d.wrong    || 0;
        const skipped  = d.skipped  || 0;
        const score    = parseFloat(((correct * 2) - (wrong * 0.5)).toFixed(2));
        const maxScore = total * 2;
        const pct      = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

        setData({
          total, correct, wrong, skipped,
          score, maxScore, pct,
          passed: pct >= 40,
          // ✅ localStorage se meta — backend se nahi aata
          timeTaken: meta.timeTaken || null,
          category:  meta.category  || null,
          branch:    meta.branch    || null,
          subject:   meta.subject   || null,
          company:   meta.company   || null,
        });
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Could not load results.");
        setLoading(false);
      });
  }, [attemptId]);

  const animPct = useCounter(data?.pct ?? 0, 1600);

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
      <p className="text-gray-500 font-medium text-sm">Calculating your results...</p>
    </div>
  );

  if (error || !data) return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
      <p className="text-red-500 font-semibold">{error || "Something went wrong."}</p>
      <button onClick={() => navigate(-1)}
        className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
        Go Back
      </button>
    </div>
  );

  const grade = getGrade(data.pct);
  const circumference = 2 * Math.PI * 52;
  const strokeDash = circumference - (animPct / 100) * circumference;

  const meta = [
    data.category  && { label: "Category",   value: data.category  },
    data.branch    && { label: "Branch",      value: data.branch    },
    data.subject   && { label: "Subject",     value: data.subject   },
    data.company   && { label: "Company",     value: data.company   },
    data.timeTaken && { label: "Time Taken",  value: formatTime(data.timeTaken) },
  ].filter(Boolean);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .rq-wrap * { font-family: 'Plus Jakarta Sans', sans-serif; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.88); } to { opacity:1; transform:scale(1); } }
        .fu { animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .si { animation: scaleIn 0.55s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      <div className="rq-wrap min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 flex items-center justify-center p-4 relative overflow-hidden">

        {/* Bg blobs */}
        <div className="fixed top-0 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
        <div className="fixed bottom-0 left-0 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

        <div className="w-full max-w-md relative z-10">

          {/* Main card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/60 border border-gray-100 overflow-hidden">

            {/* Top accent bar */}
            <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)' }} />

            <div className="p-7">

              {/* Grade badge */}
              <div className="fu flex justify-center mb-6" style={{ animationDelay: '0.05s' }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold"
                  style={{ background: grade.light, color: grade.color, border: `1.5px solid ${grade.border}` }}>
                  {grade.emoji} {grade.label}
                </span>
              </div>

              {/* Circle + Title */}
              <div className="si flex flex-col items-center mb-8" style={{ animationDelay: '0.1s' }}>
                <div className="relative w-36 h-36 mb-5">
                  <div className="absolute inset-2.5 rounded-full bg-white"
                    style={{ boxShadow: `0 0 0 6px ${grade.light}` }} />
                  <svg className="absolute inset-0" width="144" height="144" viewBox="0 0 144 144">
                    <circle cx="72" cy="72" r="52" fill="none" stroke="#f1f5f9" strokeWidth="11" />
                    <circle
                      cx="72" cy="72" r="52"
                      fill="none"
                      stroke={grade.color}
                      strokeWidth="11"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDash}
                      transform="rotate(-90 72 72)"
                      style={{
                        transition: 'stroke-dashoffset 0.03s linear',
                        filter: `drop-shadow(0 0 5px ${grade.color}55)`
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold" style={{ color: grade.color }}>
                      {animPct}%
                    </span>
                    <span className={`text-xs font-bold tracking-widest mt-0.5 ${data.passed ? 'text-emerald-600' : 'text-red-500'}`}>
                      {data.passed ? 'PASSED' : 'FAILED'}
                    </span>
                  </div>
                </div>

                <h1 className="text-2xl font-extrabold text-gray-900 mb-1.5">Quiz Complete!</h1>
                <p className="text-gray-400 text-sm font-medium">
                  Score: <span className="font-bold text-indigo-600">{data.score}</span>
                  <span className="text-gray-300 mx-1">/</span>
                  <span className="text-gray-600">{data.maxScore} pts</span>
                </p>
              </div>

              {/* Stats */}
              <div className="fu grid grid-cols-4 gap-2.5 mb-5" style={{ animationDelay: '0.2s' }}>
                {[
                  { label: "Correct",  value: data.correct,  textColor: "text-emerald-700", bg: "bg-emerald-50",  border: "border-emerald-100" },
                  { label: "Wrong",    value: data.wrong,    textColor: "text-red-600",     bg: "bg-red-50",      border: "border-red-100"     },
                  { label: "Skipped",  value: data.skipped,  textColor: "text-amber-600",   bg: "bg-amber-50",    border: "border-amber-100"   },
                  { label: "Total",    value: data.total,    textColor: "text-indigo-700",  bg: "bg-indigo-50",   border: "border-indigo-100"  },
                ].map((s, i) => (
                  <div key={i} className={`${s.bg} border ${s.border} rounded-2xl p-3 text-center`}>
                    <div className={`text-2xl font-extrabold ${s.textColor}`}>{s.value}</div>
                    <div className="text-xs font-semibold text-gray-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Meta info */}
              {meta.length > 0 && (
                <div className="fu bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 mb-5 space-y-3"
                  style={{ animationDelay: '0.3s' }}>
                  {meta.map((m, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{m.label}</span>
                      <span className="text-sm font-bold text-gray-700 capitalize">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="fu space-y-2.5" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => navigate(`/review/${attemptId}`)}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold rounded-2xl transition-all hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 text-sm"
                >
                  📋 Review Answers
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => navigate(-2)}
                    className="py-3 bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-700 font-bold rounded-2xl transition-all text-sm hover:-translate-y-0.5"
                  >
                    🔄 Try Again
                  </button>
                  <Link
                    to="/dashboard"
                    className="py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl transition-all text-sm text-center hover:-translate-y-0.5 block"
                  >
                    🏠 Dashboard
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <p className="text-center text-xs text-gray-300 mt-4 font-medium">Attempt #{attemptId}</p>
        </div>
      </div>
    </>
  );
}