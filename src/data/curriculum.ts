export type CurriculumLevel = {
  level: string;
  label: string;
  status: 'Completed' | 'In progress' | 'Upcoming';
  note: string;
  modules: string[];
};

/**
 * BSc (Hons) Software Engineering — University of Technology, Mauritius.
 * Semester 1 of Level 3 is complete; Semester 2 is currently in progress.
 * The System Development Project is deliberately left out of the Semester 2 list —
 * it has its own Dissertation section.
 */
export const curriculum: CurriculumLevel[] = [
  {
    level: 'Level 1',
    label: 'Year 1',
    status: 'Completed',
    note: 'Foundations — how machines work, how to write software, and how to think about data.',
    modules: [
      'Computer Organisation & Architecture',
      'Programming Concepts',
      'Decision Mathematics',
      'Professional Issues in ICT',
      'Networking Essentials',
      'Computational Methods',
      'Object Oriented Software Development',
      'Website Design & Development',
      'Database Design Concepts',
      'Operating System Concepts',
    ],
  },
  {
    level: 'Level 2',
    label: 'Year 2',
    status: 'Completed',
    note: 'Building real systems — full-stack web, mobile, databases at scale, and how teams ship.',
    modules: [
      'Data Structures & Algorithms',
      'Web Application Development',
      'UI/UX Design',
      'Advanced Database Design & Implementation',
      'System Analysis & Design',
      'Mobile Application Development',
      'Web Service Development',
      'Agile Project Management',
      'Software Security',
      'Research and Innovation',
    ],
  },
  {
    level: 'Level 3',
    label: 'Year 3 · Semester 1',
    status: 'Completed',
    note: 'Specialisation — mobile, IoT, machine learning and game development.',
    modules: [
      'Advanced Mobile Application Development',
      'Smart IoT Applications',
      'AI & Machine Learning Techniques',
      'Computer Game Programming',
    ],
  },
  {
    level: 'Level 3',
    label: 'Year 3 · Semester 2',
    status: 'In progress',
    note: 'Current semester — distributed systems, quality assurance and taking a product to market, alongside the final year project.',
    modules: [
      'Blockchain Systems',
      'Software Quality & Testing',
      'Technopreneurship',
    ],
  },
];
