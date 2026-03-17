import Layout from "../../components/Layout";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";


function ModernTemplate({ data }) {
  return (
    <Layout>
      <style>{`
        :root {
          --glass-border: rgba(255, 255, 255, 0.1);
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 10s ease infinite;
        }
        
        .pulse-dot {
          animation: pulseDot 2s infinite;
        }

        /* Subtle grid background */
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(156, 163, 175, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* Delay Utilities */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        /* Premium Glass Card */
        .glass-card {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
        }
      `}</style>

      {/* Main Container with Grid Pattern */}
      <div className="relative min-h-screen bg-gray-50 dark:bg-[#0a0a0a] bg-grid-pattern text-gray-900 dark:text-gray-100 overflow-hidden font-sans">

        {/* Ambient Glowing Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
          <AboutSection data={data} />
          <SkillsSection data={data} />
          {data.experience?.length > 0 && <ExperienceSection data={data} />}
          <ProjectsSection data={data} />
          <EducationSection data={data} />
          <LanguagesSection languages={data.languages} />
          <ContactSection data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default ModernTemplate;