import { Github, ArrowUpRight, Trophy } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { repos, githubStats } from '../data/repos';
import { site } from '../config/site';

export default function ReposSection() {
  return (
    <section
      id="repos"
      className="relative w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={30} className="mb-6 flex justify-center">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-[0.7rem] font-light uppercase tracking-[0.3em] opacity-60 transition-opacity duration-200 hover:opacity-100 sm:text-xs"
          style={{ color: '#D7E2EA' }}
        >
          <Github className="h-4 w-4" strokeWidth={1.75} />
          github.com/mzayaan · {githubStats.repoCount} repositories
        </a>
      </FadeIn>

      <FadeIn
        as="h2"
        delay={0.05}
        y={40}
        className="hero-heading mb-8 text-center font-black uppercase leading-none tracking-tight sm:mb-10"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
      >
        On GitHub
      </FadeIn>

      <FadeIn delay={0.1} y={20} className="mb-14 flex flex-wrap justify-center gap-2 sm:mb-16">
        {githubStats.achievements.map((achievement) => (
          <span
            key={achievement}
            className="flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[0.62rem] font-light uppercase tracking-widest opacity-70 sm:text-[0.7rem]"
            style={{ color: '#D7E2EA' }}
          >
            <Trophy className="h-3 w-3" strokeWidth={1.75} />
            {achievement}
          </span>
        ))}
      </FadeIn>

      <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {repos.map((repo, i) => (
          <FadeIn
            key={repo.name}
            delay={(i % 3) * 0.08}
            y={30}
            as="a"
            href={repo.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-[24px] border border-[#D7E2EA]/18 p-6 transition-colors duration-300 hover:border-[#D7E2EA]/45 sm:rounded-[28px]"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <span
                className="break-all font-medium leading-tight"
                style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
              >
                {repo.name}
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 opacity-40 transition-opacity duration-300 group-hover:opacity-90"
                style={{ color: '#D7E2EA' }}
                strokeWidth={2}
              />
            </div>

            <span
              className="mb-3 w-fit rounded-full bg-[#D7E2EA]/[0.07] px-2.5 py-0.5 text-[0.6rem] font-light uppercase tracking-widest opacity-75 sm:text-[0.68rem]"
              style={{ color: '#D7E2EA' }}
            >
              {repo.language}
            </span>

            <p
              className="font-light leading-relaxed opacity-60"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)' }}
            >
              {repo.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
