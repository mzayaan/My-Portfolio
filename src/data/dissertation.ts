export const dissertation = {
  title: 'Employee Onboarding and Probation Evaluation Management System',
  kind: 'Final Year Project · Dissertation',
  status: 'In progress',
  cohort: 'BSc (Hons) Software Engineering · BSE/24/FT1',
  repo: 'https://github.com/mzayaan/Employee-Onboarding-and-Probation-Evaluation-Management-System',

  summary:
    'A role-based web application that manages the full employee onboarding journey — document submission, task assignment and orientation tracking — then carries new starters through a structured probation period. HR monitors progress against predefined criteria covering performance, attendance and feedback, and the system generates evaluation reports that support the decision to confirm or extend.',

  objectives: [
    {
      title: 'Role-based onboarding workflow',
      detail:
        'Design and implement digital document submission, HR verification and task tracking across distinct user roles.',
    },
    {
      title: 'Configurable probation evaluation',
      detail:
        'Build an evaluation module with weighted, configurable criteria supporting periodic manager assessments alongside employee self-assessments.',
    },
    {
      title: 'Automated report generation',
      detail:
        'Compile evaluation data into generated PDF reports that carry a decision recommendation at the end of the probation period.',
    },
    {
      title: 'Real-time HR dashboard',
      detail:
        'Track onboarding completion rates and probation evaluation progress as live metrics.',
    },
    {
      title: 'Empirical evaluation',
      detail:
        'Assess the system through User Acceptance Testing, measured with the System Usability Scale (SUS).',
    },
  ],

  stack: [
    { group: 'Front end', items: ['React.js', 'Tailwind CSS', 'shadcn/ui', 'Chart.js', 'Axios'] },
    { group: 'Back end', items: ['Node.js', 'Express', 'Sequelize', 'JWT', 'bcrypt'] },
    { group: 'Data & files', items: ['MySQL', 'Multer', 'Cloudinary', 'PDFKit', 'Nodemailer'] },
    { group: 'Testing & tooling', items: ['Jest', 'Supertest', 'Postman', 'Figma', 'Git & GitHub'] },
    { group: 'Deployment', items: ['Railway', 'Vercel'] },
  ],
} as const;
