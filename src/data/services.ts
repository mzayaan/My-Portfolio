export type Service = {
  number: string;
  name: string;
  description: string;
};

/** Technical skill areas, taken from the CV. */
export const services: Service[] = [
  {
    number: '01',
    name: 'Programming Languages',
    description:
      'Java, C#, JavaScript and PHP — used across object-oriented coursework, desktop applications and full-stack web projects.',
  },
  {
    number: '02',
    name: 'Web Development',
    description:
      'HTML, CSS, Bootstrap, jQuery and ASP.NET — building responsive, interactive front-ends backed by server-side logic.',
  },
  {
    number: '03',
    name: 'Database Management',
    description:
      'SQL and P-SQL with SQL Server and Oracle — schema design, query optimisation and transaction handling for data-driven applications.',
  },
  {
    number: '04',
    name: 'Tools & Frameworks',
    description:
      'Visual Studio Code, Visual Studio Community 2022, Oracle Forms and Construct 3 — plus version control and collaborative workflows via GitHub.',
  },
  {
    number: '05',
    name: 'Soft Skills',
    description:
      'Teamwork, time management, communication and problem-solving — sharpened through group projects and an industry internship at Parallels Mauritius.',
  },
];
