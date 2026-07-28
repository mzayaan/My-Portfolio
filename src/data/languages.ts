export type LanguageGroup = {
  title: string;
  items: { name: string; note: string }[];
};

export const languageGroups: LanguageGroup[] = [
  {
    title: 'Programming',
    items: [
      { name: 'Java', note: 'OOP, data structures, desktop & game projects' },
      { name: 'C#', note: '.NET Framework and ASP.NET web applications' },
      {
        name: 'JavaScript',
        note: 'Interactive front-ends, jQuery, and React for the final year project',
      },
      { name: 'PHP', note: 'Server-side web development, WAMP stack' },
      {
        name: 'Python',
        note: 'AI & Machine Learning Techniques — regression, classification, neural networks',
      },
      { name: 'Dart', note: 'Flutter cross-platform mobile apps' },
      { name: 'C / Arduino', note: 'Microcontroller & sensor programming' },
    ],
  },
  {
    title: 'Markup, Query & Styling',
    items: [
      { name: 'HTML5', note: 'Semantic document structure' },
      { name: 'CSS', note: 'Layout, responsive design, Bootstrap' },
      { name: 'SQL', note: 'Oracle, SQL Server, PostgreSQL' },
      { name: 'P-SQL', note: 'Stored procedures & transactions' },
    ],
  },
  {
    title: 'Spoken',
    items: [
      { name: 'English', note: 'Fluent' },
      { name: 'French', note: 'Fluent' },
    ],
  },
];

export type SkillGroup = {
  title: string;
  source: 'UTM' | 'Parallels' | 'FYP';
  items: string[];
};

/** Skills as listed on LinkedIn, grouped. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Web',
    source: 'UTM',
    items: [
      'Java',
      'JavaScript',
      'PHP',
      '.NET Framework',
      'HTML5',
      'Cascading Style Sheets (CSS)',
      'Web Development',
      'Web Services',
      'Mobile Application Development',
      'Progressive Web Apps (PWA)',
      'REST APIs',
    ],
  },
  {
    title: 'Databases & Tools',
    source: 'UTM',
    items: [
      'Oracle Database',
      'PostgreSQL',
      'PhpMyAdmin',
      'Oracle Forms',
      'WAMP',
      'Databases',
    ],
  },
  {
    title: 'Software Engineering',
    source: 'UTM',
    items: [
      'Object Oriented Software Development',
      'Data Structures & Algorithms',
      'Systems Analysis',
      'Agile Methodologies',
      'Software Development Security',
      'UI/UX',
      'Networking',
      'Operating Systems',
      'Customer Service',
    ],
  },
  {
    title: 'Final Year Project',
    source: 'FYP',
    items: [
      'React.js',
      'Node.js',
      'Express',
      'Sequelize',
      'MySQL',
      'Tailwind CSS',
      'shadcn/ui',
      'JWT',
      'REST API Design',
      'Jest',
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    source: 'Parallels',
    items: [
      'DevOps',
      'Automation',
      'Infrastructure as Code (IaC)',
      'HashiCorp',
      'Packer',
      'HCL',
      'Virtualization',
      'Operating Systems',
      'Open Source Contribution',
    ],
  },
];

/** Flat list used by the scrolling strip. */
export const techMarquee: string[] = [
  'Java',
  'C#',
  'JavaScript',
  'PHP',
  'Python',
  'Dart',
  'React',
  'Tailwind CSS',
  'Vite',
  'PWA',
  'Flutter',
  '.NET Framework',
  'ASP.NET',
  'HTML5',
  'CSS',
  'Bootstrap',
  'jQuery',
  'Oracle Database',
  'PostgreSQL',
  'SQL Server',
  'PhpMyAdmin',
  'Oracle Forms',
  'WAMP',
  'Supabase',
  'Arduino',
  'Raspberry Pi',
  'Construct 3',
  'DevOps',
  'HashiCorp',
  'Packer',
  'HCL',
  'Infrastructure as Code',
  'Virtualization',
  'Automation',
  'Agile',
  'UI/UX',
  'Web Services',
  'Software Security',
  'Machine Learning',
  'Neural Networks',
  'Git & GitHub',
  'Visual Studio',
  'VS Code',
  'Android Studio',
];
