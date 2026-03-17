import Layout from "../../components/Layout";
import Particles from "./sections/Particles";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import CertificationsSection from "./sections/CertificationsSection";
import LanguagesSection from "./sections/LanguagesSection";

function TemplateLuxury({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500&display=swap');

        .lx-serif { font-family: 'Cormorant Garamond', serif; }
        .lx-display { font-family: 'Cinzel', serif; }
        .lx-sans { font-family: 'Raleway', sans-serif; }

        @keyframes goldShimmer {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes revealMask {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0% 0 0); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes particleFloat {
          0%,100% { transform:translateY(0) rotate(0deg); opacity:0.3; }
          50% { transform:translateY(-20px) rotate(180deg); opacity:0.6; }
        }

        .lx-bg {
          background: #080608;
          min-height: 100vh;
        }

        .lx-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #f7d774 30%, #c9a84c 50%, #e8c96a 70%, #a07830 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: goldShimmer 4s ease-in-out infinite;
        }

        .lx-gold-border {
          border-color: rgba(201,168,76,0.3);
        }
        .lx-gold-border:hover {
          border-color: rgba(201,168,76,0.7);
        }

        .lx-card {
          background: rgba(12, 10, 8, 0.95);
          border: 1px solid rgba(201,168,76,0.15);
          transition: all 0.5s ease;
          position: relative;
        }
        .lx-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.03) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .lx-card:hover::before { opacity: 1; }
        .lx-card:hover {
          border-color: rgba(201,168,76,0.35);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(201,168,76,0.05);
          transform: translateY(-4px);
        }

        .lx-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent);
          animation: lineExpand 1.5s ease forwards;
          transform-origin: center;
        }

        .lx-ornament {
          width: 6px; height: 6px;
          background: #c9a84c;
          transform: rotate(45deg);
          display: inline-block;
        }

        .lx-particle {
          position: fixed;
          width: 2px; height: 2px;
          background: #c9a84c;
          border-radius: 50%;
          pointer-events: none;
          animation: particleFloat linear infinite;
        }

        .lx-num {
          font-family: 'Cinzel', serif;
          font-size: 6rem;
          color: rgba(201,168,76,0.06);
          position: absolute;
          top: -1rem;
          right: 1rem;
          line-height: 1;
          user-select: none;
        }

        .lx-tag {
          background: transparent;
          border: 1px solid rgba(201,168,76,0.2);
          color: rgba(201,168,76,0.7);
          transition: all 0.3s;
          font-family: 'Raleway', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .lx-tag:hover {
          background: rgba(201,168,76,0.05);
          border-color: rgba(201,168,76,0.5);
          color: #c9a84c;
        }

        .lx-btn {
          background: transparent;
          border: 1px solid rgba(201,168,76,0.4);
          color: #c9a84c;
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
        }
        .lx-btn::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0;
          background: rgba(201,168,76,0.08);
          transition: height 0.4s;
        }
        .lx-btn:hover::before { height: 100%; }
        .lx-btn:hover {
          border-color: rgba(201,168,76,0.7);
          box-shadow: 0 0 20px rgba(201,168,76,0.1);
        }

        .lx-reveal { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      <div className="lx-bg lx-sans text-stone-300 overflow-x-hidden">
        <Particles />

        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <HeroSection data={data} />
          <SkillsSection data={data} />
          {data.experience?.length > 0 && <ExperienceSection data={data} />}
          {data.projects?.length > 0 && <ProjectsSection data={data} />}
          {data.education?.length > 0 && <EducationSection data={data} />}
          <LanguagesSection languages={data.languages} />
          <CertificationsSection certificates={data.certificates} />
          <ContactSection data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default TemplateLuxury;