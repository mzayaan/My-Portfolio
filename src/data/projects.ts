import { asset } from '../lib/asset';

export type Project = {
  number: string;
  name: string;
  category: string;
  stack: string;
  summary: string;
  /** Repository URL. Set to null when the repo is not public yet. */
  href: string | null;
  /** Live deployment, if the project is hosted somewhere. */
  live?: string;
  /** Label for the live button. Defaults to "Live Site". */
  liveLabel?: string;
  /** Gameplay / demo video shown instead of the image grid. */
  video?: { src: string; poster: string };
  /** Team members who contributed, linked to their GitHub. */
  collaborators?: { name: string; github: string }[];
  images: {
    colOneTop: string;
    colOneBottom: string;
    colTwo: string;
  };
};

const GITHUB = 'https://github.com/mzayaan';
const repo = (name: string) => `${GITHUB}/${name}`;

/** UI mockups generated for each project — swap for real screenshots when you have them. */
const shots = (slug: string) => ({
  colOneTop: asset(`projects/${slug}-2.svg`),
  colOneBottom: asset(`projects/${slug}-3.svg`),
  colTwo: asset(`projects/${slug}-1.svg`),
});

export const projects: Project[] = [
  {
    number: '01',
    name: 'DevIntel',
    category: 'Personal Project · Live',
    stack: 'Web App · Progressive Web App (PWA)',
    summary:
      'A developer news aggregator that pulls Dev.to, GitHub trending, Hacker News, and AI and security feeds into one place, so developers can stay current without the noise. Search across every source, filter by topic, bookmark articles, and track your reading in an analytics view. Installable as a PWA with a dark-first, mobile-ready interface.',
    href: null,
    live: 'https://devintel-v4qu.onrender.com/',
    images: shots('devintel'),
  },
  {
    number: '02',
    name: 'Ninja Runner',
    category: 'Team Project · Playable',
    stack: 'Construct 3 · 2D Platformer',
    summary:
      'My first game — built as the opening assignment for Computer Game Programming in Year 3. A 2D ninja platformer with nine levels, coin collection and enemy encounters across varied environments. Made in Construct 3 and published to itch.io, playable straight in the browser.',
    href: null,
    live: 'https://anchkeshav.itch.io/ninja-dash',
    liveLabel: 'Play Game',
    video: {
      src: asset('video/ninja-runner.mp4'),
      poster: asset('video/ninja-runner-poster.jpg'),
    },
    collaborators: [
      { name: 'Keshav Ancharruz', github: 'https://github.com/anchkeshav' },
      { name: 'Loic Fred C.', github: 'https://github.com/loicfred' },
    ],
    images: shots('snake'),
  },
  {
    number: '03',
    name: 'GeoExplorer',
    category: 'Personal Project · Live',
    stack: 'Flutter · Dart',
    summary:
      'A cross-platform geography learning app built in Flutter. Browse the seven continents with country counts and land area, read up on famous landmarks from the Eiffel Tower to the Moai statues, explore world capitals, then test yourself with a ten-question quiz that tracks your score as you go. Targets Android, iOS, web, Windows, macOS and Linux from one codebase.',
    href: repo('Geoexplorer-flutter'),
    live: 'https://mzayaan.github.io/Geoexplorer-flutter/',
    liveLabel: 'Live Demo',
    images: {
      colOneTop: asset('projects/geoexplorer-1.webp'),
      colOneBottom: asset('projects/geoexplorer-2.webp'),
      colTwo: asset('projects/geoexplorer-3.webp'),
    },
  },
  {
    number: '04',
    name: 'BookSmart Web Application',
    category: 'Academic Project',
    stack: 'ASP.NET · SQL Server · Bootstrap',
    summary:
      'A fully functional web application for book management. ASP.NET handles the back-end logic, Bootstrap delivers the responsive layout, and SQL Server stores user and book data efficiently.',
    href: null,
    images: shots('booksmart'),
  },
  {
    number: '05',
    name: 'Bookstore Management System',
    category: 'Academic Project',
    stack: 'Oracle Forms · SQL',
    summary:
      'A bookstore management system built with Oracle Forms and SQL, focused on optimising database transactions and designing a user-friendly interface for day-to-day store operations.',
    href: null,
    images: shots('oracleforms'),
  },
  {
    number: '06',
    name: 'BookStore Website',
    category: 'Academic Project',
    stack: 'HTML · CSS · JavaScript · jQuery',
    summary:
      'A dynamic, interactive storefront for an online bookstore, with client-side form validation and live product filtering implemented in JavaScript and jQuery.',
    href: null,
    images: shots('bookstore'),
  },
  {
    number: '07',
    name: 'Snake Game',
    category: 'Team Project',
    stack: 'Java · Object-Oriented Design',
    summary:
      'A 2D Snake game built with a team using object-oriented principles — handling character movement, collision detection, scoring and user interaction mechanics.',
    href: repo('snake-game-java'),
    images: shots('snake'),
  },
  {
    number: '08',
    name: 'Student Management System',
    category: 'Academic Project',
    stack: 'Java · Data Structures & Algorithms',
    summary:
      'A console-based system for managing student records, applying arrays, linked lists and stacks to keep data manipulation fast and memory use predictable.',
    href: repo('student-management-system-java'),
    images: shots('sms'),
  },
  {
    number: '09',
    name: 'Lottotech',
    category: 'Year 1 Project',
    stack: 'Java',
    summary:
      'A lottery system modelled on Lottotech Mauritius — ticket purchase, draw generation and result checking, built in Java during the first year of the degree.',
    href: repo('Lottotech'),
    images: shots('lottotech'),
  },
  {
    number: '10',
    name: 'Horsebetting 365',
    category: 'Personal Project',
    stack: 'Java',
    summary:
      'A Java application modelling a horse-racing betting platform — race and runner management, odds handling, bet placement and payout settlement.',
    href: repo('Horsebetting-365'),
    images: shots('horse'),
  },
  {
    number: '11',
    name: 'BeatCam',
    category: 'Personal Project',
    stack: 'JavaScript',
    summary:
      'A browser-based project combining live camera input with audio and beat detection — the most starred repository on the GitHub profile.',
    href: repo('BeatCam'),
    images: shots('beatcam'),
  },
  {
    number: '12',
    name: 't_emblemy Collectibles',
    category: 'Web Project',
    stack: 'JavaScript · HTML · CSS',
    summary:
      'A collectibles storefront with a browsable catalogue, listing management and an order flow, built with a JavaScript front end.',
    href: repo('t_emblemy-collectibles-website'),
    images: shots('emblemy'),
  },
];
