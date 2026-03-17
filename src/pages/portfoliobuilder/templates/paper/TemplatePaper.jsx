import Layout from "../../components/Layout";
import PaperBackground from "./sections/PaperBackground";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import CertificationsSection from "./sections/CertificationsSection";
import LanguagesSection from "./sections/LanguagesSection";

function TemplatePaper({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&family=Caveat:wght@400;600&display=swap');

        .pp-serif { font-family: 'Playfair Display', serif; }
        .pp-sans { font-family: 'DM Sans', sans-serif; }
        .pp-hand { font-family: 'Caveat', cursive; }

        @keyframes unfold {
          from { opacity:0; transform: scaleY(0.8) translateY(-10px); transform-origin: top; }
          to { opacity:1; transform: scaleY(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity:0; transform: translateY(20px); }
          to { opacity:1; transform: translateY(0); }
        }
        @keyframes paperFloat {
          0%,100% { transform: translateY(0) rotate(-0.5deg); }
          50% { transform: translateY(-6px) rotate(0.5deg); }
        }
        @keyframes stampPop {
          0% { opacity:0; transform: scale(2) rotate(-15deg); }
          60% { transform: scale(0.9) rotate(3deg); }
          100% { opacity:1; transform: scale(1) rotate(5deg); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes inkDrop {
          0% { opacity:0; transform:scale(0); }
          70% { transform:scale(1.2); }
          100% { opacity:1; transform:scale(1); }
        }

        .pp-bg {
          background: #faf7f0;
          min-height: 100vh;
          position: relative;
        }

        .pp-texture {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .pp-lines {
          position: fixed;
          inset: 0;
          background-image: repeating-linear-gradient(
            transparent,
            transparent 27px,
            rgba(0,0,0,0.04) 28px
          );
          background-size: 100% 28px;
          pointer-events: none;
          z-index: 0;
        }

        .pp-card {
          background: #fffef9;
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 2px 3px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04);
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          position: relative;
        }
        .pp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: linear-gradient(180deg, #d4845a, #c07040);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .pp-card:hover::before { opacity: 1; }
        .pp-card:hover {
          box-shadow: 4px 6px 24px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.06);
          transform: translateY(-3px) rotate(0.3deg);
        }

        .pp-sticky {
          background: #fef9c3;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 3px 3px 10px rgba(0,0,0,0.08);
          transform: rotate(-1.5deg);
          transition: all 0.3s;
        }
        .pp-sticky:hover {
          transform: rotate(0deg) scale(1.02);
          box-shadow: 5px 5px 20px rgba(0,0,0,0.12);
          z-index: 10;
        }
        .pp-sticky:nth-child(even) { transform: rotate(1deg); }
        .pp-sticky:nth-child(even):hover { transform: rotate(0deg) scale(1.02); }

        .pp-brown { color: #8b5e3c; }
        .pp-dark { color: #2c1a0e; }
        .pp-medium { color: #6b4c30; }
        .pp-light { color: #b08060; }
        .pp-ink { color: #1a1008; }

        .pp-tag {
          background: rgba(139,94,60,0.08);
          border: 1px solid rgba(139,94,60,0.2);
          color: #8b5e3c;
          transition: all 0.2s;
        }
        .pp-tag:hover {
          background: rgba(139,94,60,0.15);
          border-color: rgba(139,94,60,0.4);
          transform: translateY(-2px);
        }

        .pp-btn {
          background: #2c1a0e;
          color: #faf7f0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s;
          border: 2px solid #2c1a0e;
        }
        .pp-btn:hover {
          background: transparent;
          color: #2c1a0e;
          transform: translateY(-2px);
          box-shadow: 3px 3px 0 #2c1a0e;
        }
        .pp-btn-outline {
          background: transparent;
          color: #8b5e3c;
          border: 1px solid #8b5e3c;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.2s;
        }
        .pp-btn-outline:hover {
          background: #8b5e3c;
          color: #faf7f0;
        }

        .pp-stamp {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d4845a;
          border: 2px solid #d4845a;
          opacity: 0.7;
          transform: rotate(5deg);
          display: inline-block;
          padding: 4px 8px;
          animation: stampPop 0.5s ease both;
        }

        .pp-reveal { animation: fadeIn 0.8s ease both; }
        .pp-float { animation: paperFloat 8s ease-in-out infinite; }

        .pp-line {
          height: 1px;
          background: rgba(0,0,0,0.1);
        }
        .pp-line-brown {
          height: 2px;
          background: linear-gradient(90deg, #d4845a, transparent);
          animation: lineGrow 1s ease both;
        }

        .pp-pin {
          width: 12px; height: 12px;
          background: #d4845a;
          border-radius: 50%;
          position: absolute;
          top: -6px; left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .pp-section-num {
          font-family: 'Caveat', cursive;
          font-size: 5rem;
          color: rgba(139,94,60,0.06);
          position: absolute;
          top: 0; right: 0;
        }
      `}</style>

      <div className="pp-bg pp-sans text-gray-800">
        <PaperBackground />

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

export default TemplatePaper;