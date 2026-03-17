import React from "react";
import Layout from "../../components/Layout";
import SidebarProfile from "./sections/SidebarProfile";
import SidebarSocial from "./sections/SidebarSocial";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";


function SidebarTemplate({ data }) {
  if (!data) return null;

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen bg-[#fafaf9] dark:bg-[#0b0f19] text-slate-800 dark:text-slate-200 font-sans selection:bg-teal-500/30">

        {/* LEFT SIDEBAR */}
        <aside className="md:w-95 md:fixed md:h-screen bg-[#0f172a] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-y-auto custom-scrollbar relative z-20 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 -right-20 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 space-y-10">
            <SidebarProfile data={data} />
            <SidebarSocial data={data} />
          </div>

          <div className="hidden md:block relative z-10 mt-12 text-xs font-bold text-slate-700 uppercase tracking-widest">
            Portfolio © {new Date().getFullYear()}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 md:ml-95 p-6 md:p-16 lg:p-24 space-y-24 relative z-10">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          <AboutSection data={data} />
          <SkillsSection data={data} />
          {data.experience?.length > 0 && <ExperienceSection data={data} />}
          {data.projects?.length > 0 && <ProjectsSection data={data} />}
          <EducationSection data={data} />
          <LanguagesSection languages={data.languages} />
          <ContactSection data={data} />
        </main>
      </div>
    </Layout>
  );
}

export default SidebarTemplate;