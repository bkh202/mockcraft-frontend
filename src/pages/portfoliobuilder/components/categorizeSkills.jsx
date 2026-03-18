// src/utils/skillHelpers.js

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

  Object.keys(categories).forEach(key => {
    if (categories[key].length === 0) delete categories[key];
  });

  return categories;
};

/**
 * Returns an icon URL for a given skill name.
 * Uses Devicon for most technical skills, Simple Icons for platforms/brands.
 * Falls back to a generic Devicon logo if nothing matches.
 */
export const getSkillLogo = (skillName) => {
  if (!skillName) return '';

  const original = skillName.trim();
  const lower = original.toLowerCase();

  // 1. Combined mapping with explicit source (devicon or simple-icons)
  const combinedMapping = {
    // Devicon-based (already have exact slugs)
    'c++': { type: 'devicon', slug: 'cpp' },
    'c#': { type: 'devicon', slug: 'csharp' },
    '.net': { type: 'devicon', slug: 'dotnet' },
    'node.js': { type: 'devicon', slug: 'nodejs' },
    'nodejs': { type: 'devicon', slug: 'nodejs' },
    'react.js': { type: 'devicon', slug: 'react' },
    'vue.js': { type: 'devicon', slug: 'vuejs' },
    'angular.js': { type: 'devicon', slug: 'angularjs' },
    'express.js': { type: 'devicon', slug: 'express' },
    'typescript': { type: 'devicon', slug: 'typescript' },
    'javascript': { type: 'devicon', slug: 'javascript' },
    'python': { type: 'devicon', slug: 'python' },
    'java': { type: 'devicon', slug: 'java' },
    'go': { type: 'devicon', slug: 'go' },
    'golang': { type: 'devicon', slug: 'go' },
    'rust': { type: 'devicon', slug: 'rust' },
    'php': { type: 'devicon', slug: 'php' },
    'ruby': { type: 'devicon', slug: 'ruby' },
    'swift': { type: 'devicon', slug: 'swift' },
    'kotlin': { type: 'devicon', slug: 'kotlin' },
    'scala': { type: 'devicon', slug: 'scala' },
    'r': { type: 'devicon', slug: 'r' },
    'dart': { type: 'devicon', slug: 'dart' },
    'elixir': { type: 'devicon', slug: 'elixir' },
    'haskell': { type: 'devicon', slug: 'haskell' },
    'perl': { type: 'devicon', slug: 'perl' },
    'html': { type: 'devicon', slug: 'html5' },
    'html5': { type: 'devicon', slug: 'html5' },
    'css': { type: 'devicon', slug: 'css3' },
    'css3': { type: 'devicon', slug: 'css3' },
    'react': { type: 'devicon', slug: 'react' },
    'react native': { type: 'devicon', slug: 'react' },
    'vue': { type: 'devicon', slug: 'vuejs' },
    'vuejs': { type: 'devicon', slug: 'vuejs' },
    'angular': { type: 'devicon', slug: 'angularjs' },
    'angularjs': { type: 'devicon', slug: 'angularjs' },
    'svelte': { type: 'devicon', slug: 'svelte' },
    'bootstrap': { type: 'devicon', slug: 'bootstrap' },
    'tailwind': { type: 'devicon', slug: 'tailwindcss' },
    'tailwindcss': { type: 'devicon', slug: 'tailwindcss' },
    'figma': { type: 'devicon', slug: 'figma' },
    'jquery': { type: 'devicon', slug: 'jquery' },
    'sass': { type: 'devicon', slug: 'sass' },
    'less': { type: 'devicon', slug: 'less' },
    'node': { type: 'devicon', slug: 'nodejs' },
    'express': { type: 'devicon', slug: 'express' },
    'django': { type: 'devicon', slug: 'django' },
    'flask': { type: 'devicon', slug: 'flask' },
    'spring': { type: 'devicon', slug: 'spring' },
    'spring boot': { type: 'devicon', slug: 'spring' },
    'laravel': { type: 'devicon', slug: 'laravel' },
    'rails': { type: 'devicon', slug: 'rails' },
    'ruby on rails': { type: 'devicon', slug: 'rails' },
    'asp.net': { type: 'devicon', slug: 'dotnet' },
    'dotnet': { type: 'devicon', slug: 'dotnet' },
    'fastapi': { type: 'devicon', slug: 'fastapi' },
    'mysql': { type: 'devicon', slug: 'mysql' },
    'postgresql': { type: 'devicon', slug: 'postgresql' },
    'postgres': { type: 'devicon', slug: 'postgresql' },
    'mongodb': { type: 'devicon', slug: 'mongodb' },
    'mongo': { type: 'devicon', slug: 'mongodb' },
    'sqlite': { type: 'devicon', slug: 'sqlite' },
    'redis': { type: 'devicon', slug: 'redis' },
    'cassandra': { type: 'devicon', slug: 'cassandra' },
    'oracle': { type: 'devicon', slug: 'oracle' },
    'mariadb': { type: 'devicon', slug: 'mariadb' },
    'firebase': { type: 'devicon', slug: 'firebase' },
    'dynamodb': { type: 'devicon', slug: 'dynamodb' },
    'influxdb': { type: 'devicon', slug: 'influxdb' },
    'elasticsearch': { type: 'devicon', slug: 'elasticsearch' },
    'aws': { type: 'devicon', slug: 'amazonwebservices' },
    'amazon web services': { type: 'devicon', slug: 'amazonwebservices' },
    'azure': { type: 'devicon', slug: 'azure' },
    'google cloud': { type: 'devicon', slug: 'googlecloud' },
    'gcp': { type: 'devicon', slug: 'googlecloud' },
    'docker': { type: 'devicon', slug: 'docker' },
    'kubernetes': { type: 'devicon', slug: 'kubernetes' },
    'k8s': { type: 'devicon', slug: 'kubernetes' },
    'jenkins': { type: 'devicon', slug: 'jenkins' },
    'git': { type: 'devicon', slug: 'git' },
    'github': { type: 'devicon', slug: 'github' },
    'gitlab': { type: 'devicon', slug: 'gitlab' },
    'bitbucket': { type: 'devicon', slug: 'bitbucket' },
    'terraform': { type: 'devicon', slug: 'terraform' },
    'ansible': { type: 'devicon', slug: 'ansible' },
    'prometheus': { type: 'devicon', slug: 'prometheus' },
    'grafana': { type: 'devicon', slug: 'grafana' },
    'circleci': { type: 'devicon', slug: 'circleci' },
    'travis ci': { type: 'devicon', slug: 'travis' },
    'heroku': { type: 'devicon', slug: 'heroku' },
    'netlify': { type: 'devicon', slug: 'netlify' },
    'vercel': { type: 'devicon', slug: 'vercel' },
    'tensorflow': { type: 'devicon', slug: 'tensorflow' },
    'tf': { type: 'devicon', slug: 'tensorflow' },
    'pytorch': { type: 'devicon', slug: 'pytorch' },
    'keras': { type: 'devicon', slug: 'keras' },
    'scikit-learn': { type: 'devicon', slug: 'scikitlearn' },
    'sklearn': { type: 'devicon', slug: 'scikitlearn' },
    'pandas': { type: 'devicon', slug: 'pandas' },
    'numpy': { type: 'devicon', slug: 'numpy' },
    'matplotlib': { type: 'devicon', slug: 'matplotlib' },
    'seaborn': { type: 'devicon', slug: 'seaborn' },
    'plotly': { type: 'devicon', slug: 'plotly' },
    'jupyter': { type: 'devicon', slug: 'jupyter' },
    'jupyter notebook': { type: 'devicon', slug: 'jupyter' },
    'opencv': { type: 'devicon', slug: 'opencv' },
    'nltk': { type: 'devicon', slug: 'nltk' },
    'spacy': { type: 'devicon', slug: 'spacy' },
    'huggingface': { type: 'devicon', slug: 'huggingface' },
    'transformers': { type: 'devicon', slug: 'huggingface' },
    'rstudio': { type: 'devicon', slug: 'rstudio' },
    'vscode': { type: 'devicon', slug: 'vscode' },
    'visual studio code': { type: 'devicon', slug: 'vscode' },
    'vim': { type: 'devicon', slug: 'vim' },
    'neovim': { type: 'devicon', slug: 'neovim' },
    'intellij': { type: 'devicon', slug: 'intellij' },
    'pycharm': { type: 'devicon', slug: 'pycharm' },
    'eclipse': { type: 'devicon', slug: 'eclipse' },
    'postman': { type: 'devicon', slug: 'postman' },
    'insomnia': { type: 'devicon', slug: 'insomnia' },
    'slack': { type: 'devicon', slug: 'slack' },
    'discord': { type: 'devicon', slug: 'discord' },
    'trello': { type: 'devicon', slug: 'trello' },
    'jira': { type: 'devicon', slug: 'jira' },
    'confluence': { type: 'devicon', slug: 'confluence' },
    'notion': { type: 'devicon', slug: 'notion' },
    'obsidian': { type: 'devicon', slug: 'obsidian' },
    'linux': { type: 'devicon', slug: 'linux' },
    'ubuntu': { type: 'devicon', slug: 'ubuntu' },
    'windows': { type: 'devicon', slug: 'windows8' },
    'macos': { type: 'devicon', slug: 'apple' },
    'bash': { type: 'devicon', slug: 'bash' },
    'powershell': { type: 'devicon', slug: 'powershell' },
    'markdown': { type: 'devicon', slug: 'markdown' },
    'latex': { type: 'devicon', slug: 'latex' },
    'graphql': { type: 'devicon', slug: 'graphql' },
    
    // Simple Icons (for platforms not in Devicon)
    'linkedin': { type: 'simple', id: 'linkedin' },
    'leetcode': { type: 'simple', id: 'leetcode' },
    'railway': { type: 'simple', id: 'railway' },
    'medium': { type: 'simple', id: 'medium' },
    'dev.to': { type: 'simple', id: 'devdotto' },
    'devto': { type: 'simple', id: 'devdotto' },
    'hashnode': { type: 'simple', id: 'hashnode' },
    'codeforces': { type: 'simple', id: 'codeforces' },
    'codechef': { type: 'simple', id: 'codechef' },
    'hackerrank': { type: 'simple', id: 'hackerrank' },
    'hackerearth': { type: 'simple', id: 'hackerearth' },
    'geeksforgeeks': { type: 'simple', id: 'geeksforgeeks' },
    'gfg': { type: 'simple', id: 'geeksforgeeks' },
    'stackoverflow': { type: 'simple', id: 'stackoverflow' },
    'stack overflow': { type: 'simple', id: 'stackoverflow' },
    'kaggle': { type: 'simple', id: 'kaggle' },
    'tableau': { type: 'simple', id: 'tableau' },
    'power bi': { type: 'simple', id: 'powerbi' },
    'powerbi': { type: 'simple', id: 'powerbi' },
    'canva': { type: 'simple', id: 'canva' },
    'adobe xd': { type: 'simple', id: 'adobexd' },
    'xd': { type: 'simple', id: 'adobexd' },
    'sketch': { type: 'simple', id: 'sketch' },
    'invision': { type: 'simple', id: 'invision' },
    'zeplin': { type: 'simple', id: 'zeplin' },
    'abstract': { type: 'simple', id: 'abstract' },
    'miro': { type: 'simple', id: 'miro' },
    'whimsical': { type: 'simple', id: 'whimsical' },
    'excalidraw': { type: 'simple', id: 'excalidraw' },
    'draw.io': { type: 'simple', id: 'drawdotio' },
    'drawio': { type: 'simple', id: 'drawdotio' },
    'lucidchart': { type: 'simple', id: 'lucidchart' },
    'asana': { type: 'simple', id: 'asana' },
    'clickup': { type: 'simple', id: 'clickup' },
    'monday.com': { type: 'simple', id: 'mondaydotcom' },
    'monday': { type: 'simple', id: 'mondaydotcom' },
    'wrike': { type: 'simple', id: 'wrike' },
    'smartsheet': { type: 'simple', id: 'smartsheet' },
    'airtable': { type: 'simple', id: 'airtable' },
    'coda': { type: 'simple', id: 'coda' },
    'dropbox': { type: 'simple', id: 'dropbox' },
    'google drive': { type: 'simple', id: 'googledrive' },
    'onedrive': { type: 'simple', id: 'onedrive' },
    'box': { type: 'simple', id: 'box' },
    'mega': { type: 'simple', id: 'mega' },
    'telegram': { type: 'simple', id: 'telegram' },
    'whatsapp': { type: 'simple', id: 'whatsapp' },
    'signal': { type: 'simple', id: 'signal' },
    'wechat': { type: 'simple', id: 'wechat' },
    'line': { type: 'simple', id: 'line' },
    'zoom': { type: 'simple', id: 'zoom' },
    'google meet': { type: 'simple', id: 'googlemeet' },
    'meet': { type: 'simple', id: 'googlemeet' },
    'microsoft teams': { type: 'simple', id: 'microsoftteams' },
    'teams': { type: 'simple', id: 'microsoftteams' },
    'skype': { type: 'simple', id: 'skype' },
    'discord': { type: 'simple', id: 'discord' }, // Discord is also in Devicon, but keep for completeness
    'slack': { type: 'simple', id: 'slack' },
    'matrix': { type: 'simple', id: 'matrix' },
    'element': { type: 'simple', id: 'element' },
    'riot': { type: 'simple', id: 'element' },
    'gitter': { type: 'simple', id: 'gitter' },
    'rocket.chat': { type: 'simple', id: 'rocketchat' },
    'rocketchat': { type: 'simple', id: 'rocketchat' },
    'mattermost': { type: 'simple', id: 'mattermost' },
    'zulip': { type: 'simple', id: 'zulip' },
    'twilio': { type: 'simple', id: 'twilio' },
    'sendgrid': { type: 'simple', id: 'sendgrid' },
    'mailchimp': { type: 'simple', id: 'mailchimp' },
    'hubspot': { type: 'simple', id: 'hubspot' },
    'salesforce': { type: 'simple', id: 'salesforce' },
    'zendesk': { type: 'simple', id: 'zendesk' },
    'intercom': { type: 'simple', id: 'intercom' },
    'drift': { type: 'simple', id: 'drift' },
    'crisp': { type: 'simple', id: 'crisp' },
    'tawk.to': { type: 'simple', id: 'tawkto' },
    'tawk': { type: 'simple', id: 'tawkto' },
    'livechat': { type: 'simple', id: 'livechat' },
    'olark': { type: 'simple', id: 'olark' },
    'purechat': { type: 'simple', id: 'purechat' },
    'snapchat': { type: 'simple', id: 'snapchat' },
    'tiktok': { type: 'simple', id: 'tiktok' },
    'instagram': { type: 'simple', id: 'instagram' },
    'facebook': { type: 'simple', id: 'facebook' },
    'twitter': { type: 'simple', id: 'twitter' },
    'x': { type: 'simple', id: 'x' }, // X (formerly Twitter)
    'linkedin': { type: 'simple', id: 'linkedin' },
    'github': { type: 'simple', id: 'github' }, // GitHub also in Devicon
    'gitlab': { type: 'simple', id: 'gitlab' },
    'bitbucket': { type: 'simple', id: 'bitbucket' },
    'figma': { type: 'simple', id: 'figma' },
    'notion': { type: 'simple', id: 'notion' },
    'obsidian': { type: 'simple', id: 'obsidian' },
    'roam research': { type: 'simple', id: 'roamresearch' },
    'roam': { type: 'simple', id: 'roamresearch' },
    'logseq': { type: 'simple', id: 'logseq' },
    'remnote': { type: 'simple', id: 'remnote' },
    'workflowy': { type: 'simple', id: 'workflowy' },
    'dynalist': { type: 'simple', id: 'dynalist' },
    'evernote': { type: 'simple', id: 'evernote' },
    'onenote': { type: 'simple', id: 'onenote' },
    'google keep': { type: 'simple', id: 'googlekeep' },
    'keep': { type: 'simple', id: 'googlekeep' },
    'apple notes': { type: 'simple', id: 'applenotes' }, // not sure if exists
    'standard notes': { type: 'simple', id: 'standardnotes' },
    'joplin': { type: 'simple', id: 'joplin' },
    'turtl': { type: 'simple', id: 'turtl' },
    'cryptee': { type: 'simple', id: 'cryptee' },
    'paper': { type: 'simple', id: 'paper' }, // Dropbox Paper
    'quip': { type: 'simple', id: 'quip' },
    'slite': { type: 'simple', id: 'slite' },
    'coda': { type: 'simple', id: 'coda' },
    'airtable': { type: 'simple', id: 'airtable' },
    'bubble': { type: 'simple', id: 'bubble' }, // Bubble.io
    'adalo': { type: 'simple', id: 'adalo' },
    'flipgrid': { type: 'simple', id: 'flipgrid' },
    'edmodo': { type: 'simple', id: 'edmodo' },
    'scholar': { type: 'simple', id: 'googlescholar' },
    'google scholar': { type: 'simple', id: 'googlescholar' },
    'researchgate': { type: 'simple', id: 'researchgate' },
    'academia.edu': { type: 'simple', id: 'academia' },
    'academia': { type: 'simple', id: 'academia' },
    'mendeley': { type: 'simple', id: 'mendeley' },
    'zotero': { type: 'simple', id: 'zotero' },
    'endnote': { type: 'simple', id: 'endnote' },
    'citavi': { type: 'simple', id: 'citavi' },
    'docear': { type: 'simple', id: 'docear' },
    'latex': { type: 'simple', id: 'latex' }, // also in Devicon
    'overleaf': { type: 'simple', id: 'overleaf' },
    'sharelatex': { type: 'simple', id: 'sharelatex' },
    'pandoc': { type: 'simple', id: 'pandoc' },
    'texmaker': { type: 'simple', id: 'texmaker' },
    'texstudio': { type: 'simple', id: 'texstudio' },
    'lyx': { type: 'simple', id: 'lyx' },
    'kile': { type: 'simple', id: 'kile' },
    'gummi': { type: 'simple', id: 'gummi' },
    'vim': { type: 'simple', id: 'vim' }, // also Devicon
    'emacs': { type: 'simple', id: 'emacs' },
    'spacemacs': { type: 'simple', id: 'spacemacs' },
    'doom emacs': { type: 'simple', id: 'doomemacs' },
    'atom': { type: 'simple', id: 'atom' },
    'sublime text': { type: 'simple', id: 'sublimetext' },
    'sublime': { type: 'simple', id: 'sublimetext' },
    'textmate': { type: 'simple', id: 'textmate' },
    'bbedit': { type: 'simple', id: 'bbedit' },
    'coda': { type: 'simple', id: 'coda' },
    'nova': { type: 'simple', id: 'nova' },
    'brackets': { type: 'simple', id: 'brackets' },
    'adobe dreamweaver': { type: 'simple', id: 'adobedreamweaver' },
    'dreamweaver': { type: 'simple', id: 'adobedreamweaver' },
    'microsoft expression web': { type: 'simple', id: 'microsoft expression web' }, // not sure
    'bluefish': { type: 'simple', id: 'bluefish' },
    'geany': { type: 'simple', id: 'geany' },
    'notepad++': { type: 'simple', id: 'notepadplusplus' },
    'notepadplusplus': { type: 'simple', id: 'notepadplusplus' },
    'vim': { type: 'simple', id: 'vim' },
    'neovim': { type: 'simple', id: 'neovim' },
    'helix': { type: 'simple', id: 'helix' },
    'kakoune': { type: 'simple', id: 'kakoune' },
    'amp': { type: 'simple', id: 'amp' },
    'xi-editor': { type: 'simple', id: 'xi' },
    'xi': { type: 'simple', id: 'xi' },
    'lapce': { type: 'simple', id: 'lapce' },
    'zed': { type: 'simple', id: 'zed' }
  };

  // Check exact match in combinedMapping
  if (combinedMapping[lower]) {
    const entry = combinedMapping[lower];
    if (entry.type === 'devicon') {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${entry.slug}/${entry.slug}-original.svg`;
    } else if (entry.type === 'simple') {
      return `https://cdn.simpleicons.org/${entry.id}`;
    }
  }

  // 2. Normalize: remove all non‑alphanumeric characters
  const normalized = lower.replace(/[^a-z0-9]/g, '');

  // 3. Set of known valid Devicon slugs (based on mapping values + additional common ones)
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

  // 4. Final fallback to generic Devicon logo
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg`;
};