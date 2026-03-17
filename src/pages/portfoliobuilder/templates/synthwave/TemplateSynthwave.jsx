import Layout from "../../components/Layout";
import SynthwaveBackground from "./sections/SynthwaveBackground";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";
import CertificationsSection from "./sections/CertificationsSection";


function TemplateSynthwave({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=VT323&display=swap');

        .sw-body { font-family: 'Rajdhani', sans-serif; }
        .sw-pixel { font-family: 'VT323', monospace; }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 80px; }
        }
        @keyframes sunPulse {
          0%,100% { box-shadow: 0 0 40px 10px rgba(255,60,120,0.3), 0 0 80px 20px rgba(255,100,60,0.15); }
          50% { box-shadow: 0 0 60px 20px rgba(255,60,120,0.5), 0 0 120px 40px rgba(255,100,60,0.25); }
        }
        @keyframes neonFlicker {
          0%,19%,21%,23%,25%,54%,56%,100% { opacity:1; text-shadow: 0 0 7px #ff3c78, 0 0 21px #ff3c78, 0 0 42px #ff3c78; }
          20%,24%,55% { opacity: 0.4; text-shadow: none; }
        }
        @keyframes scanlines {
          0% { background-position: 0 0; }
          100% { background-position: 0 4px; }
        }
        @keyframes revealUp {
          from { opacity:0; transform: translateY(30px); }
          to { opacity:1; transform: translateY(0); }
        }
        @keyframes horizonGlow {
          0%,100% { opacity:0.6; } 50% { opacity:1; }
        }
        @keyframes chromaShift {
          0% { text-shadow: -2px 0 #ff3c78, 2px 0 #00eaff; }
          33% { text-shadow: 2px 0 #ff3c78, -2px 0 #00eaff; }
          66% { text-shadow: 0 2px #ff3c78, 0 -2px #00eaff; }
          100% { text-shadow: -2px 0 #ff3c78, 2px 0 #00eaff; }
        }

        .sw-bg {
          background: #0a0010;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .sw-grid {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          height: 55vh;
          background-image:
            linear-gradient(rgba(255,60,120,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,60,120,0.3) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: gridMove 2s linear infinite;
          transform: perspective(600px) rotateX(65deg);
          transform-origin: bottom center;
          pointer-events: none;
          z-index: 1;
          mask-image: linear-gradient(to bottom, transparent 0%, black 50%);
        }

        .sw-sun {
          position: fixed;
          bottom: 45vh;
          left: 50%;
          transform: translateX(-50%);
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: linear-gradient(180deg, #ffb347 0%, #ff6b35 30%, #ff3c78 60%, #9b30ff 100%);
          animation: sunPulse 3s ease-in-out infinite;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .sw-sun::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 100%;
          background: repeating-linear-gradient(
            transparent 0px,
            transparent 12px,
            #0a0010 12px,
            #0a0010 16px
          );
        }

        .sw-horizon {
          position: fixed;
          bottom: 45vh;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff3c78, #ffb347, #ff3c78, transparent);
          animation: horizonGlow 2s ease-in-out infinite;
          pointer-events: none;
          z-index: 2;
        }

        .sw-scanlines {
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.03) 0px,
            rgba(0,0,0,0.03) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          z-index: 999;
          animation: scanlines 0.1s linear infinite;
        }

        .sw-card {
          background: rgba(20, 0, 30, 0.85);
          border: 1px solid rgba(255,60,120,0.3);
          backdrop-filter: blur(12px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .sw-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,60,120,0.05), transparent);
          transition: left 0.5s;
        }
        .sw-card:hover::before { left: 100%; }
        .sw-card:hover {
          border-color: rgba(255,60,120,0.7);
          box-shadow: 0 0 20px rgba(255,60,120,0.15), inset 0 0 20px rgba(255,60,120,0.03);
          transform: translateY(-3px);
        }

        .sw-neon {
          color: #ff3c78;
          animation: neonFlicker 8s infinite;
        }
        .sw-chroma {
          animation: chromaShift 4s ease-in-out infinite;
        }
        .sw-reveal { animation: revealUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }

        .sw-tag {
          background: rgba(255,60,120,0.08);
          border: 1px solid rgba(255,60,120,0.25);
          color: #ff90b3;
          transition: all 0.3s;
        }
        .sw-tag:hover {
          background: rgba(255,60,120,0.15);
          border-color: rgba(255,60,120,0.6);
          transform: translateY(-2px);
          box-shadow: 0 0 10px rgba(255,60,120,0.2);
        }

        .sw-btn {
          background: transparent;
          border: 2px solid #ff3c78;
          color: #ff3c78;
          font-family: 'VT323', monospace;
          font-size: 1.2rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .sw-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: #ff3c78;
          transition: left 0.3s;
          z-index: -1;
        }
        .sw-btn:hover { color: #0a0010; }
        .sw-btn:hover::before { left: 0; }

        .sw-section-title {
          font-family: 'VT323', monospace;
          font-size: 3rem;
          color: #00eaff;
          text-shadow: 0 0 10px rgba(0,234,255,0.5);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .sw-timeline::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent, #ff3c78, #9b30ff, transparent);
        }
      `}</style>

      <div className="sw-bg sw-body text-gray-200">
        <SynthwaveBackground />

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

export default TemplateSynthwave;