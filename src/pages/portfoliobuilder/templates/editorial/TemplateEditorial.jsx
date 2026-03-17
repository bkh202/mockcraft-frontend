import Layout from "../../components/Layout";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";


function TemplateEditorial({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .ed-serif  { font-family: 'DM Serif Display', Georgia, serif; }
        .ed-sans   { font-family: 'DM Sans', system-ui, sans-serif; }
        .ed-mono   { font-family: 'DM Mono', monospace; }

        @keyframes ed-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ed-pulse-dot {
          0%,100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%     { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        @keyframes ed-shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }

        .ed-reveal { animation: ed-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both; }

        .ed-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03);
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .ed-card:hover {
          box-shadow: 0 12px 32px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.12);
          transform: translateY(-3px);
        }

        .ed-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 11px;
          border-radius: 999px;
          font-size: 12.5px;
          font-weight: 500;
          background: #f4f4f2;
          color: #444;
          border: 1px solid rgba(0,0,0,0.07);
          transition: background 0.15s, border-color 0.15s;
          white-space: nowrap;
        }
        .ed-tag:hover { background: #ebebeb; border-color: rgba(0,0,0,0.13); }

        .ed-section-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 6px;
        }

        .ed-divider {
          border: none;
          border-top: 1px solid rgba(0,0,0,0.07);
          margin: 3rem 0;
        }

        .ed-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          background: #f7f7f5;
          color: #333;
          border: 1px solid rgba(0,0,0,0.08);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .ed-link-btn:hover {
          background: #efefed;
          border-color: rgba(0,0,0,0.15);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }

        .ed-callout {
          background: linear-gradient(135deg, #fafaf8 0%, #f5f5f2 100%);
          border: 1px solid rgba(0,0,0,0.07);
          border-left: 3px solid #1a1a1a;
          border-radius: 0 12px 12px 0;
          padding: 20px 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }

        .ed-timeline-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #d1d5db;
          border: 2px solid #fff;
          box-shadow: 0 0 0 2px #d1d5db;
          transition: background 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .ed-timeline-item:hover .ed-timeline-dot {
          background: #1a1a1a;
          box-shadow: 0 0 0 2px #1a1a1a;
        }

        .ed-cover-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
        }
      `}</style>

      <div className="min-h-screen bg-[#fafaf8] ed-sans text-[#1a1a1a] antialiased pb-32 selection:bg-amber-100">

        {/* Cover */}
        <div className="h-52 md:h-64 w-full relative overflow-hidden bg-gradient-to-br from-stone-100 via-zinc-50 to-stone-100">
          <div className="ed-cover-grain" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(0,0,0,0.025) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8] via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-5 md:px-8 -mt-20 md:-mt-24 relative">
          <AboutSection data={data} />
          <hr className="ed-divider" />
          {data.experience?.length > 0 && <>
            <ExperienceSection data={data} />
            <hr className="ed-divider" />
          </>}
          <ProjectsSection data={data} />
          <hr className="ed-divider" />
          <SkillsSection data={data} />
          <hr className="ed-divider" />
          <EducationSection data={data} />
          <hr className="ed-divider" />
          <LanguagesSection languages={data.languages} />
          <hr className="ed-divider" />
          <ContactSection data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default TemplateEditorial;