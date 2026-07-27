export type Repo = {
  name: string;
  language: string;
  description: string;
  href: string;
};

const gh = (repo: string) => `https://github.com/mzayaan/${repo}`;

/** Public repositories on github.com/mzayaan. */
export const repos: Repo[] = [
  {
    name: 'BeatCam',
    language: 'JavaScript',
    description:
      'A browser-based project built in JavaScript — the most starred repository on the profile.',
    href: gh('BeatCam'),
  },
  {
    name: 'Horsebetting-365',
    language: 'Java',
    description:
      'A Java application modelling a horse-racing betting platform, built around object-oriented design.',
    href: gh('Horsebetting-365'),
  },
  {
    name: 'Lottotech',
    language: 'Java',
    description:
      'A Year 1 Java project modelled on Lottotech Mauritius — ticket handling, draws and results.',
    href: gh('Lottotech'),
  },
  {
    name: 't_emblemy-collectibles-website',
    language: 'JavaScript',
    description:
      'A collectibles storefront built with JavaScript on the front end.',
    href: gh('t_emblemy-collectibles-website'),
  },
  {
    name: 'snake-game-java',
    language: 'Java',
    description:
      'A classic Snake game written in Java — built as a group assignment.',
    href: gh('snake-game-java'),
  },
  {
    name: 'student-management-system-java',
    language: 'Java',
    description:
      'Console-based student record management applying arrays, linked lists and stacks.',
    href: gh('student-management-system-java'),
  },
];

export const githubStats = {
  repoCount: '13',
  achievements: ['Pull Shark', 'Pair Extraordinaire'],
  bio: 'Software Engineering Student',
};
