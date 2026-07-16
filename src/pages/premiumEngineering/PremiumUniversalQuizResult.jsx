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
  if (pct >= 90) return { label: "Outstanding", color: "text-black", light: "bg-gray-100", border: "border-gray-300", emoji: "fa-trophy" };
  if (pct >= 75) return { label: "Excellent",   color: "text-black", light: "bg-gray-100", border: "border-gray-300", emoji: "fa-star" };
  if (pct >= 60) return { label: "Good",        color: "text-gray-700", light: "bg-gray-100", border: "border-gray-300", emoji: "fa-thumbs-up" };
  if (pct >= 40) return { label: "Pass",        color: "text-gray-600", light: "bg-gray-100", border: "border-gray-300", emoji: "fa-check" };
  return               { label: "Needs Work",  color: "text-gray-500", light: "bg-gray-100", border: "border-gray-300", emoji: "fa-book" };
}

export default function UniversalQuizResult() {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
      <p className="text-gray-500 font-medium text-base">Calculating your results...</p>
    </div>
  );

  if (error || !data) return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
      <i className="fa fa-exclamation-circle text-3xl text-gray-400"></i>
      <p className="text-gray-600 font-semibold">{error || "Something went wrong."}</p>
      <button onClick={() => navigate(-1)}
        className="px-5 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors border border-gray-300">
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

      <div className="rq-wrap min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">

        {/* Removed colored blobs */}

        <div className="w-full max-w-md relative z-10">

          {/* Main card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

            {/* Top accent bar – black */}
            <div className="h-1.5 bg-black" />

            <div className="p-7">

              {/* Grade badge */}
              <div className="fu flex justify-center mb-6" style={{ animationDelay: '0.05s' }}>
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold border ${grade.border} ${grade.light} ${grade.color}`}>
                  <i className={`fa ${grade.emoji}`}></i> {grade.label}
                </span>
              </div>

              {/* Circle + Title */}
              <div className="si flex flex-col items-center mb-8" style={{ animationDelay: '0.1s' }}>
                <div className="relative w-36 h-36 mb-5">
                  <div className="absolute inset-2.5 rounded-full bg-white border border-gray-100" />
                  <svg className="absolute inset-0" width="144" height="144" viewBox="0 0 144 144">
                    <circle cx="72" cy="72" r="52" fill="none" stroke="#e5e7eb" strokeWidth="11" />
                    <circle
                      cx="72" cy="72" r="52"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="11"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDash}
                      transform="rotate(-90 72 72)"
                      style={{
                        transition: 'stroke-dashoffset 0.03s linear',
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-black">
                      {animPct}%
                    </span>
                    <span className={`text-xs font-bold tracking-widest mt-0.5 ${data.passed ? 'text-green-700' : 'text-gray-500'}`}>
                      {data.passed ? 'PASSED' : 'FAILED'}
                    </span>
                  </div>
                </div>

                <h1 className="text-2xl font-extrabold text-black mb-1.5">Quiz Complete!</h1>
                <p className="text-gray-500 text-sm font-medium">
                  Score: <span className="font-bold text-black">{data.score}</span>
                  <span className="text-gray-300 mx-1">/</span>
                  <span className="text-gray-600">{data.maxScore} pts</span>
                </p>
              </div>

              {/* Stats */}
              <div className="fu grid grid-cols-4 gap-2.5 mb-5" style={{ animationDelay: '0.2s' }}>
                {[
                  { label: "Correct",  value: data.correct,  textColor: "text-black", bg: "bg-gray-100",  border: "border-gray-200" },
                  { label: "Wrong",    value: data.wrong,    textColor: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200" },
                  { label: "Skipped",  value: data.skipped,  textColor: "text-gray-500", bg: "bg-gray-50", border: "border-gray-200" },
                  { label: "Total",    value: data.total,    textColor: "text-black",  bg: "bg-gray-100", border: "border-gray-200" },
                ].map((s, i) => (
                  <div key={i} className={`${s.bg} border ${s.border} rounded-2xl p-3 text-center`}>
                    <div className={`text-2xl font-extrabold ${s.textColor}`}>{s.value}</div>
                    <div className="text-xs font-semibold text-gray-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Meta info */}
              {meta.length > 0 && (
                <div className="fu bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 mb-5 space-y-3"
                  style={{ animationDelay: '0.3s' }}>
                  {meta.map((m, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{m.label}</span>
                      <span className="text-sm font-bold text-black capitalize">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="fu space-y-2.5" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => navigate(`/review/${attemptId}`)}
                  className="w-full py-3.5 bg-black hover:bg-gray-800 active:scale-95 text-white font-bold rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5 text-sm border border-gray-300"
                >
                  <i className="fa fa-list-ul mr-2"></i> Review Answers
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => navigate(-2)}
                    className="py-3 bg-white hover:bg-gray-100 active:scale-95 text-gray-700 font-bold rounded-2xl transition-all text-sm hover:-translate-y-0.5 border border-gray-300"
                  >
                    <i className="fa fa-redo mr-2"></i> Try Again
                  </button>
                  <Link
                    to="/dashboard"
                    className="py-3 bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-2xl transition-all text-sm text-center hover:-translate-y-0.5 block border border-gray-300"
                  >
                    <i className="fa fa-home mr-2"></i> Dashboard
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4 font-medium">Attempt #{attemptId}</p>
        </div>
      </div>
    </>
  );
}