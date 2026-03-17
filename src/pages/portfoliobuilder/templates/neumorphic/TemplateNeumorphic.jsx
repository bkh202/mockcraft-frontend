import Layout from "../../components/Layout";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";


function TemplateNeumorphic({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .nm-body  { font-family: 'Outfit', sans-serif; }
        .nm-mono  { font-family: 'JetBrains Mono', monospace; }

        @keyframes nm-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes nm-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.35); }
          50%     { box-shadow: 0 0 0 8px rgba(99,102,241,0); }
        }
        @keyframes nm-spin-slow {
          to { transform: rotate(360deg); }
        }

        .nm-reveal { animation: nm-up 0.65s cubic-bezier(0.16,1,0.3,1) both; }

        /* Card */
        .nm-card {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.9) inset,
            0 20px 40px -12px rgba(99,102,241,0.08),
            0 4px 16px -4px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .nm-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.9) inset,
            0 28px 50px -12px rgba(99,102,241,0.14),
            0 8px 24px -4px rgba(0,0,0,0.07);
        }

        /* Accent bar */
        .nm-accent-bar {
          width: 3px;
          border-radius: 99px;
          flex-shrink: 0;
        }

        /* Skill tag */
        .nm-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 12.5px;
          font-weight: 600;
          background: linear-gradient(145deg, #ffffff, #f5f7fb);
          border: 1px solid #e8edf5;
          color: #1e293b;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          transition: all 0.2s ease;
          cursor: default;
        }
        .nm-tag:hover {
          background: #fff;
          border-color: #c7d2fe;
          box-shadow: 0 4px 10px rgba(99,102,241,0.1);
          transform: translateY(-1px);
          color: #4338ca;
        }

        /* Social link pill */
        .nm-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          background: rgba(255,255,255,0.8);
          border: 1px solid #e5e7eb;
          color: #374151;
          text-decoration: none;
          transition: all 0.2s ease;
          backdrop-filter: blur(4px);
        }
        .nm-pill:hover {
          background: #fff;
          border-color: #a5b4fc;
          color: #4338ca;
          box-shadow: 0 4px 12px rgba(99,102,241,0.12);
          transform: translateY(-1px);
        }

        /* Section heading */
        .nm-section-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.75rem;
        }

        /* Gradient pill badge */
        .nm-badge {
          display: inline-block;
          padding: 3px 11px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Contact icon circle */
        .nm-icon-circle {
          width: 38px; height: 38px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.12);
          color: #4f46e5;
          transition: all 0.2s;
          text-decoration: none;
        }
        .nm-icon-circle:hover {
          background: #4f46e5;
          border-color: #4f46e5;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(99,102,241,0.3);
        }

        /* Timeline */
        .nm-timeline-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #e0e7ff;
          border: 2px solid #fff;
          box-shadow: 0 0 0 2px #e0e7ff;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .nm-timeline-item:hover .nm-timeline-dot {
          background: #4f46e5;
          box-shadow: 0 0 0 2px #4f46e5;
        }
      `}</style>

      <div className="min-h-screen nm-body text-slate-800 pb-24 antialiased"
        style={{ background: 'linear-gradient(145deg, #f0f2ff 0%, #f5f3ff 40%, #eff6ff 100%)' }}>

        {/* Decorative blobs */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
        <div className="fixed bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20 space-y-8 relative z-10">

          <AboutSection data={data} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <SkillsSection data={data} />
              <EducationSection data={data} />
            </div>
            <div className="lg:col-span-2 space-y-8">
              {data.experience?.length > 0 && <ExperienceSection data={data} />}
              <ProjectsSection data={data} />
            </div>
          </div>
            <div>
              <LanguagesSection languages={data.languages} />
            </div>
          <ContactSection data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default TemplateNeumorphic;