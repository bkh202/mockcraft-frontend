import Layout from "../../components/Layout";
import TokyoNeonBackground from "./sections/TokyoNeonBackground";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";
import CertificationsSection from "./sections/CertificationsSection";

function TemplateTokyoNeon({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Zen+Dots&family=Noto+Sans+JP:wght@300;400;700&family=M+PLUS+Code+Latin:wght@400;700&display=swap');

        .tn-body { font-family: 'Noto Sans JP', sans-serif; }
        .tn-display { font-family: 'Zen Dots', cursive; }
        .tn-code { font-family: 'M PLUS Code Latin', monospace; }

        @keyframes signFlicker {
          0%,18%,20%,50%,52%,64%,66%,100% { opacity:1; }
          19% { opacity:0.7; }
          21%,49% { opacity:1; }
          51% { opacity:0.5; }
          53%,63% { opacity:1; }
          65% { opacity:0.3; }
        }
        @keyframes neonPulseRed {
          0%,100% { text-shadow: 0 0 5px #ff003c, 0 0 15px #ff003c, 0 0 30px #ff003c; }
          50% { text-shadow: 0 0 10px #ff003c, 0 0 30px #ff003c, 0 0 60px #ff003c, 0 0 100px #ff003c; }
        }
        @keyframes neonPulseCyan {
          0%,100% { text-shadow: 0 0 5px #00f5ff, 0 0 15px #00f5ff, 0 0 30px #00f5ff; }
          50% { text-shadow: 0 0 10px #00f5ff, 0 0 30px #00f5ff, 0 0 60px #00f5ff; }
        }
        @keyframes neonPulseYellow {
          0%,100% { text-shadow: 0 0 5px #ffe600, 0 0 15px #ffe600; }
          50% { text-shadow: 0 0 10px #ffe600, 0 0 30px #ffe600, 0 0 50px #ffe600; }
        }
        @keyframes rain {
          0% { transform: translateY(-100%) translateX(0); opacity: 0.5; }
          100% { transform: translateY(100vh) translateX(20px); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(-30px); }
          to { opacity:1; transform:translateX(0); }
        }
        @keyframes marqueeLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }

        .tn-bg {
          background: #08010f;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .tn-rain-drop {
          position: fixed;
          width: 1px;
          background: linear-gradient(transparent, rgba(0,245,255,0.3), transparent);
          pointer-events: none;
          animation: rain linear infinite;
        }

        .tn-grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,0,60,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .tn-card {
          background: rgba(8,1,15,0.9);
          border: 1px solid rgba(255,0,60,0.15);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .tn-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,0,60,0.5), rgba(0,245,255,0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .tn-card:hover::after { opacity: 1; }
        .tn-card:hover {
          border-color: rgba(255,0,60,0.4);
          box-shadow: 0 0 30px rgba(255,0,60,0.08), 0 0 60px rgba(0,245,255,0.05);
          transform: translateY(-3px);
        }

        .tn-red { color: #ff003c; animation: neonPulseRed 3s ease-in-out infinite; }
        .tn-cyan { color: #00f5ff; animation: neonPulseCyan 3s ease-in-out infinite 1s; }
        .tn-yellow { color: #ffe600; animation: neonPulseYellow 4s ease-in-out infinite 2s; }
        .tn-white { color: #f0e8ff; }
        .tn-dim { color: rgba(240,232,255,0.35); }

        .tn-tag {
          background: rgba(255,0,60,0.04);
          border: 1px solid rgba(255,0,60,0.2);
          color: rgba(255,100,130,0.8);
          transition: all 0.2s;
          font-size: 0.7rem;
        }
        .tn-tag:hover {
          background: rgba(255,0,60,0.1);
          border-color: rgba(255,0,60,0.5);
          color: #ff003c;
          box-shadow: 0 0 10px rgba(255,0,60,0.15);
        }

        .tn-btn {
          border: 1px solid rgba(0,245,255,0.4);
          color: #00f5ff;
          background: transparent;
          font-family: 'Zen Dots', cursive;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          transition: all 0.3s;
        }
        .tn-btn:hover {
          background: rgba(0,245,255,0.08);
          border-color: rgba(0,245,255,0.7);
          box-shadow: 0 0 15px rgba(0,245,255,0.15);
        }

        .tn-sign {
          font-family: 'Zen Dots', cursive;
          animation: signFlicker 8s infinite;
        }

        .tn-marquee {
          overflow: hidden;
          border-top: 1px solid rgba(255,0,60,0.15);
          border-bottom: 1px solid rgba(0,245,255,0.15);
          padding: 10px 0;
          background: rgba(0,0,0,0.3);
        }
        .tn-marquee-text {
          white-space: nowrap;
          animation: marqueeLeft 18s linear infinite;
          font-family: 'Zen Dots', cursive;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: rgba(255,0,60,0.25);
        }

        .tn-reveal { animation: fadeIn 0.8s ease both; }
        .tn-slide { animation: slideRight 0.7s ease both; }

        .tn-kanji {
          position: fixed;
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 700;
          color: rgba(255,0,60,0.03);
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
      `}</style>

      <div className="tn-bg tn-body text-gray-200">
        <TokyoNeonBackground />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
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

export default TemplateTokyoNeon;