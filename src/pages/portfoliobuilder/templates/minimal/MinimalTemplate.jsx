import React from "react";
import Layout from "../../components/Layout";
import { categorizeSkills } from "../../components/categorizeSkills";

import HeaderSection from "./sections/HeaderSection";
import SummarySection from "./sections/SummarySection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";

function MinimalTemplate({ data }) {
  if (!data) return null;

  const categorizedSkills = categorizeSkills(data?.skills || []);

  return (
    <Layout>
      {/* Background decoration (Kept Minimal and Soft) */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-linear-to-br from-indigo-100 to-purple-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-linear-to-tr from-blue-100 to-cyan-100 opacity-60 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-pink-100 to-orange-100 opacity-40 blur-3xl" />
      </div>

      <div className="relative py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* Main card with soft glass effect */}
          <div className="group relative">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur transition duration-500 group-hover:opacity-20" />
            
            <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl ring-1 ring-gray-200/50 overflow-hidden">
              
              <HeaderSection data={data} />

              <div className="px-6 py-10 sm:px-12 space-y-16">
                
                {data.summary && <SummarySection summary={data.summary} />}

                <SkillsSection 
                  categorizedSkills={categorizedSkills} 
                  languages={data.languages} 
                />

                {data.projects?.length > 0 && (
                  <ProjectsSection projects={data.projects} />
                )}

                {data.experience?.length > 0 && (
                  <ExperienceSection experience={data.experience} />
                )}

                <div className="grid md:grid-cols-2 gap-10">
                  {data.education?.length > 0 && (
                    <EducationSection education={data.education} />
                  )}
                  {data.certificates?.length > 0 && (
                    <CertificationsSection certificates={data.certificates} />
                  )}
                </div>

                <ContactSection data={data} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MinimalTemplate;