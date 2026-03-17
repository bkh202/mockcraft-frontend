import Layout from "../../components/Layout";
import ArtDecoBackground from "./sections/ArtDecoBackground";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";
import CertificationsSection from "./sections/CertificationsSection";

function TemplateArtDeco({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poiret+One&family=Josefin+Sans:wght@300;400;600&family=IM+Fell+English:ital@0;1&display=swap');

        .ad-display { font-family: 'Poiret One', cursive; }
        .ad-sans { font-family: 'Josefin Sans', sans-serif; }
        .ad-serif { font-family: 'IM Fell English', serif; }

        @keyframes revealUp {
          from { opacity:0; transform:translateY(30px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes goldGlow {
          0%,100% { text-shadow: 0 0 10px rgba(218,165,32,0.3); }
          50% { text-shadow: 0 0 20px rgba(218,165,32,0.6), 0 0 40px rgba(218,165,32,0.2); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes expandLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes diamondPop {
          0% { transform: rotate(45deg) scale(0); opacity:0; }
          60% { transform: rotate(45deg) scale(1.2); }
          100% { transform: rotate(45deg) scale(1); opacity:1; }
        }
        @keyframes fadeIn {
          from { opacity:0; }
          to { opacity:1; }
        }

        .ad-bg {
          background: #0c0a06;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .ad-geo-bg {
          position: fixed;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(218,165,32,0.015) 60px,
              rgba(218,165,32,0.015) 61px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 60px,
              rgba(218,165,32,0.015) 60px,
              rgba(218,165,32,0.015) 61px
            );
          pointer-events: none;
        }

        .ad-card {
          background: rgba(15,12,8,0.95);
          border: 1px solid rgba(218,165,32,0.2);
          position: relative;
          transition: all 0.4s ease;
        }
        .ad-card::before, .ad-card::after {
          content: '';
          position: absolute;
          width: 12px; height: 12px;
          border: 1px solid rgba(218,165,32,0.4);
        }
        .ad-card::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
        .ad-card::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }
        .ad-card:hover {
          border-color: rgba(218,165,32,0.5);
          box-shadow: 0 0 40px rgba(218,165,32,0.06), 0 20px 50px rgba(0,0,0,0.4);
          transform: translateY(-4px);
        }

        .ad-gold { color: #daa520; animation: goldGlow 4s ease-in-out infinite; }
        .ad-cream { color: #f5f0e8; }
        .ad-dim { color: rgba(245,240,232,0.4); }
        .ad-mid { color: rgba(245,240,232,0.65); }

        .ad-tag {
          background: transparent;
          border: 1px solid rgba(218,165,32,0.2);
          color: rgba(218,165,32,0.6);
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: all 0.3s;
        }
        .ad-tag:hover {
          background: rgba(218,165,32,0.06);
          border-color: rgba(218,165,32,0.5);
          color: #daa520;
        }

        .ad-btn {
          background: transparent;
          border: 1px solid #daa520;
          color: #daa520;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .ad-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #daa520;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }
        .ad-btn:hover::before { transform: scaleX(1); }
        .ad-btn:hover { color: #0c0a06; }
        .ad-btn span { position: relative; z-index: 1; }

        .ad-diamond {
          width: 8px; height: 8px;
          background: #daa520;
          transform: rotate(45deg);
          display: inline-block;
          animation: diamondPop 0.5s ease both;
        }

        .ad-ornament {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
        }
        .ad-ornament-line {
          height: 1px;
          width: 80px;
          background: linear-gradient(90deg, transparent, rgba(218,165,32,0.5));
          animation: expandLine 1s ease both;
        }
        .ad-ornament-line.rev {
          background: linear-gradient(270deg, transparent, rgba(218,165,32,0.5));
        }

        .ad-hex {
          position: absolute;
          opacity: 0.03;
          pointer-events: none;
        }

        .ad-reveal { animation: revealUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .ad-fade { animation: fadeIn 1.2s ease both; }

        .ad-section-title {
          font-family: 'Poiret One', cursive;
          color: #f5f0e8;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }

        .ad-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(218,165,32,0.4), rgba(218,165,32,0.4), transparent);
        }

        .ad-num {
          font-family: 'Poiret One', cursive;
          font-size: 6rem;
          color: rgba(218,165,32,0.04);
          position: absolute;
          top: 0; right: 0;
          user-select: none;
          letter-spacing: 0.2em;
        }

        .ad-spin {
          animation: spinSlow 30s linear infinite;
        }
      `}</style>

      <div className="ad-bg ad-sans text-gray-300">
        <ArtDecoBackground />

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

export default TemplateArtDeco;