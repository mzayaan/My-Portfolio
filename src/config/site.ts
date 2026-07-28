export const site = {
  name: 'Zayaan',
  fullName: 'Mohammad Zayaan Husain Dulmeer',
  /** Decorative calligraphy monogram in the hero. Try 'Z' or 'MZHD' to taste. */
  monogram: 'MZHD',
  role: 'Software Engineer',
  tagline:
    'a software engineering student driven by building striking, reliable and scalable products',
  email: 'mzayaan.dulmeer@gmail.com',
  mobile: '(+230) 5818 9410',
  home: '(+230) 4131402',
  address: 'Avenue François Mitterrand, Flacq 40606, Mauritius',
  github: 'https://github.com/mzayaan',
  linkedin: 'https://www.linkedin.com/in/mohammad-zayaan-husain-d-00365b395',
  summary:
    'Motivated and detail-oriented Software Engineering student at the University of Technology, Mauritius, with a strong foundation in programming, web development and database management. Adept at problem-solving and collaborating in team environments to deliver efficient and scalable software solutions.',
  languages: ['English — Fluent', 'French — Fluent'],
  interests: ['Football', 'Gaming'],
} as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Dissertation', href: '#dissertation' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Skills', href: '#skills' },
  { label: 'Languages', href: '#languages' },
  { label: 'Modules', href: '#modules' },
  { label: 'GitHub', href: '#repos' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

export const socials = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Email', href: `mailto:${site.email}` },
] as const;
