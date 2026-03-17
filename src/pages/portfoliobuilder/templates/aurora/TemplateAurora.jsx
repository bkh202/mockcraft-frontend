import Layout from "../../components/Layout";
import AuroraCanvas from "./sections/AuroraCanvas";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";
import CertificationsSection from "./sections/CertificationsSection";

function TemplateAurora({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=Syne+Mono&display=swap');
        .ar-body { font-family: 'Syne', sans-serif; }
        .ar-mono { font-family: 'Syne Mono', monospace; }

        @keyframes arFade { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes arFloat { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }
        @keyframes arShimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
        @keyframes arBorderPulse {
          0%,100% { border-color:rgba(52,211,153,0.15); }
          50% { border-color:rgba(129,140,248,0.25); }
        }

        .ar-bg { background:#020c0a; min-height:100vh; }
        .ar-card {
          background:rgba(5,25,20,0.75);
          backdrop-filter:blur(30px);
          border:1px solid rgba(52,211,153,0.15);
          transition:all 0.5s;
          animation:arBorderPulse 6s ease-in-out infinite;
        }
        .ar-card:hover { background:rgba(10,35,28,0.9); transform:translateY(-5px); box-shadow:0 30px 60px rgba(0,0,0,0.4); }
        .ar-title {
          background:linear-gradient(135deg,#34d399 0%,#818cf8 35%,#2dd4bf 65%,#34d399 100%);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:arShimmer 4s linear infinite;
        }
        .ar-green { color:#34d399; }
        .ar-teal { color:#2dd4bf; }
        .ar-dim { color:rgba(100,200,160,0.4); }
        .ar-tag {
          background:rgba(52,211,153,0.05); border:1px solid rgba(52,211,153,0.15); color:rgba(52,211,153,0.7);
          transition:all 0.3s;
        }
        .ar-tag:hover { background:rgba(52,211,153,0.1); border-color:rgba(52,211,153,0.4); color:#34d399; transform:translateY(-2px); }
        .ar-btn {
          background:transparent; border:1px solid rgba(52,211,153,0.3); color:#34d399;
          font-family:'Syne Mono',monospace; font-size:0.8rem; letter-spacing:0.1em; transition:all 0.3s;
        }
        .ar-btn:hover { border-color:rgba(52,211,153,0.6); background:rgba(52,211,153,0.05); }
        .ar-divider { height:1px; background:linear-gradient(90deg,transparent,rgba(52,211,153,0.3),rgba(129,140,248,0.3),transparent); }
        .ar-reveal { animation:arFade 1s cubic-bezier(0.16,1,0.3,1) both; }
        .ar-float { animation:arFloat 8s ease-in-out infinite; }
        .ar-num { font-family:'Syne Mono',monospace; font-size:0.65rem; letter-spacing:0.3em; color:rgba(52,211,153,0.3); }
      `}</style>

      <div className="ar-bg ar-body text-emerald-100 overflow-x-hidden">
        <AuroraCanvas />
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

export default TemplateAurora;