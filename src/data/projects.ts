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
    name: 'SmileCare',
    category: 'Personal Project · Live',
    stack: 'Flutter · Dart · Supabase',
    summary:
      'A dental clinic management app with two sides to it. Patients register, browse dentists by specialisation, and book through a four-step flow — dentist, treatment, date, time — then track upcoming appointments and bills. Admins manage dentists, treatments, appointments and billing from a dashboard. Built in Flutter against a Supabase Postgres backend.',
    href: repo('Flutter-Dentist-app'),
    live: 'https://mzayaan.github.io/Flutter-Dentist-app/',
    liveLabel: 'Live Demo',
    images: {
      colOneTop: asset('projects/smilecare-4.webp'),
      colOneBottom: asset('projects/smilecare-3.webp'),
      colTwo: asset('projects/smilecare-2.webp'),
    },
  },
  {
    number: '05',
    name: 'BookSmart Web Application',
    category: 'Academic Project',
    stack: 'ASP.NET · SQL Server · Bootstrap',
    summary:
      'A fully functional web application for book management. ASP.NET handles the back-end logic, Bootstrap delivers the responsive layout, and SQL Server stores user and book data efficiently.',
    href: null,
    images: shots('booksmart'),
  },
  {
    number: '06',
    name: 'Bookstore Management System',
    category: 'Academic Project',
    stack: 'Oracle Forms · SQL',
    summary:
      'A bookstore management system built with Oracle Forms and SQL, focused on optimising database transactions and designing a user-friendly interface for day-to-day store operations.',
    href: null,
    images: shots('oracleforms'),
  },
  {
    number: '07',
    name: 'BookStore Website',
    category: 'Academic Project',
    stack: 'HTML · CSS · JavaScript · jQuery',
    summary:
      'A dynamic, interactive storefront for an online bookstore, with client-side form validation and live product filtering implemented in JavaScript and jQuery.',
    href: null,
    images: shots('bookstore'),
  },
  {
    number: '08',
    name: 'Snake Game',
    category: 'Team Project · Playable',
    stack: 'Java · Swing · Object-Oriented Design',
    summary:
      'A 2D Snake game built with a team using object-oriented principles — snake movement and growth, food and bomb spawning, collision detection, scoring and a leaderboard. Written as a desktop Java application, and compiled to run unmodified in the browser through CheerpJ.',
    href: repo('snake-game-java'),
    live: 'https://mzayaan.github.io/snake-game-java/',
    liveLabel: 'Play Game',
    images: shots('snake'),
  },
  {
    number: '09',
    name: 'Student Management System',
    category: 'Academic Project · Live',
    stack: 'Java · Swing · Data Structures',
    summary:
      'A student records system built on a hand-written singly linked list rather than the collections framework — add, update, delete, search, and sort by student number or name, with records persisted to file. Written as a Java Swing desktop app and compiled to run in the browser through CheerpJ.',
    href: repo('student-management-system-java'),
    live: 'https://mzayaan.github.io/student-management-system-java/',
    liveLabel: 'Live Demo',
    images: shots('sms'),
  },
  {
    number: '10',
    name: 'Lottotech',
    category: 'Year 1 Project · Playable',
    stack: 'Java · Swing',
    summary:
      'A lottery simulator modelled on Lottotech Mauritius — pick six numbers between 1 and 40 with validation against duplicates and out-of-range entries, draw six at random, then count the matches and report the result. Built in Java during the first year of the degree, and compiled to run in the browser through CheerpJ.',
    href: repo('Lottotech'),
    live: 'https://mzayaan.github.io/Lottotech/',
    liveLabel: 'Play Game',
    images: shots('lottotech'),
  },
  {
    number: '11',
    name: 'Horse Betting 365',
    category: 'Personal Project · Playable',
    stack: 'Java · Swing',
    summary:
      'A horse-racing betting simulator. Bet across four races — pick a horse from the field and a stake, with input validated at every step — then see the winner drawn and your returns settled. Odds lengthen with each race, from 2× on the first to 5× on the fourth. Compiled to run in the browser through CheerpJ.',
    href: repo('Horsebetting-365'),
    live: 'https://mzayaan.github.io/Horsebetting-365/',
    liveLabel: 'Play Game',
    images: shots('horse'),
  },
  {
    number: '12',
    name: 'BeatCam',
    category: 'Personal Project',
    stack: 'JavaScript',
    summary:
      'A browser-based project combining live camera input with audio and beat detection — the most starred repository on the GitHub profile.',
    href: repo('BeatCam'),
    images: shots('beatcam'),
  },
  {
    number: '13',
    name: 'T_Emblemy Collectibles',
    category: 'Web Project · Live',
    stack: 'HTML · CSS · JavaScript',
    summary:
      'A storefront for collectible books — browse the catalogue, filter by genre, and move items through a wishlist and cart to checkout. Wishlist and cart persist in local storage so selections survive between sessions, across a set of modular pages for books, delivery and contact.',
    href: repo('t_emblemy-collectibles-website'),
    live: 'https://mzayaan.github.io/t_emblemy-collectibles-website/',
    liveLabel: 'Live Site',
    images: shots('emblemy'),
  },
];
