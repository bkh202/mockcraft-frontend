import Layout from "../../components/Layout";
import StarfieldCanvas from "./sections/StarfieldCanvas";
import NebulaBlobs from "./sections/NebulaBlobs";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";
import CertificationsSection from "./sections/CertificationsSection";

function TemplateSpace({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,200;0,300;0,400;0,700;1,300&family=Orbitron:wght@400;600;700&display=swap');

        .sp-body { font-family: 'Exo 2', sans-serif; }
        .sp-display { font-family: 'Orbitron', sans-serif; }

        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes nebulaPulse {
          0%,100% { opacity:0.15; transform:scale(1); }
          50% { opacity:0.25; transform:scale(1.05); }
        }
        @keyframes fadeIn {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes cosmicGlow {
          0%,100% { box-shadow: 0 0 20px rgba(100,160,255,0.2); }
          50% { box-shadow: 0 0 40px rgba(100,160,255,0.4), 0 0 80px rgba(100,160,255,0.1); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0) rotate(45deg); opacity:1; }
          100% { transform: translateX(300px) translateY(300px) rotate(45deg); opacity:0; }
        }

        .sp-bg {
          background: radial-gradient(ellipse at 20% 20%, #050a1a 0%, #030508 60%, #000204 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .sp-nebula {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: nebulaPulse ease-in-out infinite;
        }

        .sp-card {
          background: rgba(5, 15, 35, 0.8);
          border: 1px solid rgba(100,160,255,0.12);
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .sp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(100,160,255,0.3), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .sp-card:hover::before { opacity: 1; }
        .sp-card:hover {
          border-color: rgba(100,160,255,0.3);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(100,160,255,0.05);
          transform: translateY(-4px);
          animation: cosmicGlow 2s ease-in-out infinite;
        }

        .sp-blue { color: #64a0ff; }
        .sp-purple { color: #a080ff; }
        .sp-white { color: #e0ecff; }
        .sp-dim { color: rgba(150,180,220,0.5); }

        .sp-tag {
          background: rgba(100,160,255,0.05);
          border: 1px solid rgba(100,160,255,0.15);
          color: rgba(150,190,255,0.7);
          transition: all 0.3s;
        }
        .sp-tag:hover {
          background: rgba(100,160,255,0.1);
          border-color: rgba(100,160,255,0.4);
          color: #a0c0ff;
        }

        .sp-btn {
          background: transparent;
          border: 1px solid rgba(100,160,255,0.3);
          color: #64a0ff;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: all 0.3s;
        }
        .sp-btn:hover {
          background: rgba(100,160,255,0.08);
          border-color: rgba(100,160,255,0.6);
          box-shadow: 0 0 20px rgba(100,160,255,0.1);
        }

        .sp-section-title {
          font-family: 'Orbitron', sans-serif;
          color: #64a0ff;
          text-shadow: 0 0 20px rgba(100,160,255,0.3);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .sp-orbit-ring {
          border: 1px solid rgba(100,160,255,0.15);
          border-radius: 50%;
          position: absolute;
          pointer-events: none;
        }

        .sp-reveal { animation: fadeIn 1s cubic-bezier(0.16,1,0.3,1) both; }

        .sp-shooting {
          position: fixed;
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, rgba(200,220,255,0.8), transparent);
          pointer-events: none;
          animation: shootingStar 3s ease-in forwards;
        }
      `}</style>

      <div className="sp-bg sp-body text-blue-100 relative">
        <StarfieldCanvas />
        <NebulaBlobs />

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

export default TemplateSpace;