import Layout from "../../components/Layout";
import HeroSection from "./sections/HeroSection";
import Marquee from "./sections/Marquee";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";
import CertificationsSection from "./sections/CertificationsSection";

function TemplateBrutal({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');

        .bt-body { font-family: 'Space Grotesk', sans-serif; }
        .bt-display { font-family: 'Bebas Neue', cursive; letter-spacing: 0.05em; }
        .bt-mono { font-family: 'DM Mono', monospace; }

        @keyframes slideIn {
          from { opacity:0; transform:translateX(-40px); }
          to { opacity:1; transform:translateX(0); }
        }
        @keyframes stripesMove {
          from { background-position: 0 0; }
          to { background-position: 40px 0; }
        }
        @keyframes borderPulse {
          0%,100% { border-color: #ff3f00; }
          50% { border-color: #ffb800; }
        }
        @keyframes tagBounce {
          0%,100% { transform:translateY(0); }
          50% { transform:translateY(-3px); }
        }
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        @keyframes fillBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .bt-bg { background: #0f0f0f; min-height: 100vh; }

        .bt-accent { color: #ff3f00; }
        .bt-yellow { color: #ffb800; }
        .bt-white { color: #f0f0f0; }
        .bt-dim { color: #555; }

        .bt-card {
          border: 2px solid #1e1e1e;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .bt-card:hover {
          border-color: #ff3f00;
          transform: translate(-3px, -3px);
          box-shadow: 5px 5px 0 #ff3f00;
        }

        .bt-tag {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          color: #888;
          transition: all 0.2s;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .bt-tag:hover {
          background: #ff3f00;
          border-color: #ff3f00;
          color: #fff;
          transform: translateY(-2px);
          animation: tagBounce 0.4s ease;
        }

        .bt-btn {
          background: #ff3f00;
          color: #fff;
          font-family: 'Bebas Neue', cursive;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          border: 2px solid #ff3f00;
          transition: all 0.2s;
        }
        .bt-btn:hover {
          background: transparent;
          color: #ff3f00;
        }
        .bt-btn-outline {
          background: transparent;
          color: #f0f0f0;
          font-family: 'Bebas Neue', cursive;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          border: 2px solid #2a2a2a;
          transition: all 0.2s;
        }
        .bt-btn-outline:hover {
          border-color: #ff3f00;
          color: #ff3f00;
          transform: translate(-2px,-2px);
          box-shadow: 3px 3px 0 #ff3f00;
        }

        .bt-section-num {
          font-family: 'Bebas Neue', cursive;
          font-size: 8rem;
          color: rgba(255,63,0,0.06);
          position: absolute;
          top: -1rem; right: 1rem;
          line-height: 1;
          user-select: none;
        }

        .bt-marquee {
          overflow: hidden;
          border-top: 1px solid #1e1e1e;
          border-bottom: 1px solid #1e1e1e;
          padding: 12px 0;
          background: #0a0a0a;
        }
        .bt-marquee-inner {
          white-space: nowrap;
          animation: marquee 20s linear infinite;
          font-family: 'Bebas Neue', cursive;
          letter-spacing: 0.2em;
          font-size: 0.9rem;
          color: #2a2a2a;
        }

        .bt-reveal { animation: slideIn 0.7s cubic-bezier(0.16,1,0.3,1) both; }

        .bt-noise {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 99;
          opacity: 0.4;
        }

        .bt-stripe {
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(255,63,0,0.04) 8px,
            rgba(255,63,0,0.04) 10px
          );
        }

        .bt-line-h {
          height: 1px;
          background: #1e1e1e;
        }
        .bt-line-accent {
          height: 3px;
          background: #ff3f00;
          transform-origin: left;
          animation: fillBar 1.2s cubic-bezier(0.16,1,0.3,1) both;
        }
      `}</style>

      <div className="bt-bg bt-body text-gray-200">
        <div className="bt-noise" />

        <HeroSection data={data} />

        <Marquee text="◆ SKILLS ◆ PROJECTS ◆ EXPERIENCE ◆ EDUCATION ◆ " reverse />

        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <SkillsSection data={data} />
          {data.experience?.length > 0 && <ExperienceSection data={data} />}
          <ProjectsSection data={data} />
          <EducationSection data={data} />
          <LanguagesSection languages={data.languages} />
          <CertificationsSection certificates={data.certificates} />
          <ContactSection data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default TemplateBrutal;