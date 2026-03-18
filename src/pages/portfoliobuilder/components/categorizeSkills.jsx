// src/utils/skillHelpers.js

/**
 * Categorizes skills into frontend, backend, database, and tools.
 */
export const categorizeSkills = (skillsArray) => {
  if (!skillsArray) return {};

  const categories = {
    "🎨 Frontend": [],
    "⚙️ Backend": [],
    "🗄️ Database": [],
    "🛠️ Tools & Others": []
  };

  const kw = {
    frontend: ["html", "css", "javascript", "react", "angular", "vue", "bootstrap", "tailwind", "figma", "ui", "ux", "jsp"],
    backend: ["java", "python", "node", "express", "spring", "django", "c++", "c#", "php", "rest", "api", "microservices","servlet"],
    database: ["mysql", "sql", "mongo", "postgres", "redis", "oracle", "hibernate", "jpa","casendra"]
  };

  skillsArray.forEach(skill => {
    const s = skill.toLowerCase();
    if (kw.frontend.some(k => s.includes(k))) categories["🎨 Frontend"].push(skill);
    else if (kw.backend.some(k => s.includes(k))) categories["⚙️ Backend"].push(skill);
    else if (kw.database.some(k => s.includes(k))) categories["🗄️ Database"].push(skill);
    else categories["🛠️ Tools & Others"].push(skill);
  });

  // Remove empty categories
  Object.keys(categories).forEach(key => {
    if (categories[key].length === 0) delete categories[key];
  });

  return categories;
};

/**
 * Returns a Devicon CDN URL for a given skill name.
 * Uses a comprehensive mapping to handle variations and edge cases.
 * Falls back to the generic Devicon logo if no match is found.
 */
export const getSkillLogo = (skillName) => {
  if (!skillName) return '';

  // 1. Preprocess: trim and lowercase
  const original = skillName.trim();
  const lower = original.toLowerCase();

  // 2. Exact mapping for special cases (including punctuation and multi-word)
  const exactMapping = {
    // Languages
    'c++': 'cpp',
    'c#': 'csharp',
    '.net': 'dotnet',
    'node.js': 'nodejs',
    'nodejs': 'nodejs',
    'react.js': 'react',
    'vue.js': 'vuejs',
    'angular.js': 'angularjs',
    'express.js': 'express',
    'typescript': 'typescript',
    'javascript': 'javascript',
    'python': 'python',
    'java': 'java',
    'go': 'go',
    'golang': 'go',
    'rust': 'rust',
    'php': 'php',
    'ruby': 'ruby',
    'swift': 'swift',
    'kotlin': 'kotlin',
    'scala': 'scala',
    'r': 'r',
    'dart': 'dart',
    'elixir': 'elixir',
    'haskell': 'haskell',
    'perl': 'perl',
    // Frontend
    'html': 'html5',
    'html5': 'html5',
    'css': 'css3',
    'css3': 'css3',
    'react': 'react',
    'react native': 'react',
    'vue': 'vuejs',
    'vuejs': 'vuejs',
    'angular': 'angularjs',
    'angularjs': 'angularjs',
    'svelte': 'svelte',
    'bootstrap': 'bootstrap',
    'tailwind': 'tailwindcss',
    'tailwindcss': 'tailwindcss',
    'figma': 'figma',
    'jquery': 'jquery',
    'sass': 'sass',
    'less': 'less',
    // Backend
    'node': 'nodejs',
    'express': 'express',
    'django': 'django',
    'flask': 'flask',
    'spring': 'spring',
    'spring boot': 'spring',
    'laravel': 'laravel',
    'rails': 'rails',
    'ruby on rails': 'rails',
    'asp.net': 'dotnet',
    'dotnet': 'dotnet',
    'fastapi': 'fastapi',
    // Databases
    'mysql': 'mysql',
    'postgresql': 'postgresql',
    'postgres': 'postgresql',
    'mongodb': 'mongodb',
    'mongo': 'mongodb',
    'sqlite': 'sqlite',
    'redis': 'redis',
    'cassandra': 'cassandra',
    'oracle': 'oracle',
    'mariadb': 'mariadb',
    'firebase': 'firebase',
    'dynamodb': 'dynamodb',
    'influxdb': 'influxdb',
    'elasticsearch': 'elasticsearch',
    // Cloud & DevOps
    'aws': 'amazonwebservices',
    'amazon web services': 'amazonwebservices',
    'azure': 'azure',
    'google cloud': 'googlecloud',
    'gcp': 'googlecloud',
    'docker': 'docker',
    'kubernetes': 'kubernetes',
    'k8s': 'kubernetes',
    'jenkins': 'jenkins',
    'git': 'git',
    'github': 'github',
    'gitlab': 'gitlab',
    'bitbucket': 'bitbucket',
    'terraform': 'terraform',
    'ansible': 'ansible',
    'prometheus': 'prometheus',
    'grafana': 'grafana',
    'circleci': 'circleci',
    'travis ci': 'travis',
    'heroku': 'heroku',
    'netlify': 'netlify',
    'vercel': 'vercel',
    // AI & Data Science
    'tensorflow': 'tensorflow',
    'tf': 'tensorflow',
    'pytorch': 'pytorch',
    'keras': 'keras',
    'scikit-learn': 'scikitlearn',
    'sklearn': 'scikitlearn',
    'pandas': 'pandas',
    'numpy': 'numpy',
    'matplotlib': 'matplotlib',
    'seaborn': 'seaborn',
    'plotly': 'plotly',
    'jupyter': 'jupyter',
    'jupyter notebook': 'jupyter',
    'opencv': 'opencv',
    'nltk': 'nltk',
    'spacy': 'spacy',
    'huggingface': 'huggingface',
    'transformers': 'huggingface',
    'rstudio': 'rstudio',
    // Tools
    'vscode': 'vscode',
    'visual studio code': 'vscode',
    'vim': 'vim',
    'neovim': 'neovim',
    'intellij': 'intellij',
    'pycharm': 'pycharm',
    'eclipse': 'eclipse',
    'postman': 'postman',
    'insomnia': 'insomnia',
    'slack': 'slack',
    'discord': 'discord',
    'trello': 'trello',
    'jira': 'jira',
    'confluence': 'confluence',
    'notion': 'notion',
    'obsidian': 'obsidian',
    // Operating Systems
    'linux': 'linux',
    'ubuntu': 'ubuntu',
    'windows': 'windows8',
    'macos': 'apple',
    'bash': 'bash',
    'powershell': 'powershell',
    // Other
    'markdown': 'markdown',
    'latex': 'latex',
    'graphql': 'graphql'
  };

  // Check exact mapping first (including case‑insensitive)
  if (exactMapping[lower]) {
    const slug = exactMapping[lower];
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;
  }

  // 3. Normalize: remove all non‑alphanumeric characters
  const normalized = lower.replace(/[^a-z0-9]/g, '');

  // 4. Set of known valid Devicon slugs (based on mapping values + additional common ones)
  const validSlugs = new Set([
    'amazonwebservices', 'android', 'angularjs', 'ansible', 'apache', 'apple', 'azure',
    'bash', 'bitbucket', 'bootstrap', 'c', 'cassandra', 'circleci', 'confluence',
    'cpp', 'csharp', 'css3', 'dart', 'devicon', 'django', 'docker', 'dotnet',
    'eclipse', 'elasticsearch', 'elixir', 'express', 'fastapi', 'figma', 'firebase',
    'flask', 'git', 'github', 'gitlab', 'go', 'googlecloud', 'grafana', 'graphql',
    'haskell', 'heroku', 'html5', 'huggingface', 'influxdb', 'intellij', 'java',
    'javascript', 'jenkins', 'jira', 'jquery', 'jupyter', 'keras', 'kotlin',
    'kubernetes', 'laravel', 'latex', 'less', 'linux', 'markdown', 'matplotlib',
    'mongodb', 'mysql', 'neovim', 'netlify', 'nltk', 'nodejs', 'notion', 'numpy',
    'obsidian', 'opencv', 'oracle', 'pandas', 'perl', 'php', 'plotly', 'postgresql',
    'postman', 'powershell', 'prometheus', 'pycharm', 'python', 'pytorch', 'r',
    'rails', 'react', 'redis', 'ruby', 'rust', 'sass', 'scala', 'scikitlearn',
    'seaborn', 'slack', 'spacy', 'spring', 'sqlite', 'svelte', 'swift', 'tailwindcss',
    'tensorflow', 'terraform', 'travis', 'trello', 'typescript', 'ubuntu', 'vercel',
    'vim', 'vscode', 'vuejs', 'windows8'
  ]);

  // If the normalized slug is in our valid set, use it
  if (validSlugs.has(normalized)) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${normalized}/${normalized}-original.svg`;
  }

  // 5. Fallback to the generic Devicon logo
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg`;
};