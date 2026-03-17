import Layout from "../../components/Layout";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import CertificatesSection from "./sections/CertificatesSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";


function TemplateVibrant({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&family=Satoshi:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .vb-body  { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes vb-float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes vb-blob {
          0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50%      { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes vb-up {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes vb-glow {
          0%,100% { box-shadow: 0 0 20px 2px rgba(236,72,153,0.25); }
          50%      { box-shadow: 0 0 40px 8px rgba(139,92,246,0.3); }
        }
        @keyframes vb-shine {
          from { background-position: -200% center; }
          to   { background-position:  200% center; }
        }

        .vb-float  { animation: vb-float 7s ease-in-out infinite; }
        .vb-reveal { animation: vb-up 0.7s cubic-bezier(0.16,1,0.3,1) both; }

        /* Card */
        .vb-card {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.8) inset,
            0 24px 48px -16px rgba(139,92,246,0.12),
            0 4px 16px -4px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .vb-card:hover {
          transform: translateY(-5px) scale(1.005);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.8) inset,
            0 32px 60px -16px rgba(236,72,153,0.2),
            0 8px 24px -4px rgba(0,0,0,0.08);
          border-color: rgba(236,72,153,0.25);
        }

        /* Gradient text */
        .vb-grad {
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 60%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Chip */
        .vb-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 13px;
          border-radius: 999px;
          font-size: 12.5px;
          font-weight: 600;
          background: linear-gradient(145deg, #fdf2f8, #f5f3ff);
          color: #7c3aed;
          border: 1px solid rgba(139,92,246,0.15);
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: all 0.2s ease;
          cursor: default;
        }
        .vb-chip:hover {
          background: linear-gradient(145deg, #fce7f3, #ede9fe);
          border-color: rgba(236,72,153,0.3);
          box-shadow: 0 6px 16px rgba(236,72,153,0.15);
          transform: translateY(-2px);
          color: #be185d;
        }

        /* Social pill */
        .vb-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          color: white;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(236,72,153,0.3);
          transition: all 0.25s ease;
        }
        .vb-pill:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 8px 24px rgba(236,72,153,0.4);
          filter: brightness(1.05);
        }

        /* Section label */
        .vb-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Timeline dot */
        .vb-dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          box-shadow: 0 0 0 3px rgba(236,72,153,0.15);
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .vb-timeline-item:hover .vb-dot {
          box-shadow: 0 0 0 5px rgba(236,72,153,0.2), 0 0 14px rgba(236,72,153,0.3);
          transform: scale(1.2);
        }

        /* Bg */
        .vb-bg {
          background:
            radial-gradient(ellipse at 15% 25%, rgba(236,72,153,0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 70%, rgba(139,92,246,0.09) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 70%),
            #faf5ff;
        }
      `}</style>

      <div className="vb-bg vb-body min-h-screen text-gray-800 antialiased pb-24">
        {/* Fixed bg blobs */}
        <div className="fixed top-[-10%] left-[-5%] w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)', filter: 'blur(60px)', animation: 'vb-blob 12s ease-in-out infinite' }} />
        <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)', animation: 'vb-blob 15s ease-in-out infinite reverse' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16 relative z-10">
          <AboutSection data={data} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            <div className="lg:col-span-1 space-y-7">
              <SkillsSection data={data} />
              <CertificatesSection data={data} />
            </div>
            <div className="lg:col-span-2 space-y-7">
              <ExperienceSection data={data} />
              <ProjectsSection data={data} />
              <EducationSection data={data} />
            </div>
          </div>
          <div>
          <LanguagesSection languages={data.languages} />
          <CertificatesSection certificates={data.certificates} />
          </div>

          <ContactSection data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default TemplateVibrant;