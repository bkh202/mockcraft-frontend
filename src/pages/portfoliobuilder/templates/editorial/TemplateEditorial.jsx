import Layout from "../../components/Layout";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";

function TemplateEditorial({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        .font-notion { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        
        .notion-divider { 
          border-bottom: 1px solid rgba(55, 53, 47, 0.16); 
          margin: 2.5rem 0;
        }
        
        .notion-callout {
          padding: 20px 20px 20px 24px;
          border-radius: 8px;
          background: rgba(250, 250, 248, 1);
          display: flex;
          gap: 14px;
          align-items: flex-start;
          border: 1px solid rgba(55, 53, 47, 0.08);
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .notion-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 13px;
          line-height: 1.2;
          background: rgba(235, 235, 233, 0.7);
          color: rgba(55, 53, 47, 0.9);
          white-space: nowrap;
          font-weight: 500;
          transition: background 0.15s ease;
        }
        .notion-tag:hover {
          background: rgba(220, 220, 218, 1);
        }

        .notion-card {
          border: 1px solid rgba(55, 53, 47, 0.1);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
          background: white;
        }
        .notion-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);
          border-color: rgba(55, 53, 47, 0.2);
          transform: translateY(-2px);
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
      `}</style>

      <div className="min-h-screen bg-white text-[#1e1e1e] font-notion pb-32 selection:bg-blue-200/30 antialiased">

        {/* Cover Image Banner with subtle gradient overlay */}
        <div className="h-56 md:h-72 w-full bg-linear-to-br from-gray-100 via-white to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #cbd5e1 0.5px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-4xl mx-auto px-6 relative -mt-20 md:-mt-24">
          <AboutSection data={data} />
          <div className="notion-divider"></div>

          {data.experience?.length > 0 && (
            <>
              <ExperienceSection data={data} />
              <div className="notion-divider"></div>
            </>
          )}

          <ProjectsSection data={data} />
          <div className="notion-divider"></div>

          <SkillsSection data={data} />
          <div className="notion-divider"></div>

          <EducationSection data={data} />

          <ContactSection data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default TemplateEditorial;