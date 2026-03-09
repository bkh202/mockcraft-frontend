import React from "react";
import { getSkillLogo } from "../../../components/categorizeSkills";

const SkillsSection = ({ categorizedSkills, languages }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Categorized Skills */}
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-2">
          <span className="h-6 w-1.5 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full" />
          Skills & Expertise
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category} className="bg-gray-50/50 rounded-2xl p-5 ring-1 ring-gray-100">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 shadow-sm hover:border-indigo-300 transition-colors">
                    <img
                      src={getSkillLogo(skill)}
                      alt={skill}
                      className="w-3.5 h-3.5 object-contain"
                      onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      {languages && languages.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-2">
            <span className="h-6 w-1.5 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full" />
            Languages
          </h2>
          <div className="bg-gray-50/50 rounded-2xl p-5 ring-1 ring-gray-100 flex flex-col gap-2">
            {languages.map((lang, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700 font-medium bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                <span className="text-indigo-400">🌐</span>
                {lang}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsSection;