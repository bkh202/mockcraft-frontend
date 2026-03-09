// src/utils/skillHelpers.js

export const categorizeSkills = (skillsArray) => {
  if (!skillsArray) return {};

  const categories = {
    "🎨 Frontend": [],
    "⚙️ Backend": [],
    "🗄️ Database": [],
    "🛠️ Tools & Others": []
  };

  // Keywords to match
  const kw = {
    frontend: ["html", "css", "javascript", "react", "angular", "vue", "bootstrap", "tailwind", "figma", "ui", "ux", "jsp"],
    backend: ["java", "python", "node", "express", "spring", "django", "c++", "c#", "php", "rest", "api", "microservices"],
    database: ["mysql", "sql", "mongo", "postgres", "redis", "oracle", "hibernate", "jpa"]
  };

  skillsArray.forEach(skill => {
    const s = skill.toLowerCase();
    if (kw.frontend.some(k => s.includes(k))) categories["🎨 Frontend"].push(skill);
    else if (kw.backend.some(k => s.includes(k))) categories["⚙️ Backend"].push(skill);
    else if (kw.database.some(k => s.includes(k))) categories["🗄️ Database"].push(skill);
    else categories["🛠️ Tools & Others"].push(skill); // Git, Docker, AWS sab isme aayenge
  });

  // Remove empty categories
  Object.keys(categories).forEach(key => {
    if (categories[key].length === 0) delete categories[key];
  });

  return categories;
};

export const getSkillLogo = (skillName) => {
  // Normalize string for Devicon format (e.g., "React.js" -> "react")
  let name = skillName.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Custom mappings for common names that differ in Devicon
  if(name.includes('react')) name = 'react';
  if(name.includes('java') && !name.includes('javascript')) name = 'java';
  if(name.includes('spring')) name = 'spring';
  if(name.includes('mysql')) name = 'mysql';
  if(name.includes('aws')) name = 'amazonwebservices';
  if(name.includes('docker')) name = 'docker';
  if(name.includes('git')) name = 'git';

  // Return Devicon image URL
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;
};