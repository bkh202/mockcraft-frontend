import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axiosInstance from "../../api/axiosInstance";

// Animated counter hook
function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (target === 0) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

function formatTime(seconds) {
  if (!seconds) return "N/A";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
}

function getGrade(percentage) {
  if (percentage >= 90) return { label: "Outstanding", color: "#10b981", bg: "rgba(16,185,129,0.1)", emoji: "🏆" };
  if (percentage >= 75) return { label: "Excellent",    color: "#3b82f6", bg: "rgba(59,130,246,0.1)", emoji: "🌟" };
  if (percentage >= 60) return { label: "Good",         color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", emoji: "👍" };
  if (percentage >= 40) return { label: "Pass",         color: "#f59e0b", bg: "rgba(245,158,11,0.1)", emoji: "✅" };
  return                       { label: "Needs Work",   color: "#ef4444", bg: "rgba(239,68,68,0.1)",  emoji: "📚" };
}

export default function PremiumUniversalQuizResult() {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const circleRef = useRef(null);

  useEffect(() => {
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
        const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

        setResultData({
          totalQuestions: total,
          correctAnswers: correct,
          wrongAnswers:   wrong,
          skippedAnswers: skipped,
          score,
          maxScore,
          percentage,
          passed:    percentage >= 40,
          timeTaken: d.timeTaken  || null,
          category:  d.category   || null,
          branch:    d.branch     || null,
          subject:   d.subject    || null,
          company:   d.company    || null,
        });
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load results.");
        setLoading(false);
      });
  }, [attemptId]);

  // Animated percentage for circle
  const animatedPct = useCounter(resultData?.percentage ?? 0, 1800);

  if (loading) {
    return (
      <div style={styles.loadingWrap}>
        <div style={styles.spinner} />
        <p style={styles.loadingText}>Calculating your results...</p>
      </div>
    );
  }

  if (error || !resultData) {
    return (
      <div style={styles.loadingWrap}>
        <p style={{ color: '#ef4444', fontWeight: 600 }}>{error || "Something went wrong."}</p>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>Go Back</button>
      </div>
    );
  }

  const grade = getGrade(resultData.percentage);
  const circumference = 2 * Math.PI * 54;
  const strokeDash = circumference - (animatedPct / 100) * circumference;

  const stats = [
    { label: "Correct",  value: resultData.correctAnswers,  color: "#10b981", bg: "rgba(16,185,129,0.08)",  icon: "✓" },
    { label: "Wrong",    value: resultData.wrongAnswers,    color: "#ef4444", bg: "rgba(239,68,68,0.08)",   icon: "✗" },
    { label: "Skipped",  value: resultData.skippedAnswers,  color: "#f59e0b", bg: "rgba(245,158,11,0.08)",  icon: "→" },
    { label: "Total",    value: resultData.totalQuestions,  color: "#6b7280", bg: "rgba(107,114,128,0.08)", icon: "#" },
  ];

  const meta = [
    resultData.category && { label: "Category", value: resultData.category },
    resultData.branch   && { label: "Branch",   value: resultData.branch   },
    resultData.subject  && { label: "Subject",  value: resultData.subject  },
    resultData.company  && { label: "Company",  value: resultData.company  },
    resultData.timeTaken && { label: "Time Taken", value: formatTime(resultData.timeTaken) },
  ].filter(Boolean);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.85); } to { opacity:1; transform:scale(1); } }
        @keyframes gradientShift { 0%,100% { background-position:0% 50%; } 50% { background-position:100% 50%; } }
        @keyframes spin { to { transform:rotate(360deg); } }
        .rq-fadeup { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .rq-scalein { animation: scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .rq-stat:hover { transform: translateY(-3px) scale(1.02); }
        .rq-btn-primary:hover { opacity:0.88; transform:translateY(-1px); }
        .rq-btn-secondary:hover { background:rgba(255,255,255,0.08); transform:translateY(-1px); }
      `}</style>

      <div style={styles.page}>
        {/* Background */}
        <div style={styles.bgGlow1} />
        <div style={styles.bgGlow2} />

        <div style={styles.container}>

          {/* Header Badge */}
          <div className="rq-fadeup" style={{ textAlign:'center', marginBottom:'2rem', animationDelay:'0.05s' }}>
            <span style={{ ...styles.badge, background: grade.bg, color: grade.color, border: `1px solid ${grade.color}40` }}>
              {grade.emoji} {grade.label}
            </span>
          </div>

          {/* Score Circle + Title */}
          <div className="rq-scalein" style={{ textAlign:'center', marginBottom:'2.5rem', animationDelay:'0.1s' }}>
            <div style={styles.circleWrap}>
              <svg width="128" height="128" viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
                <circle
                  cx="64" cy="64" r="54"
                  fill="none"
                  stroke={grade.color}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDash}
                  transform="rotate(-90 64 64)"
                  style={{ transition:'stroke-dashoffset 0.05s linear', filter:`drop-shadow(0 0 8px ${grade.color}88)` }}
                />
              </svg>
              <div style={styles.circleInner}>
                <span style={{ ...styles.circlePct, color: grade.color }}>{animatedPct}%</span>
                <span style={styles.circleLabel}>{resultData.passed ? "PASS" : "FAIL"}</span>
              </div>
            </div>

            <h1 style={styles.title}>Quiz Complete</h1>
            <p style={styles.subtitle}>
              Score: <strong style={{ color:'#f0f0f0' }}>{resultData.score}</strong> / {resultData.maxScore} points
            </p>
          </div>

          {/* Stats Grid */}
          <div className="rq-fadeup" style={{ ...styles.statsGrid, animationDelay:'0.2s' }}>
            {stats.map((s, i) => (
              <div
                key={i}
                className="rq-stat"
                style={{ ...styles.statCard, background: s.bg, border: `1px solid ${s.color}25`, transition:'all 0.25s ease' }}
              >
                <span style={{ ...styles.statIcon, color: s.color }}>{s.icon}</span>
                <span style={{ ...styles.statValue, color: s.color }}>{s.value}</span>
                <span style={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Meta info — category, branch, time etc */}
          {meta.length > 0 && (
            <div className="rq-fadeup" style={{ ...styles.metaBox, animationDelay:'0.3s' }}>
              {meta.map((m, i) => (
                <div key={i} style={styles.metaRow}>
                  <span style={styles.metaLabel}>{m.label}</span>
                  <span style={styles.metaValue}>{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="rq-fadeup" style={{ ...styles.btnGroup, animationDelay:'0.4s' }}>
            <button
              className="rq-btn-primary"
              onClick={() => navigate(`/review/${attemptId}`)}
              style={styles.btnPrimary}
            >
              📋 Review Answers
            </button>
            <Link
              to="/dashboard"
              className="rq-btn-secondary"
              style={styles.btnSecondary}
            >
              🏠 Dashboard
            </Link>
            <button
              className="rq-btn-secondary"
              onClick={() => navigate(-2)}
              style={styles.btnSecondary}
            >
              🔄 Try Again
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#08090f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    fontFamily: "'DM Sans', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },
  bgGlow1: {
    position: 'fixed', top: '-20%', left: '-10%',
    width: '500px', height: '500px',
    background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
    pointerEvents: 'none', borderRadius: '50%',
  },
  bgGlow2: {
    position: 'fixed', bottom: '-20%', right: '-10%',
    width: '600px', height: '600px',
    background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
    pointerEvents: 'none', borderRadius: '50%',
  },
  container: {
    width: '100%',
    maxWidth: '480px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '24px',
    padding: '2.5rem 2rem',
    backdropFilter: 'blur(20px)',
    position: 'relative',
    zIndex: 1,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 16px',
    borderRadius: '999px',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    fontFamily: "'Syne', sans-serif",
  },
  circleWrap: {
    position: 'relative',
    width: '128px',
    height: '128px',
    margin: '0 auto 1.5rem',
  },
  circleInner: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circlePct: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '1.6rem',
    fontWeight: 800,
    lineHeight: 1,
  },
  circleLabel: {
    fontSize: '0.6rem',
    fontWeight: 700,
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '0.15em',
    marginTop: '2px',
  },
  title: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '1.75rem',
    fontWeight: 800,
    color: '#f0f0f0',
    margin: '0 0 0.5rem',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.45)',
    margin: 0,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    marginBottom: '1.25rem',
  },
  statCard: {
    borderRadius: '14px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    cursor: 'default',
  },
  statIcon: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 1,
  },
  statValue: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '1.8rem',
    fontWeight: 800,
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.72rem',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  metaBox: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '14px',
    padding: '1rem 1.25rem',
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaLabel: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.35)',
    fontWeight: 500,
  },
  metaValue: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.75)',
    fontWeight: 600,
    fontFamily: "'Syne', sans-serif",
    textTransform: 'capitalize',
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  btnPrimary: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    color: '#fff',
    fontFamily: "'Syne', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 20px rgba(99,102,241,0.25)',
  },
  btnSecondary: {
    width: '100%',
    padding: '13px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.05)',
    color: 'rgba(255,255,255,0.65)',
    fontFamily: "'Syne', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 600,
    border: '1px solid rgba(255,255,255,0.08)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  loadingWrap: {
    minHeight: '100vh',
    background: '#08090f',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    fontFamily: "'DM Sans', sans-serif",
  },
  spinner: {
    width: '40px', height: '40px',
    border: '3px solid rgba(99,102,241,0.2)',
    borderTop: '3px solid #6366f1',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  loadingText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '0.9rem',
  },
  backBtn: {
    padding: '10px 24px',
    background: '#6366f1',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
  },
};