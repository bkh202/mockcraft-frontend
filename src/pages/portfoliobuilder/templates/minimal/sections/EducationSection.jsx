import React from "react";

const EducationSection = ({ education }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-2">
        <span className="h-6 w-1.5 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full" />
        Education
      </h2>
      <div className="space-y-4">
        {education.map((edu, i) => (
          <div key={i} className="rounded-2xl bg-white p-5 ring-1 ring-gray-200 shadow-sm flex flex-col">
            <h3 className="font-bold text-gray-900">{edu.degree}</h3>
            <p className="text-gray-600 text-sm mt-1">{edu.college || edu.institution}</p>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100 text-xs font-bold text-gray-400">
              <span>{edu.year || edu.duration}</span>
              <span className="text-indigo-500">Score: {edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;