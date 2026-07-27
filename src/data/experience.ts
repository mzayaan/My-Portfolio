export type TimelineEntry = {
  period: string;
  title: string;
  place: string;
  description: string;
  tags?: string[];
  link?: { label: string; href: string };
};

export const experience: TimelineEntry[] = [
  {
    period: 'Year 3 · Semester 1 — Current',
    title: 'BSc (Hons) Software Engineering',
    place: 'University of Technology, Mauritius',
    description:
      'Third-year student on a May 2024 – Feb 2027 programme. Coursework has moved from core software design, database systems and web technologies into mobile, IoT, machine learning and game development.',
    tags: ['Software Design', 'Databases', 'Web Technologies', 'Data Structures'],
  },
  {
    period: 'Holiday after Year 2',
    title: 'Software Engineering Intern',
    place: 'Parallels, Mauritius',
    description:
      "Interned at Parallels Mauritius during the holiday after the second year of the degree, working on Parallels' public open-source repository packer-examples — HCL templates for building virtual machine images with the Parallels Desktop provider. Hands-on with infrastructure as code, the HashiCorp toolchain, automation and virtualization.",
    tags: [
      'Open Source',
      'DevOps',
      'Packer',
      'HCL',
      'Infrastructure as Code',
      'Virtualization',
    ],
    link: {
      label: 'Parallels/packer-examples',
      href: 'https://github.com/Parallels/packer-examples',
    },
  },
  {
    period: 'Prior',
    title: "Cambridge A' Levels and O' Levels",
    place: 'Mahatma Gandhi Secondary School, Flacq, Mauritius',
    description:
      'Secondary education completed at Mahatma Gandhi Secondary School (MGSS), Flacq, providing the academic foundation for the software engineering degree.',
  },
];
