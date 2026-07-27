# Mohammad Zayaan Husain Dulmeer — Portfolio

Dark-theme single-page portfolio built with React 18, TypeScript, Tailwind CSS, Framer Motion and Lucide React. Content is sourced from the CV, the UTM Module Information Packs, and github.com/mzayaan.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run typecheck
```

## Sections

| # | Section | Content |
| --- | --- | --- |
| 1 | Hero | Magnetic 3D avatar, gradient headline |
| 2 | Tech strip | Scroll-driven marquee of your languages, frameworks and tools |
| 3 | About | Bio + GitHub / LinkedIn / email |
| 4 | Experience | Degree, Parallels Mauritius internship, MGSS Flacq |
| 5 | Curriculum | Full Level 1, Level 2 and Level 3 Sem 1 module lists |
| 6 | Skills | Technical skill areas from the CV |
| 7 | Languages | Programming, markup/query, and spoken languages |
| 8 | Now Studying | Year 3 Sem 1 modules with MIP detail |
| 9 | On GitHub | Public repositories + achievements |
| 10 | Projects | Sticky-stacking cards for the five CV projects |
| 11 | Contact | Full contact details and social links |

## Where the data came from

- **`src/data/curriculum.ts`** — the Level 1 / 2 / 3 module lists you screenshotted. Level 3 shows Semester 1 only; add Semester 2 when it starts.
- **`src/data/modules.ts`** — extracted from the MIP PDFs in this folder: module codes (MCT2109C, WAT2142, SCG3126C, MULT2120C), credits, convenors, assessment splits, and the actual syllabus content (Flutter/Dart/Supabase, Arduino/Tinkercad, Python regression and neural networks, Construct 3).
- **`src/data/repos.ts`** — the public repositories on github.com/mzayaan, plus the Pull Shark and Pair Extraordinaire achievements.
- **`src/data/languages.ts`** — two things: `languageGroups` (programming, markup/query and spoken languages) drives the Languages section, and `skillGroups` (your 29 LinkedIn skills, grouped, plus the final year project stack) drives the Skills section. `techMarquee` feeds the scrolling strip. `src/data/services.ts` is no longer used.
- **`src/config/site.ts`** — name, email, phone numbers, address, GitHub and LinkedIn.

## Portrait

`public/zayaan-avatar.webp` is `profileicon.png` with the studio backdrop replaced by the site's dark background so it sits seamlessly in the hero. `public/zayaan-portrait.*` is the earlier CV-photo cut-out, kept in case you want to switch back — change `PORTRAIT` at the top of `src/sections/HeroSection.tsx`.

## Project images

`public/projects/*.svg` are generated UI mockups — one dashboard, one detail view and one console/form per project, colour-coded per project. Swap any of them for a real screenshot by dropping a file in `public/projects/` and pointing `src/data/projects.ts` at it.

## Still open

- **BookSmart, Bookstore Management, BookStore Website** have `href: null` in `src/data/projects.ts`, so no View Code button renders. Set an href once those repos are public.
- **Repo descriptions** without a GitHub description were inferred from repo name and language — edit `src/data/repos.ts` if any are off.
- **LinkedIn** is login-walled and could not be read, so the skills list there hasn't been merged into `src/data/languages.ts`.
