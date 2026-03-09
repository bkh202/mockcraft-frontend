import React from "react";
import { getSkillLogo } from "../../../components/categorizeSkills";

const HeaderSection = ({ data }) => {
  const getInitials = (name) => {
    if (!name) return "JD";
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  };

  return (
    <div className="relative overflow-hidden bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-16 text-white">
      <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      
      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
        {/* Avatar placeholder with initials */}
        <div className="h-24 w-24 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-4xl font-bold shadow-2xl ring-4 ring-white/30 shrink-0">
          {getInitials(data.name)}
        </div>
        <div className="mt-2">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl mb-2">
            {data.name}
          </h1>
          <p className="text-xl text-indigo-100 font-medium mb-6">
            {data.title}
          </p>

          {/* DYNAMIC SOCIAL LINKS WITH LOGOS */}
          {data.links && Object.keys(data.links).length > 0 && (
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {Object.entries(data.links).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm transition-colors border border-white/20 text-sm font-semibold"
                  >
                    <img
                      src={getSkillLogo(platform)}
                      alt={platform}
                      className="w-4 h-4 object-contain brightness-0 invert" // Makes logos white for the dark header
                      onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
                    />
                    <span className="capitalize">{platform}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;