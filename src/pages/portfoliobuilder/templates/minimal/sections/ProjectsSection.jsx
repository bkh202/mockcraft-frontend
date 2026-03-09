import React from "react";
import { getSkillLogo } from "../../../components/categorizeSkills";

const ProjectsSection = ({ projects }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-2">
        <span className="h-6 w-1.5 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full" />
        Featured Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-full text-xs font-bold transition-colors">
                  Live ↗
                </a>
              )}
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">{project.description}</p>
            
            {/* Tech Stack Logos */}
            {project.techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                    <img
                      src={getSkillLogo(tech)}
                      alt={tech}
                      className="w-3 h-3 object-contain"
                      onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
                    />
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;