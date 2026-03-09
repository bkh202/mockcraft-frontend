import React from "react";

const ExperienceSection = ({ experience }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-2">
        <span className="h-6 w-1.5 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full" />
        Work Experience
      </h2>
      <div className="space-y-8 pl-2">
        {experience.map((exp, i) => (
          <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:border-2 before:border-indigo-500 before:bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                <p className="text-indigo-600 font-medium text-sm">{exp.company}</p>
              </div>
              <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
                {exp.duration}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
            
            {i !== experience.length - 1 && (
              <div className="absolute left-1.25 top-6 h-full w-0.5 bg-linear-to-b from-indigo-200 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;